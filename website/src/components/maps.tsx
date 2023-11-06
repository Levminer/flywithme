import GoogleMap from "google-maps-react-markers"
import { useRef, useState } from "react"
import Marker from "./marker"
import planeStore from "../stores/plane"
import { PlaneInfo, PlaneModel } from "../pages/flights"

const Maps = (data) => {
	const mapRef = useRef(null)
	const [mapReady, setMapReady] = useState(false)

	const onGoogleApiLoaded = ({ map }) => {
		mapRef.current = map
		setMapReady(true)
	}

	const onMarkerClick = async (_, { markerId, lat, lng }) => {
		console.log(markerId)
		// Járat infó lekérése
		const plane: PlaneModel = await (await fetch(`https://flywithme-api.deno.dev?flight_icao=${markerId}`)).json()

		console.log(plane)

		// nincs model info
		if (!plane.model) {
			plane.model = "Nincs információ"
		} else {
			// Járat és repülőtípus különválasztása
			plane.model = plane.model.split("-")[0]

			// Járat infó lekérése php-ból
			const res: PlaneInfo[] = await (await fetch("http://192.168.105.17/repulok.php")).json()

			console.log(res)

			// Modell keresése php-ból
			const info = res.find((planeI) => `${planeI.repulonev} ${planeI.repulotipus}` === plane.model)

			// Repülő információk módosítása
			if (info) {
				info.jelenlegiseb = plane.speed.toString()
				info.jelenlegimag = plane.alt.toString()
				planeStore.set(info)
			} else {
				planeStore.set({
					id: "Nincs információ",
					repulonev: "Nincs információ",
					repulotipus: "Nincs információ",
					maxseb: "Nincs információ",
					kapacitas: "Nincs információ",
					maxtav: "Nincs információ",
					gyartaskezdet: "Nincs információ",
					jelenlegiseb: plane.speed.toString(),
					jelenlegimag: plane.alt.toString(),
				})
			}
		}

		// Repülő frissítése a térképen
		mapRef.current.setCenter({ lat, lng })
	}

	return (
		<>
			<GoogleMap
				apiKey="AIzaSyDtA3LdYS-WUz2Oe8mQI5Ix3YA57XD9Zbs"
				defaultCenter={{ lat: 47.475229, lng: 19.047511 }}
				defaultZoom={6}
				mapMinHeight="90vh"
				onGoogleApiLoaded={onGoogleApiLoaded}
				externalApiParams={{ language: "hu" }}
				options={{
					mapTypeControl: false,
					streetViewControl: false,
					fullscreenControl: false,
				}}
			>
				{data.data.map(({ lat, lng, flight_icao, aircraft_icao }, index) => (
					<Marker key={index} lat={lat} lng={lng} planeId={aircraft_icao} markerId={flight_icao} onClick={onMarkerClick} />
				))}
			</GoogleMap>
		</>
	)
}

export default Maps
