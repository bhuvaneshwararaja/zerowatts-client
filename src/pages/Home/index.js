import NavBar from "../../components/NavBar/"
import Card from "../../components/card/"
import Tags from "../../components/Tags"
const Home = () => {
    const tags = ["Fundamentals","Algorithms","Logic","Numbers","Arrays","Mathematics","Puzzles","Data Structures","Loops","Lists","Functions","Conditional-statements","OOPS","Recursion","Binary","Dates/Time","Sorting"]
    const learningList = [{
        img:"/images/c++.png",
        name:"C++"
    },{
        img:"/images/python.png",
        name:"Python"
    },{
        img:"/images/dsalgo.png",
        name:"DS & Algo"
    },{
        img:"/images/html.png",
        name:"HTML"
    },{
        img:"/images/css.png",
        name:"CSS"
    }]
    const card = learningList.map((learn,index) => {
        return <Card key={index} learn={learn}/>
    })
    const tagList = tags.map((tags,index) => {
        return <Tags key={index} tags={tags} ></Tags>
    }) 
    return <>
    <NavBar />
        <div className="relative h-auto top-20 flex flex-col">
           <div>
                
            <h1 className="m-4 text-3xl text-center">Learn And Practice </h1>
            <div className="flex h-auto flex-wrap justify-center">
            {card}
            </div>
           </div>
           <div className="flex flex-col w-full items-center">
               <h1  className="m-4 text-3xl ">Catagory Tags</h1>
               <ul className="flex flex-wrap justify-center w-3/4">
                   {tagList}
               </ul>
           </div>
           <h1 className="text-center mt-4 text-3xl">ZeroWatts Coder Challenge</h1>
            <div className="w-3/4 h-auto m-auto mt-10  flex justify-center">
            <div className="w-72 h-72 shadow-2xl rounded-lg mr-5">
                <img className="h-36 w-full" src="/images/20days.jpg" alt="" />
                <div className="flex flex-col items-center">
                <h1 className="mt-3 text-xl">20 Days of code</h1>
                <h3 className="mt-3">Difficulty Level : <span>Medium</span></h3>
            <button className="mt-3 transition-all duration-700  pl-2 pr-2 rounded-lg text-xl bg-purple-400 hover:bg-purple-700 text-white hover:shadow-lg visible opacity-1">TakeChallenge</button>
                </div>
               

            </div>
            <div className="w-72 h-72 shadow-2xl mb-3 rounded-lg ml-5">
                <img className="h-36 w-full" src="/images/challenge.jpg" alt="" />
                <div className="flex flex-col items-center">
                <h1 className="mt-3 text-xl">ZeroWatts Daily Challenge</h1>
                <h3 className="mt-3">Difficulty Level : <span>Hard</span></h3>
            <button className="mt-3 transition-all duration-700  pl-2 pr-2 rounded-lg text-xl bg-purple-400 hover:bg-purple-700 text-white hover:shadow-lg visible opacity-1">TakeChallenge</button>

                </div>
            </div>
            <div className="w-72 h-72 shadow-2xl rounded-lg ml-5">
                <img className="h-36 w-full" src="/images/dschallenge.jpg" alt="" />
                <div className="flex flex-col items-center">
                <h1 className="mt-3 text-xl">DS&Algo challenge</h1>
                <h3 className="mt-3">Difficulty Level : <span>Medium</span></h3>
            <button className="mt-3 transition-all duration-700  pl-2 pr-2 rounded-lg text-xl bg-purple-400 hover:bg-purple-700 text-white hover:shadow-lg visible opacity-1">TakeChallenge</button>
                </div>
               

            </div>
            </div>
        </div>
    </>
}
export default Home;