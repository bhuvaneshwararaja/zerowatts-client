import {useState} from "react"
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-twilight"
import "ace-builds/src-noconflict/theme-tomorrow"
import "ace-builds/src-noconflict/ext-language_tools"
import { HiOutlineLightBulb ,HiLightBulb} from "react-icons/hi";
import { IoClose} from "react-icons/io5";
import Output from "./Output";
const Editor = () => {
    const [theme,setheme] = useState("light")
    const [language,setLanguage] = useState("")
   
    return <>
        <input type="checkbox" id="switch" hidden></input>
      <div className="w-3/6 h-screen flex flex-col justify-around p-2 mt-20 ">
          <div className="border-yellow-600 border-2 bg-yellow-200 p-2 " id="tips">
              <p className=" inline-block">Before Writting code Kindly Think about all the edge cases and corner cases of problem</p>
              <IoClose className="inline-block float-right text-2xl cursor-pointer" onClick={(e) => {
                    document.getElementById("tips").style.display = "none"
              }} />
          </div>
      <div className=" border-r-2 border-b-2 shadow-lg ">
          <div className="flex w-60 float-right justify-around p-2">
              <select className="bg-white border-purple-700 border-2 cursor-pointer" onChange={(e) => {
                   setLanguage(e.target.value)
              }}>
                  <option default hidden>Select language</option>
                  <option value="c_cpp">CPP</option>
                  <option value="java">Java</option>
                  <option value="python">Python3</option>
                  <option value="javascript">JavaScript</option>
                  <option>C#</option>
              </select>
          <label for="switch">
              <div className="mt-1 mb-2">
              
               <div className="w-20">
               <div className="w-20 rounded-2xl h-7 bg-white absolute pointer-events-none shadow-md border-purple-700 border-2"></div>
               <div id="toogle" className="w-8 rounded-2xl h-7 bg-purple-700 relative z-10 transition-all duration-500 cursor-pointer"
               onClick={(e) => {
                   
                if(document.getElementById('switch').checked === false){
                        document.getElementById('toogle').style.transform = "translateX(46px)"
                        setheme("dark")
                }  
                else{
                    document.getElementById('toogle').style.transform = "translateX(0px)"
                    setheme("light")
                } 
                
            }}
               >
                  {theme === "light" ?<HiOutlineLightBulb className="text-2xl text-white relative left-1" />:<HiLightBulb className="text-2xl text-white relative left-1"/>} 
               </div>
               </div>
               
              </div>
              
           </label>
          </div>
       <AceEditor width="100%"
            mode={language !== "" ? language : ""}
            theme={theme === "light" ? "tomorrow" : "twilight"}
            fontSize="18px"
            editorProps={{$blockScrolling:false}}
        setOptions={{
            enableBasicAutocompletion:true,
            enableLiveAutocompletion:true,
            enableSnippets:true
        }}
        onChange={(e) => {console.log(e)}}
        />  
       </div>
       <div className="flex w-full justify-end mt-3">
       <button className="mx-3 hover:shadow-lg hover:bg-purple-700 hover:text-white font-condensed font-thin border-2 border-purple-700 text-black rounded-lg  pl-6 pr-6 text-xl transition-all duration-700 ">Compile</button>
       <button className="mx-3 hover:shadow-lg hover:bg-purple-700 hover:text-white font-condensed font-thin border-2 border-purple-700 text-black rounded-lg  pl-6 pr-6 text-xl transition-all duration-700 ">Submit</button>
       </div>
       <Output />
      </div>
    </>
}

export default Editor;