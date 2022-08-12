export interface AuthBody {
    login?: string;
    password?: string;
    token?: string;
    reauth: boolean;
}

export interface UsersModel {
    id: number;
    login: string;
    password: string;
    token: string;
}

export interface InfoBody {
    token: string;
}