import React from 'react'


const Intro = () => {
    return (
        <div name="home">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto pt-[20%] px-8 flex flex-col space-y-5 justify-center h-full items-center">
                <h3 className="text-6xl sm:text-5xl font-bold text-[#002B5B]">Welcome to H & R Story</h3>
                <h2 className="text-2xl sm:text-2xl font-bold text-[#000000]">Solusi Undangan Web Anda</h2>
                <button className="text-white px-6 py-3 mt-2 flex items-center hover:bg-blue-600 hover:border-blue-600">
                        Mulai 
                    </button>
            </div>
            

        </div>
    )
}

export default Intro