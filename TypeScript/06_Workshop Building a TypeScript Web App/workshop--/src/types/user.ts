interface Geo {
    lat: number;
    lng: number
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: Geo
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: number;
    website: string;
    company: Company
}