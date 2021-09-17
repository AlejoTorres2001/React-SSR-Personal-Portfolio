const skills = [
  {
    name: "HTML5/CSS3",
    percentage:100,
  },
  {
    name: "JavaScript",
    percentage: 95,
  },
  {
    name: "React",
    percentage:90,
  },
  {
    name: "Vue",
    percentage:75,
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
    name: "ASP.NET",
    percentage: 80,
  },
];
const experiences = [
  {
    name: "Python Programming Instructor ",
    from: "2020",
    to: "currently",
    description:
      "As part of the IITA team I´m in charge of :",
    bps:["preparing and teachign each lesson, as well as correcting the course's weelky assignments",
    "Assist and develop empathy with students to encourage an active participation","Keep track of student progress to be presented to superiors"
  ],
      where:"Instituto de Innovación y Tecnología aplicada",
      location:" Salta,Argentina"
  },
  {
    name: "Student Researcher",
    where:" Universidad Catolica de Salta UCASAL",
    from: "Agost-2021",
    to: "currently",
    description:
      "Currently inside the Research group I´m participaiting in the KeyWordFinder, an App capable of filter big loads of .PDF files,some of my tasks are:",
      bps:["Participate in thedevelopment of this App isung Elentron.js and Vue.js Frameworks",
    "Document all progress and elaborate weekly reports","Researh about possible implementation improvements following my superior's workplan"
  ],

  },
];
const projects = [
  {
    name: "React TODO App",
    description:
      "As a way of practicing React concepts I decided to build a TO DO tasks app,as an extra, I´ve implemented a loggin and registration functionality,thanks to using this project in DataStax´s workshop I´ve won a Badge! you can the see full details of this project clicking the link ",
    image: "project_1.png",
    knowMore:"https://github.com/AlejoTorres2001/React_TODO_WebApp",
    bgColor:'#0BEFEC'
  },
  {
    name: "Python Discord Bot",
    description:
      "As part of an assigment in My programming course there is the challenge to build a custom python bot using Discord.py async API this is an example I frecuently use in my clases,this Bot nicknamed JULIO,has some pretty cool functionalities. you can the see full details of this project clicking the link",
    image: "project_2.jpg",
    bgColor:"#5B6DAF",
    knowMore:"https://github.com/AlejoTorres2001/PythonDiscordBot"
  },
  {
    name: "Book Fetching Curvy Website",
    description:
      "One day I came across haikei.app, a web site to generate unique SVG degins assets,insipired by this,I decided to revive and old NodeJs backend I built for a Web dev course.the Final Results where pretty descent you can the see full details of this project clicking the link",
    image: "project_3.png",
    knowMore:"https://github.com/AlejoTorres2001/Book_fetching_App"
  },
  {
    name: "Vue3 + GraphQL + themed API",
    description:
      "As a form of integrating this new API query language to my workflow I built a simple UI that displays information thanks to RickAndMortyGraphQL API. This proyect was based on VueJSMex crash course for Vue3,you can the see full details of this project clicking the link",
    image: "project_4.png",
    bgColor:"#343434"
  },
  {
    name: "NodeJS + MongoDB + Docker",
    description:
      "Since late 2020 containerization technologies has caught my attention thats why I´ve been experimenting with this technologie using Docker, in this case,builind a NotesApp containerizing an instance of NodeJS for the Backenda and MongoDB as the main database in a different container using DockerCompose you can the see full details of this project clicking the link",
    image: "project_5.png",
    bgColor:"#83DFB0"
  },
  {
    name: "ASP + MySQL E Commerce",
    description:
      "An E-Commerce made with C# and ASP.NET framework in the backend and using a  MySQL database,this was the Final Proyect for one of my develpment college courses,you can the see full details of this project clicking the link",
    image: "project_6.jpg",
  },
];
const posts = [
  {
    title: "React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempora magni, unde recusandae sed maiores minima, rerum perspiciatis blanditiis laborum, molestias quaerat nemo rem cum? Voluptate ea et omnis quibusdam?",
    image: "profile_pic.jpg",
  },
  {
    title: "React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempora magni, unde recusandae sed maiores minima, rerum perspiciatis blanditiis laborum, molestias quaerat nemo rem cum? Voluptate ea et omnis quibusdam?",
    image: "profile_pic.jpg",
  },
  {
    title: "React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempora magni, unde recusandae sed maiores minima, rerum perspiciatis blanditiis laborum, molestias quaerat nemo rem cum? Voluptate ea et omnis quibusdam?",
    image: "profile_pic.jpg",
  },
];
export default skills;
export { experiences };
export { projects };
export { posts };
