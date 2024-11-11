<template>
  <v-container>
    <v-form>
      <!-- Spracheinstellung -->
      <v-select
        v-model="settings.language"
        :items="languages"
        label="Sprache"
        @change="updateSettings"
      ></v-select>

      <!-- Theme-Auswahl -->
      <v-select
        v-model="settings.theme"
        :items="themes"
        label="Theme"
        @change="updateSettings"
      ></v-select>

      <!-- Dunkelmodus -->
      <v-switch
        v-model="settings.darkMode"
        label="Dunkelmodus"
        :hint="settings.darkMode ? 'Dunkelmodus aktiviert.' : 'Dunkelmodus deaktiviert.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Benachrichtigungen -->
      <v-switch
        v-model="settings.notifications"
        label="Benachrichtigungen aktivieren"
        :hint="settings.notifications ? 'Benachrichtigungen werden aktiviert.' : 'Benachrichtigungen werden deaktiviert.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Email-Benachrichtigungen -->
      <v-switch
        v-model="settings.emailNotifications"
        label="E-Mail-Benachrichtigungen aktivieren"
        :hint="settings.emailNotifications ? 'E-Mail-Benachrichtigungen werden aktiviert.' : 'E-Mail-Benachrichtigungen werden deaktiviert.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Standortfreigabe -->
      <v-switch
        v-model="settings.locationAccess"
        label="Standortfreigabe"
        :hint="settings.locationAccess ? 'Standort wird geteilt.' : 'Standort wird nicht geteilt.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Verkehrswarnungen -->
      <v-switch
        v-model="settings.trafficAlerts"
        label="Verkehrswarnungen aktivieren"
        :hint="settings.trafficAlerts ? 'Verkehrswarnungen werden angezeigt.' : 'Verkehrswarnungen werden deaktiviert.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Kalenderintegration -->
      <v-switch
        v-model="settings.calendarIntegration"
        label="Kalenderintegration"
        :hint="settings.calendarIntegration ? 'Kalender ist verbunden.' : 'Kalender ist nicht verbunden.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Automatische Updates -->
      <v-switch
        v-model="settings.autoUpdate"
        label="Automatische Updates"
        :hint="settings.autoUpdate ? 'Updates werden automatisch installiert.' : 'Updates müssen manuell installiert werden.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Zwei-Faktor-Authentifizierung -->
      <v-switch
        v-model="settings.twoFactorAuth"
        label="Zwei-Faktor-Authentifizierung"
        :hint="settings.twoFactorAuth ? 'Zusätzliche Sicherheit aktiviert.' : 'Keine zusätzliche Sicherheit.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Datenschutz-Einstellungen -->
      <v-switch
        v-model="settings.dataTracking"
        label="Datenverfolgung"
        :hint="settings.dataTracking ? 'Daten werden verfolgt.' : 'Datenverfolgung deaktiviert.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Passwort ändern -->
      <v-text-field
        v-model="settings.password"
        label="Passwort"
        type="password"
        @input="updateSettings"
      ></v-text-field>

      <!-- Sicherheitseinstellungen -->
      <v-switch
        v-model="settings.securePayments"
        label="Sichere Zahlungen"
        :hint="settings.securePayments ? 'Zahlungen sind sicher.' : 'Unsichere Zahlungen sind aktiv.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Zahlungsoptionen -->
      <v-select
        v-model="settings.paymentMethod"
        :items="paymentOptions"
        label="Zahlungsmethode"
        @change="updateSettings"
      ></v-select>

      <!-- Mobilgeräte-Synchronisation -->
      <v-switch
        v-model="settings.mobileSync"
        label="Mobilgeräte synchronisieren"
        :hint="settings.mobileSync ? 'Mobilgeräte sind synchronisiert.' : 'Keine Synchronisation.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Benutzername -->
      <v-text-field
        v-model="settings.userName"
        label="Benutzername"
        @input="updateSettings"
      ></v-text-field>

      <!-- Zeitzone -->
      <v-select
        v-model="settings.timeZone"
        :items="timeZones"
        label="Zeitzone"
        @change="updateSettings"
      ></v-select>

      <!-- Datenschutz für akademische Daten -->
      <v-switch
        v-model="settings.academicDataPrivacy"
        label="Privatsphäre für akademische Daten"
        :hint="settings.academicDataPrivacy ? 'Akademische Daten sind privat.' : 'Akademische Daten werden geteilt.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Feedbackoptionen -->
      <v-switch
        v-model="settings.feedbackOptions"
        label="Feedback zur App"
        :hint="settings.feedbackOptions ? 'Feedback wird an die Entwickler gesendet.' : 'Kein Feedback gesendet.'"
        persistent-hint
        @change="updateSettings"
      ></v-switch>

      <!-- Zurücksetzen der Einstellungen -->
      <v-btn color="red" @click="resetSettings">Einstellungen zurücksetzen</v-btn>
    </v-form>

    <!-- Erfolgsmeldung -->
    <v-alert v-if="successMessage" type="success">{{ successMessage }}</v-alert>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        language: localStorage.getItem("language") || "Deutsch",
        theme: localStorage.getItem("theme") || "Hell",
        darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
        notifications: JSON.parse(localStorage.getItem("notifications")) || false,
        emailNotifications: JSON.parse(localStorage.getItem("emailNotifications")) || false,
        locationAccess: JSON.parse(localStorage.getItem("locationAccess")) || false,
        trafficAlerts: JSON.parse(localStorage.getItem("trafficAlerts")) || false,
        calendarIntegration: JSON.parse(localStorage.getItem("calendarIntegration")) || false,
        autoUpdate: JSON.parse(localStorage.getItem("autoUpdate")) || true,
        twoFactorAuth: JSON.parse(localStorage.getItem("twoFactorAuth")) || false,
        dataTracking: JSON.parse(localStorage.getItem("dataTracking")) || false,
        password: localStorage.getItem("password") || "",
        securePayments: JSON.parse(localStorage.getItem("securePayments")) || true,
        paymentMethod: localStorage.getItem("paymentMethod") || "",
        mobileSync: JSON.parse(localStorage.getItem("mobileSync")) || true,
        userName: localStorage.getItem("userName") || "",
        timeZone: localStorage.getItem("timeZone") || "GMT+1",
        academicDataPrivacy: JSON.parse(localStorage.getItem("academicDataPrivacy")) || true,
        feedbackOptions: JSON.parse(localStorage.getItem("feedbackOptions")) || true,
      },
      languages: ["Deutsch", "Englisch", "Französisch", "Spanisch"],
      themes: ["Hell", "Dunkel"],
      timeZones: ["GMT-8", "GMT-5", "GMT+1", "GMT+2"],
      paymentOptions: ["Kreditkarte", "PayPal", "Überweisung", "Lastschrift"],
      successMessage: "",
    };
  },
  methods: {
    updateSettings() {
      // Einstellungen speichern
      localStorage.setItem("language", this.settings.language);
      localStorage.setItem("theme", this.settings.theme);
      localStorage.setItem("darkMode", JSON.stringify(this.settings.darkMode));
      localStorage.setItem("notifications", JSON.stringify(this.settings.notifications));
      localStorage.setItem("emailNotifications", JSON.stringify(this.settings.emailNotifications));
      localStorage.setItem("locationAccess", JSON.stringify(this.settings.locationAccess));
      localStorage.setItem("trafficAlerts", JSON.stringify(this.settings.trafficAlerts));
      localStorage.setItem("calendarIntegration", JSON.stringify(this.settings.calendarIntegration));
      localStorage.setItem("autoUpdate", JSON.stringify(this.settings.autoUpdate));
      localStorage.setItem("twoFactorAuth", JSON.stringify(this.settings.twoFactorAuth));
      localStorage.setItem("dataTracking", JSON.stringify(this.settings.dataTracking));
      localStorage.setItem("password", this.settings.password);
      localStorage.setItem("securePayments", JSON.stringify(this.settings.securePayments));
      localStorage.setItem("paymentMethod", this.settings.paymentMethod);
      localStorage.setItem("mobileSync", JSON.stringify(this.settings.mobileSync));
      localStorage.setItem("userName", this.settings.userName);
      localStorage.setItem("timeZone", this.settings.timeZone);
      localStorage.setItem("academicDataPrivacy", JSON.stringify(this.settings.academicDataPrivacy));
      localStorage.setItem("feedbackOptions", JSON.stringify(this.settings.feedbackOptions));
      
      this.successMessage = "Einstellungen wurden gespeichert!";
      setTimeout(() => this.successMessage = "", 3000);
    },
    resetSettings() {
      localStorage.clear();
      this.settings = {
        language: "Deutsch",
        theme: "Hell",
        darkMode: false,
        notifications: false,
        emailNotifications: false,
        locationAccess: false,
        trafficAlerts: false,
        calendarIntegration: false,
        autoUpdate: true,
        twoFactorAuth: false,
        dataTracking: false,
        password: "",
        securePayments: true,
        paymentMethod: "",
        mobileSync: true,
        userName: "",
        timeZone: "GMT+1",
        academicDataPrivacy: true,
        feedbackOptions: true,
      };
      this.successMessage = "Einstellungen wurden zurückgesetzt!";
      setTimeout(() => this.successMessage = "", 3000);
    },
  },
};
</script>

<style scoped>
.v-alert {
  margin-top: 20px;
}
</style>
