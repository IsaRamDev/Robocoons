import data from '../data.js';

function Histogram() {
  return (
    <div>
      <section className='mb-32 mt-20 mx-64'>
        <div className="mx-auto w-full px-4 text-center mb-10 lg:w-6/12">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-3">Línea del Tiempo</h2>
        </div>
        <div className="-my-8">
          {data.timelineData.map((event, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-medium text-2xl text-[#f0a500] mb-1 sm:mb-0">{event.title}</div>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgba(240,136,0,0.99)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 mb-3 sm:mb-0 text-white bg-[#123456] rounded-full">{event.date}</time>
                <div className="text-xl font-bold text-gray-700">{event.main}</div>
              </div>
              <div className="text-slate-500">{event.description}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Histogram