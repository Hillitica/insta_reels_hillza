import React from "react";

import Video from "./componets/Video/Video";

import Logo from "./img/icon.png";

import Vid1 from "./videos/vid1.MOV";
import Vid2 from "./videos/vid2.MOV";
import Vid3 from "./videos/vid3.MOV";

import "./App.css";

export default function App() {
  const data = [
    {
      channel: "Kobe & Zuko",
      song: "L3to Hillza- Love Yourself",
      url: Vid1,
      likes: "2000",
      comment: "600",
      shares: "208",
    },
    {
      channel: "Zuko fighting Kobe",
      song: "The Lion King",
      url: Vid2,
      likes: "200",
      comment: "75",
      shares: "46",
    },
    {
      channel: "CNN",
      song: "We hate Trump",
      url: Vid3,
      likes: "900",
      comment: "400",
      shares: "290",
    },
  ];

  return (
    <div className="App">
      <center>
        <div className="logo">
          <img alt="logo" src={Logo} className="insta-logo" />
        </div>
        <h3>Reel</h3>
        {/*  */}

        <div className="video-container" id="video-container">
          {/*  */}

          {data.map((list, i) => (
            <Video
              key={i}
              channel={list.channel}
              song={list.song}
              url={list.url}
              likes={list.likes}
              comment={list.comment}
              shares={list.shares}
            />
          ))}

          {/*  */}
        </div>
      </center>
    </div>
  );
}
