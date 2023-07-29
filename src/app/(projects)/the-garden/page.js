import OtherProjects from '@/components/OtherProjects'

export const metadata = {
  title: '🌻 The Garden | Rachel Busch',
  description: 'Website designed by Rachel Busch!'
}

export default function Garden () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <div className='w-full flex-col items-start justify-between flex'>
        <div className='flex items-end h-60 xl:h-96 2xl:h-[37rem] w-full bg-gradient-to-tr from-slate-700 via-red-700 to-orange-900'>
          <div className='px-8 xl:px-52 pb-14 text-white'>
            <div className='font-shade text-6xl lg:text-9xl'>
          The Garden
            </div>
            <div className='font-poppins text-xl'>
            inclusice venue booking application
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row w-full px-8 lg:px-36 py-12'>
          <video autoPlay loop muted playsInline className='rounded-md h-full object-contain order-last lg:order-first object-center'>
            <source type='video/webm' src='/garden_1.webm' />
          </video>
          <div className='flex flex-col justify-center'>
            <div className='text-3xl font-poppins text-red-700 font-bold'>
            Just wait
            </div>
            <div className='text-4xl font-poppins text-neutral-700 font-light mb-8'>
            Full case study coming soon!
            </div>
            <div className='text-md font-poppins text-red-700 font-bold'>
            Problem.
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            A large majority of venue booking sites are exclusive in verbiage, access, and transparency.
            </div>
            <div className='text-md font-poppins text-red-700 font-bold'>
            Solution.
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            Created an inclusive, all-encompassing, and accessible way for anyone to tour, book, and feel welcome on their journey to finding the perfect venue.
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            Through research and the user-centered design process, I found that there was a
            large issue regarding inclusion within the venue industry. Riddled with heteronormative
            language and gender assumptions, not to mention accessibility issues, I felt there was a
            need for a more inclusive version of a booking site. One that enables a person to book
            completely online, with virtual tour options, upfront pricing, and free from exclusive
            language that respects all gender expressions and dynamics. Everyone deserves to have a
            magical day full of love, laughter, and belonging.
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            This was created in Adobe XD to be a responsive site, starting with the desktop version and migrating to the mobile version.
            </div>
          </div>
        </div>
      </div>
      <OtherProjects currentRoute='the-garden' />
    </main>
  )
}
