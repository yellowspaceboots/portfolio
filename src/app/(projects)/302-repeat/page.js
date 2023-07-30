import OtherProjects from '@/components/OtherProjects'
import ProjectBanner from '@/components/ProjectBanner'

export const metadata = {
  title: '🚑 CPR App | Rachel Busch',
  description: 'CPR App designed by Rachel Busch!'
}

export default function Repeat () {
  const BannerObj = {
    title: '30.2.Repeat',
    subtitle: 'community focused CPR app',
    gradient: 'bg-gradient-to-tr from-slate-700 via-blue-800 to-indigo-900'
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <ProjectBanner Banner={BannerObj} />
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row w-full px-8 lg:px-36 py-12'>
          <video autoPlay loop muted playsInline className='px-36 rounded-md h-full object-contain order-last lg:order-first object-center'>
            <source type='video/webm' src='/cpr_1.webm' />
          </video>
          <div className='flex flex-col justify-center'>
            <div className='text-3xl text-blue-800 font-bold'>
            Just wait
            </div>
            <div className='text-4xl mb-40'>
            Full case study coming soon!
            </div>
            <div className='body-text-section-title text-blue-800'>
            Problem.
            </div>
            <div className='mb-8'>
            Lack of convenient avenue for people to learn and become familiar with the steps of traditional CPR and hands-only CPR.
            </div>
            <div className='body-text-section-title text-blue-800'>
            Solution.
            </div>
            <div className='mb-8'>
            Created a website and app that teaches both traditional and hands-only CPR at one&apos;s own convenience. Also provides and emergency situation mode which provides simplified steps with a compression counter to assist in a crisis.
            </div>
          </div>
        </div>
      </div>
      <OtherProjects currentRoute='302-repeat' />
    </main>
  )
}
