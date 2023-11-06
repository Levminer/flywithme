import markerPin from "../assets/marker.png"

const Marker = ({ lat, lng, markerId, onClick, planeId }) => {
	return (
		<img
			src={markerPin}
			data-lat={lat}
			data-lng={lng}
			onClick={(e) => (onClick ? onClick(e, { markerId, lat, lng, planeId }) : null)}
			className="cursor-pointer text-4xl"
			alt={markerId}
		/>
	)
}

export default Marker
