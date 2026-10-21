
const DetailsModa = ({ movie }) => {
    if (!movie) return null;

    return (
        <div className="space-y-4">
            
            <img
                src={movie.image?.original}
                alt={movie.name}
                className="w-full max-h-80 object-contain"
            />

            <h2 className="text-2xl font-bold">
                {movie.name}
            </h2>

            <p>
                <strong>Rating:</strong>{" "}
                {movie.rating?.average ?? "N/A"}
            </p>

            <p>
                <strong>Premiered:</strong>{" "}
                {movie.premiered ?? "N/A"}
            </p>

            <div>
                <h3 className="font-bold mb-2">Summary</h3>
                <div
                    dangerouslySetInnerHTML={{
                        __html: movie.summary || "No summary available",
                    }}
                />
            </div>
        </div>
    );
};

export default DetailsModa;
