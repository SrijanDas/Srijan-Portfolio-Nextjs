import { Project } from "../typings"
import axios from "axios"

const fetchProjects = async() => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    const data = await res.data
    const projects: Project[] = data.projects

    // console.log("in fetch projects")
    // console.log(projects)
    return projects

}

export default fetchProjects