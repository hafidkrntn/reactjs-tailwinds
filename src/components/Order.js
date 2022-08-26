
const Order = () => {
    return (
        <div class="p-4 w-full text-center bg-[#30475E] rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-3xl font-bold text-gray-100 dark:text-white">Langkah Order</h5>
            <p class="mb-5 text-base text-gray-200 sm:text-lg dark:text-gray-400">Step by step to order H & R story services </p>
            <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <div class="text-left">
                        <div class="mb-1 text-xs">First</div>
                        <div class="-mt-1 font-sans text-sm font-semibold">Choose your paket and pay</div>
                    </div>
                </a>
                <a class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <div class="text-left">
                        <div class="mb-1 text-xs">Second</div>
                        <div class="-mt-1 font-sans text-sm font-semibold">Kirim your data</div>
                    </div>
                </a>
                <a class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <div class="text-left">
                        <div class="mb-1 text-xs">Third</div>
                        <div class="-mt-1 font-sans text-sm font-semibold">Proses pembuatan</div>
                    </div>
                </a>
                <a class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <div class="text-left">
                        <div class="mb-1 text-xs">Four</div>
                        <div class="-mt-1 font-sans text-sm font-semibold">Pengiriman Link</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Order