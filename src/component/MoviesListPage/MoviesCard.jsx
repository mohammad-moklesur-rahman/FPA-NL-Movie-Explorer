import { use } from "react";


const MoviesCard = ({moviesInfo}) => {
    const movies = use(moviesInfo);
    console.log(movies)
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                movies.map((movie) => (
                    <div className="bg-gray-950 text-white">
                        <img className="w-full h-90" src={movie.image.original} alt="" />
                        <div className="p-4">
                            <h2>Name: {movie.name}</h2>
                            <span className="flex justify-between py-2">
                                <p>Rating: {movie.rating.average}</p>
                                <p>Release: {movie.premiered}</p>
                            </span>
                            <button className="bg-blue-600 px-8 py-2 w-full rounded-2xl text-white font-semibold hover:bg-gray-100 hover:text-gray-950 cursor-pointer transition-all">See Details</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MoviesCard;