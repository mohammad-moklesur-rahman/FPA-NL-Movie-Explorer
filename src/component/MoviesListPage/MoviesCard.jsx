
import { use, useState } from "react";
import DetailsModa from "../DetailsModa";

const MoviesCard = ({ moviesInfo }) => {
    const movies = use(moviesInfo);

    const [openModel, setOpenModel] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handelDetailsBtn = (movie) => {
        setSelectedMovie(movie);
        setOpenModel(true);
    };

    const handleCloseModal = () => {
        setOpenModel(false);
        setSelectedMovie(null);
    };

    // Filter movies by title
    const filteredMovies = movies.filter((movie) =>
        movie.name
            ?.toLowerCase()
            .includes(searchQuery.trim().toLowerCase())
    );

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
                            className="absolute top-3 right-4 text-2xl cursor-pointer"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        <DetailsModa movie={selectedMovie} />
                    </div>
                </div>
            )}

            {/* Movie Search Section */}
            <section className="mb-8 flex justify-center items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                    Explore Movies
                </h1>

                <p className="text-gray-400 mb-5">
                    Search your favorite movies by title.
                </p>

                <div className="relative max-w-2xl">
                    <input
                        type="search"
                        placeholder="Search movies by title..."
                        value={searchQuery}
                        onChange={(e) =>
                            setSearchQuery(e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-600 bg-gray-900 text-white px-5 py-4 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                        aria-label="Search movies by title"
                    />

                    <span className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-xl">
                        🔍
                    </span>
                </div>

                <p className="text-gray-400 mt-3">
                    {filteredMovies.length} movies found
                </p>
                </div>
            </section>

            {/* Movies Grid */}
            {filteredMovies.length > 0 ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredMovies.map((movie) => (
                        <div
                            key={movie.id}
                            className="bg-gray-950 text-white rounded-lg overflow-hidden"
                        >
                            <img
                                className="w-full h-90 object-cover"
                                src={movie.image?.original}
                                alt={movie.name || "Movie poster"}
                            />

                            <div className="p-4">
                                <h2 className="font-semibold text-lg">
                                    {movie.name}
                                </h2>

                                <div className="flex justify-between gap-2 py-2 text-sm">
                                    <p>
                                        Rating:{" "}
                                        {movie.rating?.average ?? "N/A"}
                                    </p>

                                    <p>
                                        Release:{" "}
                                        {movie.premiered ?? "N/A"}
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        handelDetailsBtn(movie)
                                    }
                                    className="bg-blue-600 px-4 py-2 w-full rounded-2xl text-white font-semibold hover:bg-gray-100 hover:text-gray-950 cursor-pointer transition-all"
                                >
                                    See Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        No Movies Found
                    </h2>

                    <p className="text-gray-400 mb-4">
                        Try searching with a different movie title.
                    </p>

                    <button
                        onClick={() => setSearchQuery("")}
                        className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Clear Search
                    </button>
                </div>
            )}
        </>
    );
};

export default MoviesCard;
