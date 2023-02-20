import React from "react";
import "./Card.css";
import clapping from "../../assets/Icons/clapping.svg";
import heart_black from "../../assets/Icons/heart-black.svg";
import heart_red from "../../assets/Icons/heart-red.svg";

export default function Card(props) {
  const [like, setLike] = React.useState(props.liked);
  const [clap, setClap] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState("");

  function loadImage() {
    import(`../../assets/Images/${props.image}`).then((image) => {
      setImageSrc(image.default);
    });
  }

  const handleLike = () => {
    setLike(!like);
  };

  const handleClaps = () => {
    setClap(!clap);
  };

  React.useEffect(() => {
    loadImage();
  }, []);

  return (
    <div className="card">
      <img className="card-img" src={imageSrc} alt="Card image cap" />
      <div className="info">
        <div className="date-time">
          <div className="date">{props.date}</div>
          <div className="time">{props.readingTime}</div>
        </div>
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
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
              {clap ? Number(props.claps) + 1 : props.claps}
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
