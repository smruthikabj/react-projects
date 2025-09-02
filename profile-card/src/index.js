import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "lightblue",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "lightgreen",
  },
  {
    skill: "React.js",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "MySQL",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "Java",
    level: "beginner",
    color: "lightpink",
  },
  {
    skill: "Git & GitHub",
    level: "advanced",
    color: "aqua",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="Smruthika B J" />;
}

function Intro() {
  return (
    <div>
      <h1>Smruthika B J</h1>
      <p>
        CSE Graduate | Frontend Developer Skilled in HTML, CSS, JavaScript,
        React.js, and MySQL. A quick learner with a passion for problem-solving
        and building real-world applications. Currently seeking a React.js
        Developer role to apply and grow my skills.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill.skill}
        />
      ))}
      {/* <Skill skill="HTML + CSS" emoji="💪🏻" color="lightblue" />
      <Skill skill="JavaScript" emoji="👍🏻" color="lightgreen" />
      <Skill skill="React.js" emoji="👍🏻" color="yellow" />
      <Skill skill="MySQL" emoji="💪🏻" color="orange" />
      <Skill skill="Git & GitHub" emoji="💪🏻" color="aqua" /> */}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶🏻"}
        {level === "intermediate" && "👍🏻"}
        {level === "advanced" && "💪🏻"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
