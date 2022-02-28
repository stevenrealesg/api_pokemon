import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pokemon({ name, url }) {
    const [id, setID] = useState()

    useEffect(() => {
        const urlData = url.split('/')
        setID(urlData[6])
    }, [])

    return (
        <Link to={`/pokemon/${id}`} className="text-decoration-none">
            <div className="col mb-3 ">
                <div className="card">
                    <div className="card-body text-center pokemon">
                        {name}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Pokemon;