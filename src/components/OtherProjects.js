import Link from 'next/link'

const OtherProjects = ({ currentRoute }) => {
  return (
    <div className='flex flex-col items-center h-48 w-full bg-gradient-to-b from-gray-100 to-white'>
      <div className='font-bungee text-3xl p-4'>OTHER PROJECTS</div>
      <div className='flex flex-col items-center md:flex-row'>
        {currentRoute !== 'the-garden' && <Link className='px-6 transition duration-200 hover:text-orange-700 hover:ease-in-out' href='/the-garden'>🌻 The Garden</Link>}
        {currentRoute !== '302-repeat' && <Link className='px-6 transition duration-200 hover:text-orange-700 hover:ease-in-out' href='/302-repeat'>🚑 CPR App</Link>}
        {currentRoute !== 'ding' && <Link className='px-6 transition duration-200 hover:text-orange-700 hover:ease-in-out' href='/ding'>⌚ Ding Timekeeping</Link>}
        {currentRoute !== 'discord-widget' && <Link className='px-6 transition duration-200 hover:text-orange-700 hover:ease-in-out' href='/discord-widget'>🎮 Discord Widget</Link>}
      </div>
    </div>
  )
}
export default OtherProjects
