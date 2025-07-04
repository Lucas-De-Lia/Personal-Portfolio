import { About } from "../about/About"
import { HomePage } from "../home/HomePage"
import { Skills } from "../skills/Skills"

export const MainApp = () => {
  return (
    <main className="bg-secondary w-full h-screen">
      <HomePage/>
      <About/>
      <Skills/>
    </main>
  )
}


