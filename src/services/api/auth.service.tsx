import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Reemplaza con la URL base de tu API

export interface User {
    name: string;
    lastname: string;
    email: string;
    user: string;
}

export class UserService {

    isLogin(): boolean {
        const userlogged = localStorage.getItem("user");
        return userlogged != null && userlogged != undefined;
    }

    getUser(): string | null {
        return localStorage.getItem("user");
    }

    setUser(userId: string) {
        localStorage.setItem("user", userId);
    }

    getToken(): string | null {
        return localStorage.getItem("token");
    }

    setToken(token: string) {
        localStorage.setItem("token", token);
    }

    closeSession(): void {
        localStorage.clear();
    }

    /*
    // Obtener un usuario por su ID
    async getUser(userId: number): Promise<User> {
        const response = await axios.get<User>(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    }

    // Crear un nuevo usuario
    async postUser(userData: User): Promise<User> {
        const response = await axios.post<User>(`${API_BASE_URL}/users`, userData);
        return response.data;
    }*/
}
