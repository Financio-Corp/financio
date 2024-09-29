import Link from 'next/link';

const Page = () => {
    return (
        <div className="flex flex-col items-center">
            <section className="w-[100%] py-28 px-10 flex flex-col items-center bg-[url('/icons/landing.png')] bg-cover bg-top bg-fixed">
                <h1 className="text-5xl font-extrabold pb-4 text-white">Improve your Financial Literacy with <span className="italic font-medium">financio</span>.</h1>
                <p className="my-5 text-white font-bold">Take control of your finances with personalized lessons and interactive quizzes designed just for you.</p>
                
                <Link href="/knowledge-test">
                    <button className="bg-fGreen-1 text-white font-bold mt-6 py-2 px-4 rounded transition transform hover:scale-110">Test Your Knowledge</button>
                </Link>
                
            </section>
            <section className="flex flex-col items-center py-8 bg-fEggWhite-1">
                <h1 className="text-3xl text-[#5b5b5b] font-bold">Why <span className='italic'>financio</span>?</h1>
                <p className="text-center py-6 px-10 w-[60%]">
                    <span className="font-bold text-xl leading-8">Millions of people struggle with managing their finances. </span>
                    <p className="text-lg text-[#919191] font-light leading-8">At Financio, we’re committed to simplifying financial education and making it accessible to all,
                    especially for underrepresented communities. Whether you’re new to budgeting or looking to understand investing, we’ve got the tools and lessons to help you succeed.
                    </p>
                </p>
            </section>
        </div>
    );
}

export default Page;
