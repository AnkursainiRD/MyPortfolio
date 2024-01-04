import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Navbar,Works,StarsCanvas} from "./components"
import { lazy, Suspense } from "react"

const Hero=lazy(()=>import("../src/components/Hero"))
const Tech=lazy(()=>import("../src/components/Tech"))
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
          <Suspense fallback={<h4>waiting</h4>}> <Tech/></Suspense>
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
