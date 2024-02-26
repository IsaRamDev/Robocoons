import data from '../data'; 

function Heroes() {
  return (
    <div>
      <section className='my-20 p-10 bg-gray-100' id="team">
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
          <p className="block antialiased font-sans text-xl leading-relaxed text-inherit font-semibold">El Equipo</p>
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-3">Los Héroes</h2>
        </div>
        <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
          {data.coaches.map(coach => (
            <div key={coach.id} className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
              <img src={coach.image} alt={coach.name} className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold text-blue-gray-900 mt-6 mb-1">{coach.name}</h5>
              <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">{coach.role}</p>
            </div>
          ))}
          {data.members.map(member => (
            <div key={member.id} className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
              <img src={member.image} alt={member.name} className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold text-blue-gray-900 mt-6 mb-1">{member.name}</h5>
              <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Heroes