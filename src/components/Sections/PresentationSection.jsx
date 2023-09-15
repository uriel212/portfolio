import image from '../../assets/profile.jpg';

const PresentationSection = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center text-center'>
        <div>
            <img src={image} alt="astro" className='m-auto my-4 object-cover w-48 h-48 rounded-full' />
        </div>
        <div className='mt-4'>
          <h1 className='font-poppins text-white font-bold text-4xl uppercase tracking-tight'><strong className="text-indigo-500 font-extrabold font-roboto-mono">&gt; </strong>Uriel Ortiz</h1>
          <p className='px-10 font-roboto-mono text-white font-bold  text-xs mt-4'> Fullstack developer, Web & Mobile development</p>
        </div>
      </div>
    </>
  )
}

export default PresentationSection;