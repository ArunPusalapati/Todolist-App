import { Link } from "react-router"
const Welcome=()=>{
    return (
        <div className="flex  items-center absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] ">
            <div className="m-auto">
                 <h1 className="text-5xl text-center mb-4">Welcome to Productive</h1>
                 <Link className="text-2xl border-0 px-2 py-1 bg-[#f6b7a6]  w-fit shadow-lg rounded-sm  hover:animate-bounce ml-30 " to="/homepage"> Todo</Link>
      
            </div>
             </div>
    );
}

export default Welcome;