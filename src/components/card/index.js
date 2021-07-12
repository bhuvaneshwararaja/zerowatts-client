import {useState} from "react";
const Card = ({learn}) => {
    const [btn,setbtn] = useState(false)
    return <>
        <div className="w-72 h-56 transition-all duration-700 border-b-2 border-transparent cursor-pointer m-4 flex flex-col justify-center items-center hover:shadow-lg hover:border-b-2 hover:border-purple-700"
            onMouseMove={(e) => {
                    e.preventDefault();
                    setbtn(true)
            }}
            onMouseLeave={(e) => {
                e.preventDefault();setbtn(false)
            }}
        >
            <img src={learn.img} alt="" className="w-28"></img>
            <h1 className="text-2xl p-4">{learn.name}</h1>
            <button className={btn === true ?"transition-all duration-700  pl-2 pr-2 rounded-lg text-xl bg-purple-400 hover:bg-purple-700 text-white hover:shadow-lg visible opacity-1":"invisible opacity-0" }>Learn</button>
        </div>
    </>
}
export default Card;