import styled from "styled-components"

const MovieCard = styled.div`
  width: fit-content;
  height: fit-content;
  box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.249);
  cursor: pointer;

  .img-box {
    max-width: 200px;
    max-height: 250px;
    img {
      max-width: 200px;
      height: 250px;
    }
  }
`

export default MovieCard
