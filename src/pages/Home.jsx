import React, { useState, createRef } from "react"
import styled from "styled-components"
import fontFamily from "../styles/fontfamily"
import { generate as id } from "shortid"

//COMPONENTS
import NavMenu from "../components/NavMenu"
import GlobalStyles from "../components/GlobalStyles"
import MovieCard from "../components/MovieCard"
import NoMoviesMsg from "../components/NoMoviesMsg"
import MovieFail from "../components/MovieFail"

//STYLES
const SearchMovieBox = styled.div`
  height: 300px;
  width: 100%;
  /* background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/80d08dde-2e2b-4ba9-9147-9952d3ab09a9/b36c98b5-8689-4865-a076-39302304f227/ES-es-20201012-popsignuptwoweeks-perspective_alpha_website_small.jpg"); */
  background-image: url("https://www.pixel4k.com/wp-content/uploads/2018/09/x-men-days-of-future-past-banner_1536361949.jpg");
  background-position: center -100px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    background-position: top center;
  }
`

const SearchBar = styled.div`
  width: 500px;
  height: 45px;
  display: flex;
  background-color: white;
  align-items: center;
  padding: 5px 13px;
  box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.249);
  border-radius: 4px;

  input {
    width: 100%;
    height: 70%;
    border: none;
    font-family: ${fontFamily.accent};
    font-size: 1em;
    color: #333;
    font-weight: 300;

    & {
      outline: none;
    }
  }

  img {
    max-width: 60%;
    max-height: 60%;
    margin-right: 10px;
    cursor: pointer;
  }
`

const MoviesWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  min-height: 61.6vh;
  background-color: #444;

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
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(250px, 0.8fr));
    place-items: center;
    column-gap: 10px;
    row-gap: 20px;
  }
`

const HomePage = ({ history }) => {
  document.title = "Home - FLowMovie"
  const [movies, setMovies] = useState([])
  const [movieFail, setMovieFail] = useState({
    disabled: false,
    text: "",
  })
  const input = createRef()

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    let inputText = input.current.value

    if (inputText !== "") {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=2192856f&s=${inputText}`
      )
      const data = await res.json()
      let dataSearch = data.Search
      if (dataSearch !== undefined) {
        let movieNoFail = { disabled: false, text: "" }
        setMovieFail(movieNoFail)
        let dataWithPic = await dataSearch.filter(
          (minidata) =>
            minidata.Poster !== "N/A" && minidata.imdbID !== "tt1433184"
        )
        setMovies(dataWithPic)
      } else if (dataSearch === undefined) {
        setMovies(["No movies available"])
        let movieFailObject = {
          disabled: true,
          text: `No movies available from "${inputText}"`,
        }
        setMovieFail(movieFailObject)
      }
    }
  }

  const handleCardClick = (e) => {
    console.log(e.target)
    history.push(`/movies/${e.target.attributes.id.value}`)
  }

  return (
    <>
      <GlobalStyles />
      <NavMenu />
      <SearchMovieBox>
        <form onSubmit={handleFormSubmit}>
          <SearchBar>
            <img
              src="https://img.icons8.com/ios/452/search--v1.png"
              alt=""
              onClick={handleFormSubmit}
            />
            <input type="text" placeholder="Enter the movie name" ref={input} />
          </SearchBar>
        </form>
      </SearchMovieBox>
      <MoviesWrapper>
        {movieFail.disabled && <MovieFail text={movieFail.text} />}

        {movies.length === 0 && <NoMoviesMsg text="Start typing a movie..." />}

        <div className="movies-box">
          {movies.map((movie) => (
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

export default HomePage
