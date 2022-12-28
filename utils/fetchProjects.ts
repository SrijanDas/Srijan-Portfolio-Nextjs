import axios from "../config/axios"
import { Project } from "../typings"

const fetchProjects = async() => {
    try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
        // const data = await res.json()
        const res = await axios.get(`/api/getProjects`)
        const data = res.data

        const projects: Project[] = data.projects

        // console.log("in fetch projects")
        // console.log(projects)
        return projects
        
    } catch (error) {
        console.log(error)
        return []        
    }

}

export default fetchProjects