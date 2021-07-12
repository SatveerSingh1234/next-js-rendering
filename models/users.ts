import { baseModel } from './baseType'

export interface UserModel extends baseModel {
    id: number,
    name: string
    lastRenderedAt: string
}