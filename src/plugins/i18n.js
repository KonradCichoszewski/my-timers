import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const messages = {
  en: {
    myTimers: "My timers!",
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
  },
  pl: {
    myTimers: "Moje liczniki!",
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
  },
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "pl", // set fallback locale
  messages, // set locale messages
});

export default i18n;
