import React from "react";
import "./Skills.css";

// Programming Languages
import pythonLogo from "../../assets/technical skills/languages_logos/python.webp";
import javaLogo from "../../assets/technical skills/languages_logos/java.png";
import jsLogo from "../../assets/technical skills/languages_logos/js.png";
import cppLogo from "../../assets/technical skills/languages_logos/C++.png";

// Frontend
import reactLogo from "../../assets/technical skills/frontend_logos/React.png";
import cssLogo from "../../assets/technical skills/frontend_logos/css.png";
import bootstrapLogo from "../../assets/technical skills/frontend_logos/bootstrap.jpeg";

// Backend
import djangoLogo from "../../assets/technical skills/backend_logos/django.png";
import flaskLogo from "../../assets/technical skills/backend_logos/flask.svg";
import mongodbLogo from "../../assets/technical skills/backend_logos/mongodb.svg";
import mysqlLogo from "../../assets/technical skills/backend_logos/mysql.svg";

// Data Science and ML
import pandasLogo from "../../assets/technical skills/ds_ml/pandas.png";
import numpyLogo from "../../assets/technical skills/ds_ml/NumPy.png";
import excelLogo from "../../assets/technical skills/ds_ml/excel.png";
import matplotlibLogo from "../../assets/technical skills/ds_ml/matplotlib.webp";
import sklearnLogo from "../../assets/technical skills/ds_ml/sklearn.png";
import tensorflowLogo from "../../assets/technical skills/ds_ml/tensorflow.png";

// Tools
import gitLogo from "../../assets/technical skills/tools_logos/git.png";
import vscodeLogo from "../../assets/technical skills/tools_logos/vs_code.jpeg";
import githubLogo from "../../assets/technical skills/tools_logos/github.png";

function Skills() {
  return (
    <>
      <div className="skills-section">
        <h1>Skills</h1>

        <div className="skill-category">
          <h2>Programming Languages</h2>
          <p>
            My favorite languages for systems programming, software engineering,
            and data analysis.
          </p>
          <div className="skills-grid">
            <div className="skill-item" data-tooltip="Python">
              <img src={pythonLogo} alt="python" />
            </div>
            <div className="skill-item" data-tooltip="Java">
              <img src={javaLogo} alt="java" />
            </div>
            <div className="skill-item" data-tooltip="JavaScript">
              <img src={jsLogo} alt="javascript" />
            </div>
            <div className="skill-item" data-tooltip="C++">
              <img src={cppLogo} alt="C++" />
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Front-End</h2>
          <p>
            My preferred technologies for front-end web development and
            component design.
          </p>
          <div className="skills-grid">
            <div className="skill-item" data-tooltip="React">
              <img src={reactLogo} alt="react" />
            </div>
            <div className="skill-item" data-tooltip="CSS">
              <img src={cssLogo} alt="css" />
            </div>
            <div className="skill-item" data-tooltip="Bootstrap">
              <img src={bootstrapLogo} alt="bootstrap" />
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Back-End</h2>
          <p>
            My preferred technologies for back-end web programming and database
            architecture.
          </p>
          <div className="skills-grid">
            <div className="skill-item" data-tooltip="Django">
              <img src={djangoLogo} alt="django" />
            </div>
            <div className="skill-item" data-tooltip="Flask">
              <img src={flaskLogo} alt="flask" />
            </div>
            <div className="skill-item" data-tooltip="MongoDB">
              <img src={mongodbLogo} alt="mongodb" />
            </div>
            <div className="skill-item" data-tooltip="MySQL">
              <img src={mysqlLogo} alt="mysql" />
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Data Science and Machine Learning</h2>
          <div className="skills-grid">
            <div className="skill-item" data-tooltip="Pandas">
              <img src={pandasLogo} alt="pandas" />
            </div>
            <div className="skill-item" data-tooltip="NumPy">
              <img src={numpyLogo} alt="numpy" />
            </div>
            <div className="skill-item" data-tooltip="Excel">
              <img src={excelLogo} alt="excel" />
            </div>
            <div className="skill-item" data-tooltip="Matplotlib">
              <img src={matplotlibLogo} alt="matplotlib" />
            </div>
            <div className="skill-item" data-tooltip="Scikit-learn">
              <img src={sklearnLogo} alt="sklearn" />
            </div>
            <div className="skill-item" data-tooltip="TensorFlow">
              <img src={tensorflowLogo} alt="tensorflow" />
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Tools</h2>
          <p>
            My favorite tools for version control, code editing, and container
            orchestration.
          </p>
          <div className="skills-grid">
            <div className="skill-item" data-tooltip="Git">
              <img src={gitLogo} alt="git" />
            </div>
            <div className="skill-item" data-tooltip="VS Code">
              <img src={vscodeLogo} alt="vs code" />
            </div>
            <div className="skill-item" data-tooltip="GitHub">
              <img src={githubLogo} alt="github" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
