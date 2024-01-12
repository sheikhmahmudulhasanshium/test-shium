import { IconType } from "react-icons"
export interface IService{
    title:string;
    about:string;
    Icon:IconType;

}

export interface ISkill{
    name:string;
    level:string;
    Icon:IconType;
}
export interface IProject{
    id:number;
    name:string;
    description:string;
    image_path:string;
    deployed_url:string;
    github_url:string;
    category:Category[];
    key_tech:string[];
}
export interface IExams{
    name:string;
    department:string
    institute:string;
    board:string;
    result:string
    passing_year:string,
    
}
export type Category="react"|"python"|"C++"|"C"|"Java"|"node"|"other";