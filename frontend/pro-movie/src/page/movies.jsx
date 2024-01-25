import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";

const MoviesBox = ()=>{
    const [dataList, setDataList] = useState([]);
    const [genre, setGenre] = useState("");
    const [userSearch, setUserSearch] = useState("");
    const [loder, setLoder] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:4500/proMovie/`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem("token")
                }
            });
            const data = await response.json();
            setDataList(data);
            setLoder(false)
        } catch (error) {
            alert('Please Login First')
            window.location.href = "/login";
            console.log('Error fetching data:', error);
        }
    };

    const handelGanreFilterchange = (event)=>{
        const filterGenre = event.target.value;
        setGenre(filterGenre)
    }

    const handleSearchQuery = (event)=>{
        const searchData = event.target.value;
        setUserSearch(searchData)
    }

    const handleSearchButton =async ()=>{
        if(!userSearch){
            alert('Please enter your query')
        }

        try {
            setLoder(true)
            const response = await fetch(`http://localhost:4500/proMovie/${userSearch}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem("token")
                }
            });
            const data = await response.json();
            setLoder(false)
            data.length > 0 ? setDataList(data):alert("Oops! Data not Found")
        } catch (error) {
            alert('Please Login First')
            console.log('Error fetching data:', error);
        }
    }

    return (
        <div className="movies-main-box">
            <h2>Movies</h2>
            {loder && <div class="spinner"></div>}
            <div className="search-filter">
                <select value={genre} onChange={handelGanreFilterchange}>
                    <option value="">Filter by Ganre</option>
                    <option value="Drama">Drama</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Romance">Romance</option>
                    <option value="Horror">Horror</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Magic">Magic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Family">Family</option>
                </select>
                <div className="search-box">
                    <input onChange={handleSearchQuery} type="text" placeholder="(e.g) Title, Ganre, director, etc"/>
                    <button onClick={handleSearchButton}>Search</button>
                </div>
            </div>
            <MovieCard movieData={dataList} filterByGenre={genre}/>
        </div>
    )
}

export default MoviesBox;