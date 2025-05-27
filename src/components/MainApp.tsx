import { About } from "./About"
import { HomaPage } from "./HomaPage"


export const MainApp = () => {
  return (
    <main className="bg-secondary w-full h-screen">
      <HomaPage/>
      <About/>
    </main>
  )
}


