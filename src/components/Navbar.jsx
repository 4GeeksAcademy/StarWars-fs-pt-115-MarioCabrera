import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const {store,dispatch} = useGlobalReducer()
	return (
		<nav className="navbar navbar-light bg-dark text-white" data-bs-theme="dark">
			<div className="container justify-content-between">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Kimetsu no Yaiba: Demon Slayers</span>
				</Link>
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul class="dropdown-menu">
						{store.favorites.map((element,index) => (
							<li></li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};