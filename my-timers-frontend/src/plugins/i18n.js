import Vue from "vue";
import VueI18n from "vue-i18n";
import store from "@/store";
Vue.use(VueI18n);

const messages = {
  en: {
    myTimers: "My timers",
    newTimer: "CREATE NEW TIMER",
    timerName: "timer name",
    timerPlaceholder: "My awesome timer",
    year: "year",
    month: "month",
    months: "months",
    day: "day",
    noOfDays: "days",
    hours: "hours",
    noOfHours: "hours",
    minutes: "minutes",
    noOfMinutes: "minutes",
    seconds: "seconds",
    noOfSeconds: "seconds",
    addTimer: "ADD TIMER",
    register: "REGISTER",
    name: "name",
    email: "email",
    password: "password",
    createAccount: "CREATE ACCOUNT",
    login: "LOGIN",
    submit: "SUBMIT",
  },
  pl: {
    myTimers: "Moje liczniki",
    newTimer: "UTWÓRZ NOWY LICZNIK",
    timerName: "nazwa licznika",
    timerPlaceholder: "Mój nowy licznik",
    year: "rok",
    month: "miesiąc",
    day: "dzień",
    noOfDays: "dni",
    hours: "godzina",
    noOfHours: "godzin",
    minutes: "minuty",
    noOfMinutes: "minut",
    seconds: "sekundy",
    noOfSeconds: "sekund",
    addTimer: "DODAJ LICZNIK",
    register: "REJESTRACJA",
    name: "imię",
    email: "email",
    password: "hasło",
    createAccount: "UTWÓRZ KONTO",
    login: "LOGOWANIE",
    submit: "ZALOGUJ SIĘ",
  },
};

const i18n = new VueI18n({
  locale: store.state.language || "en", // set locale
  fallbackLocale: "pl", // set fallback locale
  messages, // set locale messages
});

export default i18n;
