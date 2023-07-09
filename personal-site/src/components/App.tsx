import { useState } from 'react'
import Header from './header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  return (
    <div className="p-2">
      <Header></Header>
      <div className="flex min-h-[93vh] flex-col justify-start text-3xl md:flex-row xl:text-6xl lg:text-5xl p-6 font-bold gap-1">

        {/*/Introductory Divs*/}

        <div className="flex md:items-center md:justify-center flex-col min-w-[50%] gap-1">
          <div>
            Hey, I'm
            <div className="animate-fade-up animate-delay-500 animate-duration-1000 animate-once">Ghufran Shahid.</div>
          </div>
        </div>
        <div className='flex md:items-center min-w-[50%] animate-fade-down animate-delay-500 animate-duration-1000 md:justify-center'>
          Welcome to my website.
        </div>

      </div>
    </div>
  )
}

export default App
