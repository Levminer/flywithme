import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createRoot } from "react-dom/client"
import Header from "./components/navbar.tsx"
import Footer from "./components/footer.tsx"
import Index from "./pages/index.tsx"
import Flights from "./pages/flights.tsx"
import "./styles/index.css"

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<div className="p-5">
				<Header />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/flights" element={<Flights />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	</React.StrictMode>,
)
