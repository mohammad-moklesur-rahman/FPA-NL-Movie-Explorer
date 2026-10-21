import { Suspense } from "react";
import MoviesCard from "../component/MoviesListPage/MoviesCard";

const MoviesList = () => {
    const moviesData = async () => {
        const promice = await fetch("https://api.tvmaze.com/shows");
        return await promice.json();
        
    }
    const moviesInfo = moviesData();
    return (
        <div className="container mx-auto">
            <Suspense fallback={<h2>Loding...</h2>}>
                <MoviesCard moviesInfo={moviesInfo} />
            </Suspense>
        </div>
    );
};

export default MoviesList;