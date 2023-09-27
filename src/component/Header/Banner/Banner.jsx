

const Banner = () => {
    return (
        <div className="relative">
            <section className="bg-[url('public/image/banner.jpg')] h-[70vh] bg-no-repeat bg-cover bg-center ">
            <div className="absolute inset-0 bg-white opacity-50"></div>

                <div className="absolute inset-36">
                <h1 className="flex justify-center text-3xl font-bold my-9">I Grow By Helping People In Need</h1>
            
                <form action="" className="flex justify-center my-auto">
                    <input type="search" name="" placeholder="Search here...." id="" className="rounded-l-md w-96 border py-2 px-3" />
                    <button className="rounded-r-md bg-red-500 py-2 px-3 text-white">Search</button>
                </form>
                </div>
            
            </section>
            
        </div>
    );
};

export default Banner;