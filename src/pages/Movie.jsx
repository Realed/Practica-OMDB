import React from "react"
import styled from "styled-components"
import fontFamily from "../styles/fontfamily"
import colors from "../styles/colors"

//COMPONENTS
import NavMenu from "../components/NavMenu"
import GlobalStyles from "../components/GlobalStyles"
import { useState, useEffect } from "react"

const MovieWrapper = styled.div`
  width: 100%;
  height: 93.6vh;
  background-color: #444;

  h1 {
    margin: 0;
  }
`

const MovieBox = styled.div`
  padding-top: 50px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  min-width: 750px;
  height: 100%;
`

const MovieHeader = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;

  .img-box {
    img {
      box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.249);
    }
  }

  .description-box {
    width: 100%;
    height: 100%;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      h1 {
        color: #eee;
        font-family: ${fontFamily.accent};
        font-size: 1.5em;
        text-decoration: ${colors.bgColor} underline;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      p {
        margin: 0;
        color: #eeee;
      }
      p.movie-description {
        margin-top: 10px;
        font-size: 1em;
        font-weight: 200;
        margin-bottom: 20px;
      }
      p.movie-rate {
        font-size: 0.8em;
        color: ${colors.bgColor};
        margin: 0;
        display: inline-block;
      }
      p.movie-language {
        display: inline-block;
        font-size: 0.8em;
        /* color: ${colors.bgColor}; */
        margin: 0;
      }
      p.movie-genre {
        margin-top: 10px;
        text-decoration: underline;
      }
      .labels-box {
        margin-top: 10px;
      }
      button.addto-favorite {
        margin-top: 8px;
        background-color: #222;
        color: #eee;
        width: 125px;
        border: none;
        padding: 2px 5px;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:focus {
          outline: none;
        }

        img {
          max-width: 15px;
          max-height: 15px;
          margin-right: 4px;
        }
      }
    }

    footer {
      margin-bottom: 10px;
      button {
        width: 100%;
        height: 45px;
        background-color: #c00;
        border: none;
        font-family: ${fontFamily.accent};
        font-size: 1.4em;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 7px;
        border: 2px solid #c00;

        img {
          max-width: 30px;
          max-height: 30px;
          margin-right: 10px;
        }

        &:focus {
          outline: none;
        }

        &:hover {
          background-color: transparent;
          border: 2px solid #c00;
          color: #c00;
          transition: all 0.2s ease-in;
        }
      }
    }
  }
`

const StyledLabel = styled.label`
  width: fit-content;
  background-color: #222;
  color: #fff;
  font-size: 0.8em;
  padding: 3px 5px;
  cursor: pointer;
  text-transform: capitalize;
  margin-right: 5px;
  border-radius: 3px;

  &:hover {
    background-color: #333;
  }
`

const Movie = ({ match }) => {
  let movieID = match.params.id
  const [movie, setMovie] = useState({})

  const movieRequest = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=2192856f&i=${movieID}`
    )
    let resData = await res.json()
    console.log(resData)
    setMovie(resData)
  }

  useEffect(() => {
    movieRequest()
  }, [])

  let splittedGenre = []
  if (movie.Genre) {
    splittedGenre = movie.Genre.split(", ")
  }

  return (
    <>
      <GlobalStyles />
      <NavMenu />
      <MovieWrapper>
        <MovieBox>
          <MovieHeader>
            <div className="img-box">
              <img src={movie.Poster} alt="" />
            </div>
            <div className="description-box">
              <header>
                <h1>{movie.Title}</h1>
                <p className="movie-rate">
                  <span>⭐</span> {movie.imdbRating} / 10 <span>⭐</span>
                </p>
                <p className="movie-language">- ( {movie.Language} ) </p>
                <button className="addto-favorite">
                  <img
                    src="https://purepng.com/public/uploads/large/purepng.com-red-heartheartoxygen-and-nutrientshumanclipartlove-1421526551807b8c9n.png"
                    alt=""
                  />
                  Add to Favorite
                </button>
                <p className="movie-description">{movie.Plot}</p>
                <div className="labels-box">
                  <StyledLabel>{movie.Runtime}</StyledLabel>
                  <StyledLabel>{movie.Type}</StyledLabel>
                  <StyledLabel>{movie.Year}</StyledLabel>
                  <StyledLabel>{movie.Country}</StyledLabel>
                  <StyledLabel>{splittedGenre[0]}</StyledLabel>
                  <StyledLabel>{splittedGenre[1]}</StyledLabel>
                </div>
                <div className="labels-box">
                  <StyledLabel>{splittedGenre[2]}</StyledLabel>
                  {/* <StyledLabel>{splittedGenre[3]}</StyledLabel> */}
                  {/* <StyledLabel>{splittedGenre[4]}</StyledLabel> */}
                </div>
              </header>
              <footer>
                <button>
                  {/* <img
                    src="https://i.pinimg.com/originals/37/17/bd/3717bd3e3e6f2c23a8635eb76c37140c.png"
                    alt=""
                  /> */}
                  Watch The Movie
                </button>
              </footer>
            </div>
          </MovieHeader>
        </MovieBox>
      </MovieWrapper>
    </>
  )
}

export default Movie
