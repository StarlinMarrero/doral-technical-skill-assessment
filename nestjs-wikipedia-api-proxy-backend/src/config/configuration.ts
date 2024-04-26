const serverConfig = {
    port: process.env.PORT || 3000,
};

export const wikipediaConfig = {
    baseUrl: process.env.WIKIPEDIA_BASE_URL || "https://api.wikimedia.org",
};

export const translationConfig = {
    baseUrl: process.env.TRANSLATION_BASE_URL || "https://libretranslate.com",
    api_key: process.env.TRANSLATION_API_KEY || "",
};

export default () => ({
    serverConfig,
    wikipediaConfig,
    translationConfig,
});
