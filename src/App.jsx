import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Navbar,Tech,Works,StarsCanvas} from "./components"
import { lazy, Suspense } from "react"

const Hero=lazy(()=>import("../src/components/Hero"))
function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar/>
              <Suspense fallback={<h1>Loading...</h1>}> <Hero/></Suspense>
             
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <div className="relative z-0">
              <Contact/>
              <StarsCanvas/>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
