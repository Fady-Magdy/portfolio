//  Images
import projectEcommerce from "./images/projects/ecommerce-computer-shop.png";
import projectTodoApp from "./images/projects/todo-app.png";
import projectGames from "./images/projects/games.png";
import projectPhoneChatting from "./images/projects/phone-chatting.png";
import projectHomeStuffOrganizer from "./images/projects/home-stuff-organizer.jpg";
import projectSoon from "./images/projects/soon.jpg";

const Projects = [
  {
    id: 1,
    title: "Ecommerce PC Store",
    image: projectEcommerce,
    projectLink: "https://fady-magdy.github.io/ecommerce-Computer-Shop",
    projectCode: "https://github.com/Fady-Magdy/ecommerce-Computer-Shop",
    description:
      "Tech Used: React - Sass - Context API This is a full Ecommerce app which you can make a full shopping steps, Add items to Favourite list , Manage Your Orders and there is Dark/Light Mode and more to do",
  },
  {
    id: 2,
    title: "Home Stuff Organizer (Incomplete)",
    image: projectHomeStuffOrganizer,
    projectLink: "https://hso-fady-magdy.vercel.app",
    projectCode: "https://github.com/Fady-Magdy/home-stuff-organizer",
    description:
      "Full Stack (MERN), I made this project for my family, it will help you organize your home items and find your stuff easily by just typing it's name it will show you where is it, I'm still working on it and hope I make something useful",
  },
  {
    id: 3,
    title: "Games",
    image: projectGames,
    projectLink: "https://fady-magdy.github.io/games",
    projectCode: "https://github.com/Fady-Magdy/games",
    description:
      "One single Project with Multiple Games (Memory Game-Tic Tac Toe) More games will be added to this Project",
    withMentor: false,
  },
  {
    id: 4,
    title: "Todo App",
    image: projectTodoApp,
    projectLink: "https://fady-magdy.github.io/Todo-App-Redux",
    projectCode: "https://github.com/Fady-Magdy/Todo-App-Redux",
    description: "Tech Used: React - Redux ToolKit",
  },
  {
    id: 5,
    title: "Phone Chatting",
    image: projectPhoneChatting,
    projectLink: "https://fady-magdy.github.io/Phone-Chatting-v2",
    projectCode: "https://github.com/Fady-Magdy/Phone-Chatting-v2",
    description:
      "A Phone Chatting app i created using Vanilla JavaScript ( First Published )",
  },
  {
    id: 6,
    title: "More Projects Soon!",
    image: projectSoon,
    description: "A new project is on the way, I'm trying to do my best",
    soon: true,
  },
];
export default Projects;
