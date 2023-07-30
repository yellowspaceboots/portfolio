import Image from 'next/image'

export default function ComicCard ({ Comic }) {
  return (
    <div className='flex flex-col items-center'>
      <Image
        className='w-full object-contain h-80'
        src={Comic.image}
        alt={Comic.title}
        priority
      />
      <div>
        <h2 className='px-10 mb-4 text-xl font-bungee flex'>
          {Comic.title}
        </h2>
        <p className='px-10 m-0 mb-6 max-w-[30ch] body-text-normal'>
          {Comic.description}
        </p>
      </div>
    </div>
  )
}
