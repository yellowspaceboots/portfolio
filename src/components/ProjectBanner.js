import Image from 'next/image'

const ProjectBanner = ({ Banner }) => {
    const gridColCount = Banner.image ? 2 : 1
  return (
    <div className='w-full flex-col items-start justify-between flex'>
    <div className={`flex items-end h-52 xl:h-96 2xl:h-[30rem] w-full ${Banner.gradient}`}>
      <div className='section text-white'>
        <div className={`grid grid-cols-${gridColCount} gap-2 lg:gap-16 w-full`}>
          <div className='flex justify-end flex-col mb-16'>
            <div className='font-shade text-4xl lg:text-6xl xl:text-9xl'>
        {Banner.title}
            </div>
            <div className='text-xl'>
        {Banner.subtitle}
            </div>
          </div>
          {Banner.image && (
          <Image
            className='max-h-fit object-cover object-center'
            src={Banner.image}
            alt={Banner.imagealt}
            priority
          />            
          )}
        </div>
      </div>
    </div>
  </div>
  )
}
export default ProjectBanner
