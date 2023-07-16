import Header from './header'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import storeFrontVideo from '../assets/storeFrontTrim720.mp4'
import waterlooImg from "../assets/WATERLOO-FI-1568x1044.png"

function App() {

  const goToLink = (url: string) => {
    
    window.open(url)
  }

  return (
    <div>
      <Header></Header>

      {/*/Introductory Divs*/}

      <div className="flex min-h-[93vh] lg:min-h-[70vh] flex-col justify-start text-3xl md:flex-row xl:text-6xl lg:text-5xl p-6 font-bold gap-1">

        <div className="flex pt-24 md:pt-0 md:items-center md:justify-center flex-col min-w-[50%] gap-1">
          <div>
            Hey, I'm
            <AnimationOnScroll animateIn="animate-fade-down" animatePreScroll={false}>Ghufran Shahid.</AnimationOnScroll>
          </div>
        </div>
        <div className="min-w-[50%] flex md:items-center md:justify-center">
          <AnimationOnScroll animateIn="animate-fade-down" animatePreScroll={false} delay={600}>Welcome to my website.</AnimationOnScroll>
        </div>
      </div>

      <div className="min-h-[30vh] pt-12">
        <AnimationOnScroll animateIn="animate-fade-leftImprov" delay={50} offset={50} className="min-h-[10vh] bg-slate-50 text-white"></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate-fade-leftImprov" delay={150} offset={50} className="min-h-[10vh] bg-slate-100 text-white"></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate-fade-leftImprov" delay={250} offset={50} className="min-h-[10vh] bg-slate-200 text-white"></AnimationOnScroll>
      </div>

      <div className="flex flex-col justify-center items-center bg-slate-300">
        <div className="font-semibold md:text-3xl py-6">
          Humble Beginnings
        </div>  

        <div className="flex flex-col min-h-[40vh] lg:flex-row md:text-lg bg-gradient-to-b from-slate-300 via-slate-100 to-slate-300 gap-2">
          <div>
            <img className="object-fill min-h-full" src={waterlooImg}></img>
          </div>
          <div className="p-4 self-center border-l-2 border-l-slate-700 text-xl leading-8">
            Currently studying Mathematics at the University of Waterloo, I wish to pursue a career in software development. I find that the vast applications of programming is extremely interesting, and I hope to experience all of the various fields in software.
          </div>
        </div>
      </div>

      <div className="min-h-[30vh] pb-20">
        <AnimationOnScroll animateIn="animate-fade-leftImprov" delay={50} offset={50} className="min-h-[10vh] bg-slate-300 text-white"></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate-fade-leftImprov" delay={150} offset={50} className="min-h-[10vh] bg-slate-200 text-white"></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate-fade-leftImprov" delay={250} offset={50} className="min-h-[10vh] bg-slate-100 text-white"></AnimationOnScroll>
      </div>

      <div className="min-h-[20vh] pt-4 lg:min-h-[30vh] bg-gradient-to-b from-white to-slate-200 flex justify-center  text-xl lg:text-3xl font-bold">
          <div className="bruh">
            <div>
              Some applications I've created.
            </div>   
            <AnimationOnScroll animateIn='animate-pulse' animatePreScroll={false} offset={100}>
              <hr className="border border-black max-w-full"></hr>
            </AnimationOnScroll>         
              
          </div>
      </div>

        <div className="flex flex-col-reverse lg:flex-row">
          
            <div className="flex flex-col min-w-[30%]">
              <AnimationOnScroll animateIn="animate-fade-leftImprov" delay={200} className="flex items-center min-h-[15%] bg-slate-300 shadow-sm font-[500] text-lg md:text-xl lg:text-2xl">
                <div className="flex gap-6 p-4 min-w-max">
                  
                  <div>
                    Sample Storefront
                  </div>

                  <div className='flex gap-4'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-6 w-6 lg:h-10 lg:w-10" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react' className="h-6 w-6 lg:h-10 lg:w-10"></img>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='redux' className="h-6 w-6 lg:h-10 lg:w-10"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt='tailwindcss' className="h-6 w-6 lg:h-10 lg:w-10" />
                  </div>
                  
                </div>
              </AnimationOnScroll>
              
              <AnimationOnScroll animateIn="animate-fade-leftImprov" delay={400} offset={100} className="bg-slate-100 min-h-[85%]">
                <div className='flex flex-col p-4 justify-between min-h-[100%] gap-3'>
                  <div className="leading-10 text-lg">
                    Single Page Application with routing created using React, Redux, TailwindCSS and Radix/ShadcnUI. Made to practise routing pages together
                    and passing/managing state to and from different portions of the application. 
                    Though, that wasn't much of a hassle with the use of Redux. 
                  </div>

                  <div className='flex justify-between'>
                    <button  onClick={() => goToLink("https://github.com/StretchedCode/storeFront")} className="bg-transparent hover:bg-slate-800 hover:text-white p-2 font-semibold rounded border border-slate-700 hover:border-transparent active:bg-slate-950 active:text-white">Source Code</button>
                    <button  onClick={() => goToLink("https://stretchedcode.github.io/storeFront/")}className='bg-transparent hover:bg-slate-800 hover:text-white p-2 font-semibold rounded border border-slate-700 hover:border-transparent active:bg-slate-950 active:text-white'>Live Preview</button>
                  </div>
                </div>
              </AnimationOnScroll>
              
            </div>
            <div className="min-w-[60%] px-1 bg-slate-200">
              <AnimationOnScroll animateIn="animate-fade-leftImprov" delay={600}>
                <video src={storeFrontVideo} autoPlay loop muted aria-label='video display of storeFront'></video>
              </AnimationOnScroll>
            </div>
        </div>
    </div>
  )
}

export default App
