import React from 'react';
import bootstrap from "../assets/logo/bootstrap.svg"
import Css from "../assets/logo/css-3.svg"
import Fimga from "../assets/logo/figma.svg"
import Git from "../assets/logo/git.svg"
import Html from "../assets/logo/html-5.svg"
import Java from "../assets/logo/java.svg"
import Javascript from "../assets/logo/javascript.svg"
import Mysql from "../assets/logo/mysql.svg"
import Nodejs from "../assets/logo/nodejs.svg"
import Reactjs from "../assets/logo/reactjs.svg"
import Tailwindcss from "../assets/logo/tailwindcss.svg"

import { FaBehance, FaLinkedinIn, FaDribbble, FaGithub, FaEnvelope, FaChevronDown } from "react-icons/fa";


export const NavbarContent = [
    {
        id: 1,
        name: 'About',
        link:'about'
    }
    ,
    {
        id: 2,
        name: 'Skills',
        link:'skills'
    }
    ,
    {
        id: 3,
        name: 'Projects',
        link:'projects'
    }
    ,
    {
        id: 4,
        name: 'Contact',
        link:'contact'
    }
    ,
]

export const Tech_logo = [
    {
        id: 1,
        name: "React.Js",
        logo: Reactjs
    },
    {
        id: 2,
        name: "Javascript",
        logo: Javascript
    },
    {
        id: 3,
        name: "Nodejs",
        logo: Nodejs
    },
    {
        id: 4,
        name: "JAVA",  
        logo: Java
    },
    {
        id: 5,
        name: "Tailwindcss",
        logo: Tailwindcss
    },
    {
        id: 6,
        name: "Bootstrap",
        logo: bootstrap
    },
    {
        id: 7,
        name: "HTML",
        logo: Html
    },
    {
        id: 8,
        name: "Figma",
        logo: Fimga
    },
    {
        id: 9,
        name: "Git",
        logo: Git
    },
];


export const projects_List=[
    {
        id:1,
        title:"Attendance Management",
        image:"",
        live_demo:"",
        view_code:"https://github.com/uk-krish/School-attendance-management",
        describe:"Developed a School Attendance Management Console that allows teachers to take attendance for their classes to track attendance records for students. The application is built using JavaScript."
    }
    ,
    {
        id:2,
        title:"Note Taking Website",
        image:"../../public/assests/Project/noteTake.png",
        live_demo:"https://uk-krish.github.io/Note/",
        view_code:"https://github.com/uk-krish/Note",
        describe:"Developed a Note Taking Website that allows users to create, edit, and delete notes. The website is built using HTML, CSS, and JavaScript."
    }
    ,
    {
        id:3,
        title:"To do",
        image:"../../public/assests/Project/todo.png",
        live_demo:"https://uk-krish-todo.vercel.app/",
        view_code:"https://github.com/uk-krish/Note",
        describe:"Developed a Note Taking Website. The website is built using React Js and Tailwindcss."
    }
    ,
    {
        id:4,
        title:"Rock Paper Scissors",
        image:"../../public/assests/Project/rps.png",
        live_demo:"https://uk-krish-rps.vercel.app/",
        view_code:"uk-krish-rps.vercel.app",
        describe:"Developed Rock Paper Scissors Game Website is built using React Js and Tailwindcss."
    }
    ,
    {
        id:5,
        title:"Medical Landing Page",
        image:"../../public/assests/Project/ushealth.png",
        live_demo:"https://ushealthcare.vercel.app/",
        view_code:"https://github.com/uk-krish/Note",
        describe:"Developed a Health care landing page is built using React Js and Tailwindcss."
    }
    ,
]

export const socialMedia=[
    {
        id:1,
        name:"Github",
        username:"uk-krish",
        link:"https://github.com/uk-krish/",
        logo:<FaGithub/>
    },
    {
        id:2,
        name:"Email",
        username:"uk-krish",
        link:"mailto:unnikrishnan131100@gmail.com",
        logo:<FaEnvelope/>
    },
    {
        id:3,
        name:"Linkedin",
        username:"uk-krish",
        link:"https://www.linkedin.com/in/uk-krish/",
        logo:<FaLinkedinIn/>
    },
]