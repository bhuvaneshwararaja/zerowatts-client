import {Link} from "react-router-dom"
const Tags = ({tags}) => {
    console.log(tags)
    return <>
     <li className="p-4">
        <Link to="" className="pl-10 pr-10 border-purple-700 rounded-lg pt-2 pb-2 border-2">{tags}</Link>
        </li>
    </>
}

export default Tags;