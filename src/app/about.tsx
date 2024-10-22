import { Helmet } from 'react-helmet-async'

export function About() {
  return (
    <div
      id='about'
      className='flex w-full scroll-mt-20 flex-col items-center justify-center space-y-8 p-10'
    >
      <Helmet title='Sobre nós' />
      <h1 className='w-full text-center text-3xl'>Como surgiu</h1>

      <article className='grid grid-cols-1 gap-8 lg:grid-cols-2 '>
        {/* <div className=''> */}
        <div className='flex items-center justify-center rounded-md border border-blue-200 bg-blue-50 bg-center bg-cover p-4 shadow-inne'>
          <p className='p-4'>
            Tal interesse os conduz a um aprofundamento na educação de crianças
            - daqueles que compunham as mesmas famílias que inauguram o
            Instituto e também das familíasque não compunham o grupo, mas que
            tinham apreço pela educação com princípios católicos.
          </p>
          {/* <img src='/children.jpg' alt='children' className='rounded-md' /> */}
        </div>
        <div className='flex flex-col justify-center gap-4'>
          <p className='rounded-md border border-blue-300 bg-blue-50 bg-center bg-cover px-8 py-12 shadow-inner'>
            A idéia do Instituto nasceu em meados de 2022, a partir da reunião
            de famílias católicas interessadas no desenvolvimento da vida
            intelectaul de seus membros.
          </p>
          <p className='rounded-md border border-blue-300 bg-blue-50 bg-center bg-cover px-8 py-12 shadow-inner'>
            A partir de então, a Associação trabalha no desenvolvimento da
            estrutura administrativa e pedagógica do colégio, na formação dos
            professorese criação da base financeira para o bom andamento do
            projeto.
          </p>
        </div>
        {/* </div> */}
      </article>
    </div>
  )
}
