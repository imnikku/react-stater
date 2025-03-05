import axios from "axios";
const axiosInstance = axios.create({
    baseURL:(import.meta.env.VITE_BASE_URL),
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});
axiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token") || "";
        const language = localStorage.getItem("i18nextLng") || "";
        if (config.headers) {
            (config.headers).set("Authorization", `Bearer ${token}`);
            (config.headers).set("language", `${language}`);
            (config.headers).set("device-type", `web_enable`);
            (config.headers).set(
                "url",
                `${process.env.NODE_ENV === "development"
                    ? "yoururl"
                    : window.location.origin
                }`
            );
          
        }

        return config;
    },
    (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        if (error?.response?.status === 401) {
            localStorage.clear();
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;