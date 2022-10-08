import { useEffect, useState } from "react";
import PokeCard from "../../components/pokeCard";
import PokeDetailView from "../../components/pokeDetailView";
import HomeHandler from "./index.handler";

function Home() {
  const handler = HomeHandler();
  const [limit, setLimit] = useState(10);
  const [viewPokemon, setViewPokemon] = useState(false);
  const [viewName, setViewName] = useState("");

  useEffect(() => {
    handler.fetchPokemons(limit);
  }, [handler, limit]);

  return (
    <div className="flex flex-col">
      {viewPokemon ? (
        <div className="flex flex-col">
          <button onClick={() => setViewPokemon(false)} className="bg-transparent border-orange-600 text-orange-600 font-bold border-2 px-4 py-2 mb-8 self-start">Back</button>
          <PokeDetailView name={viewName} />
        </div>
      ) : (
        <>
          <div className="flex flex-row flex-wrap justify-center">
            {handler.data.map((item, index) => (
              <button onClick={() => {
                setViewPokemon(true);
                setViewName(item.name);
              }} className="h-40 w-40 m-1">
                <PokeCard name={item.name} key={index}/>
              </button>
            ))}
          </div>
          <button className="bg-transparent border-orange-600 text-orange-600 font-bold border-2 px-12 py-4 my-8 self-center" onClick={() => {
            setLimit(limit + 20);
            handler.fetchPokemons(limit);
            handler.setFetchLoading(true);
          }}
          disabled={handler.fetchLoading}>{handler.fetchLoading ? "Loading..." : "Load More"}</button>
        </>
      )}
    </div>
  );
}

export default Home;
