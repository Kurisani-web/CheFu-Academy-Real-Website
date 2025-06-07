import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
          Got an app idea? 
          I build custom web and mobile applications for clients — from concept to launch. 
          Let’s create something amazing together!
        </h2>
        <p className='text-gray-500 my-2'>
          Start with an idea. End with an app users can’t live without.
        </p>
        <a
          href='https://kurisani-maluleke.vercel.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            gradientDuoTone='purpleToPink'
            className='rounded-tl-xl rounded-bl-none rounded-br-xl w-full'
          >
            Tell Me Your Idea
          </Button>
        </a>
      </div>
      <div className='flex-1 p-7'>
        <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221114110410/Top-10-JavaScript-Project-Ideas-For-Beginners-2023.png' />
      </div>
    </div>
  );
}
