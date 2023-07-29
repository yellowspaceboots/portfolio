'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'

export default function MobileNav () {
  const [mobileNav, setMobileNav] = useState(false)

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <>
      <motion.button
        initial='hide'
        animate={mobileNav ? 'show' : 'hide'}
        onClick={toggleMobileNav}
        className='flex flex-col space-y-1 relative z-10 visible lg:invisible'
      >
        <motion.span
          variants={{
            hide: {
              rotate: 0
            },
            show: {
              rotate: 45,
              y: 5
            }
          }}
          className='w-6 bg-black h-px block'
        />
        <motion.span
          variants={{
            hide: {
              opacity: 1
            },
            show: {
              opacity: 0
            }
          }}
          className='w-6 bg-black h-px block'
        />
        <motion.span
          variants={{
            hide: {
              rotate: 0
            },
            show: {
              rotate: -45,
              y: -5
            }
          }}
          className='w-6 bg-black h-px block'
        />
      </motion.button>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: 'spring',
              bounce: 0.1
            }}
          >
            <motion.div
              key='mobile-nav'
              variants={{
                hide: {
                  x: '100%',
                  transition: {
                    type: 'spring',
                    bounce: 0.1,
                    when: 'afterChildren',
                    staggerChildren: 0.25
                  }
                },
                show: {
                  x: '50%',
                  transition: {
                    type: 'spring',
                    bounce: 0.1,
                    when: 'beforeChildren',
                    staggerChildren: 0.25
                  }
                }
              }}
              initial='hide'
              animate='show'
              exit='hide'
              className='z-5 fixed inset-0 bg-white p-6 flex flex-col space-y-10 lg:hidden'
            >
              <motion.ul
                variants={{
                  hide: {
                    y: '25%',
                    opacity: 0
                  },
                  show: {
                    y: '0%',
                    opacity: 1
                  }
                }}
                className='list-none space-y-6'
              >
                <li
                  className='my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1 font-bungee'
                  data-te-nav-item-ref
                >
                  <Link
                    className='text-xl text-black dark:text-white transition duration-200 hover:text-orange-700 hover:ease-in-out disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90'
                    aria-current='page'
                    href='/about'
                    data-te-nav-link-ref
                  >✨ ABOUT
                  </Link>
                </li>
                <li
                  className='mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1 font-bungee'
                  data-te-nav-item-ref
                >
                  <a
                    className='text-xl text-black dark:text-white p-0 transition duration-200 hover:text-orange-700 hover:ease-in-out disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90'
                    href='https://www.rachel-busch.com/_files/ugd/e8e20a_d719b630f2d74f6d98b047c554094af8.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >📝 RESUME
                  </a>
                </li>
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </>
  )
}
