import {RiComputerLine} from 'react-icons/ri'
import {GrTest} from 'react-icons/gr'
import { IExams, IProject, IService, ISkill } from './type'
import { IconBaseProps } from 'react-icons'
import {BsCircleFill} from 'react-icons/bs'
export const services:IService[]=[ 
    {
        title:"Front-end Development",
        about:"I am a beginer level front-end-developer.  I can build beutiful and scalable SPA (Single page application) using <b>HTML, </b><b>CSS</b> and <b> React.js</b>. I also develped api based fullstack app" ,
        Icon: RiComputerLine,

    },
     
    {
        title:"Back-end Development",
        about:" I am beginner at back-end development. Recently I did 2 full-stack app. Hope that I will learn it properly very soon and can contribute for my team",
        Icon: RiComputerLine,

    },
    {
        title:"Quality Assurance & Testing",
        about:"I am a beginer level QA and automation testing. I did my trial <b>project test case, test plan, cost estimation, selenium unit test etc.</b> so far. ",
        Icon: GrTest,

    },
    
] 
//array for skill of languages
export const languages:ISkill[]=[
    {
        name:'React',
        level: '75%',
        Icon: BsCircleFill
    },
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
        image_path:"/images/Portfolio.png",
        deployed_url:"https://test-shium.vercel.app/",
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
        name:"E-commerce Admin",
        description:"This is a fullstack Next App to create e-commerce website. This app provides appropriate api for creating any online store.",
        image_path:"/images/e-commerce-admin.png",
        deployed_url:"https://vercel.com/sheikhmahmudulhasanshium/e-commerce-full-stack-admin",
        github_url:"https://github.com/sheikhmahmudulhasanshium/E-commerce-full-stack-admin/tree/main",
        category:["react"],
        key_tech:["React.js", "Next.app", "TailwindCSS", "MySQL", "Clerk Authentication", "Shadcn-ui"],
        
    },
    {
        id:6,
        name:"E-commerce Store",
        description:"This is a fullstack Next App to create e-commerce website. This app uses appropriate api for creating any online store.",
        image_path:"/images/e-commerce-store.png",
        deployed_url:"https://e-commerce-full-stack-store-3z80lkz8v-sheikhmahmudulhasanshium.vercel.app/",
        github_url:"https://github.com/sheikhmahmudulhasanshium/E-commerce-full-stack-store/tree/main",
        category:["react"],
        key_tech:["React.js", "Next.app", "TailwindCSS", "MySQL", "Shadcn-ui"],
        
    },
    {
        id:7,
        name:"Discord Clone",
        description:"This a functional discord clone app that has chat, video call, file sharing,web-socket fuctionality",
        image_path:"/images/discord-clone.png",
        deployed_url:"https://vercel.com/sheikhmahmudulhasanshium/discord-clone-app/D2mv9bgeMoyywXKD7urjGJRj7Z3F",
        github_url:"https://github.com/sheikhmahmudulhasanshium/discord-clone-app/tree/main",
        category:["react"],
        key_tech:["React.js", "Next.app", "TailwindCSS", "MySQL", "Shadcn-ui","Clerk Authentication"],
        
    },
    {
        id:8,
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
