// store/users.ts
import { map } from "nanostores"
import { PlaneInfo } from "../pages/flights"

export const plane = map<PlaneInfo>()

export const setPlane = (value: PlaneInfo) => {
	plane.set(value)
}

export default plane
