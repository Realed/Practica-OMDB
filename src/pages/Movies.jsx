import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { generate as id } from "shortid"

//COMPONENTS
import NavMenu from "../components/NavMenu"
import GlobalStyles from "../components/GlobalStyles"
import NoMoviesMsg from "../components/NoMoviesMsg"
import MovieCard from "../components/MovieCard"

//STYLES
const MoviesWrapper = styled.div`
  min-height: 93.6vh;
  background-color: #444;
  padding-top: 100px;

  .movies-box {
    width: 50%;
    min-width: 750px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1375px) {
      width: 63%;
    }

    @media (max-width: 1050px) {
      width: 60%;
    }

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 200px));
    grid-template-rows: repeat(auto-fit, minmax(250px, 0.8fr));
    place-items: center;
    justify-content: center;
    column-gap: 10px;
    row-gap: 20px;
  }
`

const MoviesPage = ({ history }) => {
  const [stateMovies, setStateMovies] = useState([])
  let lsData = JSON.parse(localStorage.getItem("movie"))
  let moviesID = []
  let movies = []

  const handleGetIDs = () => {
    for (let data of lsData) {
      moviesID.push(data)
    }
    handleRequests()
  }

  const handleRequests = async () => {
    for (let movieID of moviesID) {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=2192856f&i=${movieID}`
      )
      const data = await res.json()
      movies.push(data)
    }
    setStateMovies(movies)
    console.log(stateMovies)
  }

  const handleCardClick = (e) => {
    console.log(e.target)
    history.push(`/movies/${e.target.attributes.id.value}`)
  }

  useEffect(() => {
    handleGetIDs()
  }, [])

  document.title = "Movies - FLowMovie"
  return (
    <>
      <GlobalStyles />
      <NavMenu />
      <MoviesWrapper>
        {stateMovies.length === 0 && (
          <NoMoviesMsg
            text="You don't have Favorite movies"
            paddingtop="60px"
          />
        )}
        <div className="movies-box">
          {stateMovies.map((movie) => (
            <MovieCard onClick={handleCardClick} key={id()}>
              <div className="img-box">
                <img src={movie.Poster} alt="" id={movie.imdbID} />
              </div>
            </MovieCard>
          ))}
        </div>
      </MoviesWrapper>
    </>
  )
}

export default MoviesPage
