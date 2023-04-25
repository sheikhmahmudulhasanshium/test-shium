import {RiComputerLine} from 'react-icons/ri'
import {GrTest} from 'react-icons/gr'
import { IExams, IProject, IService, ISkill } from './type'
import { IconBaseProps } from 'react-icons'
import {BsCircleFill} from 'react-icons/bs'
export const services:IService[]=[ 
    {
        title:"Front-end Development",
        about:"I am a beginer level front-end-developer.  I can build beutiful and scalable SPA (Single page application) using <b>HTML, </b><b>CSS</b> and <b> React.js</b>",
        Icon: RiComputerLine,

    },
    {
        title:"Quality Assurance & Testing",
        about:"I am a beginer level QA and automation testing. I did my trial <b>project test case, test plan, cost estimation, selenium unit test etc.</b> so far. ",
        Icon: GrTest,

    },
     
    {
        title:"Back-end Development",
        about:" I did not leaned back-end development yet. It is my next target. Hope that I will learn it very soon and can contribute for my team",
        Icon: RiComputerLine,

    },
    {
        title:"Title",
        about:" Desciption about my job",
        Icon: RiComputerLine,

    },
    {
        title:"Title",
        about:" Desciption about my job",
        Icon: RiComputerLine,

    },
    {
        title:"Title",
        about:" Desciption about my job",
        Icon: RiComputerLine,

    },
] 
//array for skill of languages
export const languages:ISkill[]=[
    {
        name:'Python',
        level: '60%',
        Icon: BsCircleFill
    }, 
    {
        name:'C++',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name:'C',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name:'Java',
        level: '45%',
        Icon: BsCircleFill
    },
    {
        name:'React',
        level: '75%',
        Icon: BsCircleFill
    },
]
export const tools: ISkill[]=[
    
    {
        name:'Figma',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name:'Matlab',
        level: '75%',
        Icon: BsCircleFill
    },
    {
        name:'Selenium',
        level: '35%',
        Icon: BsCircleFill
    },
]

export const projects:IProject[]=[
    {
        id:1,
        name:"Portfolio",
        description:"This is my first react based project using typescript and next.js . It is very immature and early project. Hope it will be better soon.",
        image_path:"/images/Portfolio.jpg",
        deployed_url:"https://shium-portfolio-sheikhmahmudulhasanshium.vercel.app/",
        github_url:"https://github.com/sheikhmahmudulhasanshium/test-shium",
        category:["react","node"],
        key_tech:["React","Typescript","node"],
    },
    
    {
        id:2,
        name:"Tick-tack-toe",
        description:"This is a very simple game made by using React, Typescript etc. It still needs working",
        image_path:"/images/tick-tack-toe.png",
        deployed_url:"https://tick-tack-toe-lac.vercel.app/",
        github_url:"https://github.com/sheikhmahmudulhasanshium/Tick-tack-toe",
        category:["react"],
        key_tech:["React","TypeScript"],
    },
    {
        id:3,
        name:"Machine Learning Project",
        description:"This part contains the description of the given project",
        image_path:"/images/Sample.jpg",
        deployed_url:"https://github.com/sheikhmahmudulhasanshium/Face-Mask-Detection",
        github_url:"https://github.com/sheikhmahmudulhasanshium/Face-Mask-Detection",
        category:["python"],
        key_tech:["Anaconda","Jupyter-notebook"],
    },
    {
        id:4,
        name:"Computer Graphics Project",
        description:"This is a basic computer graphics project just using openGL library in C++.",
        image_path:"/images/CG-Projects.jpg",
        deployed_url:"https://www.youtube.com/watch?v=vRN0AEQDb0A&ab_channel=SheikhMahmudulHasanShiumShium",
        github_url:"https://github.com/sheikhmahmudulhasanshium/ComputerGraphics-Group-Project-.git",
        category:["C++"],
        key_tech:["openGL","C++"],
    },
    {
        id:5,
        name:"Business Card",
        description:"This is a simple project using react",
        image_path:"/images/Sample.jpg",
        deployed_url:"https://relaxed-bubblegum-40f5e6.netlify.app/?fbclid=IwAR0a-49DlBpUBghaAj6m3Vuc5myihXOnhEKeV2yCjZzqiMnEe67SCgVS93M",
        github_url:"https://www.something.com",
        category:["react"],
        key_tech:["React"],
    },
    
    {
        id:7,
        name:"Project Name",
        description:"This part contains the description of the given project",
        image_path:"/images/Sample.jpg",
        deployed_url:"https://www.something.com",
        github_url:"https://www.something.com",
        category:["other"],
        key_tech:["Other"],
        
    },
    {
        id:8,
        name:"Project Name",
        description:"This part contains the description of the given project",
        image_path:"/images/Sample.jpg",
        deployed_url:"https://www.something.com",
        github_url:"https://www.something.com",
        category:["other"],
        key_tech:["Other"],
        
    },
    {
        id:6,
        name:"Chorki",
        description:"This is made by using only PPT slides and converted into .gif format. It was very fun project.",
        image_path:"/images/Chorki-made-by-shium.gif",
        deployed_url:"https://www.something.com",
        github_url:"https://www.something.com",
        category:["other"],
        key_tech:["PPT"],
    },

]

export const exams:IExams[]=[
    { 
        name: "P.S.C",
        institute:"Ashuganj Tap Bidyut Kendra High School",
        department:"---",
        board:"Comilla",
        result:"1st Division",
        passing_year:"2011",
    },
    { 
        name: "J.S.C",
        institute:"Ashuganj Tap Bidyut Kendra High School",
        board:"Comilla",
        department:"Science",
        result:"G.P.A. 5.00 out of 5.00",
        passing_year:"2014",
    },
    { 
        name: "S.S.C",
        institute:"Ashuganj Tap Bidyut Kendra High School",
        department:"Science",
        board:"Comilla",
        result:"G.P.A. 4.94 out of 5.00",
        passing_year:"2016",
    },
    { 
        name: "H.S.C",
        institute:"Abdul Kadir Mollah City College",
        department:"Science",
        board:"Dhaka",
        result:"G.P.A. 4.17 out of 5.00",
        passing_year:"2018",
    },
    { 
        name: "B.Sc",
        institute:"American International University-Bangladesh",
        department:"C.S.E",
        board:"---",
        result:"C.G.P.A. 3.86 out of 4.00",
        passing_year:"2023",
    },
]
function GrTestDesktop(props: IconBaseProps): Element {
    throw new Error('Function not implemented.')
}
