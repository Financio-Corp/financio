import Link from 'next/link';

const Footer = () => {
    return (
        <div className="flex flex-col items-center bg-fBlue-1 py-8">
            <div className='flex justify-between px-16'>
                <div className='flex flex-col text-fEggWhite-1 text-sm py-4'>
                    <Link className="w-[10%]" href="/">
                        <img src="/icons/financio_logo.svg" alt="Financio Logo" />
                    </Link>
                    <span className='py-2'>© 2024 Financio, All rights reserved.</span>
                </div>
                
                <div className='text-white text-sm '>
                    <h4 className='font-bold text-center'>Shellhacks 2024 Project</h4>
                    <p className='font-black italic pt-3'>Team Financio</p>
                    
                    <p>Timothy Dance, Kristian Correa, Albert Hernandez, Alejandro Cosano</p>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;