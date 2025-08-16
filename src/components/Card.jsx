import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Card = (props) => {
    const { store, dispatch } = useGlobalReducer();
    const favKey = `${props.type}-${props.llaveid}`;
    const isFavorite = store.favorites.some((fav) => `${fav.type}-${fav.id}` === favKey);
    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({
                type: "QUITAR_FAVORITO",
                payload: favKey,
            });
        } else {
            dispatch({
                type: "AGREGAR_FAVORITO",
                payload: {
                    id: props.llaveid,
                    name: props.name,
                    type: props.type,
                },
            });
        }
    };
    return (
        <div className="card mx-3 px-0" style={{ width: "18rem" }}>
            <img src={props.type === "people" ? `https://i.pravatar.cc/800?img=${props.llaveid}`
            : 
            `https://picsum.photos/id/1${props.llaveid}/800/800`} alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Info: {props.llaveid}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <Link to={`/pplplt/${props.type}/${props.llaveid}`} className="btn btn-primary">
                    Ir a Detalles
                </Link>
                <button className="btn btn-warning" onClick={toggleFavorite}>
                    {isFavorite ? "Quitar" : "Favorito"}
                </button>
            </div>
        </div>
    );
};

export default Card;