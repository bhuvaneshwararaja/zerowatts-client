const Output = () => {
    return<>
        <div className="h-80 border-r-2 border-b-2 shadow-lg flex mt-3">
                    <ul className="flex flex-col h-full justify-around border-r-4 w-24">
                        <li className="p-1 border-r-2 border-purple-700 bg-red-200 text-red-900">TestCase-1</li>
                        <li className="p-1 bg-green-200 text-green-900">TestCase-2</li>
                        <li className="p-1 bg-green-200 text-green-900">TestCase-3</li>
                    </ul>
                        <div className="flex h-full flex-col justify-around mx-3 w-full">
                            <div>
                            <h1>Input :</h1>
                            <input type="text" className="border-2 w-full text-xl p-1" value="1 2 3 4" readOnly></input>
                            </div>
                            <div>
                            <h1>Expected Output :</h1>
                            <input type="text" className="border-2 w-full text-xl p-1" value="1 2 3 4" readOnly></input>
                            </div>
                            <div>
                            <h1>Your Output :</h1>
                            <input type="text" className="border-2 w-full text-xl p-1 border-red-500 bg-red-200" value="1 2 3" readOnly></input>
                            </div>
                        </div>
        </div>
    </>
}

export default Output;