import axios from "../config/axios"
import { defaultPageInfo } from "../config/defaultProps"
import { PageInfo} from "../typings"



const fetchPageInfo = async() => {
   
    try {
         // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
        const res = await axios.get(`/api/getPageInfo`)

        // const data = await res.json()
        const data = res.data

        const pageInfo: PageInfo = data.pageInfo

        return pageInfo
    } catch (error) {
        console.log(error)
        return Object(defaultPageInfo)        
    }

}

export default fetchPageInfo