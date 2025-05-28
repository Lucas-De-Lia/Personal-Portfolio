import { About } from "./About"
import { HomePage } from "./HomePage"


export const MainApp = () => {
  return (
    <main className="bg-secondary w-full h-screen">
      <HomePage/>
      <About/>
    </main>
  )
}


