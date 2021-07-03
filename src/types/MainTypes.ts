export interface IProduct {
    id: string
    image: string
    name: string
    category: string
    qty: number | 1
    price: number
    discount: number
    total: number
}

export interface IOrder {
    id: string
    productList: IProduct[] | null
    discount: number
    netTotal: number
    deliveryCharge: number

}