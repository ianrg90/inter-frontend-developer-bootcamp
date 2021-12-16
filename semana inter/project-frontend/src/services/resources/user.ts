import api from "../api";

export interface SignInData {
    email: string,
    password: string,
}

export interface SignUpData {
    firsName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface UserDto {
    id: string;
    firstName: string;
    lastName: string;
    accountNumber: number;
    digit: number;
    wallet: number;
    email: string;
  }

export const signIn = async (data: SignInData) => {
    return api.post("/user/signin", data)
}

export const me = async() => {
    return api.post<UserDto>("/user/me")
}

export const signUp = async (data: SignUpData) => {
    return api.post("/user/signup", data)
}