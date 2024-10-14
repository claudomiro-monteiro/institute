import { Eye, Goal, HandHeart } from 'lucide-react'

export function Home() {
  return (
    <div className='grid w-full grid-cols-1 items-center justify-items-center gap-6 bg-center bg-cover bg-image-patter px-6 py-8 sm:grid-cols-2 md:grid-cols-3'>
      <div className='rounded-md bg-slate-50/10 p-6 backdrop-blur-md'>
        <span className='flex justify-center'>
          <Eye size={96} />
        </span>
        <h1 className='py-6 text-center font-bold underline'>Visão</h1>
        <article className='px-10 text-center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea officia
          soluta saepe? Doloribus, suscipit quo quis est iure aspernatur ipsam
          tempora dolorem officiis repellat rem accusamus facilis temporibus
          expedita natus!
        </article>
      </div>
      <div className='rounded-md bg-slate-50/10 p-6 backdrop-blur-md'>
        <span className='flex justify-center'>
          <Goal size={96} />
        </span>
        <h1 className='p-6 text-center font-bold underline'>Missão</h1>
        <article className='px-10 text-center'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          repudiandae recusandae odit atque ipsa maxime minus? Provident iure
          autem iste quae maxime qui ipsam doloribus, eum distinctio, quam quasi
          fuga?
        </article>
      </div>
      <div className='rounded-md bg-slate-50/10 p-6 backdrop-blur-md'>
        <span className='flex justify-center'>
          <HandHeart size={96} />
        </span>
        <h1 className='p-6 text-center font-bold underline'>Valores</h1>
        <article className='px-10 text-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut enim
          dolore necessitatibus delectus qui, vel eaque libero provident
          quibusdam commodi impedit quis porro accusantium nobis laboriosam.
          Iste modi repellendus illum.
        </article>
      </div>
    </div>
  )
}
