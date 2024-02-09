export interface PostProduct {
    name: string
    description: string
    images: File[]
    widthCM: number
    heightCM: number
    depthCM: number
    weightGs: number
    active: boolean
    categoryId: number
}