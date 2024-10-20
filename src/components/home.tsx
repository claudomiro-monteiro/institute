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
          O Instituto São Gabriel é uma instituição SEM FINS LUCRATIVOS
          administrada pela Associação Madre Vilac, enquadrada como entidade
          privada, com princípios católicos.
        </article>
      </div>
      <div className='rounded-md bg-slate-50/10 p-6 backdrop-blur-md'>
        <span className='flex justify-center'>
          <Goal size={96} />
        </span>
        <h1 className='p-6 text-center font-bold underline'>Missão</h1>
        <article className='px-10 text-center'>
          Formar estudantes íntegros, empáticos e responsáveis, que tenham
          vontade de aprender e exercer seu papel enquanto cidadãos e cristãos
          comprometidos.
        </article>
      </div>
      <div className='rounded-md bg-slate-50/10 p-6 backdrop-blur-md'>
        <span className='flex justify-center'>
          <HandHeart size={96} />
        </span>
        <h1 className='p-6 text-center font-bold underline'>Valores</h1>
        <article className='px-10 text-center'>
          O Instituto São Gabriel se insere no campo educacional do país como um
          instrumento de transformação social, tendo com princípio fundamental o
          desenvolvimento humano integral de seus alunos.
        </article>
      </div>
    </div>
  )
}
