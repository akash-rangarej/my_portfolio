import React from "react";
import "./Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    description:
      "Languages used for software engineering, backend development, and AI.",
    skills: [
      { name: "Python", class: "devicon-python-plain colored" },
      { name: "JavaScript", class: "devicon-javascript-plain colored" },
      { name: "Go", class: "devicon-go-original-wordmark colored" },
      { name: "Java", class: "devicon-java-plain colored" },
      { name: "C", class: "devicon-c-plain colored" },
    ],
  },

  {
    title: "Frontend",
    description: "Technologies used to build responsive user interfaces.",
    skills: [
      { name: "HTML5", class: "devicon-html5-plain colored" },
      { name: "CSS3", class: "devicon-css3-plain colored" },
      { name: "Bootstrap", class: "devicon-bootstrap-plain colored" },
      { name: "React", class: "devicon-react-original colored" },
    ],
  },

  {
    title: "Backend Frameworks",
    description: "Frameworks used for scalable backend applications.",
    skills: [
      { name: "FastAPI", class: "devicon-fastapi-plain colored" },
      { name: "Flask", class: "devicon-flask-original" },
      { name: "Django", class: "devicon-django-plain colored" },
      { name: "Node.js", class: "devicon-nodejs-plain colored" },
      { name: "Express", class: "devicon-express-original" },
    ],
  },

  {
    title: "Databases",
    description: "Databases and caching technologies.",
    skills: [
      { name: "MongoDB", class: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", class: "devicon-postgresql-plain colored" },
      { name: "MySQL", class: "devicon-mysql-original colored" },
      { name: "Redis", class: "devicon-redis-plain colored" },
    ],
  },

  {
    title: "Data Science & Machine Learning",
    description: "Libraries and frameworks for ML and analytics.",
    skills: [
      { name: "Scikit-Learn", class: "devicon-scikitlearn-plain colored" },
      { name: "TensorFlow", class: "devicon-tensorflow-original colored" },
      { name: "PyTorch", class: "devicon-pytorch-original colored" },
      { name: "Streamlit", class: "devicon-streamlit-plain colored" },
      { name: "Hadoop", class: "devicon-hadoop-plain colored" },
      { name: "Apache Spark", class: "devicon-apachespark-original colored" },
    ],
  },

  {
    title: "Cloud & DevOps",
    description: "Cloud platforms and deployment technologies.",
    skills: [
      { name: "Docker", class: "devicon-docker-plain colored" },
      { name: "Cloudinary", class: "devicon-cloudflare-plain colored" },
      { name: "RabbitMQ", class: "devicon-rabbitmq-original colored" },
    ],
  },

  {
    title: "Developer Tools",
    description: "Tools used throughout the development workflow.",
    skills: [
      { name: "Git", class: "devicon-git-plain colored" },
      { name: "GitHub", class: "devicon-github-original" },
      { name: "VS Code", class: "devicon-vscode-plain colored" },
      { name: "Postman", class: "devicon-postman-plain colored" },
      { name: "Playwright", class: "devicon-playwright-plain colored" },
    ],
  },
];

function Skills() {
  return (
    <div className="skills-section">
      <h1>Skills</h1>

      {skillCategories.map((category) => (
        <div className="skill-category" key={category.title}>
          <h2>{category.title}</h2>
          <p>{category.description}</p>

          <div className="skills-grid">
            {category.skills.map((skill) => (
              <div
                className="skill-item"
                key={skill.name}
                data-tooltip={skill.name}
              >
                <i
                  className={skill.class}
                  style={{ fontSize: "55px" }}
                ></i>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;