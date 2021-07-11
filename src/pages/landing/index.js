import {Link} from "react-router-dom";
import {useState} from "react";

const LandingPage = () => {
    const [changeSign,setChangesign] = useState(false);
    return <>
    <div>
        <img src="/images/cbackground.jpg" className="fixed h-full w-full" alt=""></img>
    </div>
       <div className="relative" style={{background:"rgba(0,0,0,.9"}}>
       <header className="flex flex-row justify-between p-4 text-2xl text-white">
            <Link to="">{"</ZeroWatts>"}</Link>
            <button onClick={() => {
                setChangesign(false);
            }} className="font-thin border-2 border-purple-700 text-white rounded-lg pl-3 pr-3 transition-all duration-700 hover:bg-purple-700 hover:text-white ">Signin</button>
        </header>
        <div className={changeSign === true ?"flex pl-5 pr-5 h-screen items-center justify-center":"flex pl-5 pr-5 h-screen items-center"}>
            <div className="w-3/6 text-white">
                <h1 className="text-5xl text-center mb-2" >Welcome <span className="text-purple-700">coders !</span></h1>
                <p className="text-center text-2xl leading-loose ">We ZeroWatts provide you a plateform for <span className="text-purple-700">kick-start your Coding Skills</span> and Also you can take N number of assessments related to coding additionally<span className="text-purple-700"> Aptitude</span> .</p>
                <div className="text-center" >
            <button className="mt-3 font-condensed font-thin border-2 border-purple-700 text-white rounded-lg p-2 text-2xl transition-all duration-700 hover:bg-purple-700 hover:text-white ">Getting Started</button>

                </div>
            </div>
            {changeSign === false ? (<div className="w-3/6 h-screen flex items-center justify-center">
                <form className="bg-white w-3/5 h-4/5 rounded-lg">
                    <section className="flex justify-around p-4 text-2xl">
                <button className="border-b-2 border-purple-700">Login</button>
                <button className="">Signup</button>

                    </section>
                    <section className="flex flex-col leading-10 items-center justify-center h-4/5">
                        <input type="text" className="border-2 border-black p-1 text-xl mt-3 w-3/4" placeholder="UserName"></input>
                        <input type="password" className="border-2 mt-3 w-3/4 border-black p-1 text-xl" placeholder="Password"></input>
                        <div className="text-center" >
                        <button className="mt-3 font-condensed font-thin border-2 border-purple-700 text-black rounded-lg  pl-6 pr-6 text-2xl transition-all duration-700 ">Login</button>

                </div>
                    </section>
                    <section className="flex flex-col">
                        <button>Signin with Google</button>
                        <button>Signin with Github</button>
                    </section>
                </form>
            </div>):""}
        </div>
       </div>
    </>
}
export default LandingPage;