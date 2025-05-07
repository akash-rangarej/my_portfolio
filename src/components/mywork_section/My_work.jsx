import React from "react";
import "./My_work.css";

function My_work() {
  return (
    <section className="my-work-container">
            <h1>My Work</h1>
            <div className="project-card">
              <h2>AI interviewer</h2>
              <a href="https://github.com/akash-rangarej/Ai-interviewer">
                <p className="git-source-code">Source Code</p>
              </a>
              <img src="src/assets/my_work/ai-intervewer.png" alt="ai interviewer" />
              <p>
                AI Interviewer is a project built using Django and uses the OPEN AI API that provides an
                interactive platform for conducting mock interviews. It features a
                form to fill in candidate details, an interview process powered by
                speech-to-text technology, and detailed feedback provided at the end
                to help candidates improve their performance.
              </p>
            </div>
            <div className="project-card">
              <h2>Employment Bridge</h2>
              <a href="https://github.com/akash-rangarej/Employment-bridge-app">
                <p className="git-source-code">Source Code</p>
              </a>
              <img
                src="src/assets/my_work/digital_employment.png"
                alt="Employment Bridge"
              />
              <p>
                Employment Bridge is a project developed using Flask and React that
                serves as a comprehensive platform for job seekers and employers for
                both formal and informal workers. It allows job postings and listings,
                enabling users to find and apply for suitable opportunities.
                Additionally, it features training modules where trainers can post
                training sessions, and trainees can access them. Upon completion, the
                platform generates certificates for both trainers and trainees,
                enhancing their professional credentials.
              </p>
            </div>
          </section>
  );
}

export default My_work;
