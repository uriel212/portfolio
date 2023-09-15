import { BsTerminal } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { AiOutlineMobile } from 'react-icons/ai'

const RoleSection = () => {
    return (
        <>
            <div className='mx-8 mt-16'>
                <h1 className='text-3xl font-bold font-poppins text-white text-center my-4'><strong className="text-indigo-500 font-extrabold font-roboto-mono">&gt; </strong>What I do</h1>

                <section className='border rounded-md bg-slate-700 bg-opacity-30 text-white px-5 py-5 mb-6'>
                    <div className='flex items-center mb-2 font-poppins'>
                        <BsTerminal className='w-10 h-10'/>
                        <h1 className='mx-2 underline underline-offset-0 decoration-indigo-500 font-bold text-xl'>Backend Developer</h1>
                    </div>
                    <div className='font-roboto-mono px-2'>
                        <p>
                            <strong className='text-sm'>Experience with:</strong>
                            <ul>
                                <li className='text-xs leading-relaxed list-disc list-inside'>NodeJS using Javascript or Typescript</li>
                                <li className='text-xs leading-relaxed list-disc list-inside'>Laravel as a backend (php)</li>
                                <li className='text-xs leading-relaxed list-disc list-inside'>Yii2 as a fullstack framework (php)</li>
                                <li className='text-xs leading-relaxed list-disc list-inside'>Python using Django or Flask</li>
                                <li className='text-xs leading-relaxed list-disc list-inside'>JavaEE using spring</li>
                            </ul>
                        </p>
                    </div>
                </section>

                <section className='border rounded-md bg-slate-700 bg-opacity-30 text-white px-5 py-5 mb-6'>
                    <div className='flex items-center mb-2 font-poppins'>
                        <FaReact className='w-10 h-10'/>
                        <h1 className='mx-2 underline underline-offset-0 decoration-indigo-500 font-bold text-xl'>Frontend Developer</h1>
                    </div>
                    <div className='font-roboto-mono px-2'>
                        <p>
                            <strong className='text-sm'>Experience with:</strong>
                            <ul>
                                <li className='text-xs leading-relaxed list-disc list-inside'>ReactJs, Angular, VueJs</li>
                                <li className='text-xs leading-relaxed list-disc list-inside'>Nextjs, Astro</li>
                                <li className='text-xs leading-relaxed list-disc list-inside'>Laravel with blade</li>
                            </ul>
                        </p>
                    </div>
                </section>

                <section className='border rounded-md bg-slate-700 bg-opacity-30 text-white px-5 py-5 mb-6'>
                    <div className='flex items-center mb-2 font-poppins'>
                        <AiOutlineMobile className='w-10 h-10'/>
                        <h1 className='mx-2 underline underline-offset-0 decoration-indigo-500 font-bold text-xl'>Mobile Developer</h1>
                    </div>
                    <div className='font-roboto-mono px-2'>
                        <p>
                            <strong className='text-sm'>Experience with:</strong>
                            <ul>
                                <li className='text-xs leading-relaxed list-disc list-inside'>Kotlin</li>
                                <li className='text-xs leading-relaxed list-disc list-inside'>Swift</li>
                                <li className='text-xs leading-relaxed list-disc list-inside'>Flutter</li>
                            </ul>
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RoleSection;
