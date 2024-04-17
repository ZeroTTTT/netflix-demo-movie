import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Intro from "../pages/Intro/Intro";
import "./AppLayout.style.css";



const AppLayout = () => {

  const [isIntro, setIsIntro] = useState(true);

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();


  const searchByKeyword=(event)=>{
    event.preventDefault() //refresh를 막는다
    //위에 url을 바꿔주기
    //url로 넘겨주면 좋은점 새로고침했을때 그대로 넘겨준게 새로고침된다.
    navigate(`/movies?q=${keyword}`)
    setKeyword("");
  };
  setTimeout(() => {
    setIsIntro(false);
  }, 4500);


  return (
    
     <div id="netflix">

      {/* 넷플릭스 로고는 좀 더 확인 필요 intro.jsx, intro.style.css 좀 더 확인 */}
     {/* <div id="netflix">       
      {isIntro && <Intro />}
      <div className={isIntro ? "unshow" : ""}> */}
      
        <CustomNavbar expand="lg"  data-bs-theme="dark"  > 
        <Container fluid>
          <Navbar.Brand href="/">
            {/* Navbar scroll */}
            {/* <img src="https://i.namu.wiki/i/DVaTk_jtZcObhVD1qvTJqPLU5gdZ_gStDQ3X1PgPsOm3GbDPwpOY3BqYInu17WyTgysfaXA8G6omUHVBfszlOQ.svg" alt="Netfilx Logo" height="30" />          */}
            {/* <img src="https://blog.kakaocdn.net/dn/1T0st/btrB6vcc5mo/bS7qOAzMBCkXlr9OxeHaMK/img.png" alt="Netfilx Logo" height="30" />          */}
            {/* <img src="https://postfiles.pstatic.net/MjAyNDA0MDhfMzQg/MDAxNzEyNTA0OTUyNzY5.L3NSdXSYJtVLQTlJNUCUmqeoIbqhZVb_v81KNdKDtBMg.kIhg9foHXyzhlHkC-7S3wnZxIEtnL8zRfvlFMYGJVjog.PNG/logo.png" alt="hofilx Logo" height="30" />          */}
            {/* <img src="https://w7.pngwing.com/pngs/466/83/png-transparent-film-windows-movie-maker-computer-icons-cut-loss-rectangle-black-film.png" alt="movie Logo" height="30" />          */}
            <img src="https://www.mentorit.co.kr/hologo.png" alt="movie Logo" height="30" />                
          </Navbar.Brand>


          {/* <Logo onClick={() => navigate('/')}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="Netfilx Logo" />        
          </Logo> */}


          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>

            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type='submit'>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      {/* </Navbar> */}
      </CustomNavbar>

      <Outlet/>
      {/* </div> */}
  </div>
  );
}

export default AppLayout



// styled-components를 사용하여 Navbar를 커스텀 스타일링합니다.
const CustomNavbar = styled(Navbar)`
  background-color: black;
`;

// Navbar의 링크 텍스트 색상을 밝은 색으로 설정합니다.
// const CustomNav = styled(Nav)`
//   .nav-link {
//     color: white !important;
//   }
// `;
