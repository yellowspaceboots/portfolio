const SectionTitle = ({ title }) => {
  return (
    <div className='flex items-center h-24 md:h-36 xl:h-48 w-full bg-indigo-500 mb-10'>
      <div className='font-bold py-2 mx-8 xl:mx-52 text-2xl md:text-4xl w-2/5 font-bungee text-white border-b-4 border-white'>
        {title}
      </div>
    </div>
  )
}
export default SectionTitle
