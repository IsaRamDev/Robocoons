import data from '../data'; 

function Investigation() {
  return (
    <div>
      <section className='p-10' id="investigation">
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-3">La Investigación</h2>
        </div>
        <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.investigations.map((investigation) => (
            <div key={investigation.id} className={`relative flex flex-col bg-clip-border rounded-xl bg-black text-gray-700`}>
              <img src={investigation.image} alt="Fondo" className="absolute h-full w-full object-cover rounded-xl z-0 opacity-50" />
              <div className="relative z-10 h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl">
                <h4 className="text-2xl font-semibold text-white text-center">{investigation.title}</h4>
                <p className="text-white mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal">{investigation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Investigation