

const Navbar = () => {
    return (
        <div className="justify-center items-center bg-[#30475E] text-gray-300 ">
            <ul className="font-bold font-2xl flex justify-center items-center space-x-20 p-8">
                    <li>
                        {/* <Link to="home" smooth={true} duration={500}> */}
                            Home
                        {/* </Link> */}
                    </li>
                    <li>
                        {/* <Link to="about" smooth={true} duration={500}> */}
                            Fitur
                        {/* </Link> */}
                    </li>
                    <li>
                        {/* <Link to="skills" smooth={true} duration={500}> */}
                            Paket Harga
                        {/* </Link> */}
                    </li>
                    <li>
                        {/* <Link to="contact" smooth={true} duration={500}> */}
                            Langkah Order
                        {/* </Link> */}
                    </li>
                    <li>
                        {/* <Link to="contact" smooth={true} duration={500}> */}
                            Tema
                        {/* </Link> */}
                    </li>
                    <li>
                        {/* <Link to="contact" smooth={true} duration={500}> */}
                            FAQ
                        {/* </Link> */}
                    </li>

                </ul>
        </div>
    )
}

export default Navbar