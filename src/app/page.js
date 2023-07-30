import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'

export default function Home () {
  const projects = [
    {
      title: 'DING',
      description: 'all-in-one timekeeping app',
      link: '/ding',
      image: '/ding_0.png'
    },
    {
      title: 'DISCORD',
      description: 'iphone/tablet widget',
      link: '/discord-widget',
      image: '/discord_0.png'
    },
    {
      title: 'THE GARDEN',
      description: 'inclusive venue booking',
      link: '/the-garden',
      image: '/gardens_0.png'
    },
    {
      title: '30.2.REPEAT',
      description: 'community focused cpr app',
      link: '/302-repeat',
      image: '/cpr_0.png'
    }
  ]
  return (
    <main className='flex min-h-screen flex-col items-center justify-start sm:p-24 pb-24'>
      <div className='w-full max-w-5xl flex-col items-start justify-between flex py-40 sm:px-0 px-10'>
        <Link
          href='/about'
        >
          <h1 className='font-shade font-bold text-4xl sm:text-7xl hover:italic mb-4 sm:mb-10'>
          HOWDY, I&apos;M
            <span className='text-orange-700'>&nbsp;RACHEL</span>
          </h1>
        </Link>
        <div className='text-xl flex w-full'>
        I excel in utilizing my hyperfocus to combine user data, trends, experience, and accessibility best practices - resulting in the creation of purposeful and intentional designs.
        </div>
      </div>

      <div className=' w-full grid lg:grid-cols-2 text-left lg:w-9/12 gap-4'>
        {projects.map(Project => <ProjectCard key={Project.title} Project={Project} />)}
      </div>
    </main>
  )
}
