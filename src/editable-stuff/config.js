// Navigation Bar SECTION
const navBar = {
  show: true,
};

const publications = {
  show: true,
  heading: "Publications",
  data: [
    {
      title:
        "Pixel-aligned RGB-NIR Stereo Imaging and Dataset for Robot Vision",
      authors: ["Jinnyeong Kim", "Seung-Hwan Baek"],
      thumbnail: require("../assets/thumb/thumb_rgb_nir.png"),
      pdf: "https://arxiv.org/abs/2411.18025",
      year: "2025",
      abstract:
        "Integrating RGB and NIR imaging provides complementary spectral information, enhancing robotic vision in challenging lighting conditions. However, existing datasets and imaging systems lack pixel-level alignment between RGB and NIR images, posing challenges for downstream tasks. In this paper, we develop a robotic vision system equipped with two pixel-aligned RGB-NIR stereo cameras and a LiDAR sensor mounted on a mobile robot. The system simultaneously captures RGB stereo images, NIR stereo images, and temporally synchronized LiDAR point cloud. Utilizing the mobility of the robot, we present a dataset containing continuous video frames with pixel-aligned RGB and NIR stereo pairs under diverse lighting conditions. We introduce two methods that utilize our pixel-aligned RGB-NIR images: an RGB-NIR image fusion method and a feature fusion method. The first approach enables existing RGB-pretrained vision models to directly utilize RGB-NIR information without fine-tuning. The second approach fine-tunes existing vision models to more effectively utilize RGB-NIR information. Experimental results demonstrate the effectiveness of using pixel-aligned RGB-NIR images across diverse lighting conditions.",
      page: "https://divisonofficer.github.io/project_page_cvpr2025_5308",
      // github :
      // supple
      // video
    },
    {
      title: "Dual Exposure Stereo for Extended Dynamic Range 3D Imaging",
      authors: [
        "Juhyung Choi",
        "Jinnyeong Kim",
        "Seokjun Choi",
        "Jinwoo Lee",
        "Samuel Brucker",
        "Mario Bijelic",
        "Felix Heide",
        "Seung-Hwan Baek",
      ],
      year: 2025,
      thumbnail: require("../assets/thumb/thumb_dual_exposure.png"),
      abstract:
        "Achieving robust stereo 3D imaging under diverse illumination conditions is an importat however challenging task, largely due to the limited dynamic ranges (DRs) of cameras, which are significantly smaller than real world DR. As a result, the accuracy of existing stereo depth estimation methods is often compromised by under- or over-exposed images. In this work, we introduce dual-exposure stereo for extended dynamic range 3D imaging. We develop automatic dual-exposure control method that adjusts the dual exposures, diverging them when the scene DR exceeds the camera DR, thereby providing information about broader DR. From the captured dual-exposure stereo images, we estimate depth by developing a motion-aware dual-exposure stereo depth network. To validate our proposed method, we develop a robot-vision system, collect real-world stereo video datasets, and generate a synthetic dataset. Our approach outperforms traditional exposure control and depth estimation methods.",
    },
  ],
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#2e4e3f, #003e74, #8dc73f, #ff6c0f",
  firstName: "Jinnyeong",
  middleName: "",
  lastName: "Kim",
  message:
    "Ph.D. student in Computational Imaging at POSTECH, building vision systems for robotics.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/DivisonOfficer",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kim-jinnyeong-a143b9247/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Education",
  imageLink: require("../editable-stuff/jinnyeong.jpeg"),
  imageSize: 375,
  message:
    "Ph.D. Integrated Program in Computer Science and Engineering, POSTECH (2024-Present); Qualified Examination (QE) Passed, 2025; B.S. in Software Engineering, Sungkyunkwan University (2018-2024); Creative Scholarship (Full Tuition), 2023; Military Service, Republic of Korea Air Force (2019-2021). Research Interests: Computational Imaging, Computational Cameras, RGB-NIR Fusion, Stereo Vision, HDR Imaging, and Vision for Robotics.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "divisonofficer", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    "NewsCalendar",
    "unid-ton-2021-team115/HOT_PEOPLE",
    "SINZAK/sinzak-android",
    "repositorypattern",
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Career Monuments",
  message:
    "In the tapestry of the digital epoch, a software engineer weaves with the threads of logic and creativity, fashioning solutions from the abstract. Each line of code is a silent stroke of a painter's brush, each function a verse in an unwritten epic of innovation. They are not mere architects of data, but sculptors of possibility, transforming the intangible into engines that power our very existence. In their craft, the mundane begets the miraculous, as they conjure the ethereal into the electronic. In the heart of each software engineer burns the fire of Prometheus, bringing not fire, but light to the world—a light that reveals new paths, new dreams, and the unyielding hope of what lies beyond the horizon of the known.",
  images: [
    {
      img: require("../editable-stuff/slides/2022_icpc.jpg"),
      label: "ICPC Korea 2022",
    },
    {
      img: require("../editable-stuff/slides/2022_skkuscholaship.jpg"),
      label: "성균관대학교 장학금 수여",
    },
    {
      img: require("../editable-stuff/slides/hackertone_2019.jpeg"),
      label: "오픈핵 해커톤 2019",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/slides/hackertone_2021.jpeg"),
      label: "Unid-ton 해커톤 2021",
      paragraph: "",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Kotlin", value: 95 },
    { name: "Java", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 75 },
    { name: "TypeScript", value: 70 },
    { name: "Swift", value: 75 },
    { name: "Dart", value: 55 },
    { name: "Python", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 95 },
    { name: "Empathy", value: 70 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "For research collaboration, academic opportunities, or invited talks, please contact me at",
  email: "wlssud0701@naver.com",
};

const experiences = {
  show: true,
  heading: "Research & Industry Experience",
  data: [
    {
      role: "Software Engineer Intern (Data Science), Samsung Electronics",
      companylogo: require("../editable-stuff/samsung.png"),
      date: "Jan 2024 - Feb 2024",
    },
    {
      role: "Software Engineer Intern, Bear Robotics",
      companylogo: require("../editable-stuff/bearrobotics.jpeg"),
      date: "Mar 2023 - Aug 2023",
    },
    {
      role: "Android / iOS Native Engineer",
      companylogo: require("../editable-stuff/minerinc.png"),
      date: "May 2021 – Feb 2023",
    },
  ],
};

const conferencePresentations = {
  show: true,
  heading: "Conference Presentations",
  data: [
    {
      title: "Live Demonstration",
      subtitle: "CVPR 2025",
      description: "Pixel-aligned RGB-NIR Stereo Imaging and Dataset",
    },
    {
      title: "Poster Presentation",
      subtitle: "CVPR 2025 Workshop",
      description: "Computational Cameras and Displays",
    },
  ],
};

const academicService = {
  show: true,
  heading: "Academic Service",
  data: [
    {
      title: "Reviewer",
      subtitle: "2026",
      description: "ACM SIGGRAPH",
    },
  ],
};

const teachingExperience = {
  show: true,
  heading: "Teaching Experience",
  data: [
    {
      title: "Computational Imaging (TA)",
      subtitle: "Fall 2025",
      description: "POSTECH",
    },
    {
      title: "Data Structures (TA)",
      subtitle: "Spring 2025",
      description: "POSTECH",
    },
    {
      title: "Introduction to Computer Networks (TA)",
      subtitle: "Fall 2023",
      description: "Sungkyunkwan University",
    },
  ],
};

const achievements = {
  show: true,
  heading: "Honors and Fellowships",
  data: [
    {
      title: "Creative Scholarship (Full Tuition)",
      subtitle: "2023",
      description: "Sungkyunkwan University",
    },
    {
      title: "Special Award, ICPC Korea Regional Contest",
      subtitle: "2018",
      description: "Onsite Selection Round",
    },
    {
      title: "Advanced to Onsite Selection Round",
      subtitle: "2021-2023",
      description: "ICPC Korea Regional Contest",
    },
    {
      title: "Samsung Software Certificate Pro",
      subtitle: "2022",
      description: "Samsung",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  achievements,
  publications,
  conferencePresentations,
  academicService,
  teachingExperience,
};
