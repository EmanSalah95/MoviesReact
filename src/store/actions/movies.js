
import axiosInstance from './../../config/axiosConfig';
export default function changeMovies(p){

    return (dispatch)=>{

        axiosInstance
        .get(`movie/popular`,{
            params:{
                page:p
            }
        })
        .then((res) =>dispatch({type:"SET_MOVIES",payload:res.data.results}))
        .catch((err) => console.log(err));

    }
}