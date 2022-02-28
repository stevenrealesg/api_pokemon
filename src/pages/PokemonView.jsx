import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import pokemonService from "../services/pokemon";

function PokemonView() {
    const [data, setData] = useState({})
    const params = useParams()

    const getData = async () => {
        try {
            const res = await pokemonService.getInfo(params.id)
            setData(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (!data || Object.keys(data).length === 0) return (<h5>cargando...</h5>)

    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card mt-3">
                <img src={data.sprites.other.dream_world.front_default} width={200} height={200} className="p-2 card-img-top" alt={data.name} />
                <hr />
                <div className="card-body text-center">
                    <h4 className="card-title">{data.name}</h4>
                </div>
            </div>
            <Link className="btn btn-custom mt-3" to='/'>
                Volver a lista
            </Link>
        </div>
    );
}

export default PokemonView;