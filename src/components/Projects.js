export default function Project(){
    return(
        <section id="Projects" className="my-20 w-full flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-red-500 font-bold text-center">My Project</h2>
            <div className="p-10 bg-red-200 flex flex-col justify-center items-center 
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://github.com/akhil25042003/akhil25042003/blob/master/Project/src/com/dest/project/p2/ecommerce2.java" className="w-full h-full"><img src="https://tse1.mm.bing.net/th?id=OIP.aSIoKXBK8QHIQF6hrmzJiwHaFW&pid=Api&P=0&h=180" alt="project" className="w-full h-full bg-cover rounded"/></a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hower:underline" href="https://github.com/akhil25042003/akhil25042003/blob/master/Project/src/com/dest/project/p2/ecommerce2.java">ecomerce billing project</a>
                    </h2>
                    <p>
                        An ecomerce billing Project for storing and adding cart 
                    </p>
                </div>
            </div>
        </section>
    );
}