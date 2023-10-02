const Footer = () => {
	return (
		<footer className="bg-gray-200 p-3 rounded-xl flex justify-between">
			<h2>All rights reserved Copyright © 2023</h2>
			<h2 className="relative">Készítette: Lőrik Levente, Deák Máté</h2>
			<h2>
				Adatok:{" "}
				<a target="_blank" href="https://airlabs.co">
					AirLabs
				</a>
				,
				<a target="_blank" href="https://wikipedia.org">
					Wikipedia
				</a>
			</h2>
		</footer>
	)
}

export default Footer
