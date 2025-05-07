import React from "react";
import "./About.css";
import myResume from "../../assets/my_resume.pdf";

function About() {
  return (
    <>
      <div className="about-section">
        <h1>About Me</h1>
        <p>
          Hello! I'm Akash, a full-stack developer and AI/ML engineer passionate
          for building intelligent web applications that solve real-world
          problems. My journey began in college, hacking Python scripts to
          analyze gaming data—today, I architect full-stack solutions with React
          and Python, while deploying transformer models (GPT-4, BERT) for tasks
          like dynamic content generation and predictive analytics. I excel at
          turning AI/ML prototypes into scalable, production-ready apps, whether
          containerizing TensorFlow models on Kubernetes or designing intuitive
          UIs for LLM-powered tools.
        </p>
        <p>
          Currently seeking new opportunities, I aim to join teams tackling
          ambitious problems at the intersection of AI and web development.
          Let's collaborate if you need someone who can:
          <p>
            - Integrate GenAI (e.g., LangChain, OpenAI) into full-stack apps for
            smarter user experiences.
          </p>
          <p>
            - Optimize MLOps pipelines for seamless model deployment and
            monitoring.
          </p>
          <p>
            - Build end-to-end solutions—from data preprocessing to responsive
            websites.
          </p>
        </p>
        <p>
          Check out my projects below, and let's discuss how I can bring AI
          innovation to your next product!
        </p>
        <div
          className="resume-button-container"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <a href={myResume}>View Resume</a>
        </div>
      </div>
    </>
  );
}

export default About;
