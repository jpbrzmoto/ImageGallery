
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

}
