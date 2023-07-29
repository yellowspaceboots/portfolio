import Image from 'next/image'
import OtherProjects from '@/components/OtherProjects'
import SectionTitle from '@/components/SectionTitle'
import Feedback from '@/components/Feedback'
import Accessibility from '../../../../public/accessibility.jpg'
import TooManyTasks from '../../../../public/too_many_tasks.jpg'
import Communication from '../../../../public/communication.jpg'
import Create from '../../../../public/create.jpg'
import DesktopCompanion from '../../../../public/desktop_companion.jpg'
import GPS from '../../../../public/gps.jpg'
import Banner from '../../../../public/ding_banner.png'
import Overview from '../../../../public/ding_overview.png'
import Process from '../../../../public/ding_process.png'
import Amelie from '../../../../public/amelie.jpg'
import Sebastion from '../../../../public/sebastion.jpg'
import ComicCard from '@/components/ComicCard'

export const metadata = {
  title: '⌚ Ding Timekeeping | Rachel Busch',
  description: 'Timekeeping App designed by Rachel Busch!'
}

export default function Ding () {
  const processComic = [
    {
      title: '01',
      description: 'Programs and apps are not accessible to people with different visual abilities.',
      image: Accessibility
    },
    {
      title: '02',
      description: 'Most timekeeping app require users to try to remember to clock in and clock out adding an unnecessary burden to both employees and employers.',
      image: TooManyTasks
    },
    {
      title: '03',
      description: 'People felt they must micromanage various forms of communication avenues: time off requests, overtime, punches, etc. making it easy for things to get missed or fall through the cracks.',
      image: Communication
    }
  ]
  const reflectionComic = [
    {
      title: '01',
      description: 'Create and conduct a usability study with the “light” version of the app (the default being the “dark” version) to ensure all aspects are accessible for everyone.',
      image: Create
    },
    {
      title: '02',
      description: 'In a real world scenario the desktop companion app for employers would be designed next to help create an end to end experience that benefits all parties; which includes this design process again from start to finish.',
      image: DesktopCompanion
    },
    {
      title: '03',
      description: 'Test in a real world scenario, at an arcade, to see if the GPS features and reminders work as intended as that in an integral part of the app that was not able to be tested during this certificate program.',
      image: GPS
    }
  ]
  const metrics = [
    {
      title: 'Questionnaires Completed',
      value: '16'
    },
    {
      title: 'Companies Researched',
      value: '10'
    },
    {
      title: 'Sticky Notes Used',
      value: '47'
    },
    {
      title: 'Personas Created',
      value: '2'
    },
    {
      title: 'Users Tested',
      value: '16'
    },
    {
      title: 'User Task Completion',
      value: '93%'
    }
  ]
  const amelieFeedBack = {
    name: 'Amélie',
    bio: 'Amélie is a hard working, independent woman who wants to empower their employees to be the best they can be. They had an old boss who did that for them and they have taken those lessons to every job thereafter. Amélie prefers order, structure, and open communication. Their partner is an accountant so they are a perfect match and can talk about spreadsheets and numbers all day long. They really want to bring the benefits of having all the information in one place, like with her spreadsheets, to their current ways of clocking in and clocking out.',
    image: Amelie,
    wants: [
      'To give their employees the tools to focus on giving customers great service and assistance.',
      'To create an environment where people want to come and make memories.',
      'To have a streamlined process of communication.'
    ],
    frustrations: [
      '"I don\'t want to have to micromanage each employee."',
      '"Frustrated that there is no clear or easy way to track or \'tag\' hours."',
      '"Too many apps to keep track of."'
    ]
  }
  const sebastionFeedBack = {
    name: 'Sebastian',
    bio: 'Sebastien is working on his Professional Degree in Game Design. They’re working as a means to help pay for the program and it aligns with their love of gaming history. They are always looking for people to share this special interest with. Sometimes the apps, keycards, and other methods of signing-in to things is frustrating for Sebastien because they have a hard time seeing small text or differentiating between colors that are too similar. They want to focus on their goals rather than stress about small hurdles they may face on a day to day basis.',
    image: Sebastion,
    wants: [
      'To focus on finishing their professional degree.',
      'To support local indie game companies.',
      'To share their special interest in game history with people without additional stress of needing to remember mundane tasks.'
    ],
    frustrations: [
      '"It\'s difficult to remember to clock-in and clock-out."',
      '"Sometimes I have a hard time seeing in apps which forces me to rely on others."',
      '"There are too many different avenues of communication to my boss about work stuff."'
    ]
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <div className='w-full flex-col items-start justify-between flex'>
        <div className='flex items-end h-52 xl:h-96 2xl:h-[30rem] w-full bg-gradient-to-tr from-slate-400 via-indigo-600 to-slate-600'>
          <div className='px-8 xl:px-52 text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 w-full'>
              <div className='flex justify-end flex-col mb-16'>
                <div className='font-shade text-6xl lg:text-9xl'>
            Ding!
                </div>
                <div className='font-poppins text-xl'>
            timekeeping app
                </div>
              </div>
              <Image
                className='xl:h-full object-cover object-center'
                src={Banner}
                alt='ding banner image'
                priority
              />
            </div>

          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row w-full px-8 xl:px-52 py-12'>
          <div>
            <div className='text-md font-poppins text-indigo-500 font-bold'>
            Summary.
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
          Ding! is a timekeeping app that provides people with a streamlined tool,
          that mitigates the needs for multiple avenues of work-related information.
          Schedules, timecards, PTO requests, and more are all at the person&apos;s fingertips.
          We also added the ability to set location-based reminders for clocking in and
          clocking out to relieve the frustration of remembering the mundane in order to focus on the passion.
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='text-md font-poppins text-indigo-500 font-bold'>
            My role
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            UX Designer and Researcher
            </div>
            <div className='text-md font-poppins text-indigo-500 font-bold'>
            Concept
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            A timekeeping app
            </div>
          </div>
        </div>
      </div>
      <div className='w-full invisible md:visible'>
        <div className='flex items-center py-2 xl:py-10 justify-center w-full bg-gray-100'>
          {metrics.map(Metric =>
            <div key={Metric.title} className='flex flex-col items-center justify-between w-36 h-0 md:h-24 m-6'>
              <div className='text-md font-poppins text-indigo-500 text-center font-bold'>{Metric.title}</div>
              <div className='text-3xl font-poppins font-light justify-self-end'>{Metric.value}</div>
            </div>
          )}
        </div>
      </div>
      <SectionTitle title='Overview' />
      <div className='w-full'>
        <div className='px-8 xl:px-52 font-poppins text-neutral-700'>
          <div className='text-md text-indigo-500 font-bold'>
        Problem.
          </div>
          <div className='text-2xl font-medium mb-8'>
          Remembering all the mundane timekeeping tasks through various avenues at work can be frustrating and demoralizing.
          </div>
          <div className='text-lg font-light mb-8'>
          Through beginning stage interviews, we found that our potential users expressed
          frustration in the lack of accessibility awareness of current products on the market
          as well as how many different forms of communication that were needed to complete
          simple timekeeping tasks. They felt as though the current means of clocking in,
          requesting PTO, etc added excess stress and enabled things to fall through the cracks
          leading to even more frustration. This led to the question -
          </div>
          <div className='text-lg font-medium mb-8 border-l-4 border-indigo-500 mx-8 xl:mx-36 px-6 py-4'>
            <div className='text-lg font-medium mb-8'>
          How can we consolidate communication and timekeeping tasks while keeping accessibility at the forefront?
            </div>
            <div className='text-2xl font-medium underline'>
          Jump to solution &gt;&gt;
            </div>
          </div>
        </div>
        <Image
          className='w-full mb-8 object-contain'
          src={Overview}
          alt='ding overview image'
        />
      </div>
      <SectionTitle title='The Process' />
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-16 grid-flow-row w-full px-8 xl:px-52 py-12 font-poppins text-neutral-700'>
          <div className='col-span-2'>
            <div className='text-md text-indigo-500 font-bold'>
          Synthesize the chaos.
            </div>
            <div className='text-2xl font-medium mb-8'>
          When faced with a problem, my mind operates at an incredible speed, processing ideas at a rapid pace.
            </div>
            <div className='text-2xl font-medium mb-8'>
          To kickstart my problem-solving process, I begin by taking a moment
          to sit down and jot down every thought that comes to mind. This
          includes questions, ideas, sketches, and any other relevant information.
          Initially, it may appear as a chaotic mess, but once I have everything
          documented, I can organize them into distinct categories. This categorization
          allows me to approach the problem methodically, tackling each section one at a time.
            </div>
          </div>
          <Image
            className='w-full mb-8 object-cover'
            src={Process}
            alt='ding process image'
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row w-full px-8 xl:px-52 py-12'>
          <div>
            <div className='text-md font-poppins text-indigo-500 font-bold'>
            Discovery and Research.
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            Through completing competitive benchmarking via the discovery process we focused on answering the following:
            </div>
            <ul className='list-disc pl-8 mb-8 text-lg font-poppins text-neutral-700 font-light'>
              <li>Who are the key competitors?</li>
              <li>What are the type and quality of competitors' products?</li>
              <li>How do competitors position themselves on the market?</li>
              <li>How do competitors talk about themselves?</li>
              <li>What are their strengths?</li>
              <li>What are their weaknesses?</li>
              <li>Where are the gaps?</li>
              <li>
              Where are there opportunities for our app to improve upon current solutions
              and meet the needs/frustrations of our users better?
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <div className='text-md font-poppins text-indigo-500 font-bold'>
            Hypothesis.
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light mb-8'>
            A very simple 'clock-in' and 'clock-out' system is the commonality across the different
            apps currently on the market. By incorporating a simple timekeeping system and building on
            top of that DING! can be set apart as an all-encompassing solution.
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row w-full px-8 xl:px-52'>
          <div>
            <div className='text-md font-poppins text-indigo-500 font-bold'>
            Identifying Challenges.
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light'>
            Through interviews and focus groups, the most common challenges included:
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 w-full px-8 xl:px-52 py-12'>
          {processComic.map(Comic => <ComicCard key={Comic.title} Comic={Comic} />)}
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row w-full px-8 xl:px-52'>
          <div>
            <div className='text-md font-poppins text-indigo-500 font-bold'>
            Who are the users?
            </div>
            <div className='text-lg font-poppins text-neutral-700 font-light'>
            Synthesizing the data gathered through the beginning of the process, surveys and interviews,
            I identified two main groups: employees and managers, then using that information created two personas.
            </div>
          </div>
        </div>
        <Feedback feedback={amelieFeedBack} />
        <Feedback feedback={sebastionFeedBack} />
        <div className='px-8 xl:px-52 mb-10'>
          <div className='text-md font-poppins text-indigo-500 font-bold'>
          User journey.
          </div>
          <div className='text-lg font-poppins text-neutral-700 font-light'>
          Example: Sebastien's end goals directed how I thought about steps between actions.
          Prompting the main functionality of the app - clocking in and out, to be the main item
          on the home screen and within the "thumb-zone" of the user for easier use while the remainder
          of the functions are found via simple navigation with the minimal number of steps.
          </div>
        </div>
        <div className='px-8 xl:px-52 mb-10 h-72 border-2' />
        <div className='px-8 xl:px-52 mb-10'>
          <div className='text-md font-poppins text-indigo-500 font-bold'>
          First rounds of prototype feedback.
          </div>
          <div className='text-lg font-poppins text-neutral-700 font-light'>
          The first rounds of testing revealed two main pain points in the user journey:
          confirmation fatigue and information overload. Integrating that feedback into
          future iterations produced the following changes:
          </div>
        </div>
        <div className='px-8 xl:px-52 mb-10 h-72 border-2' />
        <div className='px-8 xl:px-52 mb-10'>
          <div className='text-md font-poppins text-indigo-500 font-bold'>
          Testing, testing, and more testing.
          </div>
          <div className='text-lg font-poppins text-neutral-700 font-light'>
          More rounds of prototype testing, after changes were implemented, were
          conducted with a wide variety of participants. The feedback gathered allowed us
          to make adjustments to the user flow which garnered a well-rounded, more intuitive product.
            <span className='font-medium'>
            &nbsp;93% of individuals were able to complete the four general tasks with <span className='font-bold underline'>minimal</span> mistakes.&nbsp;
            </span>
          Many individuals shared that an app like this would be beneficial in their
          place of work. Users also indicated that they appreciated the "Clock In" button being
          closer to the bottom of the screen so they could easily hit it with their thumb.
          </div>
        </div>
      </div>
      <SectionTitle title='The Solution' />
      <div className='px-8 xl:px-52'>
        <div className='text-md font-poppins text-indigo-500 font-bold'>
        Proposed solution.
        </div>
        <div className='text-lg font-poppins text-neutral-700 font-light'>
        DING! makes it easy to for you to keep track of your schedules, timesheets,
        and PTO requests in an accessible way while also providing reminders for
        clocking in and clocking out to relieve you of unnecessary worry and frustration.
        </div>
      </div>
      <SectionTitle title='Reflections' />
      <div className='px-8 xl:px-52'>
        <div className='text-md font-poppins text-indigo-500 font-bold'>
        Takeaways and next steps.
        </div>
        <div className='text-lg font-poppins text-neutral-700 font-light'>
        This was quite an eye-opening project. The more I learned, the more I grew
          <span className='font-medium'>
            &nbsp;concerned about the overall inaccessibility of the current apps on market&nbsp;
          </span>
        - not only for people who are visually impaired but also the large neurodivergent community. Creating a
          <span className='font-medium'>
            &nbsp;streamlined and all-inclusive app helps to alleviate some of those stressors&nbsp;
          </span>
        is a start but we still have a long way to go. Below are the
        next steps I would take to move towards a fully functional, ready for market app.
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 w-full px-8 xl:px-52 py-12'>
          {reflectionComic.map(Comic => <ComicCard key={Comic.title} Comic={Comic} />)}
        </div>
      </div>
      <OtherProjects currentRoute='ding' />
    </main>
  )
}
