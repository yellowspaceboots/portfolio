import Image from 'next/image'
import Link from 'next/link'
import pic from '../../../../public/discord_1.png'
import OtherProjects from '@/components/OtherProjects'

export const metadata = {
  title: '🎮 Discord Widget | Rachel Busch',
  description: 'Discord Widget designed by Rachel Busch!'
}

export default function Discord () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <div className='w-full flex-col items-start justify-between flex'>
        <div className='flex items-end h-60 xl:h-96 2xl:h-[37rem] w-full bg-gradient-to-tr from-slate-700 via-violet-700 to-indigo-500'>
          <div className='px-8 xl:px-52 pb-14 text-white'>
            <div className='font-shade text-6xl lg:text-9xl'>
          Discord
            </div>
            <div className='font-poppins text-xl'>
            mobile/tablet widget design challenge
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row w-full px-8 lg:px-36 py-12'>
          <Image
            className='rounded-md h-full object-contain order-last lg:order-first lg:object-cover object-center'
            src={pic}
            alt='screenshots of the project app'
            priority
          />
          <div className='flex flex-col justify-center'>
            <div className='text-md font-poppins text-indigo-600 font-bold'>
            Problem.
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            Discord does not currently have an iPhone Discord widget
            </div>
            <div className='text-md font-poppins text-indigo-600 font-bold'>
            Solution.
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            Create a Discord widget for the iPhone which follows current brand guidelines as outlined in&nbsp;
              <Link
                className='underline'
                href='https://discord.com/branding'
                target='_blank'
                rel='noopener noreferrer'
              >
              Discord&apos;s media package.
              </Link>
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            As an avid user and someone who loves to customize their home screen,
            I wanted to create a conceptual mobile widget that enabled the user to view their recent mentions -
            with the option to disregard @everyone and @here should they so choose.
            </div>
          </div>
        </div>
      </div>
      <OtherProjects currentRoute='discord-widget' />
    </main>
  )
}
