// export default function Contact(){
//     return(
//         <section>
//             <h2>
//                 Contact
//             </h2>
//             <div>
//                 <a href="https://github.com/login">
//                     github:
//                     <br></br>
//                     <br></br>
//                     <span>
//                         <a href="https://github.com/akhil25042003/akhil25042003">@akhil25042003</a>
//                     </span>
//                 </a>
//             </div>
//             <div>
//             </div>
//         </section>
//     );

// }
export default function Contact() { 
    return(
        <section id="Contact" className="my 40 align center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-blue-500 text-center">
                Contact Details of me
            </h2>
            <div className="flex gap-5 justify-center my-10">
                <a rel="noreferrer"target="_blank"
                className="text-center hover:underline"href="https://in.linkedin.com/"><h1><b>linkedin :</b></h1> <br/>
                <span className="font-bold"><a href="www.linkedin.com/in/akhilesh-kumar-kamitkar-1b537a239"><b>Akhilesh Kumar</b></a></span></a>
            </div>
        </section>

    );
}