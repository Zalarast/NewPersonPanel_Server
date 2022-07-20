export interface AuthBody {
    login: string;
    password: string;
}

export interface UsersModel {
    id: number;
    login: string;
    password: string;
    token: string;
}