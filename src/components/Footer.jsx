import React from 'react';

const Footer =  () => {
    return (
        <footer className='h-full bg-vampire-black text-accent w-full'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 text-center">
            <div className="flex items-center justify-center ">
            <img src="./logo.svg" className='w-[35%]' alt="" />
            </div>
                <div className="uppercase leading-10">
                    <h2 className='font-bold'>yarepicturestudios@gmail.com</h2>
                    <h1 className='text-2xl'>GET IN TOUCH TODAY</h1>
                    <button className='rounded-full bg-transparent border-white border-2 px-6 m-5'>Email</button>
                </div>
            <div className="container lg:border-l-8">
                <hr className='lg:hidden'/>
                       <ul className='leading-0 py-4'>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>FEATURES</li>
                    </ul>
                <div className="lg:hidden px-6 ">
                <hr className='w-full my-5'/>
                    <h2> &copy; DESIGN BY ABDULLAHI FOR YPS</h2>
                </div>
            </div>
              </div>
            <div className="px-6 text-center py-6 hidden">
                <hr className='w-full my-5'/>
                    <h2> &copy; DESIGN BY ABDULLAHI FOR YPS</h2>
                </div>
        </footer>
    )
}

export default Footer