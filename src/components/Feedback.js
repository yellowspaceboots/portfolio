import Image from 'next/image'

export default function Feedback ({ feedback }) {
  return (
    <div className='flex flex-col border-l-4 mx-8 xl:mx-40 2xl:mx-60 px-10 my-20 py-2'>
      <div className='text-2xl font-medium mb-10'>
        {feedback.name}
      </div>
      <div className='text-base font-medium'>Bio</div>
      <div className='text-base mb-2'>{feedback.bio}</div>
      <div className='flex flex-col lg:flex-row'>
        <Image
          className='object-cover object-right w-72 h-48 rounded-full mt-10'
          src={feedback.image}
          alt={feedback.name}
        />
        <div className='p-8'>
          <div className='text-base font-medium'>Wants & Needs</div>
          <ul className='list-disc text-base pl-8'>
            {feedback.wants.map(feedBackItem => <li key={feedBackItem}>{feedBackItem}</li>)}
          </ul>
        </div>
        <div className='p-8'>
          <div className='text-base font-medium'>Frustrations</div>
          <ul className='list-disc text-base pl-8'>
            {feedback.frustrations.map(feedBackItem => <li key={feedBackItem}>{feedBackItem}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
