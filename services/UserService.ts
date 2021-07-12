import { UserModel } from "../models/users";

export const getUsersList = async (): Promise<UserModel[]> => {
    const res = await fetch(`https://mocki.io/v1/37e915a0-7b4a-4ce5-957b-1c904e1d635f`);
    const users: UserModel[] = await res.json();
    const updatedList = users.map(user => { return { ...user, lastRenderedAt: new Date().toString() } })
    return updatedList;
}

export const getUserById = async (id: string): Promise<UserModel> => {
    console.log(`Id received for user ${id}`)
    const res = await fetch(`https://mocki.io/v1/71e57db1-9a5a-45ea-ba21-1df9bbc11f5c`);
    const user: UserModel = await res.json();
    const updatedUser = { ...user, lastRenderedAt: new Date().toString() }
    return updatedUser;
}