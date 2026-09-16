import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
  education,
  achievements,
  publications,
  conferencePresentations,
  academicService,
  teachingExperience,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Experience from "./components/home/Experience";
import Achievements from "./components/home/Achievements.jsx";
import AcademicRecord from "./components/home/AcademicRecord.jsx";
import Publications from "./components/home/PublicationCard.jsx";

// Presentations, teaching and service are one three-column record rather than
// three full-width sections.
const recordColumns = [
  conferencePresentations,
  { ...teachingExperience, combineMeta: true },
  { ...academicService, combineMeta: true },
].filter((column) => column.show);

const Home = () => (
  <main className="ds-main">
    <MainBody
      eyebrow={mainBody.eyebrow}
      name={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`
        .replace(/\s+/g, " ")
        .trim()}
      tagline={mainBody.tagline}
      message={mainBody.message}
      icons={mainBody.icons}
      portrait={about.imageLink}
      portraitAlt={`${mainBody.firstName} ${mainBody.lastName}`}
    />

    {about.show && (
      <AboutMe
        heading={about.heading}
        eyebrow={about.eyebrow}
        message={about.message}
        resume={about.resume}
      />
    )}

    {publications.show && (
      <Publications
        heading={publications.heading}
        eyebrow={publications.eyebrow}
        publications={publications.data}
      />
    )}

    {education.show && (
      <Achievements
        sectionId="education"
        achievements={education}
        variant="timeline"
      />
    )}

    {experiences.show && <Experience experiences={experiences} />}

    {recordColumns.length > 0 && (
      <AcademicRecord
        eyebrow="Academic Record"
        heading="Presentations, Service & Teaching"
        columns={recordColumns}
      />
    )}

    {achievements.show && <Achievements achievements={achievements} />}

    {repos.show && (
      <Project
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specfic={repos.specificRepos}
      />
    )}

    {leadership.show && (
      <Leadership
        heading={leadership.heading}
        message={leadership.message}
        img={leadership.images}
        imageSize={leadership.imageSize}
      />
    )}

    {skills.show && (
      <Skills
        heading={skills.heading}
        hardSkills={skills.hardSkills}
        softSkills={skills.softSkills}
      />
    )}

    {getInTouch.show && (
      <GetInTouch
        heading={getInTouch.heading}
        message={getInTouch.message}
        emails={getInTouch.emails}
      />
    )}
  </main>
);

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    <div className="ds-shell">
      {navBar.show && <Navbar />}
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
