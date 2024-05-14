import Results from "../components/Results.jsx";

const API_KEY = process.env.API_KEY;
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  //fetching data from api
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRate" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  //convert the response to json
  const data = await res.json();
  //if any error
  if (!res.ok) {
    throw new Error("Faild to fetch");
  }
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
