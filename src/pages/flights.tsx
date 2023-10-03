import { useEffect, useState } from "react"
import Maps from "../components/maps"
import { useStore } from "@nanostores/react"
import { plane } from "../stores/plane"

export interface Plane {
	hex: string
	reg_number: string
	flag: string
	lat: number
	lng: number
	alt: number
	dir: number
	speed: number
	v_speed: number
	squawk: string
	flight_number: string
	flight_icao: string
	flight_iata: string
	dep_icao: string
	dep_iata: string
	arr_icao: string
	arr_iata: string
	airline_icao: string
	airline_iata: string
	aircraft_icao: string
	updated: number
	status: string
}

export interface PlaneModel {
	aircraft_icao: string
	age: number
	built: number
	engine: string
	engine_count: string
	model: string
	manufacturer: string
	msn: string
	type: string
	reg_number: string
	airline_iata: string
	airline_icao: string
	flight_iata: string
	flight_icao: string
	flight_number: string
	dep_iata: string
	dep_icao: string
	dep_terminal: string
	dep_time: string
	dep_estimated: string
	dep_actual: string
	dep_time_utc: string
	dep_estimated_utc: string
	dep_actual_utc: string
	dep_time_ts: number
	dep_estimated_ts: number
	dep_actual_ts: number
	arr_iata: string
	arr_icao: string
	arr_time: string
	arr_estimated: string
	arr_time_utc: string
	arr_estimated_utc: string
	arr_time_ts: number
	arr_estimated_ts: number
	status: string
	duration: number
	delayed: number
	dep_delayed: number
	arr_delayed: number
	updated: number
	hex: string
	flag: string
	lat: number
	lng: number
	alt: number
	dir: number
	speed: number
	squawk: string
	dep_name: string
	dep_city: string
	dep_country: string
	arr_name: string
	arr_city: string
	arr_country: string
	airline_name: string
	percent: number
	utc: string
	eta: number
}

export interface PlaneInfo {
	id: string
	repulonev: string
	repulotipus: string
	maxseb: string
	kapacitas: string
	maxtav: string
	gyartaskezdet: string
	jelenlegiseb: string
	jelenlegimag: string
}

const Flights = () => {
	const [data, setData] = useState<Plane[]>()
	const selectedPlane = useStore(plane)

	// Jelenleg induló járatok lekérése Budapestről
	const getPlanes = async () => {
		const flights = await (await fetch("https://flywithme-api.deno.dev")).json()

		console.log(flights)

		setData(flights)
	}

	useEffect(() => {
		getPlanes()
	}, [])

	return (
		<>
			<div className="flex py-5 gap-5">
				<div className="w-1/3 bg-gray-300 rounded-xl h-screen overflow-auto">
					<div className="flex justify-start p-3 items-center">
						<h1 className="text-3xl font-bold">Járatok</h1>
					</div>
					{data &&
						data.map((item: Plane, i) => {
							return (
								<div key={i} className="bg-gray-400 rounded-xl text-white m-3 p-3">
									<h2>{item.flight_number}</h2>
									<h3>
										{item.dep_iata} - {item.arr_iata}
									</h3>
								</div>
							)
						})}
				</div>
				<div className="w-2/3 rounded-xl flex justify-center items-center">
					<div className="h-full w-full">{data && <Maps data={data} />}</div>
				</div>
				<div className="w-1/3 bg-gray-300 rounded-xl h-screen overflow-auto">
					<div className="flex justify-start p-3 items-center">
						<h1 className="text-3xl font-bold">Információk</h1>
					</div>
					{selectedPlane.repulotipus ? (
						<div>
							<div className="bg-gray-400 rounded-xl text-white m-3 p-3">
								<h2 className="text-xl">Modell</h2>
								<h3>
									{selectedPlane.repulonev === "Nincs információ"
										? "Nincs információ"
										: `${selectedPlane.repulonev} ${selectedPlane.repulotipus}`}
								</h3>
							</div>

							<div className="bg-gray-400 rounded-xl text-white m-3 p-3">
								<h2 className="text-xl">Jelenlegi sebesség</h2>
								<h3>{selectedPlane.jelenlegiseb} km/h</h3>
							</div>

							<div className="bg-gray-400 rounded-xl text-white m-3 p-3">
								<h2 className="text-xl">Jelenlegi magasság</h2>
								<h3>{selectedPlane.jelenlegimag} m</h3>
							</div>

							<div className="bg-gray-400 rounded-xl text-white m-3 p-3">
								<h2 className="text-xl">Max sebesség</h2>
								<h3>{selectedPlane.maxseb} km/h</h3>
							</div>

							<div className="bg-gray-400 rounded-xl text-white m-3 p-3">
								<h2 className="text-xl">Max távolság</h2>
								<h3>{selectedPlane.maxtav} km</h3>
							</div>

							<div className="bg-gray-400 rounded-xl text-white m-3 p-3">
								<h2 className="text-xl">Gyártás kezdete</h2>
								<h3>{selectedPlane.gyartaskezdet}</h3>
							</div>

							<div className="bg-gray-400 rounded-xl text-white m-3 p-3">
								<h2 className="text-xl">Kapacitás</h2>
								<h3>{selectedPlane.kapacitas} fő</h3>
							</div>
						</div>
					) : (
						<h1 className="m-3 text-xl">Válassz járatot a térképen!</h1>
					)}
				</div>
			</div>
		</>
	)
}

export default Flights
