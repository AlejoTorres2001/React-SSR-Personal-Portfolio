const skills = [
  {
    name: "HTML5/CSS3",
    percentage: 100,
  },
  {
    name: "JavaScript",
    percentage: 95,
  },
  {
    name: "React",
    percentage: 90,
  },
  {
    name: "Vue",
    percentage: 75,
  },
  {
    name: "NodeJS",
    percentage: 85,
  },
  {
    name: "Version Control",
    percentage: 85,
  },
  {
    name: "SQL",
    percentage: 90,
  },
  {
    name: "Python",
    percentage: 85,
  },
  {
    name: "Docker",
    percentage: 75,
  },
  {
    name: "ASP.NET",
    percentage: 80,
  },
];
const experiences = [
  {
    name: "Python Programming Instructor ",
    from: "2020",
    to: "currently",
    description: "As part of the IITA team I´m in charge of :",
    bps: [
      "preparing and teachign each lesson, as well as correcting the course's weelky assignments",
      "Assist and develop empathy with students to encourage an active participation",
      "Keep track of student progress to be presented to superiors",
    ],
    where: "Instituto de Innovación y Tecnología aplicada",
    location: " Salta,Argentina",
  },
  {
    name: "Student Researcher",
    where: " Universidad Catolica de Salta UCASAL",
    from: "Agost-2021",
    to: "currently",
    description:
      "Currently inside the Research group I´m participaiting in the KeyWordFinder, an App capable of filter big loads of .PDF files,some of my tasks are:",
    bps: [
      "Participate in thedevelopment of this App isung Elentron.js and Vue.js Frameworks",
      "Document all progress and elaborate weekly reports",
      "Researh about possible implementation improvements following my superior's workplan",
    ],
  },
];
const projects = [
  {
    name: "React TODO App",
    description:
      "As a way of practicing React concepts I decided to build a TO DO tasks app,as an extra, I´ve implemented a loggin and registration functionality,thanks to using this project in DataStax´s workshop I´ve won a Badge! you can the see full details of this project clicking the link ",
    image: "project_1.png",
    knowMore: "https://github.com/AlejoTorres2001/React_TODO_WebApp",
    bgColor: "#0BEFEC",
  },
  {
    name: "Python Discord Bot",
    description:
      "As part of an assigment in My programming course there is the challenge to build a custom python bot using Discord.py async API this is an example I frecuently use in my clases,this Bot nicknamed JULIO,has some pretty cool functionalities. you can the see full details of this project clicking the link",
    image: "project_2.jpg",
    bgColor: "#5B6DAF",
    knowMore: "https://github.com/AlejoTorres2001/PythonDiscordBot",
  },
  {
    name: "Book Fetching Curvy Website",
    description:
      "One day I came across haikei.app, a web site to generate unique SVG degins assets,insipired by this,I decided to revive and old NodeJs backend I built for a Web dev course.the Final Results where pretty descent you can the see full details of this project clicking the link",
    image: "project_3.png",
    knowMore: "https://github.com/AlejoTorres2001/Book_fetching_App",
  },
  {
    name: "Vue3 + GraphQL + themed API",
    description:
      "As a form of integrating this new API query language to my workflow I built a simple UI that displays information thanks to RickAndMortyGraphQL API. This proyect was based on VueJSMex crash course for Vue3,you can the see full details of this project clicking the link",
    image: "project_4.png",
    bgColor: "#343434",
    knowMore: "https://github.com/AlejoTorres2001/Rick_and_Morty_Vue3_GraphQL",
  },
  {
    name: "NodeJS + MongoDB + Docker",
    description:
      "Since late 2020 containerization technologies has caught my attention thats why I´ve been experimenting with this technologie using Docker, in this case,builind a NotesApp containerizing an instance of NodeJS for the Backenda and MongoDB as the main database in a different container using DockerCompose you can the see full details of this project clicking the link",
    image: "project_5.png",
    bgColor: "#83DFB0",
    knowMore:
      "https://github.com/AlejoTorres2001/Node_Mongo_Docker_SimpleNoteApp",
  },
  {
    name: "ASP.NET + MySQL E-Commerce",
    description:
      "An E-Commerce made with C# and ASP.NET framework in the backend and using a  MySQL database,this was the Final Proyect for one of my develpment college courses,you can the see full details of this project clicking the link",
    image: "project_6.jpg",
    bgColor: "#004C62",
    knowMore: "https://github.com/AlejoTorres2001/ASP_MySQL_Web_Store",
  },
];
const posts = [
  {
    title: "React",
    content:
      "Coming soon...",
    image: "blog_1.png",
  },
  {
    title: "Angular",
    content:
      "Coming soon...",
    image: "blog_2.jpg",
  },
  {
    title: "Vue",
    content:
      "Coming soon...",
    image: "blog_3.jpg",
  },
];

const projectsExtended = [
  ...projects,
  {
    name: "Server Side Rendering in React",
    description:
      "SSR is used to fetch data and pre-populate a page with custom content, leveraging the server's reliable internet connection,also it is better for SEO than client-side rendering.If you want to use SSR in React a pretty good option is Next.js, in fact this whoe website was built using this technologies, you can the see full details of this project clicking the link ",
    image: "project_7.png",
    knowMore: "https://github.com/AlejoTorres2001/React-SSR-Personal-Portfolio",
    bgColor: "#000000",
  },
  {
    name: "ElectronJS Desktop Apps ",
    description:
      "ElectronJS is a JavaScript framework that allows for the development of desktop GUI applications using web technologies: it combines the Chromium rendering engine and the Node. js runtime. Electron is the main GUI framework behind several open-source projects including Atom, GitHub and Desktop.It is the core technologie behind KeyWordFinder,I´ve built some simple projects using electron,you can the see full details clicking the link ",
    image: "project_8.jpg",
    knowMore: "https://github.com/AlejoTorres2001/Electron_Urls_App",
    bgColor: "#313244",
  },
  {
    name: "React Crypto DataTable App",
    description:
      "a React web App using Coingecko API and React Context API,you can the see full details clicking the link, there you will also find a link where you can test the web app, deployed in Heroku",
    image: "project_9.png",
    knowMore: "https://github.com/AlejoTorres2001/React-Crypto-DataTable-App",
    bgColor: "#14191F",
  },
];

export default skills;
export { projectsExtended };
export { experiences };
export { projects };
export { posts };
