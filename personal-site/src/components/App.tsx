import { useState } from 'react'
import Header from './header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  return (
    <div className="p-2">
      <Header></Header>
      <div className="flex min-h-[93vh] flex-col lg:flex-row">
        <div className="flex self-center flex-col min-w-[50%]">
          Hello, I'm
          <div>Ghufran Shahid</div>
        </div>
        <div className='flex self-center min-w-[50%]'>
          And welcome to my website.
        </div>
      </div>
    </div>
  )
}

export default App
