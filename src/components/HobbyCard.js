import Image from 'next/image'

export default function HobbyCard ({ Hobby }) {
  return (
    <div className='flex flex-col'>
      <Image
        className='w-full object-cover h-80 object-top mb-2 rounded-md'
        src={Hobby.image}
        alt={Hobby.title}
      />
      <h2 className='mb-4 text-xl font-bungee flex'>
        {Hobby.title}
      </h2>
      <p className='m-0 mb-6 max-w-[30ch] text-lg text-neutral-700 font-poppins'>
        {Hobby.description}
      </p>
      {Hobby.footer && Hobby.footer}
    </div>
  )
}
