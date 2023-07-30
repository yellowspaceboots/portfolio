import Link from 'next/link'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav
      className='relative flex w-full flex-nowrap items-center justify-between bg-primary py-2 text-neutral-500 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4'
      data-te-navbar-ref
    >
      <div className='flex w-full flex-wrap items-center justify-between px-3'>
        <div className='mx-2'>
          <Link className='text-3xl dark:text-neutral-100 font-bungee text-black' href='/'>🌵RB</Link>
        </div>
        <MobileNav />
        <div
          className='!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto'
          id='navbarSupportedContent9'
          data-te-collapse-item
        >
          <ul className='list-style-none ml-auto flex flex-col pl-0 lg:mt-1 lg:flex-row' data-te-navbar-nav-ref>
            <li className='my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1 font-bungee' data-te-nav-item-ref>
              <Link
                className='text-xl text-black dark:text-white transition duration-200 hover:text-orange-700 hover:ease-in-out disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90'
                aria-current='page'
                href='/about'
                data-te-nav-link-ref
              >✨ ABOUT
              </Link>
            </li>
            <li className='mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1 font-bungee' data-te-nav-item-ref>
              <a
                className='text-xl text-black dark:text-white p-0 transition duration-200 hover:text-orange-700 hover:ease-in-out disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90'
                href='https://www.rachel-busch.com/_files/ugd/e8e20a_d719b630f2d74f6d98b047c554094af8.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >📝 RESUME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
