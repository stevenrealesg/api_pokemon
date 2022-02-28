import { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";
import pokemonService from "../services/pokemon";

function PokemonList() {
    const [pokemons, setPokemons] = useState([])

    const getData = async () => {
        try {
            const res = await pokemonService.getList()
            setPokemons(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="mt-3 w-100">
            <h4>
                Selecciona el pokemon que quieres ver:
                <hr />
            </h4>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5">
                {pokemons.map((pokemon, i) => <Pokemon key={i} {...pokemon} />)}
            </div>
        </div>
    );
}

export default PokemonList;