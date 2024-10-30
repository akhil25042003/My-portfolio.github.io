import imde from'./ime.jpg'

export default function About(){
  return (
  <section id = "about" className="px-10 w-full flex flex-col lg:flex-row py-20
  align-center bg-red-200 max-w-5xl mx-auto">
      <div className="flex-1" >
          <img  src ={imde} alt="About" className="w-full h-full bg-cover"/>
          
      </div>
      <div className="flex-1 flex flex-col justify-center
      items-center gap-5 px-6">
          <div>
               <h2 className="text-center text-red-500 text-5xl font-bold">About Me : </h2>
          </div>
          <p>
              As I said, I am a Java Full Stack Developer......
          </p>
          <p> I am a passionate self taught Developer.
              I am having a Hands on Experience with the Java and I Have the Good Communication Skills.
              I am a Consistent hardworking, Highly motivated person.
              I am looking to improve my position in the work force, expand my Knowledge and Skills.
          </p>
      </div>
  </section>
);

}
