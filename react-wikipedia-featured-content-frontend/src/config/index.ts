export default {
    app: {
        isProduction: import.meta.env.NODE_ENV === "production",
        isTest: import.meta.env.NODE_ENV === "test",
    },
    api: {
        baseURL: (import.meta.env.API_BASE_URL as string) || "http://localhost:4000",
    },
};
