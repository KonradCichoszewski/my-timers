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
    noTimers: "You don't have any timers yet !",
    welcome: `Welcome to "my-timers"`,
    tooLong: "Title can have at most 40 characters",
    smallDate: "Date and time must be greater than current date",
    regSuccess: "Registration successfull. You can log in now",
    regErr: `Email domain must be "@gmail.com" or "@outlook.com". Password must have at least 5 characters`,
    loginErr: "Email or password is incorrect",
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
    noTimers: "Nie masz jeszcze żadnych liczników !",
    welcome: `Witamy w "my-timers"`,
    tooLong: "Nazwa licznika nie może być dłuższa niż 40 znaków",
    smallDate: "Data i godzina muszą być późniejsze niż aktualne ",
    regSuccess: "Rejestracja przebiegła pomyślnie. Możesz się zalogować",
    regErr: `Email musi być w domenie "@gmail.com" lub "@outlook.com". Hasło musi mieć min. 5 znaków`,
    loginErr: "Email lub hasło są niepoprawne",
  },
};

const i18n = new VueI18n({
  locale: store.state.language || "en", // set locale
  fallbackLocale: "pl", // set fallback locale
  messages, // set locale messages
});

export default i18n;
