import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../../public/pic.jpg'
import HobbyCard from '@/components/HobbyCard'
import learningPic from '../../../public/learning_0.jpg'
import gamingPic from '../../../public/gaming_0.png'
import dogsPic from '../../../public/dogs_0.jpg'
import musicPic from '../../../public/music_0.png'

export const metadata = {
  title: '✨ About | Rachel Busch',
  description: 'All about Rachel Busch!'
}

export default function About () {
  const hobbies = [
    {
      title: '📚 LEARNING.',
      description: 'I love figuring out new things and currently, when not focused on UX/UI design, spend time learning Blender and building mechanical keyboards.',
      image: learningPic,
      footer: <div className='text-lg font-poppins text-neutral-700 font-medium'>
      Currently reading:
        <span className='font-light'>
        &nbsp;Sprint
        </span>
      </div>
    },
    {
      title: '🎮 GAMING.',
      description: 'people all over the world through gaming, day one raiding, and hard end-game content.',
      image: gamingPic,
      footer: <div className='text-lg font-poppins text-neutral-700 font-medium'>
      Currently playing:
        <span className='font-light'>
        &nbsp;Destiny 2 (over 3.5k hours 😅), Cult of the Lamb, and MW2.
        </span>
      </div>
    },
    {
      title: '🐶 RESCUE DOGS.',
      description: 'I have three rescue dogs named: Da Vinci (17), Toby (15), and Oliver (10) who might all love pup cups more than they love me. ',
      image: dogsPic
    },
    {
      title: '🎧 MUSIC.',
      description: '9 times out of 10 I will have music going on in the background. I like vibing out to some good lo-fi/jazzy tunes or rocking out to some metal/rock.',
      image: musicPic,
      footer: <>
        <div className='text-lg font-poppins text-neutral-700 font-medium'>
      Vibe Out:&nbsp;
          <span className='font-bold underline'>
            <Link
              href='https://open.spotify.com/playlist/6jaQsNUgynm6vq9fBEeAIO?si=9c81272939df4e73'
              target='_blank'
              rel='noopener noreferrer'
            >
        Playlist &gt;&gt;
            </Link>
          </span>
        </div>
        <div className='text-lg font-poppins text-neutral-700 font-medium'>
      Rock Out:&nbsp;
          <span className='font-bold underline'>
            <Link
              href='https://open.spotify.com/playlist/4hwxA21OAFSw0bQzDsF11Q?si=dbb399738b6040d4'
              target='_blank'
              rel='noopener noreferrer'
            >
        Playlist &gt;&gt;
            </Link>
          </span>
        </div>
      </>
    }
  ]
  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 grid-flow-row w-full px-8 xl:px-36 py-12'>
        <Image
          className='rounded-md h-80 xl:h-full object-cover object-center'
          src={profilePic}
          alt='A picture of Rachel'
          priority
        />
        <div className='flex flex-col'>
          <h1 className='font-shade font-bold text-5xl mb-4 text-neutral-700'>
          🌵Howdy, I&apos;m
            <span className='text-orange-700'>&nbsp;RACHEL</span>
          </h1>
          <div className='text-lg font-poppins text-neutral-400 font-medium mb-14'>an aries ♈︎ from texas</div>
          <div className='text-lg font-poppins text-neutral-700 font-medium mb-8'>
          Curious, creative problem solver focused on the intersection of psychology and design.
          </div>
          <div className='body-text-normal mb-8'>
          I never thought that I would change my career, but after spending a long
          time working with teenagers and young adults as a mentor and counselor, I
          decided to take a leap of faith and pursue my passion for design.
          </div>
          <div className='body-text-normal mb-8'>
          My experience working with individuals who are often overlooked by society
          has given me a
            <span className='font-medium'>
            &nbsp;unique perspective and a deep understanding of psychology,
            which I bring to my approach to design&nbsp;
            </span>
          challenges. Over the past year or two,
          I have immersed myself in learning about UX/UI design and accessibility, and
          I have found a
            <span className='font-medium'>
            &nbsp;sense of purpose and excitement&nbsp;
            </span>
          in creating. I am excited to
          continue growing in this career and learning more every day.
          </div>
          <div className='text-lg font-poppins text-neutral-700 font-medium mb-8'>
          Core software usage: Figma, Adobe XD, Adobe CC (Illustrator & PS)
          </div>
        </div>
      </div>
      <div className='w-full bg-gradient-to-b from-gray-100 to-white pb-20'>
        <div className='px-8 xl:px-36 py-4'>
          <h2 className='font-bungee text-3xl mb-6'>OTHER HOBBIES AND INTERESTS.</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 grid-flow-row'>
            {hobbies.map(Hobby => <HobbyCard key={Hobby.title} Hobby={Hobby} />)}
          </div>
        </div>
      </div>
    </main>
  )
}
