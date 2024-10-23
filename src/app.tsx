import { About } from './app/about'
import { Contact } from './app/contact'
import { Header } from './components/header/header'
import { Home } from './app/home'
// import { Services } from './components/services'

export function App() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Header />
      <Home />
      {/* <Services /> */}
      <About />
      <Contact />
    </div>
  )
}

export default App
