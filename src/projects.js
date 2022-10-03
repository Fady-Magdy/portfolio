//  Images
import projectEcommerce from "./images/projects/ecommerce-computer-shop.png";
import projectTodoApp from "./images/projects/todo-app.png";
import projectGames from "./images/projects/games.png";
import projectPhoneChatting from "./images/projects/phone-chatting.png";
import projectSoon from "./images/projects/soon.png";

import projectAdminDashboard from "./images/projects/admin-dashboard.png";
import projectMoviesSearch from "./images/projects/movies-search.png";
import projectFrontendBootcamp from "./images/projects/frontend-bootcamp.png";
import projectSuperDog from "./images/projects/super-dog.png";

const Projects = [
  {
    id: 1,
    title: "Ecommerce",
    image: projectEcommerce,
    projectLink: "https://fady-magdy.github.io/ecommerce-Computer-Shop/",
    projectCode: "https://github.com/Fady-Magdy/ecommerce-Computer-Shop",
    description:
      "Tech Used: React - Sass - Context API This is a full Ecommerce app which you can make a full shopping steps, Add items to Favourite list , Manage Your Orders and there is Dark/Light Mode and more to do",
    withMentor: false,
  },
  {
    id: 2,
    title: "Games",
    image: projectGames,
    projectLink: "https://fady-magdy.github.io/games/",
    projectCode: "https://github.com/Fady-Magdy/games",
    description:
      "One single Project with Multiple Games (Memory Game-Tic Tac Toe) More games will be added to this Project",
    withMentor: false,
  },
  {
    id: 3,
    title: "Todo App",
    image: projectTodoApp,
    projectLink: "https://fady-magdy.github.io/Todo-App-Redux/",
    projectCode: "https://github.com/Fady-Magdy/Todo-App-Redux",
    description: "Tech Used: React - Redux ToolKit",
    withMentor: false,
  },
  {
    id: 4,
    title: "Phone Chatting",
    image: projectPhoneChatting,
    projectLink: "https://fady-magdy.github.io/Phone-Chatting-v2/",
    projectCode: "https://github.com/Fady-Magdy/Phone-Chatting-v2",
    description:
      "A Phone Chatting app i created using Vanilla JavaScript ( First Published )",
    withMentor: false,
  },
  {
    id: 5,
    title: "More Projects on the way",
    image: projectSoon,
    projectLink: false,
    projectCode: false,
    description: "A new project is on the way, I'm trying to do my best",
    withMentor: false,
    soon: true,
  },
  {
    id: 6,
    switchArea: true,
  },
  {
    id: 7,
    title: "Admin Dashboard",
    image: projectAdminDashboard,
    projectLink: "https://fady-magdy.github.io/admin-dashboard/",
    projectCode: "https://github.com/Fady-Magdy/admin-dashboard",
    description: "Tech Used: React - Sass - React Router",
    withMentor: true,
  },
  {
    id: 8,
    title: "Super Dog Game",
    image: projectSuperDog,
    projectLink: "https://fady-magdy.github.io/super-dog-game/",
    projectCode: "https://github.com/Fady-Magdy/super-dog-game",
    description: "Tech Used: Vanilla JavaScript - Canvas",
    withMentor: true,
  },
  {
    id: 9,
    title: "Movies Search",
    image: projectMoviesSearch,
    projectLink: "https://fady-magdy.github.io/movies-search/",
    projectCode: "https://github.com/Fady-Magdy/movies-search",
    description: "Tech Used: React - API",
    withMentor: true,
  },
  {
    id: 10,
    title: "Frontend Bootcamp",
    image: projectFrontendBootcamp,
    projectLink: "https://fady-magdy.github.io/frontend-bootcamp/",
    projectCode: "https://github.com/Fady-Magdy/frontend-bootcamp",
    description: "Tech Used: Bootstrap - HTML only",
    withMentor: true,
  },
];
export default Projects;
