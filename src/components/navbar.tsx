import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<header className="text-black bg-gray-300 rounded-xl body-font">
			<div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
					<img className="h-20" src="/icon.png" alt="" />
					<span className="text-xl">FlyWithMe</span>
				</a>
				<nav className="md:ml-auto text-xl md:mr-auto flex flex-wrap items-center justify-center">
					<NavLink className={({ isActive }) => (isActive ? "mr-5 hover:text-gray-90 text-blue-600" : "mr-5 hover:text-gray-900")} to={"/"}>
						Kezdőlap
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? "mr-5 hover:text-gray-90 text-blue-600" : "mr-5 hover:text-gray-900")}
						to={"/flights"}
					>
						Járatok
					</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header
