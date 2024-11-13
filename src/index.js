import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import avatar from "./me.jpg";

import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="card">
      <Avatar></Avatar>
      <div className="data">
        <Intro></Intro>
        <SkillList></SkillList>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={avatar} alt="Kathyayani"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Kathyayani Bhatta</h1>
      <p>
        Web Developer and Hindustani musician. I am an enthusiastic developer
        who is passionate about music and teaching. I am adept in Kannada,
        English, Hindi and Sanskrit. I love reading fiction and enjoy travelling
        and playing games.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😊" color="blue"></Skill>
      <Skill skill="HTML/CSS" emoji="👌" color="green"></Skill>
      <Skill skill="Bootstrap" emoji="🤩" color="purple"></Skill>
      <Skill skill="C#" emoji="👍" color="red"></Skill>
      <Skill skill="ASP.NET" emoji="😁" color="pink"></Skill>
      <Skill skill="JS" emoji="🥰" color="grey"></Skill>
      <Skill skill="Blazor" emoji="🙃" color="indigo"></Skill>
      <Skill skill="SQL" emoji="😌" color="violet"></Skill>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
