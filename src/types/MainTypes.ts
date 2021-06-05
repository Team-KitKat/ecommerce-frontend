export interface IProduct {
    name: string
    price: number
    discount: number
    image: string
    id: string
}

export interface IOrder {
    productList: IProduct[]
    discount: number
    netTotal: number
    deliveryCharge: number
    id: string
}