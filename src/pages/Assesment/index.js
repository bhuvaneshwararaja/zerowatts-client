import {useState,useEffect} from "react"
import {usePageVisibility} from "react-page-visibility"
import Editor from "../../components/editor"
import NavBar from "../../components/NavBar"
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-twilight"
import "ace-builds/src-noconflict/theme-tomorrow"
import "ace-builds/src-noconflict/ext-language_tools"


const Assessment = () => {
    const isvisible = usePageVisibility()
        console.log(isvisible)
    return <>
    <NavBar />
    <div className="flex">
        <Editor />
       <div className="flex flex-col w-3/6">
       <div className="h-96 shadow-lg w-full  mt-20 overflow-y-auto overflow-x-hidden flex flex-col p-2">
            <h1 className="text-2xl mt-2">Problem : I/O</h1>
            <p className="text-lg">Determine if the entered word is similar to word zoo.
                For example, words such as zzoooo and zzzoooooo are similar to word zoo but not the words such as zzooo and zzzooooo.

            </p>
            <h1 className="text-2xl mt-2">Input :</h1>
            <input value="zzzoooooo" className="w-full border-2 text-xl p-1"></input>
            <h1 className="text-2xl mt-2">Output :</h1>
            <input value="True" className="w-full border-2 text-xl p-1"></input>
            <h1 className="text-2xl mt-2">Explanation :</h1>
            <p className="text-lg">First line: A word that starts with several Zs and continues by several Os.<br/>
Note: The maximum length of this word must be .</p>
        </div>
        <div className="h-96 shadow-lg w-full mt-20 overflow-y-auto overflow-x-hidden flex flex-col p-2">
        <AceEditor width="100%"
            mode="c_cpp"
            theme="tomorrow"
            fontSize="20px"
            setOptions={{
                showLineNumbers: false,
                readOnly:true
            }}
            value={`${`
#inclue<iostream>
using namespace std;
int main(){
    cin>>n; //Getting user input
    cout<<n; //Printing Output
}
            `}`}
        />
        </div>
       </div>

    </div>
    <div>
       
    </div>
    </>
}

export default Assessment;