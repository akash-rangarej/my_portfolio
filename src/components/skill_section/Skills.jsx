import React from 'react'
import './Skills.css'
function Skills() {
  return (
   <>
   <div className="skills-section">
        <h1>Skills</h1>
        
        <div className="skill-category">
          <h2>Programming Languages</h2>
          <p>My favorite languages for systems programming, software engineering, and data analysis.</p>
          <div className="skills-grid">
            <div className="skill-item" data-tooltip="Python">
              <img src="src/assets/technical skills/languages_logos/python.webp" alt="python" />
            </div>
            <div className="skill-item" data-tooltip="Java">
              <img src="src/assets/technical skills/languages_logos/java.png" alt="java" />
            </div>
            <div className="skill-item" data-tooltip="JavaScript">
              <img src="src/assets/technical skills/languages_logos/js.png" alt="javascript" />
            </div>
            <div className="skill-item" data-tooltip="C++">
              <img src="src/assets/technical skills/languages_logos/C++.png" alt="C++" />
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Front-End</h2>
          <p>My preferred technologies for front-end web development and component design.</p>
          <div className="skills-grid">
            <div className="skill-item" data-tooltip="React">
              <img src="src/assets/technical skills/frontend_logos/React.png" alt="react" />
            </div>
            <div className="skill-item" data-tooltip="CSS">
              <img src="src/assets/technical skills/frontend_logos/css.png" alt="css" />
            </div>
            <div className="skill-item" data-tooltip="Bootstrap">
              <img src="src/assets/technical skills/frontend_logos/bootstrap.jpeg" alt="bootstrap" />
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Back-End</h2>
          <p>My preferred technologies for back-end web programming and database architecture.</p>
          <div className="skills-grid">
            <div className="skill-item" data-tooltip="Django">
              <img src="src/assets/technical skills/backend_logos/django.png" alt="django" />
            </div>
            <div className="skill-item" data-tooltip="Flask">
              <img src="src/assets/technical skills/backend_logos/flask.svg" alt="flask" />
            </div>
            <div className="skill-item" data-tooltip="MongoDB">
              <img src="src/assets/technical skills/backend_logos/mongodb.svg" alt="mongodb" />
            </div>
            <div className="skill-item" data-tooltip="MySQL">
              <img src="src/assets/technical skills/backend_logos/mysql.svg" alt="mysql" />
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Data Science and Machine Learning</h2>
          <div className="skills-grid">
            <div className="skill-item" data-tooltip="Pandas">
              <img src="src/assets/technical skills/ds_ml/pandas.png" alt="pandas" />
            </div>
            <div className="skill-item" data-tooltip="NumPy">
              <img src="src/assets/technical skills/ds_ml/NumPy.png" alt="numpy" />
            </div>
            <div className="skill-item" data-tooltip="Excel">
              <img src="src/assets/technical skills/ds_ml/excel.png" alt="excel" />
            </div>
            <div className="skill-item" data-tooltip="Matplotlib">
              <img src="src/assets/technical skills/ds_ml/matplotlib.webp" alt="matplotlib" />
            </div>
            <div className="skill-item" data-tooltip="Scikit-learn">
              <img src="src/assets/technical skills/ds_ml/sklearn.png" alt="sklearn" />
            </div>
            <div className="skill-item" data-tooltip="TensorFlow">
              <img src="src/assets/technical skills/ds_ml/tensorflow.png" alt="tensorflow" />
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Tools</h2>
          <p>My favorite tools for version control, code editing, and container orchestration.</p>
          <div className="skills-grid">
            <div className="skill-item" data-tooltip="Git">
              <img src="src/assets/technical skills/tools_logos/git.png" alt="git" />
            </div>
            <div className="skill-item" data-tooltip="VS Code">
              <img src="src/assets/technical skills/tools_logos/vs_code.jpeg" alt="vs code" />
            </div>
            <div className="skill-item" data-tooltip="GitHub">
              <img src="src/assets/technical skills/tools_logos/github.png" alt="github" />
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Skills
