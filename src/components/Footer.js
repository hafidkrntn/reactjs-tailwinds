
const Footer = () => {
    return (
        <footer class=" bg-[#30475E] shadow md:flex md:items-center md:justify-between md:p-6">
            <span class="text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">hafidkrntn™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-200 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="" class="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="" class="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer