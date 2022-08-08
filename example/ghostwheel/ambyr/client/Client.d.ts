declare type Geo = {
  lat: string;
  lng: string;
}

declare type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

declare type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

declare type Client = {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
  profileImage: string;
}
