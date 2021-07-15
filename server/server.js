import express from "express"
import fs from "fs"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import LandingPage from "../src/pages/landing/"
import App from "../src/App"
import {StaticRouter as Router} from "react-router-dom"
const app = express();

app.use("^/$",(req,res,next) => {
    fs.readFile(path.resolve("./build/index.html"),'utf-8',(err,data) => {
        if(err){
            console.log(err);
            return res.status(500).send("Something went wrong");
        }
        return res.send(data.replace('<div id="root"></div>',`<div id="root">${ReactDOMServer.renderToString(<Router location={req.url}><App /></Router>)}</div>`))
    })
})

app.use(express.static(path.resolve(__dirname,'..',"build")))

const PORT = 8080;
app.listen(PORT,() => {
    console.log("server listen to 8080");
})
