import data from '../data'; 

function Phases() {
  return (
    <div>
      <section id="phases" className='p-10 bg-gray-100'>
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
          <h2 className="block antialiased tracking-normal font-sans md:text-4xl text-2xl  font-semibold leading-[1.3] text-blue-gray-900 my-3">Las Fases</h2>
        </div>
        {data.robots.map((robot, index) => (
          <div key={robot.id} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none md:mb-10 lg:items-end`}>
            <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 md:h-[32rem] md:max-w-[28rem] shrink-0">
              <img alt={robot.name} className="h-full w-full object-cover" src={robot.image} />
            </div>
            <div className={`p-6 col-span-full lg:col-span-3 ${index % 2 === 0 ? '' : 'text-right'}`}>
              <h2 className="block antialiased tracking-normal font-sans md:text-4xl text-2xl leading-[1.3] text-blue-gray-900 md:mb-4 font-medium">{robot.name}</h2>
              <p className={`block antialiased font-sans md:text-base text-sm leading-relaxed ${index % 2 === 0 ? '' : 'float-end'} text-inherit md:mb-12 md:w-8/12 font-medium !text-gray-500`}>{robot.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Phases