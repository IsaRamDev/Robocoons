import data from '../data.js';

function Top() {
  return (
    <div>
      <section className="text-center relative overflow-hidden bg-black">
        <img src={data.teamImage} alt="main" className="block md:mt-[-50px] mt-[-20px] md:mb-[-250px] mb-[-20px] opacity-50" />
        <div className="absolute md:top-28 top-48 left-1/2 transform -translate-x-1/2">
          <img src={data.logos.vertical} alt="Logo" className="mx-auto" />
        </div>
      </section>

      <section className="bg-white px-4 pb-20 pt-4 -mt-8 md:-mt-16 lg:-mt-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.values.map((value) => (
              <div key={value.id} className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
                <div className="p-6 px-8 text-center">
                  <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] pointer-events-none mb-6 rounded-full" type="button">
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-white">
                        <path d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z">
                        </path>
                      </svg>
                    </span>
                  </button>
                  <h5 className="block antialiased tracking-normal font-sans md:text-xl text-normal font-semibold leading-snug text-blue-gray-900 mb-2">{value.title}</h5>
                  <p className="block antialiased font-sans md:text-base text-sm leading-relaxed font-normal text-blue-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Top