import React from "react";
import "./Card.css";
import clapping from "../../assets/Icons/clapping.svg";
import heart_black from "../../assets/Icons/heart-black.svg";
import heart_red from "../../assets/Icons/heart-red.svg";

export default function Card({ item }) {
  const [like, setLike] = React.useState(item.liked);
  const [clap, setClap] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState("");

  function loadImage() {
    import(`../../assets/Images/${item.image}`).then((image) => {
      setImageSrc(image.default);
    });
  }

  const handleLike = () => {
    setLike(!like);
  };

  const handleClaps = () => {
    setClap(!clap);
  };

  const date = new Date(item.date);
  // get date in dd/mm/yyyy format
  const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
  });

  console.log();

  return (
    <div className="card">
      <img className="card-img" src={item.image} alt="Card image cap" />
      <div className="info">
        <div className="date-time">
          <div className="date">{formattedDate}</div>
          <div className="time">{item.reading_time}</div>
        </div>
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>
        <hr />
        <div className="engagements">
          <div>
            <img
              src={clapping}
              alt="clap"
              className="clap-button"
              onClick={handleClaps}
            />
            <span className="clap">
              {clap ? Number(item.claps) + 1 : item.claps}
            </span>
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
