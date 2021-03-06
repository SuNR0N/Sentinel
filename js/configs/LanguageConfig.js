/**
 * Created by NiGhTy on 2014.04.15..
 */
(function(){

    "use strict";

    awaxa.sentinel.configs.LanguageConfig = function($translateProvider)
    {
        $translateProvider.translations('en', {
            BRAND_NAME: 'Awaxa',
            MENU_LOGIN: 'Login',
            MENU_TASKS: 'Tasks',
            MENU_CALENDAR: 'Calendar',
            MENU_MESSAGES: 'Messages',
            MENU_STATISTICS: 'Statistics',
            MENU_SUMMARY: 'Summary',
            MENU_PREMIUM: 'Premium',
            MENU_CHANGE_PASSWORD: 'Change Password',
            MENU_REGISTER_NEW_USER: 'Register New User',
            MENU_MANAGE_USERS: 'Manage Users',
            MENU_UPLOAD_CSV: 'Upload CSV',
            MENU_CLEAR_DATABASE: 'Clear Database',
            MENU_ADMIN: 'Admin',
            LOGGED_IN_AS: 'Logged in as',
            LOGOUT: 'Logout',
            TITLE_LOGIN: 'Log In',
            TITLE_CLEAR_DATABASE: 'Clear Database',
            TITLE_CLIENT_DETAILS: 'Client Details',
            TITLE_CLIENT_SUMMARY: 'Client Summary',
            TITLE_MONTHLY_PLAN: 'Monthly Plan',
            TITLE_USER_DETAILS: 'User Details',
            TITLE_CHANGE_PASSWORD: 'Change Password',
            TITLE_REGISTER: 'Register',
            BODY_CLEAR_DATABASE: 'Are you sure you want to delete all the data?',
            BUTTON_EDIT: 'Edit',
            BUTTON_LOGIN: 'Login',
            BUTTON_REGISTER: 'Register',
            BUTTON_CLOSE: 'Close',
            BUTTON_DELETE: 'Delete',
            BUTTON_GENERATE_CONTRACT: 'Generate Contract',
            BUTTON_SAVE_CHANGES: 'Save Changes',
            BUTTON_BROWSE: 'Browse...',
            BUTTON_UPLOAD: 'Upload',
            BUTTON_SUBMIT: 'Submit',
            BUTTON_RESEND: 'Resend',
            BUTTON_CHANGE_PASSWORD: 'Change Password',
            BUTTON_PREVIOUS: 'Previous',
            BUTTON_TODAY: 'Today',
            BUTTON_NEXT: 'Next',
            BUTTON_YEAR: 'Year',
            BUTTON_MONTH: 'Month',
            BUTTON_WEEK: 'Week',
            BUTTON_DAY: 'Day',
            BUTTON_YES: 'Yes',
            BUTTON_NO: 'No',
            BUTTON_ALL_TASKS: 'All Tasks',
            BUTTON_USER_TASKS: 'User Tasks',
            BUTTON_PROCESSING_TASKS: 'Processing Tasks',
            SHOW_ARCHIVED_ITEMS : 'Archive Tasks',
            BUTTON_ASSIGN : 'Assign',
            PLACEHOLDER_FIRST_NAME: 'First Name',
            PLACEHOLDER_LAST_NAME: 'Last Name',
            PLACEHOLDER_USERNAME: 'Username',
            PLACEHOLDER_PASSWORD: 'Password',
            PLACEHOLDER_PASSWORD_CONFIRMATION: 'Password Confirmation',
            PLACEHOLDER_OLD_PASSWORD: 'Old Password',
            PLACEHOLDER_NEW_PASSWORD: 'New Password',
            PLACEHOLDER_NEW_PASSWORD_CONFIRMATION: 'New Password Confirmation',
            PLACEHOLDER_CLIENT_CODE: 'Client Code',
            PLACEHOLDER_START_DATE: 'Start Date',
            PLACEHOLDER_END_DATE: 'End Date',
            PLACEHOLDER_TASKS_FILTER: 'Quick Filter',
            TASKS_MT_ID: 'MT ID',
            TASKS_NAME: 'Name',
            TASKS_ADDRESS: 'Address',
            TASKS_SERVICE_TV: 'Service TV',
            TASKS_SERVICE_PHONE: 'Service Phone',
            TASKS_SERVICE_INTERNET: 'Service Internet',
            TASKS_TECHNOLOGY: 'Technology',
            TASKS_APPOINTMENT: 'Appointment',
            TASKS_STATUS: 'Status',
            TASKS_COMMENT: 'Comment',
            TASKS_COMMENT_1: 'Comment 1',
            TASKS_COMMENT_2: 'Comment 2',
            CLIENT_POPUP_TAB_BASIC: 'Basic',
            CLIENT_POPUP_TAB_CONTRACT: 'Contract',
            CLIENT_POPUP_TAB_PERSONAL: 'Personal',
            CLIENT_POPUP_MT_ID: 'MT ID',
            CLIENT_POPUP_NAME: 'Name',
            CLIENT_POPUP_ADDRESS: 'Address',
            CLIENT_POPUP_PHONE: 'Phone',
            CLIENT_POPUP_MOBILE: 'Mobile',
            CLIENT_POPUP_LOYALTY_EXPIRATION: 'Loyalty Expiration',
            CLIENT_POPUP_COMMENT: 'Comment',
            CLIENT_POPUP_COMMENT_1: 'Comment #1',
            CLIENT_POPUP_COMMENT_2: 'Comment #2',
            CLIENT_POPUP_SERVICE_TV: 'Service TV',
            CLIENT_POPUP_SERVICE_TV_PREMIUM: 'Service TV Premium',
            CLIENT_POPUP_SERVICE_PHONE: 'Service Phone',
            CLIENT_POPUP_SERVICE_PHONE_PREMIUM: 'Service Phone Premium',
            CLIENT_POPUP_SERVICE_INTERNET: 'Service Internet',
            CLIENT_POPUP_SERVICE_INTERNET_PREMIUM: 'Service Internet Premium',
            CLIENT_POPUP_SERVICE_EXTRA: 'Service Extra',
            CLIENT_POPUP_SERVICE_EXTRA_PREMIUM: 'Service Extra Premium',
            CLIENT_POPUP_APPOINTMENT: 'Appointment',
            CLIENT_POPUP_TECHNOLOGY: 'Technology',
            CLIENT_POPUP_TECHNOLOGY_MARKET: 'Market',
            CLIENT_POPUP_TECHNOLOGY_LION: 'Lion',
            CLIENT_POPUP_TECHNOLOGY_HYENA: 'Hyena',
            CLIENT_POPUP_TECHNOLOGY_HYENA_24: 'Hyena 24',
            CLIENT_POPUP_TECHNOLOGY_ED3: 'ED3',
            CLIENT_POPUP_TECHNOLOGY_PSTN: 'PSTN',
            CLIENT_POPUP_TECHNOLOGY_OPTICAL: 'Optical',
            CLIENT_POPUP_CONTRACT_OPTICAL: 'Optical',
            CLIENT_POPUP_CONTRACT_MOBILE: 'Mobile',
            CLIENT_POPUP_STATUS: 'Status',
            CLIENT_POPUP_PERSONAL_ID: 'Personal ID',
            CLIENT_POPUP_DATE_OF_BIRTH: 'Date of Birth',
            CLIENT_POPUP_PLACE_OF_BIRTH: 'Place of Birth',
            CLIENT_POPUP_NAME_OF_MOTHER: 'Name of Mother',
            CLIENT_POPUP_PAYMENT_METHOD: 'Payment Method',
            CLIENT_POPUP_BANK_ACCOUNT: 'Bank Account',
            CLIENT_POPUP_ERROR_CORRECTION: 'Error Correction',
            CLIENT_POPUP_SUMMARY_COMMENT_1: 'Comment #1',
            CLIENT_POPUP_SUMMARY_COMMENT_2: 'Comment #2',
            CLIENT_POPUP_SUMMARY_STATUS: 'Status',
            CLIENT_POPUP_TOTAL_INCOME: 'Total Income',
            MONTHLY_PLAN_POPUP_PHONE: 'Phone',
            MONTHLY_PLAN_POPUP_INTERNET: 'Internet',
            MONTHLY_PLAN_POPUP_TV: 'TV',
            MONTHLY_PLAN_POPUP_EXTRA: 'HBO',
            MONTHLY_PLAN_POPUP_MOBILE: 'Mobile',
            MONTHLY_PLAN_POPUP_OPTICAL: 'Optical',
            MESSAGES_FROM: 'From',
            MESSAGES_SUBJECT: 'Subject',
            MESSAGES_STATUS: 'Status',
            MESSAGES_STATUS_COMPLETED: 'Completed',
            MESSAGES_STATUS_FAILED: 'Failed',
            MESSAGES_CONTENT: 'Content',
            MESSAGES_DATE: 'Date',
            USER_FIRST_NAME: 'First Name',
            USER_LAST_NAME: 'Last Name',
            USER_USERNAME: 'Username',
            USER_ROLE: 'Role',
            USER_STATUS: 'Status',
            USER_MODE: 'Mode',
            USER_CLIENT_CODE: 'Client Code',
            USER_OWNER: 'Owner',
            USER_ASSIGNMENTS: 'Access',
            STATUS_ACTIVE: 'Active',
            STATUS_INACTIVE: 'Inactive',
            STATUS_TERMINATED: 'Terminated',
            PREMIUM_PHONE: 'Phone',
            PREMIUM_INTERNET: 'Internet',
            PREMIUM_TV: 'TV',
            PREMIUM_EXTRA: 'Extra',
            PREMIUM_LABEL_SERVICE: 'Service',
            PREMIUM_LABEL_NEW: 'New',
            PREMIUM_LABEL_ELONGATION: 'Elongation',
            ROLE_GUEST: 'Guest',
            ROLE_ASSISTANT: 'Assistant',
            ROLE_AGENT: 'Agent',
            ROLE_AUDITOR: 'Auditor',
            ROLE_ADMIN: 'Admin',
            ROLE_SUPERUSER: 'SuperUser',
            MODE_BEGINNER: 'Beginner',
            MODE_EXPERT: 'Expert',
            ASSIGNMENT_STATUS_UNASSIGNED: 'Unassigned',
            ASSIGNMENT_STATUS_NEW: 'New',
            ASSIGNMENT_STATUS_RECALL: 'Recall',
            ASSIGNMENT_STATUS_ARRANGED: 'Arranged',
            ASSIGNMENT_STATUS_WRONG_ADDRESS: 'Wrong Address',
            ASSIGNMENT_STATUS_REJECTED: 'Rejected',
            ASSIGNMENT_STATUS_SENT: 'Sent',
            ASSIGNMENT_STATUS_PROCESSED: 'Processed',
            SUMMARY_STATUS_UNDER_ESTABLISHMENT: 'Under Establishment',
            SUMMARY_STATUS_CANCELED: 'Canceled',
            SUMMARY_STATUS_TIMED_ACTIVATION: 'Timed Activation',
            SUMMARY_STATUS_ESTABLISHED: 'Established',
            BROWSER_TITLE_SENTINEL: 'Sentinel',
            BROWSER_TITLE_LOGIN: 'Sentinel - Login',
            BROWSER_TITLE_TASKS: 'Sentinel - Tasks',
            BROWSER_TITLE_MANAGE: 'Sentinel - Manage Users',
            BROWSER_TITLE_MESSAGES: 'Sentinel - Messages',
            BROWSER_TITLE_PASSWORD: 'Sentinel - Change Password',
            BROWSER_TITLE_REGISTER: 'Sentinel - Register New User',
            BROWSER_TITLE_STATISTICS: 'Sentinel - Statistics',
            BROWSER_TITLE_UPLOAD: 'Sentinel - Upload CSV',
            BROWSER_TITLE_CALENDAR: 'Sentinel - Calendar',
            BROWSER_TITLE_PREMIUM: 'Sentinel - Premium',
            BROWSER_TITLE_SUMMARY: 'Sentinel - Summary',
            MSG_PASSWORDS_DONT_MATCH: "Passwords don't match.",
            MSG_CLIENT_CODE_LENGTH: "Client code must be 9 digits.",
            MSG_WARNING: "Warning!",
            MSG_ERROR: "Error!",
            MSG_SUCCESS: "Success!",
            MSG_LOGIN_FAILED: "Login failed",
            MSG_PASSWORD_CHANGE_FAILED: "Password change failed",
            MSG_REGISTRATION_FAILED: "Registration failed",
            STATISTICS_PENDING: "PENDING",
            STATISTICS_COMPLETED: "COMPLETED",
            STATISTICS_FAILED: "FAILED",
            STATISTICS_NEW_PHONE_PLANS: "New Phone Plans",
            STATISTICS_NEW_INTERNET_PLANS: "New Internet Plans",
            STATISTICS_NEW_TV_PLANS: "New TV Plans",
            SUMMARY_NET_INCOME: 'Net Income',
            SUMMARY_GROSS_INCOME: 'Gross Income',
            SUMMARY_PHONE: 'Phone',
            SUMMARY_INTERNET: 'Internet',
            SUMMARY_TV: 'TV',
            SUMMARY_HBO: 'HBO',
            SUMMARY_MOBILE: 'Mobile',
            SUMMARY_OPTICAL: 'Optical',
            SUMMARY_PLAN: 'Plan',
            SUMMARY_FACT: 'Fact',
            SUMMARY_VIEW_MT : 'MT ID',
            SUMMARY_VIEW_NAME : 'Name',
            SUMMARY_VIEW_PHONE_NAME : 'Service Phone',
            SUMMARY_VIEW_INTERNET_NAME : 'Service Internet',
            SUMMARY_VIEW_TV_NAME : 'Service TV',
            SUMMARY_VIEW_HBO_NAME : 'Service HBO',
            SUMMARY_VIEW_MOBILE : 'Mobile',
            SUMMARY_VIEW_OPTICAL : 'Optical',
            SUMMARY_VIEW_TOTAL : 'Total Income',
            SUMMARY_VIEW_ERROR_CORRECTION : 'Error Correction',
            SUMMARY_VIEW_STATUS : 'Status',
            SUMMARY_VIEW_COMMENT_1 : 'Comment 1',
            SUMMARY_VIEW_COMMENT_2 : 'Comment 2',
            501: 'No columns defined in the provided csv',
            502: 'Unsupported file format',
            503: 'Count of marked for send contracts does not reach the minimum count',
            504: 'Column count mismatch',
            505: 'Undefined column in CSV',
            601: 'An internal error occured during the request',
            602: 'The trial version has expired',
            701: 'Invalid Username or Password',
            702: 'The password has changed successfully',
            703: 'The password change has failed',
            704: 'Current password is invalid',
            705: 'Username already exists',
            706: 'Unauthorized access',
            801: 'No statistics found for the selected user for the specified interval',
            901: 'No new clients added',
            902: 'Failed to add new clients',
            903: 'New clients have been successfully added',
            1001: 'Email sending was not initiated as the last assignment status is not "SENT"'
        });
        $translateProvider.translations('hu', {
            BRAND_NAME: 'Awaxa',
            MENU_LOGIN: 'Bejelentkezés',
            MENU_TASKS: 'Feladatok',
            MENU_CALENDAR: 'Naptár',
            MENU_MESSAGES: 'Üzenetek',
            MENU_STATISTICS: 'Statisztika',
            MENU_SUMMARY: 'Összesítő',
            MENU_PREMIUM: 'Jutalék',
            MENU_CHANGE_PASSWORD: 'Jelszóváltoztatás',
            MENU_REGISTER_NEW_USER: 'Új felhasználó létrehozása',
            MENU_MANAGE_USERS: 'Felhasználók kezelése',
            MENU_UPLOAD_CSV: 'CSV feltöltés',
            MENU_CLEAR_DATABASE: 'Adatbázis törlése',
            MENU_ADMIN: 'Admin',
            LOGGED_IN_AS: 'Bejelentkezve mint',
            LOGOUT: 'Kijelentkezés',
            TITLE_LOGIN: 'Bejelentkezés',
            TITLE_CLEAR_DATABASE: 'Adatbázis törlése',
            TITLE_CLIENT_DETAILS: 'Ügyfél profil',
            TITLE_CLIENT_SUMMARY: 'Ügyfél összesítő',
            TITLE_MONTHLY_PLAN: 'Havi terv',
            TITLE_USER_DETAILS: 'Felhasználói profil',
            TITLE_CHANGE_PASSWORD: 'Jelszóváltoztatás',
            TITLE_REGISTER: 'Regisztráció',
            BODY_CLEAR_DATABASE: 'Biztos benne, hogy minden adatot törölni akar?',
            BUTTON_EDIT: 'Szerkesztés',
            BUTTON_LOGIN: 'Bejelentkezés',
            BUTTON_REGISTER: 'Regisztráció',
            BUTTON_CLOSE: 'Bezárás',
            BUTTON_DELETE: 'Törlés',
            BUTTON_GENERATE_CONTRACT: 'Igénybejelentő generálása',
            BUTTON_SAVE_CHANGES: 'Mentés',
            BUTTON_BROWSE: 'Tallózas...',
            BUTTON_UPLOAD: 'Feltöltés',
            BUTTON_SUBMIT: 'Lekérdez',
            BUTTON_RESEND: 'Újraküld',
            BUTTON_CHANGE_PASSWORD: 'Megváltoztat',
            BUTTON_PREVIOUS: 'Előző',
            BUTTON_TODAY: 'Ma',
            BUTTON_NEXT: 'Következő',
            BUTTON_YEAR: 'Év',
            BUTTON_MONTH: 'Hónap',
            BUTTON_WEEK: 'Hét',
            BUTTON_DAY: 'Nap',
            BUTTON_YES: 'Igen',
            BUTTON_NO: 'Nem',
            BUTTON_ALL_TASKS: 'Összes feladat',
            BUTTON_USER_TASKS: 'Egyéni feladatok',
            BUTTON_PROCESSING_TASKS: 'Feldolgozandó feladatok',
            BUTTON_ASSIGN : 'Hozzárendel',
            SHOW_ARCHIVED_ITEMS : 'Archív feladatok',
            PLACEHOLDER_FIRST_NAME: 'Keresztnév',
            PLACEHOLDER_LAST_NAME: 'Vezeteknév',
            PLACEHOLDER_USERNAME: 'Felhasználónév',
            PLACEHOLDER_PASSWORD: 'Jelszó',
            PLACEHOLDER_PASSWORD_CONFIRMATION: 'Jelszó megerősítése',
            PLACEHOLDER_OLD_PASSWORD: 'Aktuális jelszó',
            PLACEHOLDER_NEW_PASSWORD: 'Új jelszó',
            PLACEHOLDER_NEW_PASSWORD_CONFIRMATION: 'Új jelszó megerősítése',
            PLACEHOLDER_CLIENT_CODE: 'Ügyfélkód',
            PLACEHOLDER_START_DATE: 'Intervallum kezdete',
            PLACEHOLDER_END_DATE: 'Intervallum vége',
            PLACEHOLDER_TASKS_FILTER: 'Gyors keresés',
            TASKS_MT_ID: 'MT Azonosító',
            TASKS_NAME: 'Név',
            TASKS_ADDRESS: 'Cím',
            TASKS_SERVICE_TV: 'TV szolgáltatás',
            TASKS_SERVICE_PHONE: 'Telefon szolgáltatás',
            TASKS_SERVICE_INTERNET: 'Internet szolgáltatás',
            TASKS_TECHNOLOGY: 'Technológia',
            TASKS_APPOINTMENT: 'Időpont',
            TASKS_STATUS: 'Státusz',
            TASKS_COMMENT: 'Info',
            TASKS_COMMENT_1: 'Info1',
            TASKS_COMMENT_2: 'Info2',
            CLIENT_POPUP_TAB_BASIC: 'Alapadatok',
            CLIENT_POPUP_TAB_CONTRACT: 'Szerződés',
            CLIENT_POPUP_TAB_PERSONAL: 'Személyes',
            CLIENT_POPUP_MT_ID: 'MT azonosító',
            CLIENT_POPUP_NAME: 'Név',
            CLIENT_POPUP_ADDRESS: 'Cím',
            CLIENT_POPUP_PHONE: 'Telefonszám',
            CLIENT_POPUP_MOBILE: 'Mobil',
            CLIENT_POPUP_LOYALTY_EXPIRATION: 'Hűségidő lejárata',
            CLIENT_POPUP_COMMENT: 'Megjegyzés',
            CLIENT_POPUP_COMMENT_1: 'Megjegyzés 1',
            CLIENT_POPUP_COMMENT_2: 'Megjegyzés 2',
            CLIENT_POPUP_SERVICE_TV: 'TV szolgáltatás',
            CLIENT_POPUP_SERVICE_TV_PREMIUM: 'TV jutalék',
            CLIENT_POPUP_SERVICE_PHONE: 'Telefon szolgáltatás',
            CLIENT_POPUP_SERVICE_PHONE_PREMIUM: 'Telefon jutalék',
            CLIENT_POPUP_SERVICE_INTERNET: 'Internet szolgáltatás',
            CLIENT_POPUP_SERVICE_INTERNET_PREMIUM: 'Internet jutalék',
            CLIENT_POPUP_SERVICE_EXTRA: 'Extra szolgáltatás',
            CLIENT_POPUP_SERVICE_EXTRA_PREMIUM: 'Extra jutalék',
            CLIENT_POPUP_APPOINTMENT: 'Időpont',
            CLIENT_POPUP_TECHNOLOGY: 'Technológia',
            CLIENT_POPUP_TECHNOLOGY_MARKET: 'Piaci',
            CLIENT_POPUP_TECHNOLOGY_LION: 'Oroszlán',
            CLIENT_POPUP_TECHNOLOGY_HYENA: 'Hiéna',
            CLIENT_POPUP_TECHNOLOGY_HYENA_24: 'Hiéna 24',
            CLIENT_POPUP_TECHNOLOGY_ED3: 'ED3',
            CLIENT_POPUP_TECHNOLOGY_PSTN: 'Réz',
            CLIENT_POPUP_TECHNOLOGY_OPTICAL: 'Optikai',
            CLIENT_POPUP_CONTRACT_OPTICAL: 'Optika',
            CLIENT_POPUP_CONTRACT_MOBILE: 'Mobil',
            CLIENT_POPUP_STATUS: 'Státusz',
            CLIENT_POPUP_PERSONAL_ID: 'Személyi szám',
            CLIENT_POPUP_DATE_OF_BIRTH: 'Születési dátum',
            CLIENT_POPUP_PLACE_OF_BIRTH: 'Születési hely',
            CLIENT_POPUP_NAME_OF_MOTHER: 'Anyja neve',
            CLIENT_POPUP_PAYMENT_METHOD: 'Fizetési mód',
            CLIENT_POPUP_BANK_ACCOUNT: 'Bankszámlaszám',
            CLIENT_POPUP_ERROR_CORRECTION: 'Hibajavítás',
            CLIENT_POPUP_SUMMARY_COMMENT_1: 'Megjegyzés 1',
            CLIENT_POPUP_SUMMARY_COMMENT_2: 'Megjegyzés 2',
            CLIENT_POPUP_SUMMARY_STATUS: 'Státusz',
            CLIENT_POPUP_TOTAL_INCOME: 'Összes nyereség',
            MONTHLY_PLAN_POPUP_PHONE: 'Telefon',
            MONTHLY_PLAN_POPUP_INTERNET: 'Internet',
            MONTHLY_PLAN_POPUP_TV: 'TV',
            MONTHLY_PLAN_POPUP_EXTRA: 'HBO',
            MONTHLY_PLAN_POPUP_MOBILE: 'Mobil',
            MONTHLY_PLAN_POPUP_OPTICAL: 'Optika',
            MESSAGES_FROM: 'Feladó',
            MESSAGES_SUBJECT: 'Tárgy',
            MESSAGES_CONTENT: 'Tartalom',
            MESSAGES_STATUS: 'Státusz',
            MESSAGES_STATUS_COMPLETED: 'Sikeres',
            MESSAGES_STATUS_FAILED: 'Sikertelen',
            MESSAGES_DATE: 'Dátum',
            USER_FIRST_NAME: 'Keresztnév',
            USER_LAST_NAME: 'Vezeteknév',
            USER_USERNAME: 'Felhasználónév',
            USER_ROLE: 'Beosztás',
            USER_STATUS: 'Státusz',
            USER_MODE: 'Mód',
            USER_CLIENT_CODE: 'Ügyfélkód',
            USER_OWNER: 'Tulajdonos',
            USER_ASSIGNMENTS: 'Hozzáférés',
            STATUS_ACTIVE: 'Aktív',
            STATUS_INACTIVE: 'Inaktív',
            STATUS_TERMINATED: 'Elbocsájtott',
            PREMIUM_PHONE: 'Telefon',
            PREMIUM_INTERNET: 'Internet',
            PREMIUM_TV: 'TV',
            PREMIUM_EXTRA: 'Extra',
            PREMIUM_LABEL_SERVICE: 'Szolgáltatás',
            PREMIUM_LABEL_NEW: 'Új',
            PREMIUM_LABEL_ELONGATION: 'Hosszabítás',
            ROLE_GUEST: 'Vendég',
            ROLE_ASSISTANT: 'Asszisztens',
            ROLE_AGENT: 'Ügynök',
            ROLE_AUDITOR: 'Auditor',
            ROLE_ADMIN: 'Adminisztrátor',
            ROLE_SUPERUSER: 'ADMIN',
            MODE_BEGINNER: 'Kezdő',
            MODE_EXPERT: 'Profi',
            ASSIGNMENT_STATUS_UNASSIGNED: 'Nem hozzárendelt',
            ASSIGNMENT_STATUS_NEW: 'Új',
            ASSIGNMENT_STATUS_RECALL: 'Visszahívas',
            ASSIGNMENT_STATUS_ARRANGED: 'Egyeztetett',
            ASSIGNMENT_STATUS_WRONG_ADDRESS: 'Hibás cím',
            ASSIGNMENT_STATUS_REJECTED: 'Visszautasított',
            ASSIGNMENT_STATUS_SENT: 'Elküldött',
            ASSIGNMENT_STATUS_PROCESSED: 'Feldolgozott',
            SUMMARY_STATUS_UNDER_ESTABLISHMENT: 'Létesítés alatt',
            SUMMARY_STATUS_CANCELED: 'Visszatörölt',
            SUMMARY_STATUS_TIMED_ACTIVATION: 'Ídőzített aktiválás',
            SUMMARY_STATUS_ESTABLISHED: 'Létesült',
            BROWSER_TITLE_SENTINEL: 'Sentinel',
            BROWSER_TITLE_LOGIN: 'Sentinel - Bejelentkezés',
            BROWSER_TITLE_TASKS: 'Sentinel - Feladatok',
            BROWSER_TITLE_MANAGE: 'Sentinel - Felhasználók kezelése',
            BROWSER_TITLE_MESSAGES: 'Sentinel - Üzenetek',
            BROWSER_TITLE_PASSWORD: 'Sentinel - Jelszóváltoztatás',
            BROWSER_TITLE_REGISTER: 'Sentinel - Új felhasznaló létrehozása',
            BROWSER_TITLE_STATISTICS: 'Sentinel - Statisztika',
            BROWSER_TITLE_UPLOAD: 'Sentinel - CSV feltöltés',
            BROWSER_TITLE_CALENDAR: 'Sentinel - Naptár',
            BROWSER_TITLE_PREMIUM: 'Sentinel - Jutalék',
            BROWSER_TITLE_SUMMARY: 'Sentinel - Összesítő',
            MSG_PASSWORDS_DONT_MATCH: "A megadott jelszavak nem egyeznek.",
            MSG_CLIENT_CODE_LENGTH: "Az ügyfélkód 9 számjegyből állhat.",
            MSG_WARNING: "Figyelem!",
            MSG_ERROR: "Hiba!",
            MSG_SUCCESS: "Sikeres!",
            MSG_LOGIN_FAILED: "Sikertelen bejelentkezés",
            MSG_PASSWORD_CHANGE_FAILED: "A jelszóváltoztatás nem járt sikerrel",
            MSG_REGISTRATION_FAILED: "A regisztració nem sikerült",
            STATISTICS_PENDING: "FÜGGŐBEN",
            STATISTICS_COMPLETED: "TELJESÍTETT",
            STATISTICS_FAILED: "SIKERTELEN",
            STATISTICS_NEW_PHONE_PLANS: "Új Telefon",
            STATISTICS_NEW_INTERNET_PLANS: "Új Internet",
            STATISTICS_NEW_TV_PLANS: "Új TV",
            SUMMARY_NET_INCOME: 'Nettó bevétel',
            SUMMARY_GROSS_INCOME: 'Bruttó bevétel',
            SUMMARY_PHONE: 'Telefon',
            SUMMARY_INTERNET: 'Internet',
            SUMMARY_TV: 'TV',
            SUMMARY_HBO: 'HBO',
            SUMMARY_MOBILE: 'Mobil',
            SUMMARY_OPTICAL: 'Optika',
            SUMMARY_PLAN: 'Terv',
            SUMMARY_FACT: 'Tény',
            SUMMARY_VIEW_MT : 'MT azonosító',
            SUMMARY_VIEW_NAME : 'Név',
            SUMMARY_VIEW_PHONE_NAME : 'Telefon szolgáltatás',
            SUMMARY_VIEW_INTERNET_NAME : 'Internet szolgáltatás',
            SUMMARY_VIEW_TV_NAME : 'TV szolgáltatás',
            SUMMARY_VIEW_HBO_NAME : 'HBO szolgáltatás',
            SUMMARY_VIEW_MOBILE : 'Mobil',
            SUMMARY_VIEW_OPTICAL : 'Optika',
            SUMMARY_VIEW_TOTAL : 'Összes',
            SUMMARY_VIEW_ERROR_CORRECTION : 'Hibajavítás',
            SUMMARY_VIEW_STATUS : 'Státusz',
            SUMMARY_VIEW_COMMENT_1 : 'Info1',
            SUMMARY_VIEW_COMMENT_2 : 'Info2',
            501: 'A megadott csv fájl nem tartalmaz oszlopokat',
            502: 'Nem támogatott fájl formátum',
            503: 'A küldendő fájlok száma nem éri el a szükséges minimumot',
            504: 'A CSV fájlban definiált oszlopok száma nem megfelelő',
            505: 'Ismeretlen oszlop a CSV fájlban',
            601: 'Ismeretlen hiba történt a futás során',
            602: 'Lejárt a próbaverzió :(',
            701: 'Hibás Felhasználónév vagy Jelszó',
            702: 'A jelszó sikeresen megváltozott',
            703: 'A jelszóváltoztatás nem sikerült',
            704: 'A jelenlegi jelszó érvénytelen',
            705: 'A megadott felhasznólónév már létezik',
            706: 'Jogosulatlan belépés',
            801: 'Nem talalható statisztikai adat a kiválasztott felhasználóra nézve a megadott intervallumon belül',
            901: 'Nem kerültek új ügyfelek hozzáadásra',
            902: 'Nem sikerült az új ügyfelek hozzáadása az adatbázishoz',
            903: 'Új ügyfelek sikeresen hozzáadásra kerültek az adatbázishoz',
            1001: 'Az email küldés meghiúsult, mivel az aktuális feladat legutolsó érvenyes státusza nem "Elküldött"'
        });
        $translateProvider.preferredLanguage('hu');
    };

}());