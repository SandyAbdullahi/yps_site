import React from 'react';

const Footer =  () => {
    return (
        <footer className='h-full bg-vampire-black text-accent w-full'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 text-center">
                <div className="uppercase leading-10">
                    <h2 className='font-bold'>yarepicturestudios@gmail.com</h2>
                    <h1 className='text-2xl'>GET IN TOUCH TODAY</h1>
                    <button className='rounded-full bg-transparent border-white border-2 px-6 m-5'>Email</button>
                </div>
                <hr />
            <div className="container">
                       <ul className='leading-0'>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>FEATURES</li>
                    </ul>
                    <h2> &copy; DESIGN BY ABDULLAHI FOR YPS</h2>
            </div>
              </div>
        </footer>
    )
}

export default Footer