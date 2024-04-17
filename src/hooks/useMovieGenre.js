import {useQuery} from "@tanstack/react-query";
import api from "../utils/api"

const fetchMoviesGenre=()=>{
    return api.get('/genre/movie/list');
};

export const useMovieGenreQuery=()=>{
    return useQuery({
        queryKey:['movie-genre'],
        queryFn:fetchMoviesGenre,
        select:(result)=>result.data.genres,
        // 장르는 한번만 호출하면 된다. 장르는 자주 바뀌지 않기때문에
        // 그래서 staleTime을 설정하면 된다
        staleTime : 300000, //5분
    });
};



