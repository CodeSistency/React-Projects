import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./lng/en.json"
import sp from "./lng/spanish.json"

i18next.use(initReactI18next).init({
    resources: {
        sp: {
            translation: sp
        },
        en: {
            translation: en
        }
    },
    lng: localStorage.getItem("lng") || "sp",
})

export default i18next;