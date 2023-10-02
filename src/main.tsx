import React from "react"
import ReactDOM from "react-dom/client"
import Index from "./index.tsx"
import "./styles/index.css"
import { Header } from "./components/navbar.tsx"
import Footer from "./components/footer.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="p-5">
			<Header />
			<Index />
			<Footer />
		</div>
	</React.StrictMode>,
)
