import React from "react";
import "./Experiences.css";
import sumeru2026cert from "../../assets/experiences/offer letter.pdf"
import srit2026cert from "../../assets/experiences/company_certificate.jpeg"
import cause2025Cert from "../../assets/experiences/cause_2025.jpg";
import dataQuestCert from "../../assets/experiences/data_quest_participation.jpg";

function Experiences() {
  return (
    <>
      <section className="experiences-section">
        <h1>Experiences</h1>
<div className="hackathons-section">
  <h2>Internships</h2>

  <div className="hackathon-card">
    <h3>Sumeru Digital Solutions Pvt. Ltd.</h3>
    <h4>Software Development Intern</h4>

    <p>
      During my internship at Sumeru Digital Solutions Pvt. Ltd., I developed an
      AI Resume Interview Platform using the MERN stack integrated with 15+
      production REST APIs. I optimized interview processing by reducing queuing
      and response times by 80–85% through BullMQ and WebSockets, improved React
      dashboard performance by 30% using memoization and lazy loading, secured
      backend APIs with JWT authentication and HTTP-only cookies, and automated
      the daily publishing of 20 blog posts using Playwright.
    </p>

    <div>
      <a href={sumeru2026cert} className="certificate-link">
        View Certificate
      </a>
    </div>
  </div>

  <div className="hackathon-card">
    <h3>SR Innovative Technologies Pvt. Ltd.</h3>
    <h4>AI Intern</h4>

    <p>
      As an AI Intern at SR Innovative Technologies Pvt. Ltd., I developed a
      Heart Stroke Risk Prediction model using Python and Logistic Regression,
      achieving 99.89% validation accuracy. My responsibilities included
      end-to-end data preprocessing, feature selection, model training,
      evaluation, and working with healthcare datasets to build reliable machine
      learning pipelines. I also prepared technical presentations,
      architecture documentation, and engineering reports to communicate project
      progress and results.
    </p>

    <div>
      <a href={srit2026cert} className="certificate-link">
        View Certificate
      </a>
    </div>
  </div>
</div>
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
              and information tailored to their fields.
            </p>
            <div>
              <a href={cause2025Cert} className="certificate-link">
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
              <a href={dataQuestCert} className="certificate-link">
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experiences;
