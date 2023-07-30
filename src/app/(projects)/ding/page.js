import Image from 'next/image'
import OtherProjects from '@/components/OtherProjects'
import SectionTitle from '@/components/SectionTitle'
import ProjectBanner from '@/components/ProjectBanner'
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
import ShowcaseCard from '@/components/ShowcaseCard'
import ConfirmationFatigue from '../../../../public/confirmation-fatigue.png'
import InformationOverload from '../../../../public/information-overload.png'
import Contrast from '../../../../public/contrast-color-accessibility.png'
import Schedules from '../../../../public/schedules.png'
import PTORequests from '../../../../public/pto-requests.png'
import LocationBased from '../../../../public/location-based-reminders.png'
import Timesheets from '../../../../public/timesheets.png'
import AllInOne from '../../../../public/all-in-one-solution.png'

export const metadata = {
  title: '⌚ Ding Timekeeping | Rachel Busch',
  description: 'Timekeeping App designed by Rachel Busch!'
}

export default function Ding () {
  const BannerObj = {
    title: 'Ding!',
    subtitle: 'timekeeping app',
    gradient: 'bg-gradient-to-tr from-slate-400 via-indigo-600 to-slate-600',
    image: Banner,
    imagealt: 'ding banner image'
  }
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
  const processCards = [
    {
      title: 'Confirmation fatigue.',
      description: 'Adjusted the process of clocking-in and out on the home screen to remove excess confirmation screens - now provides immediate, visual feedback allowing the user to know the clock in was successful at a glance.',
      image: ConfirmationFatigue
    },
    {
      title: 'Information overload.',
      description: 'Simplified the home screen and allowed more breathing room - creating a clearer hierarchy for easy scanning.',
      image: InformationOverload
    }
  ]
  const solutionCards = [
    {
      title: 'Contrast, color, and accessibility.',
      description: 'Tested against the WCAG and with colorblind users, rest assured - we kept accessibility at the forefront.',
      image: Contrast
    },
    {
      title: 'Schedules.',
      description: 'Conveniently check your schedule any time.',
      image: Schedules
    },
    {
      title: 'Manage PTO Requests.',
      description: 'Submit and check the status of PTO requests easily.',
      image: PTORequests
    },
    {
      title: 'Location-based reminders.',
      description: 'Get reminded when arriving and when leaving work so you\'ll never forget a punch!',
      image: LocationBased
    },
    {
      title: 'Timesheets.',
      description: 'Check, edit, and submit your timesheet with a few simple taps.',
      image: Timesheets
    },
    {
      title: 'All-in-one solution.',
      description: 'Combining all of the tasks in one easy-to-use place so you can focus on what really matters - your passion!',
      image: AllInOne
    }
  ]
  const taskCards = [
    {
      taskNo: 1,
      task: 'Remember to clock-in after arriving to work',
      actions: [
        'Remember, with no reminders, to clock in when entire a stimulating environment - work.',
        'Open timekeeping app when a computer is available.',
        'Remember credentials.',
        'Login.'
      ],
      feelings: [
        'Frustrated',
        'Annoyed',
        'Accomplished'
      ],
      opportunities: [
        'Notification/reminders at specific times or when arriving to set location.',
        'Remember login credentials in app.'
      ]
    },
    {
      taskNo: 2,
      task: 'Check schedule before leaving work',
      actions: [
        'Remember to take a picture of the schedule so he can double check it while not at work.',
        'Find schedule in the office.',
        'Take a picture.'
      ],
      feelings: [
        'Stressed',
        'Frustrated',
        'Annoyed'
      ],
      opportunities: [
        'Easily accessible schedule included in app.'
      ]
    },
    {
      taskNo: 3,
      task: 'Put in PTO request for a final exam in two weeks.',
      actions: [
        'Talk to manager about time off.',
        'Fill out time off request form.',
        'Follow up with manager over multiple days because there is no way to check outside of that avenue.'
      ],
      feelings: [
        'Anxious',
        'Overwhelmed',
        'Stressed',
        'Relieved'
      ],
      opportunities: [
        'Move all PTO requests, information about one\'s PTO, and request status within the app.'
      ]
    },
    {
      taskNo: 4,
      task: 'Remember to clock-out at the end of a shift',
      actions: [
        'Remember, with no reminders, to clock out when before leaving work.',
        'Open timekeeping app when a computer is available.',
        'Remember credentials.',
        'Login.'
      ],
      feelings: [
        'Frustrated',
        'Annoyed',
        'Accomplished'
      ],
      opportunities: [
        'Notification/reminders at specific times or when arriving to set location.'
      ]
    }
  ]
  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <ProjectBanner Banner={BannerObj} />
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row section py-12'>
          <div>
            <div className='body-text-section-title text-indigo-500'>
            Summary.
            </div>
            <div className='mb-8'>
          Ding! is a timekeeping app that provides people with a streamlined tool,
          that mitigates the needs for multiple avenues of work-related information.
          Schedules, timecards, PTO requests, and more are all at the person&apos;s fingertips.
          We also added the ability to set location-based reminders for clocking in and
          clocking out to relieve the frustration of remembering the mundane in order to focus on the passion.
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='body-text-section-title text-indigo-500'>
            My role
            </div>
            <div className='mb-8'>
            UX Designer and Researcher
            </div>
            <div className='body-text-section-title text-indigo-500'>
            Concept
            </div>
            <div className='mb-8'>
            A timekeeping app
            </div>
          </div>
        </div>
      </div>
      <div className='w-full invisible md:visible'>
        <div className='flex items-center py-2 xl:py-10 justify-center w-full bg-gray-100'>
          {metrics.map(Metric =>
            <div key={Metric.title} className='flex flex-col items-center justify-between w-36 h-0 md:h-24 m-6'>
              <div className='body-text-section-title text-indigo-500 text-center'>{Metric.title}</div>
              <div className='text-3xl justify-self-end'>{Metric.value}</div>
            </div>
          )}
        </div>
      </div>
      <SectionTitle title='Overview' />
      <div className='w-full'>
        <div className='section'>
          <div className='body-text-section-title text-indigo-500'>
        Problem.
          </div>
          <div className='text-2xl font-medium mb-8'>
          Remembering all the mundane timekeeping tasks through various avenues at work can be frustrating and demoralizing.
          </div>
          <div className='mb-8'>
          Through beginning stage interviews, we found that our potential users expressed
          frustration in the lack of accessibility awareness of current products on the market
          as well as how many different forms of communication that were needed to complete
          simple timekeeping tasks. They felt as though the current means of clocking in,
          requesting PTO, etc added excess stress and enabled things to fall through the cracks
          leading to even more frustration. This led to the question -
          </div>
          <div className='font-medium mb-8 border-l-4 border-indigo-500 mx-8 xl:mx-36 px-6 py-4'>
            <div className='font-medium mb-8'>
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
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-16 grid-flow-row w-full section py-12'>
          <div className='col-span-2'>
            <div className='body-text-section-title text-indigo-500'>
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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row section py-12'>
          <div>
            <div className='body-text-section-title text-indigo-500'>
            Discovery and Research.
            </div>
            <div className='mb-8'>
            Through completing competitive benchmarking via the discovery process we focused on answering the following:
            </div>
            <ul className='list-disc pl-8 mb-8'>
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
            <div className='body-text-section-title text-indigo-500'>
            Hypothesis.
            </div>
            <div className='mb-8'>
            A very simple 'clock-in' and 'clock-out' system is the commonality across the different
            apps currently on the market. By incorporating a simple timekeeping system and building on
            top of that DING! can be set apart as an all-encompassing solution.
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row section'>
          <div>
            <div className='body-text-section-title text-indigo-500'>
            Identifying Challenges.
            </div>
            <div>
            Through interviews and focus groups, the most common challenges included:
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 section py-12'>
          {processComic.map(Comic => <ComicCard key={Comic.title} Comic={Comic} />)}
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row section'>
          <div>
            <div className='body-text-section-title text-indigo-500'>
            Who are the users?
            </div>
            <div>
            Synthesizing the data gathered through the beginning of the process, surveys and interviews,
            I identified two main groups: employees and managers, then using that information created two personas.
            </div>
          </div>
        </div>
        <Feedback feedback={amelieFeedBack} />
        <Feedback feedback={sebastionFeedBack} />
        <div className='section mb-10'>
          <div className='body-text-section-title text-indigo-500'>
          User journey.
          </div>
          <div>
          Example: Sebastien's end goals directed how I thought about steps between actions.
          Prompting the main functionality of the app - clocking in and out, to be the main item
          on the home screen and within the "thumb-zone" of the user for easier use while the remainder
          of the functions are found via simple navigation with the minimal number of steps.
          </div>
        </div>
        <div className='flex flex-col border-l-4 mx-8 xl:mx-40 2xl:mx-60 px-10 my-20 py-2'>
        <div className='text-2xl font-medium'>
        Goal: Focus on spending more time sharing his love of gaming with customers and less on mundane tasks.
          </div>
          <div className='text-neutral-400 mb-10'>
            Condensed example of one's user journey while trying to complete a variety of tasks at work.
          </div>
          <div className='grid grid-cols-1 2xl:grid-cols-2 gap-4 mb-10 text-base'>
          {taskCards.map((Task) => (
            <div key={Task.taskNo} className='flex flex-col border-4 rounded-lg'>
            <div className='bg-indigo-500 p-6 rounded-t-lg'>
            <div className='body-text-section-title text-white underline'>Task {Task.taskNo}</div>
            <div className='text-white'>{Task.task}</div>
            </div>
            <div className='p-6'>
            <div className='body-text-section-title mb-2'>Actions</div>
            <ul className='list-decimal mb-8 pl-2'>
            {Task.actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
            </ul>
            <div className='body-text-section-title mb-2'>Feelings</div>
            <ul className='list-disc mb-8 pl-2'>
            {Task.feelings.map((feeling, index) => (
              <li key={index}>{feeling}</li>
            ))}
            </ul>
            <div className='body-text-section-title mb-2'>Improvement opportunities</div>
            <ul className='list-disc pl-2'>
            {Task.opportunities.map((opportunity, index) => (
              <li key={index}>{opportunity}</li>
            ))}
            </ul>
            </div>
            </div>
            ))}
          </div>
        </div>
        <div className='section mb-10'>
          <div className='body-text-section-title text-indigo-500'>
          First rounds of prototype feedback.
          </div>
          <div>
          The first rounds of testing revealed two main pain points in the user journey:
          confirmation fatigue and information overload. Integrating that feedback into
          future iterations produced the following changes:
          </div>
        </div>
        <div className='grid grid-cols-1 2xl:grid-cols-2 gap-2 w-full section-full mb-10'>
        {processCards.map(Showcase => <ShowcaseCard key={Showcase.title} Showcase={Showcase} />)}
        </div>
        <div className='section mb-20'>
          <div className='body-text-section-title text-indigo-500'>
          Testing, testing, and more testing.
          </div>
          <div>
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
        <div className='section mb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 grid-flow-row'>
          <video autoPlay loop muted playsInline className='px-36 rounded-md h-full object-contain order-last lg:order-first object-center'>
            <source type='video/webm' src='/cpr_1.webm' />
          </video>
          <div className='flex flex-col justify-center'>
            <div className='body-text-section-title text-indigo-500'>
            Some feedback from user testing.
            </div>
            <div className='mb-8'>
            "It&apos;s not just about having variations of the same color that help people tell the
            difference between them. It&apos;s about the actual components that create each color
            in the color palette that are important and enable everyone to enjoy and use technology.
            <span className='font-medium'>
            &nbsp;I believe you have done a good job capturing that and making this accessible."
            </span>
            </div>
            <div className='mb-8'>
            "As someone with A.D.H.D,
            <span className='font-medium'>
            &nbsp;I could use some of these features on everything honestly.&nbsp;
            </span>
            I could use some of these features on everything honestly. I always
            have a million things on my mind and even though I know I need to do something;
            sometimes I forget and it's really frustrating."
            </div>
          </div>
        </div>
        </div>
      </div>
      <SectionTitle title='The Solution' />
      <div className='section mb-10'>
        <div className='body-text-section-title text-indigo-500'>
        Proposed solution.
        </div>
        <div>
        DING! makes it easy to for you to keep track of your schedules, timesheets,
        and PTO requests in an accessible way while also providing reminders for
        clocking in and clocking out to relieve you of unnecessary worry and frustration.
        </div>
      </div>
      <div className='grid grid-cols-1 2xl:grid-cols-2 gap-2 section-full mb-10'>
        {solutionCards.map(Showcase => <ShowcaseCard key={Showcase.title} Showcase={Showcase} />)}
        </div>
      <SectionTitle title='Reflections' />
      <div className='section'>
        <div className='body-text-section-title text-indigo-500'>
        Takeaways and next steps.
        </div>
        <div>
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
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 section py-12'>
          {reflectionComic.map(Comic => <ComicCard key={Comic.title} Comic={Comic} />)}
        </div>
      </div>
      <OtherProjects currentRoute='ding' />
    </main>
  )
}
