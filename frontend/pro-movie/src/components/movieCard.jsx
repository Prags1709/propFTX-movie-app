import React from "react";

const MovieCard = (props)=>{
    const {movieData, filterByGenre} = props

    return (
        <div className="movieBox">
            {movieData.filter((data)=> !filterByGenre || data.genre.includes(filterByGenre))
            .map((data)=>{
                return (
                    <div className="movieCard" key={data._id}>
                        <img src={data.posterUrl} alt={data.title} />
                        <div className="title-rating">
                            <h4><span>Movie:</span> {data.title}</h4>
                            <div className="rating">{data.rating}</div>
                        </div>
                        <p><span>Certificate:</span> {data.certificate}</p>
                        <p><span>Year:</span> {data.year}</p>
                        <p><span>Director:</span> {data.director}</p>
                        <p><span>Cast:</span> {data.actors.map((ele)=>{
                            return ele + ", ";
                        })}</p>
                        <p><span>Genre:</span> {data.genre.map((ele)=>{
                            return ele + ", ";
                        })}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieCard;