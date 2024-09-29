import Link from 'next/link';



const Navbar = () => {
    return (
        <div className="py-6 px-10 flex items-center justify-between bg-fBlue-1">
            {/* <div className="w-[10%] text-white text-left">financio</div> */}
            <Link className="w-[10%]" href="/">
                <img src="/icons/financio_logo.svg" alt="Financio Logo" />
            </Link>
            
            <ul className="w-[50%] text-white flex flex-end justify-between">
                <li>Features</li>
                <li>Why Financio?</li>
                <Link href="/finance-tool">
                    <li>Finance Planner</li>
                </Link>
                <Link href="/financio-chat">
                    <li>Learn with Financio</li>
                </Link>
                <Link href="/knowledge-test">
                    <li>Quiz Your Knowledge</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;