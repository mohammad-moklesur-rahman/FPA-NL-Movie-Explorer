
import { use, useState } from "react";
import DetailsModa from "../DetailsModa";

const MoviesCard = ({ moviesInfo }) => {
    const movies = use(moviesInfo);

    const [openModel, setOpenModel] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handelDetailsBtn = (movie) => {
        setSelectedMovie(movie);
        setOpenModel(true);
    };

    const handleCloseModal = () => {
        setOpenModel(false);
        setSelectedMovie(null);
    };

    return (
        <>
            {/* Movie Details Modal */}
            {openModel && selectedMovie && (
                <div
                    className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 p-4"
                    onClick={handleCloseModal}
                >
                    <div
                        className="relative bg-gray-700 text-white w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-3 right-4 text-2xl"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        <DetailsModa movie={selectedMovie} />
                    </div>
                </div>
            )}

            {/* Movies Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-gray-950 text-white rounded-lg overflow-hidden"
                    >
                        <img
                            className="w-full h-90 object-cover"
                            src={movie.image?.original}
                            alt={movie.name}
                        />

                        <div className="p-4">
                            <h2>Name: {movie.name}</h2>

                            <div className="flex justify-between gap-2 py-2">
                                <p>
                                    Rating: {movie.rating?.average ?? "N/A"}
                                </p>
                                <p>
                                    Release: {movie.premiered ?? "N/A"}
                                </p>
                            </div>

                            <button
                                onClick={() => handelDetailsBtn(movie)}
                                className="bg-blue-600 px-4 py-2 w-full rounded-2xl text-white font-semibold hover:bg-gray-100 hover:text-gray-950 cursor-pointer transition-all"
                            >
                                See Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MoviesCard;
