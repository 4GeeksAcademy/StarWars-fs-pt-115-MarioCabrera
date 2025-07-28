import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Logo from "../assets/img/Logo.jpg";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	const removeFavorite = (data) => {
		dispatch({ type: "remove_favorite", payload: data });
	};

	return (
		<nav className="navbar navbar-dark bg-black px-3">
			<div className="container-fluid d-flex justify-content-between align-items-center">

				<Link to="/" className="navbar-brand d-flex align-items-center">
					<img
						src={Logo}
						alt="Logo"
						style={{ width: "60px", height: "40px", objectFit: "cover" }}
						className="me-2 me-2 d-none d-md-block"
					/>
					<span className="fs-6">Kimetsu no Yaiba: Demon Slayers</span>
				</Link>

				<div className="dropdown ">
					<button
						className="btn btn-dark border-0"
						type="button"
						data-bs-toggle="dropdown"
						data-bs-auto-close="false"
						aria-expanded="false"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<ul className="dropdown-menu dropdown-menu-end bg-dark text-white mt-2" style={{ minWidth: "200px" }}>
						{store.favorites.length > 0 && store.favorites[0] !== "(Empty)" ? (
							store.favorites.map((element, index) => (
								<li key={index} className="d-flex justify-content-between align-items-center px-2 py-1">
									<p className="fs-6 mb-0 text-white">{element}</p>
									<button className="btn btn-sm btn-outline-light" onClick={() => removeFavorite(element)}>
										<i className="fa-solid fa-trash-can"></i>
									</button>
								</li>
							))
						) : (
							<li className="text-center px-2 py-1">
								<p className="fs-6 mb-0 text-white">(Empty)</p>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};