import React from "react";
import "./Card.css";
import clapping from "../../assets/Icons/clapping.svg";
import heart_black from "../../assets/Icons/heart-black.svg";
import heart_red from "../../assets/Icons/heart-red.svg";
import { UPDATE_BLOG_DATA } from "../../constants/apiEndPoint";
import { makeRequest } from "../../utils/makeRequest";

export default function Card({
  id,
  image,
  date,
  reading_time,
  title,
  description,
  claps,
  liked,
}) {
  const [like, setLike] = React.useState(liked);
  const [clap, setClap] = React.useState(claps);
  const [imageSrc, setImageSrc] = React.useState("");

  function loadImage() {
    import(`../../assets/Images/${image}`).then((image) => {
      setImageSrc(image.default);
    });
  }

  const handleLike = () => {
    makeRequest(UPDATE_BLOG_DATA(id), { data: { liked: !like } }).then(
      (res) => {
        setLike(!like);
      }
    );
  };

  const handleClaps = (id) => {
    makeRequest(UPDATE_BLOG_DATA(id), { data: { claps: clap + 1 } }).then(
      (res) => {
        setClap(clap + 1);
      }
    );
  };

  date = new Date(date);
  const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
  });

  return (
    <div className="card">
      <img className="card-img" src={image} alt="Card image cap" />
      <div className="info">
        <div className="date-time">
          <div className="date">{formattedDate}</div>
          <div className="time">{reading_time}</div>
        </div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <hr />
        <div className="engagements">
          <div>
            <img
              src={clapping}
              alt="clap"
              className="clap-button"
              onClick={() => handleClaps(id)}
            />
            <span className="clap">{clap}</span>
          </div>
          <div>
            {like ? (
              <img className="like" src={heart_red} onClick={handleLike} />
            ) : (
              <img className="like" src={heart_black} onClick={handleLike} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
