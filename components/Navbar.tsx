import Link from 'next/link';



const Navbar = () => {
    return (
        <div className="py-6 px-10 flex items-center justify-between bg-fBlue-1">
            {/* <div className="w-[10%] text-white text-left">financio</div> */}
            <Link className="w-[10%] transition transform hover:scale-105" href="/">
                <img src="/icons/financio_logo.svg" alt="Financio Logo" />
            </Link>
            
            <ul className="w-[50%] text-white flex flex-end justify-between">
                <Link href="/" className='transition transform hover:scale-110'>
                    <li>Why Financio?</li>
                </Link>
                <Link href="/finance-tool" className='transition transform hover:scale-110'>
                    <li>Finance Planner</li>
                </Link>
                <Link href="/knowledge-test" className='transition transform hover:scale-110'>
                    <li>Quiz Your Knowledge</li>
                </Link>
                <Link href="/financio-chat" className='bg-[#238636] rounded px-1 transition transform hover:scale-110'>
                    <li>Learn with <span className='italic'>financio</span></li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;