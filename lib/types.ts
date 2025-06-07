export interface Listing {
  listingImage: string
  address: string
  price: string
}

export interface Realtor {
  fullName: string
  firstName: string
  lastName: string
  imgSrc: string
  phone: string
  officeName: string
  officeAddress: string
  address: string
  listings: Listing[]
}
