import { Link } from "react-router-dom";
import "../styles/styles.css"
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
export const CharactersCard = (props) => {
    const [favourite,setFavourite] = useState(false)
    const {store,dispatch} = useGlobalReducer()
    const addFavourite = (data) => {
        setFavourite(prev => !prev)
        dispatch({type:'add_favorite',payload:data})
    }
    const removeFavourite = () => {
        setFavourite(prev => !prev)
    }
    return (
        <div className="bg-white card text-center h-100 flex-shrink-0 bg-opacity-25" style={{ minWidth: "200px" }}>
            <img
                className="card-img-top mx-auto mt-3 rounded"
                src={props.image}
                alt={props.name}
                style={{ height: "200px", objectFit: "contain", maxWidth: "100%" }}
            />
            <div className="card-body fw-bold fs-5 card-name">{props.name}</div>
            <div>
                <Link to={`/${props.type}/${props.id}`}><button className="btn btn-info mx-2 my-1 fw-bold">Mas informacion</button></Link>
                {!favourite ? <button className="btn btn-warning mx-2 my-1" onClick={()=>{addFavourite(props.name)}}><i class="fa-regular fa-heart"></i></button>: <button className="btn btn-warning mx-2 my-1" onClick={()=>{removeFavourite()}}><i class="fa-solid fa-heart"></i></button>}
            </div>
        </div>
    );
};