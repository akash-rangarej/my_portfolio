import React from 'react'
import './Experiences.css'
function Experiences() {
  return (
   <>
    <section className="experiences-section">
        <h1>Experiences</h1>
        <div className="hackathons-section">
          <h2>Hackathons</h2>
          <div className="hackathon-card">
            <h3>Cause</h3>
            <p>
              I participated in the Hackathon Cause 2025, which was centered
              around design thinking. Our team presented an idea called
              "Employment Bridge," which focuses on providing secure job
              opportunities and enhancing digital literacy for informal workers
              such as gig workers, construction workers, and others. Our
              solution aimed to bridge the gap by offering accessible resources
              and information tailored to their fields. With this innovative
              approach, we were proud to reach the finalist stage in the
              competition.
            </p>
            <div>
              <a
                href="src/assets/experiences/cause_2025.jpg"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          </div>
          <div className="hackathon-card">
            <h3>Data Quest</h3>
            <p>
              I participated in the Hackathon Data Quest, where we were provided
              with a dataset to clean, process, and extract meaningful insights.
              My role involved working extensively with the data to clean and
              preprocess it, ensuring it was ready for analysis. I then applied
              machine learning algorithms to build a predictive model that could
              provide accurate outputs based on given inputs. This experience
              enhanced my skills in data handling, preprocessing, and
              implementing machine learning techniques to solve real-world
              problems.
            </p>
            <div>
              <a
                href="src/assets/experiences/data_quest_participation.jpg"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>
   
   </>
  )
}

export default Experiences
