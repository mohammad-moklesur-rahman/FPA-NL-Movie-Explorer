
const Banner = () => {
    return (
        <>
        <div>
            <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute h-full w-full object-cover bg-black/80"
            >
                <source
                    src="/movie_bg.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
        <div className="absolute  h-full w-full bg-black/80"></div>
        <div className="relative container mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center text-white">
            <p className="text-4xl font-bold md:text-6xl">
                Explore and discover your favorite 
            </p>
            <p className="text-4xl pt-4 font-bold md:text-6xl">
                Movies from around the world.
            </p>
            <button className="bg-blue-600 px-8 py-4 mt-14 rounded-2xl text-white font-semibold hover:bg-gray-100 hover:text-gray-950 cursor-pointer transition-all">Explore Now</button>

        </div>
        </>
    );
};

export default Banner;