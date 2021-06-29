import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Sign In
          </button>
        </Link>
      </div>
      <div className="chatRoom">
        <div className="roomDev">
          <p className="dev">CHAT ROOM FOR DEV</p>
          <ul className="devFront">
            <li className="dev">Javascript</li>
            <li className="dev">React</li>
            <li className="dev">Node-Express</li>
          </ul>
        </div>
        <div className="roomData">
          <ul className="dataAI">
            <p className="data">CHAT ROOM FOR DATA</p>
            <li className="data">Python</li>
            <li className="data">AI</li>
            <li className="data">SQL</li>
          </ul>
        </div>
        <div className="roomDesign">
          <p className="design">CHAT ROOM FOR DS</p>
          <ul className="designDev">
            <li className="design">Photoshop</li>
            <li className="design">Figma</li>
            <li className="design">UX/UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
