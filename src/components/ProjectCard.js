import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard ({ Project }) {
  return (
    <Link
      href={Project.link}
      className='bg-gray-100 group rounded-lg border border-transparent px-7 py-6 transition-color hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
    >
      <h2 className='mb-1 text-4xl font-bungee flex'>
        <span className='grow'>
          {Project.title}
        </span>
        <span className='opacity-0 group-hover:opacity-100 transition duration-300 group-hover:ease-out'>
          <svg
            viewBox='50 20 100 160'
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 rotate-90'
          >
            <g>
              <path d='M147.616 67.849L100.002 20 52.385 67.849c-3.18 3.191-3.18 8.372 0 11.567a8.093 8.093 0 0 0 5.754 2.396 8.09 8.09 0 0 0 5.754-2.396l27.578-27.71V171.82c0 4.517 3.819 8.18 8.529 8.18s8.529-3.662 8.529-8.18V51.702l27.578 27.714a8.106 8.106 0 0 0 11.509 0c3.179-3.196 3.179-8.372 0-11.567z' />
            </g>
          </svg>
        </span>
      </h2>
      <p className='m-0 mb-20 max-w-[30ch] text-xl text-neutral-700 font-poppins'>
        {Project.description}
      </p>
      <Image
        src={Project.image}
        alt='Next.js Logo'
        width={500}
        height={300}
        priority
      />
    </Link>
  )
}
