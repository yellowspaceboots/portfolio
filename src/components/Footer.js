
const Footer = () => {
  return (
    <footer className='bg-gray-100 text-center dark:bg-neutral-600 lg:text-left'>
      <div className='flex items-center p-6 pb-16 justify-between'>
        <a href='https://www.houstonhumane.org/?form=GeneralDonation' className='hover:scale-110 transition ease-in-out duration-300' target='_blank' rel='noopener noreferrer'>
          <svg viewBox='37 25 126 150' xmlns='http://www.w3.org/2000/svg' className='fill-neutral-800 h-20 w-20'>
            <g>
              <path
                d='M160.4 25.1c-18.4.4-27.2 11.6-31.2 21.1-3.1 7-3.9 13.8-4.2 17.5H75c-1.1-13.8-5.5-24.1-13.2-30.8-10.1-8.8-22-7.9-22.5-7.8l-2.3.2v125.3c0 7.2 2.2 13.1 6.7 17.3 6.9 6.5 16.9 7.1 20.1 7.1h70.8c18.5 0 28.4-15 28.4-25.9V25l-2.6.1zm-3.1 123.5c0 8.6-8 20.6-23.1 20.6h-32.3v-6c7.7-4.9 12.8-12.1 12.5-18.2-.2-3.4-1.9-6.1-4.9-7.5-4.5-2-7.8-.7-9.9 1.2-2.2-2.1-5.4-3.3-9.7-1.2-3.1 1.3-4.9 4.2-5 7.7-.3 6.2 4.5 13.1 12.2 17.9v6H64.3c-.1 0-10.9.6-17.5-5.8-3.3-3.2-5.1-7.8-5.1-13.5V30c3.5.2 10.5 1.3 16.5 6.6 7.1 6 11 15.9 11.6 29.5l.1 2.4h59.6v-2.6c0-.1 0-9 3.9-17.9 4.6-10.8 12.6-16.8 23.8-17.8v118.4zm-57.6 10.6c-7.4-4.3-10.5-9.9-10.3-13.3.1-1.5.8-2.6 2.2-3.3.4-.2 1.4-.6 2.4-.6 1.2 0 2.5.6 3.3 2.6l2.3 5.4 2.3-5.4c.5-1.2 2.1-3.6 6.2-1.9 1.3.6 2 1.5 2.1 3 .4 3.6-3.3 9.3-10.5 13.5z'
              />
              <path
                d='M68.2 129.6a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0z'
              />
              <path
                d='M117.6 129.6c0 10.4 8.4 18.8 18.6 18.8 10.3 0 18.6-8.4 18.6-18.8s-8.4-18.8-18.6-18.8-18.6 8.4-18.6 18.8zm23.4 0c0 2.7-2.1 4.8-4.8 4.8-2.7 0-4.8-2.1-4.8-4.8 0-2.7 2.1-4.8 4.8-4.8 2.7 0 4.8 2.1 4.8 4.8z'
              />
            </g>
          </svg>
        </a>
        <div className='flex justify-center'>
          <ul className='mb-0 list-none text-right font-poppins font-bold'>
            <li><a href='#!' className='text-neutral-800 dark:text-neutral-200'>Resume</a></li>
            <li><a href='#!' className='text-neutral-800 dark:text-neutral-200'>LinkedIn</a></li>
            <li><a href='#!' className='text-neutral-800 dark:text-neutral-200'>Email Me!</a></li>
          </ul>
        </div>
      </div>

      <div className='bg-gray-100 p-4 text-base text-center text-neutral-500 dark:bg-neutral-700 dark:text-neutral-200'>
    2023 Portfolio by Rachel Busch - best viewed on desktop
      </div>
    </footer>
  )
}
export default Footer
