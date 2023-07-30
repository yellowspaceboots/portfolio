import Image from 'next/image'
import Link from 'next/link'
import pic from '../../../../public/discord_1.png'
import OtherProjects from '@/components/OtherProjects'
import ProjectBanner from '@/components/ProjectBanner'

export const metadata = {
  title: '🎮 Discord Widget | Rachel Busch',
  description: 'Discord Widget designed by Rachel Busch!'
}

export default function Discord () {
  const BannerObj = {
    title: 'Discord',
    subtitle: 'mobile/tablet widget design challenge',
    gradient: 'bg-gradient-to-tr from-slate-700 via-violet-700 to-indigo-500'
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <ProjectBanner Banner={BannerObj} />
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
            <div className='body-text-normal mb-8'>
            Discord does not currently have an iPhone Discord widget
            </div>
            <div className='text-md font-poppins text-indigo-600 font-bold'>
            Solution.
            </div>
            <div className='body-text-normal mb-8'>
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
            <div className='body-text-normal mb-8'>
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
