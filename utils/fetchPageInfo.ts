import { PageInfo} from "../typings"
import axios from "axios"

const fetchSkills = async() => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    const data = await res.data
    const pageInfo: PageInfo = data.pageInfo

    return pageInfo

}

export default fetchSkills