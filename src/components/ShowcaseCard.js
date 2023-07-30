import Image from 'next/image'

export default function ShowcaseCard ({ Showcase }) {
  return (
    <div
      className='bg-gray-100 group rounded-lg border border-transparent px-7 py-6 transition-color hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
    >
      <h2 className='mb-1 text-2xl font-medium'>
          {Showcase.title}
      </h2>
      <p className='m-0 mb-10'>
        {Showcase.description}
      </p>
      <div className='w-full flex justify-center'>
      <Image
        className='max-h-[30rem] xl:max-h-[50rem] w-auto'
        src={Showcase.image}
        alt={Showcase.title}
      />        
      </div>
    </div>
  )
}
