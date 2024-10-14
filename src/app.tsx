import { About } from './components/about'
import { Contact } from './components/contact'
import { Header } from './components/header'
import { Home } from './components/home'
import { Services } from './components/services'

export function App() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

export default App
