import React, { useState, useEffect } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import { Spinner, Alert, Col, Row, Container, Button, Badge } from 'react-bootstrap';
	// Col,Row,Container,Badge,Alert,Spinner,Button
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

//경로 2가지
//nav바에서 클릭해서 온 경우 => popularMovie 보여주기 **원래는 백엔트에서 처리해야되지만 지금은 프론트에서
//keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌


//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page바꿔주기
//page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fecth

const MoviePage = () => {

  const [query,setQuery] = useSearchParams();
  const [page, setPage] = useState(1);

  const keyword = query.get("q");

  const {data,isLoading,isError,error} = useSearchMovieQuery({keyword, page});
	
  const handlePageClick = ({selected}) =>{
	setPage(selected + 1)
  }


  //   const [keyword, setKeyword] = useState('');	

//   	    // 페이지 이동 시 초기화
// 		  useEffect(() => {

// 			setPage(1);
// 			setSortedData(null);
// 			setSortedRankData(null);
// 		}, [keyword]);


  		
		const { data: genre } = useMovieGenreQuery(); //장르 Hook 가져와서 사용
		const [sortedData, setSortedData] = useState(null);//인기있는 영화 정렬 상태함수(초기값 NULL)
		const [sortedRankData, setSortedRankData] = useState(null);//최신순 영화 정렬 상태함수
		const [selectedGenre, setSelectedGenre] = useState(null);//장르 정렬 상태 함수

		const displayData = sortedData || sortedRankData || selectedGenre || data?.results; //뿌려줄 데이터들 모아놓기
		// 해당 코드는 displayData라는 변수를 정의하는 부분입니다. 이 코드는 JavaScript의 논리 OR 연산자(||)를 사용하여 여러 변수를 순서대로 확인하고, 그 중 첫 번째로 값이 존재하는 변수를 displayData에 할당합니다.
		// 먼저 sortedData를 확인하고, 값이 존재하면 displayData에 할당합니다.
		// 만약 sortedData가 값이 없다면, sortedRankData를 확인하고 값이 존재하면 displayData에 할당합니다.
		// 만약 sortedRankData도 값이 없다면, selectedGenre를 확인하고 값이 존재하면 displayData에 할당합니다.
		// 마지막으로 selectedGenre도 값이 없다면, data?.results를 확인하고 값이 존재하면 displayData에 할당합니다.
		// 이렇게 하여 displayData에는 위 조건 중 가장 먼저 값이 존재하는 변수의 값이 할당되게 됩니다. 이후 이 displayData를 사용하여 화면에 표시할 데이터를 결정할 수 있습니다.



		const [isPopularClicked, setIsPopularClicked] = useState(false);  //인기순버튼 최신순버튼 radiobutton처럼 활용하기위하여
		const [isRecentClicked, setIsRecentClicked] = useState(false);


		//인기있는 함수
		const handleSortPopularRank = () => {
			const sortedMovies = [...data?.results].sort((a, b) => b.popularity - a.popularity);
			setSortedData(sortedMovies);
			setSortedRankData(null);

			setIsPopularClicked(true);
			setIsRecentClicked(false);
			setPage(1);
		};
		
		//최신 영화 함수
		const handleSortRecentRank = () => {
			const sortedRankMovies = [...data?.results].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
			setSortedRankData(sortedRankMovies);
			setSortedData(null);

			setIsPopularClicked(false);
			setIsRecentClicked(true);
			setPage(1);
		};

	    // 페이지 이동 시 초기화
		useEffect(() => {
			setPage(1);
			setSortedData(null);
			setSortedRankData(null);			
		}, [keyword]);


		// 검색 시 초기화
		useEffect(() => {
			setSortedData(null);
			setSortedRankData(null);
		}, [page]);


		// 검색값 입력했을때
		useEffect(() => {
			setPage(1);
			setSortedData(null);
			setSortedRankData(null);
			setSelectedGenre(null);


			setIsPopularClicked(false);
			setIsRecentClicked(false);
		}, [setQuery]);
		


		//장르 필터 
		const ReadingGenre = (event) => {
			const selectedGenreName = event.target.innerText;
			const selectedGenreId = genre.find((item) => item?.name === selectedGenreName)?.id;
		
			if (selectedGenreId) {
			const filteredMovies = data?.results.filter((movie) => movie?.genre_ids.includes(selectedGenreId));
			setSelectedGenre(filteredMovies);
			setSortedData(null);
			setSortedRankData(null);
			setPage(1); // 선택한 장르가 변경되었으므로 페이지를 1로 초기화

			setIsPopularClicked(false);
			setIsRecentClicked(false);
			}
		};



		if (isLoading) {
			return (
				<div className='spinner-area'>
					<Spinner
						animation='border'
						variant='danger'
						style={{ width: '5rem', height: '5rem', margin: 'auto' }}
					/>
				</div>
			);
		}
		if (isError) {
			return (
				<Alert variant='danger' className='alert-area'>
					Error: {error.message}
				</Alert>
			);
		}

  return (
    <Container>
		<Row>
			<Col lg={4} xs={12}>
				<Container className='SortButton'>

					<Button variant={ isPopularClicked ? 'warning' : 'danger'} onClick={handleSortPopularRank}>인기순</Button>
					<Button variant={ isRecentClicked ? 'warning' : 'danger'} onClick={handleSortRecentRank}>최신순</Button>


						<Container className='MovieGenreContainer'>
							<Col lg={8} xs={10}>
								{genre?.map((item) => (
								<Badge className="GenreBadge" key={item?.id} bg="danger" onClick={(event) => ReadingGenre(event)}> {item?.name} </Badge>
								))}
							</Col>
						</Container>
				</Container>		
			</Col>


				<Col lg={8} xs={10} className='MovieBox'>
					{displayData?.length === 0 && <h4 className= "NoGenre" variant="info">조건에 해당하는 영화가 존재하지 않습니다.</h4>}
					
					<Row className="d-flex justify-content-center">
						{displayData?.map((movie, index) => (
						<Col key={index} lg={4} xs={8} className="mb-4">
							<MovieCard movie={movie} />
						</Col>
						))}
					</Row>
					<div className='paginationContainer'>
						<ReactPaginate 
								// nextLabel="next >"
								nextLabel=" > "
								onPageChange={handlePageClick}
								pageRangeDisplayed={5}
								marginPagesDisplayed={0}
								pageCount={data?.total_pages} //전체페이지 몇개인지
								// previousLabel="< previous"
								previousLabel=" < "
								pageClassName="page-item"
								pageLinkClassName="page-link"
								previousClassName="page-item"
								previousLinkClassName="page-link"
								nextClassName="page-item"
								nextLinkClassName="page-link"
								breakLabel="..."
								breakClassName="page-item"
								breakLinkClassName="page-link"
								containerClassName="pagination"
								activeClassName="active"
								// renderOnZeroPageCount={null}
								forcePage={page-1}		
							/>				
					</div>
			</Col>
		</Row>      
    </Container>
  )
}

export default MoviePage