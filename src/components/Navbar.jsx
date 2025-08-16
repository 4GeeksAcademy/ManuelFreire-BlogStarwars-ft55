import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	() => {
		dispatch({
			type: "QUITAR_FAVORITO",
			payload: favKey,
		});
	};
	return (
		<nav className="navbar navbar-light bg-light sticky-top">
			<div className="container">
				<Link to="/">
					<i className="fa-solid fa-jedi fa-2xl"></i>
				</Link>

				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle py-1"
						type="button"
						onClick={toggleDropdown}
					>
						Lista de Favoritos: <span className="btn btn-info px-2 py-1">{store.favorites.length}</span>
					</button>

					<ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
						{store.favorites.length === 0 ? (
							<li className="dropdown-item text-muted">No hay favoritos</li>
						) : (
						store.favorites.map((fav, index) => (
							<li key={index} className="dropdown-item d-flex justify-content-between">
								{fav.name}
								<button
									className="btn btn-sm btn-outline-warning ms-2"
									onClick={() => {
										const favKey = `${fav.type}-${fav.id}`;
										dispatch({ type: "QUITAR_FAVORITO", payload: favKey });
									}}
								>
									<i className="fas fa-trash-alt"></i>
								</button>
							</li>
						)))}
					</ul>
				</div>
			</div>
		</nav>
	);
};