export default function Navbar(){
    return(
        <nav className="w-full px-5 sm:px-10 py-5 shadow-xl
        backdrop-blur-lg fixed top-0 z-10">
            <div className="Container flex flex-col lg:flex-row gap-5 justify-between w-full items-center max-w-5xl mx-width">
                <h3 className="text-3xl text-red-500 font-bold">My Portfolio</h3>
                <ul className="flex gap-3 aligin-center p-1 flex-wrap">
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                        py-2 transition rounded hover:text-white hover:bg-red-600" href="#About">About</a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                        py-2 transition rounded hover:text-white hover:bg-red-600"
                        href="#Skills">Skills</a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                        py-2 transition rounded hover:text-white hover:bg-red-600"
                         href="#Project">Project</a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                        py-2 transition rounded hover:text-white hover:bg-red-600"
                        href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}