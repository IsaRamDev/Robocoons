import data from '../data';

function Footer() {
  return (
    <div>
      <section className="flex flex-col justify-between items-center px-4 py-5 sm:px-10">
        <div className='flex flex-col sm:flex-row justify-between items-center w-full space-y-4 sm:space-y-0'>
          <div className='flex justify-center sm:justify-start w-full sm:w-auto space-x-4'>
            <img src={data.logos.main} alt="logo" className="md:w-24 w-16 h-auto" />
            <img src={data.logos.firstLego} alt="logo" className="md:w-24 w-16 h-auto" style={{ filter: 'invert(1)' }} />
          </div>
          <div className='flex justify-center sm:justify-end w-full sm:w-auto space-x-4'>
            <a href={data.socialLinks.github} className="md:text-base text-xsm font-normal text-gray-600 dark:text-gray-300" target="_blank" rel="noreferrer">
              {/* Icono de GitHub aquí */}
            </a>
            <a href={data.socialLinks.linkedin} className="md:text-base text-xsm  font-normal text-gray-600 dark:text-gray-300" target="_blank" rel="noreferrer">
              {/* Icono de LinkedIn aquí */}
            </a>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between w-full sm:w-1/2 space-y-4 sm:space-y-0 pt-4 sm:pt-0 sm:pl-10'>
          <p>
            {data.year} © Robocoons. All Rights Reserved.
          </p>
          <p className='text-center sm:text-right'>
            © Created by <a href={data.socialLinks.portfolio} target="_blank" rel="noreferrer"> Isabel Ramirez</a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Footer
