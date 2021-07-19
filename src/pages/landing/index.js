
import {useState,useEffect} from "react";
import { FaGithubAlt} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"
import React from 'react'
const LandingPage = () => {
    const [changeSign,setChangesign] = useState(true);
    const [login,setLogin] = useState(true);
    const [signup,setSignup] = useState(false);
    return <>
    <div>
        <img src="/images/cbackground.jpg" className="fixed h-full w-full" alt=""></img>
    </div>
       <div className="relative" style={{background:"rgba(0,0,0,.9"}}>
       <header className="flex flex-row justify-between p-4 text-2xl text-white">
            <a href="">{"</ZeroWatts>"}</a>
            <button onClick={(e) => {
                e.preventDefault();
                setChangesign(false);
            }} className="font-thin border-2 border-purple-700 text-white rounded-lg pl-3 pr-3 transition-all duration-700 hover:bg-purple-700 hover:text-white ">Signin</button>
        </header>
         <div className={changeSign === true ?"flex pl-5 pr-5 h-screen items-center justify-center":"flex pl-5 pr-5 h-screen items-center"}>
            <div className="w-3/6 text-white">
                <h1 className="text-5xl text-center mb-2" >Welcome <span className="text-purple-700">coders !</span></h1>
                <p className="text-center text-2xl leading-loose ">We ZeroWatts provide you a plateform for <span className="text-purple-700">kick-start your Coding Skills</span> and Also you can take N number of assessments related to coding additionally<span className="text-purple-700"> Aptitude</span> .</p>
                <div className="text-center" >
                <button className="mt-3 font-condensed font-thin border-2 border-purple-700 text-white rounded-lg p-2 text-2xl transition-all duration-700 hover:bg-purple-700 hover:text-white " onClick={(e) => {
                e.preventDefault();
                setChangesign(false);
            }}>Getting Started</button>
                </div>
            </div>
            {changeSign === false ? (<div className="w-3/6 h-screen flex items-center justify-center">
                <form className="bg-white w-3/5 h-auto rounded-lg transition-all duration-700">
                <section className="flex justify-around p-4 text-2xl">
                 <button className={login === true && signup === false? "border-b-2 border-purple-700":"" }onClick={(e) => {
                        e.preventDefault();
                        setLogin(true);
                        setSignup(false);
                    }}>Login</button>
                    <button className={login === false && signup === true? "border-b-2 border-purple-700":"" } onClick={(e) => {
                        e.preventDefault();
                        setLogin(false);
                        setSignup(true);
                    }}>Signup</button>

                    </section>
                    {login === true && signup === false? (<>
                        
                        <section className="flex flex-col leading-10 items-center justify-center h-4/5">
                        <input type="text" className="focus:shadow-lg transition-all duration-700  p-1 text-xl mt-3 w-3/4" placeholder="UserName"></input>
                        <input type="password" className="focus:shadow-lg transition-all duration-700  mt-3 w-3/4  p-1 text-xl" placeholder="Password"></input>
                        <div className="text-center" >
                        <button className="mt-3 hover:shadow-lg hover:bg-purple-700 hover:text-white font-condensed font-thin border-2 border-purple-700 text-black rounded-lg  pl-6 pr-6 text-2xl transition-all duration-700 ">Login</button>
                        </div>
                        </section>
                    </>):(<>
                        <section className="flex flex-col leading-10 items-center justify-center h-4/5">
                        <input type="text" className=" focus:shadow-lg transition-all duration-700 p-1 text-xl mt-3 w-3/4" placeholder="FirstName"></input>
                        <input type="email" className=" focus:shadow-lg transition-all duration-700  mt-3 w-3/4 border-black p-1 text-xl" placeholder="Email"></input>
                        <input type="password" className=" focus:shadow-lg transition-all duration-700  mt-3 w-3/4 border-black p-1 text-xl" placeholder="Password"></input>
                        <input type="password" className=" focus:shadow-lg transition-all duration-700  mt-3 w-3/4 border-black p-1 text-xl" placeholder="Re-type-Password"></input>
                        <div className="text-center" >
                        <button className="mt-3 hover:shadow-lg hover:bg-purple-700 hover:text-white font-condensed font-thin border-2 border-purple-700 text-black rounded-lg  pl-6 pr-6 text-2xl transition-all duration-700 ">Signup</button>
                        </div>
                        </section>
                    </>)}
                    <section className="flex flex-col">
                       <div className="text-center flex">
                       <button className="m-3 w-3/6 text-black shadow-lg font-thin rounded-lg  pl-6 pr-6 text-2xl transition-all duration-700 flex items-center" ><FcGoogle className="pr-1 mr-2" />Signin with Google</button>
                        <button className="m-3 w-3/6 text-black shadow-lg font-thin  rounded-lg  pl-6 pr-6 text-2xl transition-all duration-700 flex items-center bg-gray-700 text-white"><FaGithubAlt className="pr-1 mr-2" />Signin with Github</button>
                       </div>
                    </section>
                    
                                                         
                </form>
            </div>):""}
        </div>
       </div>
    </>
}
export default LandingPage;
