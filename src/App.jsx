import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skill_section/Skills";
import About from "./components/About_section/About";
import My_work from "./components/mywork_section/My_work";
import Experiences from "./components/experiences_section/Experiences";
import Get_in_touch from "./components/get_in_touch/Get_in_touch";

function App() {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const imagesToLoad = ["src/assets/profile_pic.jpg"];

    let loadedImages = 0;
    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedImages++;
        if (loadedImages === imagesToLoad.length) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });

    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((element) => observer.observe(element));

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      if (imagesLoaded) {
        setLoading(false);
        setTimeout(() => {
          setShowContent(true);
          document.body.style.overflow = "";
        }, 500); // Add delay before showing content
      }
    }, 2000);

    return () => {
      reveals.forEach((element) => observer.unobserve(element));
      clearTimeout(timer);
    };
  }, [imagesLoaded]);

  return (
    <>
    <Navbar className="navbar" />
      <div className={`loading-screen ${loading ? "" : "hidden"}`}>
        <div className="loader-container">
          <div className="profile-pic-loader">
            <img
              src="src/assets/profile_pic.jpg"
              alt="Profile"
              className={`profile-pic loading ${imagesLoaded ? "loaded" : ""}`}
            />
          </div>
          <div className="loading-spinner"></div>
        </div>
      </div>

      <div
        style={{
          visibility: showContent ? "visible" : "hidden",
          opacity: showContent ? 1 : 0,
          transform: showContent ? "scale(1)" : "scale(0.95)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        
        {/* <Navbar className="navbar" /> */}
        <div className="container reveal">
          <div>
            <img
              src="src/assets/profile_pic.jpg"
              alt="Profile"
              className="profile-pic"
            />
          </div>
          <div>
            <p className="intro-text reveal delay-200">
              👋 Hi there! , my name is
            </p>
            <h1 className="name reveal delay-400">AKASH RANGAREJ.</h1>
            <h1 className="title reveal delay-600">I'M SOFTWARE DEVELOPER</h1>

            <div id="about" className="reveal">
              <About />
            </div>
          </div>
        </div>

        <div id="skills" className="reveal-left">
          <Skills />
        </div>

        <div id="my-work" className="reveal-right">
          <My_work />
        </div>

        <div id="experiences" className="reveal">
          <Experiences />
        </div>

        <div className="reveal-left">
          <Get_in_touch />
        </div>
      </div>
    </>
  );
}

export default App;