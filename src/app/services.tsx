export function Services() {
  return (
    <div
      id='services'
      className='flex h-screen w-full flex-col items-center justify-center bg-slate-400'
    >
      <h1>Services</h1>
      <div className='grid w-full grid-cols-2 gap-4 bg-slate-200'>
        <div className='h-60 bg-red-400'>col 1</div>
        <div className='flex flex-col justify-center gap-4'>
          <div className='h-20 bg-yellow-300'>col 2</div>
          <div className='h-20 bg-blue-300 '>col 3</div>
        </div>
      </div>
    </div>
  )
}
