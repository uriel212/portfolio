const Navbar = () => {
    return (
        <>
            <div className="hidden md:w-full md:p-6 ">
                <div>
                    logo
                </div>
                <div>
                    nav items
                </div>
            </div>

            <div className="flex w-full p-6 text-white">
                <div>
                    <a className="">
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </a>
                </div>
                <div className="mx-4">
                    <h1 className="uppercase font-roboto-mono font-extrabold">
                        mr_uriel <strong className="text-indigo-500 font-extrabold">&gt;_</strong>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Navbar;