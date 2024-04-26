import { Tfa } from "../redux/rtk-query/feed/feed.interfaces";

type LocalStorageKeys = "feed-seen-list" | "theme" | "language";

type LocalStorageValues = {
    "feed-seen-list": Array<Tfa>;
    theme: "light" | "dark";
    language: "en" | "es";
};

type LocalStorageHelper = {
    setItem: <K extends LocalStorageKeys>(key: K, value: LocalStorageValues[K]) => void;
    getItem: <K extends LocalStorageKeys>(key: K) => LocalStorageValues[K] | null;
    removeItem: (key: LocalStorageKeys) => void;
};

const localStorageHelper: LocalStorageHelper = {
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },

    getItem: (key) => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },

    removeItem: (key) => {
        localStorage.removeItem(key);
    },
};

export default localStorageHelper;
