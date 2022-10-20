import { UserAddressCoordinates } from "./UserAddressCoordinates"

export interface UserAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: UserAddressCoordinates
}