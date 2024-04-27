import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export class AxiosProvider {
    private readonly axios: AxiosInstance;
    constructor(baseURL: string, headers?: object, config?: AxiosRequestConfig) {
        this.axios = axios.create({
            baseURL,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            ...config,
        });
    }

    async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<{ data?: T; error?: AxiosError }> {
        try {
            const response = await this.axios.get<T>(endpoint, config);
            return {
                data: response.data,
            };
        } catch (error) {
            return {
                error,
            };
        }
    }

    async post<T>(endpoint: string, data?: object, config?: AxiosRequestConfig): Promise<{ data?: T; error?: AxiosError }> {
        try {
            const response = await this.axios.post<T>(endpoint, data, config);
            return {
                data: response.data,
            };
        } catch (error) {
            return {
                error,
            };
        }
    }

    async put<T>(endpoint: string, data?: object, config?: AxiosRequestConfig): Promise<{ data?: T; error?: AxiosError }> {
        try {
            const response = await this.axios.put<T>(endpoint, data, config);
            return {
                data: response.data,
            };
        } catch (error) {
            return {
                error,
            };
        }
    }

    async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<{ data?: T; error?: AxiosError }> {
        try {
            const response = await this.axios.delete<T>(endpoint, config);
            return {
                data: response.data,
            };
        } catch (error) {
            return {
                error,
            };
        }
    }

    async patch<T>(endpoint: string, data?: object, config?: AxiosRequestConfig): Promise<{ data?: T; error?: AxiosError }> {
        try {
            const response = await this.axios.patch<T>(endpoint, data, config);
            return {
                data: response.data,
            };
        } catch (error) {
            return {
                error,
            };
        }
    }
}
