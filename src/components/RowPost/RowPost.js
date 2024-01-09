import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imgUrl, API_KEY } from "../../constant/constant";
import axios from "../../axios";
import Youtube from "react-youtube";
const RowPost = (props) => {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results);
    });
  }, []);
  const handleMovie = (id) => {
    try{
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results && response.data.results.length > 0) {
          setUrlId(response.data.results[0]);
        } else {
          alert("Trailer not available");
        }
      });
    }catch(error){
      console.log(error.message)
    }
  };
  const closeTrailer = () => {
    setUrlId(""); // Set urlId to an empty string to close the trailer
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) => (
          <div key={obj.id}>
            <img
              className={props.isSmall ? "smallPoster" : "poster"}
              onClick={() => {
                handleMovie(obj.id);
              }}
              src={`${imgUrl + obj.backdrop_path}`}
              alt="poster"
            />

            <h4>{obj.title}</h4>
          </div>
        ))}
      </div>
      {urlId && (
        <div className="youtube">
          <Youtube videoId={urlId.key} opts={opts} />
          <button className="close-button" onClick={closeTrailer}>Close</button>
        </div>
      )}
    </div>
  );
};

export default RowPost;
