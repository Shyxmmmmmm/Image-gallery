function Footer() {
    return (
        <div className="flex flex-col gap-5 w-full h-[40%] bg-white p-3">
            <h1 className="pl-10 pt-10 font-extrabold text-3xl">About Us</h1>
            <p className="pl-10 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus optio, in nostrum enim nemo hic tempora quam, eos minus, veritatis consectetur aliquid tempore deleniti. Libero delectus ducimus ea vero ullam.</p>
            <div className="flex pl-10 mt-5 gap-5">
                <i class="fa-brands fa-facebook fa-xl" style={{ color: 'rgb(22, 22, 22)' }}></i>
                <i class="fa-brands fa-instagram fa-xl" style={{ color: 'rgb(22, 22, 22)' }}></i>
                <i class="fa-brands fa-twitter fa-xl" style={{ color: 'rgb(22, 22, 22)' }}></i>
                <i class="fa-brands fa-skype fa-xl" style={{ color: 'rgb(22, 22, 22)' }}></i>
            </div>
            <div className="flex justify-between items-center">
                <p className="pl-10 mt-5 text-md font-semibold">imageGallery@gmail.com</p>
                <p className="mr-10 text-md font-semibold">Contact:6352417890</p>
            </div>
        </div>
    )
}

export default Footer