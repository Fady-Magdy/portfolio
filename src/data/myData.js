//  Images
// Projects
import ecommerce1 from "../images/projects/ecommerce/1.png";
import ecommerce2 from "../images/projects/ecommerce/2.png";
import ecommerce3 from "../images/projects/ecommerce/3.jpg";
import ecommerce4 from "../images/projects/ecommerce/4.jpg";
import ecommerce5 from "../images/projects/ecommerce/5.jpg";
import ecommerce6 from "../images/projects/ecommerce/6.jpg";
import hso1 from "../images/projects/hso/1.jpg";
import hso2 from "../images/projects/hso/2.jpg";
import hso3 from "../images/projects/hso/3.jpg";
import hso4 from "../images/projects/hso/4.jpg";
import hso5 from "../images/projects/hso/5.jpg";
import hso6 from "../images/projects/hso/6.jpg";
import games1 from "../images/projects/games/1.png";
import games2 from "../images/projects/games/2.jpg";
import games3 from "../images/projects/games/3.jpg";
import games4 from "../images/projects/games/4.jpg";
import games5 from "../images/projects/games/5.jpg";
import todo1 from "../images/projects/todo/1.jpg";
import todo2 from "../images/projects/todo/2.jpg";
import todo3 from "../images/projects/todo/3.jpg";
import phoneChat1 from "../images/projects/phoneChat/1.jpg";
import phoneChat2 from "../images/projects/phoneChat/2.jpg";
import soon from "../images/projects/soon.jpg";
// Skills
import ReduxImg from "../images/redux.png";
import JestImg from "../images/jest.png";

export const Projects = [
  {
    title: "Ecommerce PC Store",
    images: [
      ecommerce1,
      ecommerce2,
      ecommerce3,
      ecommerce4,
      ecommerce5,
      ecommerce6,
    ],
    projectLink: "https://fady-magdy.github.io/ecommerce-Computer-Shop",
    projectCode: "https://github.com/Fady-Magdy/ecommerce-Computer-Shop",
    description:
      "Tech Used: React - Sass - Context API This is a full Ecommerce app which you can make a full shopping steps, Add items to Favourite list , Manage Your Orders and there is Dark/Light Mode and more to do",
  },
  {
    title: "Home Stuff Organizer (Incomplete)",
    images: [hso1, hso2, hso3, hso4, hso5, hso6],
    projectLink: "https://hso-fady-magdy.vercel.app",
    projectCode: "https://github.com/Fady-Magdy/home-stuff-organizer",
    description:
      "Full Stack (MERN), I made this project for my family, it will help you organize your home items and find your stuff easily by just typing it's name it will show you where is it, I'm still working on it and hope I make something useful",
  },
  {
    title: "Games",
    images: [games1, games2, games3, games4, games5],
    projectLink: "https://fady-magdy.github.io/games",
    projectCode: "https://github.com/Fady-Magdy/games",
    description:
      "One single Project with Multiple Games (Memory Game-Tic Tac Toe) More games will be added to this Project",
    withMentor: false,
  },
  {
    title: "Todo App",
    images: [todo1, todo2, todo3],
    projectLink: "https://fady-magdy.github.io/Todo-App-Redux",
    projectCode: "https://github.com/Fady-Magdy/Todo-App-Redux",
    description: "Tech Used: React - Redux ToolKit",
  },
  {
    title: "Phone Chatting",
    images: [phoneChat1, phoneChat2],
    projectLink: "https://fady-magdy.github.io/Phone-Chatting-v2",
    projectCode: "https://github.com/Fady-Magdy/Phone-Chatting-v2",
    description:
      "A Phone Chatting app i created using Vanilla JavaScript ( First Published )",
  },
  {
    title: "More Projects Soon!",
    images: [soon],
    description: "A new project is on the way, I'm trying to do my best",
    soon: true,
  },
];

export const Skills = [
  {
    name: "HTML",
    icon: <i className="fa-brands fa-html5"></i>,
  },
  {
    name: "CSS",
    icon: <i className="fa-brands fa-css3-alt"></i>,
  },
  {
    name: "JavaScript",
    icon: <i className="fa-brands fa-square-js"></i>,
  },
  {
    name: "React.js",
    icon: <i className="fa-brands fa-react"></i>,
  },
  {
    name: "Redux",
    icon: <img src={ReduxImg} alt="redux" />,
  },
  {
    name: "Unit Test",
    icon: <img src={JestImg} alt="jest" />,
  },
  {
    name: "Bootstrap",
    icon: <i className="fa-brands fa-bootstrap"></i>,
  },
  {
    name: "Sass",
    icon: <i className="fa-brands fa-sass"></i>,
  },
  {
    name: "GitHub",
    icon: <i className="fa-brands fa-github"></i>,
  },
];

export const fadyData = {
  name: "Fady Magdy",
  email: "fady.programmer@gmail.com",
  phone: "+20 106 753 0598",
  jobTitle: "Jr Frontend Developer",
  location: "Asyut, Egypt (willing to relocate)",
  resumeViewUrl:
    "https://drive.google.com/file/d/1G3UMTtu6aut3updPAcNM1hR-DBZ7pCdW/view?usp=sharing",
  resumeDownloadUrl:
    "https://drive.google.com/uc?export=download&id=1G3UMTtu6aut3updPAcNM1hR-DBZ7pCdW",
  socialLinks: [
    {
      name: "LinkedIn",
      icon: <i className="fa-brands fa-linkedin"></i>,
      url: "https://www.linkedin.com/in/fady-magdy-dev",
    },
    {
      name: "GitHub",
      icon: <i className="fa-brands fa-square-github"></i>,
      url: "https://github.com/Fady-Magdy",
    },
    {
      name: "Facebook",
      icon: <i className="fa-brands fa-square-facebook"></i>,
      url: "https://www.facebook.com/fady.magdy.dev",
    },
  ],
};

export function spliceMyName() {
  let newName = [];
  for (let i = 0; i < fadyData.name.length; i++) {
    newName.push(fadyData.name[i]);
  }
  return newName;
}
