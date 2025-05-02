class AuthService {
    private apiBaseUrl: string;

    constructor() {
        this.apiBaseUrl = "http://localhost:5000/api";
    }

    async login(email: string, password: string): Promise<any> {
        try {
            const reponse = await fetch(`${this.apiBaseUrl}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            }
            );
            if (!reponse.ok) {
                const errorData = await reponse.json();
                throw new Error(errorData.message || "Login failed");
            }
            const data = await reponse.json();
            return data;

        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    async register(name: string, email: string, password: string): Promise<any> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Registration failed");
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error("Error registering:", error);
            throw error;
        }
    }
}

export const authService = new AuthService();