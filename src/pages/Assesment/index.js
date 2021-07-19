import {useState,useEffect} from "react"
import {usePageVisibility} from "react-page-visibility"
import NavBar from "../../components/NavBar"

const Assessment = () => {
    const isvisible = usePageVisibility()
        console.log(isvisible)
    return <>
    <NavBar />
    <div>
        
    </div>
    </>
}

export default Assessment;