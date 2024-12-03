<template>
  <v-app>
    <v-main>
      <!-- Hintergrundbild mit Overlay -->
      <div
        style="
          position: relative;
          background-image: url('https://cdn0.scrvt.com/a534b4b72e47031e7c1755abc55cf709/9d3cfd1d9ecd8bfe/2cf83d1df7d2/v/6909d8130b23/uni-bayreuth-pm-110-campus-sonnenuntergang.jpg');
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <div
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 1;
          "
        ></div>

        <!-- Header -->
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            z-index: 2;
          "
        >
          <div style="display: flex; align-items: center">
            <img
              src="@/assets/Pendlr.png"
              alt="Pendlr Logo"
              style="width: 50px; margin-right: 10px"
            />
            <h1 style="color: white; font-size: 2em; margin: 0">Pendlr</h1>
          </div>
          <v-btn
            icon
            @click="toggleLanguagePopup"
            style="background-color: white; border-radius: 50%; padding: 5px"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
              alt="Deutsch"
              style="width: 30px; border-radius: 50%"
            />
          </v-btn>
        </div>

        <!-- Hauptinhalt -->
        <div
          style="
            z-index: 2;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          "
        >
          <h2 style="font-size: 2.5em; color: white; margin-bottom: 20px">
            Von 0 auf Fahrgemeinschaft in einem Swipe!
          </h2>
          <div style="display: flex; justify-content: center; gap: 15px">
            <v-btn
              @click="openLoginPopup"
              style="
                font-size: 1.2em;
                height: 50px;
                background-color: #008556;
                color: white;
                width: 200px;
                display: flex;
                align-items: center;
              "
            >
              Login
            </v-btn>
            <v-btn
              @click="openRegisterPopup"
              style="
                font-size: 1.2em;
                height: 50px;
                background-color: #008556;
                color: white;
                width: 200px;
                display: flex;
                align-items: center;
              "
            >
              Registrieren
            </v-btn>
          </div>
        </div>

        <!-- Fußzeile -->
        <footer
  style="
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    text-align: center;
    padding: 20px 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 2;
  "
>
  <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px">
    <!-- Rechtliches -->
    <div style="text-align: left;">
      <h4 style="margin-bottom: 10px; text-decoration: underline;">Rechtliches</h4>
      <p><a href="#datenschutz" style="color: white; text-decoration: none;">Datenschutz</a></p>
      <p><a href="#agb" style="color: white; text-decoration: none;">AGB</a></p>
    </div>

    <!-- Social -->
    <div style="text-align: left;">
      <h4 style="margin-bottom: 10px; text-decoration: underline;">Social</h4>
      <p><a href="#instagram" style="color: white; text-decoration: none;">Instagram</a></p>
      <p><a href="#youtube" style="color: white; text-decoration: none;">YouTube</a></p>
    </div>

    <!-- Weitere -->
    <div style="text-align: left;">
      <h4 style="margin-bottom: 10px; text-decoration: underline;">Weitere</h4>
      <p><a href="#faq" style="color: white; text-decoration: none;">FAQ</a></p>
      <p><a href="#kontakt" style="color: white; text-decoration: none;">Kontakt</a></p>
    </div>
  </div>

  <!-- Copyright -->
  <p style="margin-top: 20px;">© 2024 Universität Bayreuth, Alle Rechte vorbehalten</p>
</footer>
      </div>

      <!-- Popups -->
      <div
        v-if="isAnyPopupOpen"
        @click="closeAllPopups"
        style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
        "
      ></div>

      <!-- Login Popup -->
      <div
        v-if="isLoginPopupOpen"
        style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1000;
          padding: 20px;
          background: #333;
          border-radius: 10px;
          width: 400px;
          color: white;
          text-align: center;
        "
      >
        <div class="popup-header">
          <button @click="closeLoginPopup" class="close-btn">✖</button>
          <h2>Login</h2>
        </div>
        <form class="popup-form">
          <div class="form-group">
            <label for="email">E-Mail:</label>
            <input
              v-model="loginEmail"
              type="email"
              id="email"
              placeholder="Max.Mustermann@uni-bayreuth.de"
              class="form-input"
              style="color: white"
            />
          </div>
          <div class="form-group">
            <label for="password">Passwort:</label>
            <div style="position: relative">
              <input
                v-model="loginPassword"
                :type="loginPasswordType"
                id="password"
                placeholder="StrengGeheimesPasswort$1975"
                class="form-input"
                style="color: white"
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                style="
                  position: absolute;
                  top: 50%;
                  right: 10px;
                  transform: translateY(-50%);
                  background: none;
                  border: none;
                  color: white;
                  font-size: 1.2em;
                  cursor: pointer;
                "
              >
                {{ loginPasswordType === "password" ? "👁️" : "🙈" }}
              </button>
            </div>
          </div>
          <button type="submit" class="login-btn">Login</button>
        </form>
      </div>

      <!-- Registrierungs-Popup -->
      <div
        v-if="isRegisterPopupOpen"
        style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1000;
          padding: 20px;
          background: #333;
          border-radius: 10px;
          width: 400px;
          color: white;
          text-align: center;
        "
      >
        <div class="popup-header">
          <button @click="closeRegisterPopup" class="close-btn">✖</button>
          <h2>Registrieren</h2>
        </div>
        <form class="popup-form" @submit.prevent="registerUser">
          <!-- Profilbild hochladen -->
          <div class="form-group">
            <label for="profile-image">Profilbild:</label>
            <input
              type="file"
              id="profile-image"
              @change="handleFileChange"
              accept="image/*"
              class="form-input"
              style="color: white"
            />
            <div v-if="profileImage" style="margin-top: 10px">
              <img
                :src="profileImage"
                alt="Profilbild"
                style="
                  width: 100px;
                  height: 100px;
                  object-fit: cover;
                  border-radius: 50%;
                "
              />
            </div>
          </div>

          <!-- Benutzername -->
          <div class="form-group">
            <label for="username">Benutzername:</label>
            <input
              v-model="registerUsername"
              type="text"
              id="username"
              placeholder="MaxMustermann"
              class="form-input"
              style="color: white"
            />
          </div>

          <!-- E-Mail -->
          <div class="form-group">
            <label for="email">E-Mail:</label>
            <input
              v-model="registerEmail"
              type="email"
              id="email"
              placeholder="Max.Mustermann@uni-bayreuth.de"
              class="form-input"
              style="color: white"
            />
          </div>

          <!-- Passwort -->
          <div class="form-group">
            <label for="password">Passwort:</label>
            <input
              v-model="registerPassword"
              type="password"
              id="password"
              placeholder="Passwort eingeben"
              class="form-input"
              style="color: white"
            />
          </div>

          <!-- Passwort Bestätigung -->
          <div class="form-group">
            <label for="confirm-password">Passwort bestätigen:</label>
            <input
              v-model="confirmPassword"
              type="password"
              id="confirm-password"
              placeholder="Passwort wiederholen"
              class="form-input"
              style="color: white"
            />
          </div>

          <button type="submit" class="register-btn">Registrieren</button>
        </form>
      </div>

      <!-- Sprachumschaltungs-Overlay (falls aktiv) -->
      <div v-if="isLanguagePopupOpen" class="language-popup">
        <div
          style="
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          "
        >
          <h3>Sprache auswählen</h3>
          <div class="language-item" @click="closeLanguagePopup">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
              alt="Deutsch"
              class="language-img"
            />
            <p>Deutsch</p>
          </div>
          <div class="language-item" @click="closeLanguagePopup">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
              alt="English"
              class="language-img"
            />
            <p>English</p>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isLoginPopupOpen: false,
      isRegisterPopupOpen: false,
      isLanguagePopupOpen: false,
      loginEmail: "",
      loginPassword: "",
      loginPasswordType: "password",
      registerEmail: "",
      registerPassword: "",
      confirmPassword: "",
      registerUsername: "",
      profileImage: null,
    };
  },
  computed: {
    isAnyPopupOpen() {
      return (
        this.isLoginPopupOpen ||
        this.isRegisterPopupOpen ||
        this.isLanguagePopupOpen
      );
    },
  },
  methods: {
    openLoginPopup() {
      this.isLoginPopupOpen = true;
    },
    closeLoginPopup() {
      this.isLoginPopupOpen = false;
    },
    openRegisterPopup() {
      this.isRegisterPopupOpen = true;
    },
    closeRegisterPopup() {
      this.isRegisterPopupOpen = false;
    },
    closeAllPopups() {
      this.isLoginPopupOpen = false;
      this.isRegisterPopupOpen = false;
      this.isLanguagePopupOpen = false;
    },
    togglePasswordVisibility() {
      this.loginPasswordType =
        this.loginPasswordType === "password" ? "text" : "password";
    },
    toggleLanguagePopup() {
      this.isLanguagePopupOpen = !this.isLanguagePopupOpen;
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.profileImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    registerUser() {
      if (this.registerPassword === this.confirmPassword) {
        alert("Registrierung erfolgreich!");
        this.closeRegisterPopup();
      } else {
        alert("Die Passwörter stimmen nicht überein!");
      }
    },
  },
};
</script>

<style scoped>
/* Gemeinsame Styles */
.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
}
.form-group {
  margin-bottom: 15px;
  text-align: left;
}
.form-input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  color: white;
}
.forgot-password {
  font-size: 0.9em;
  color: white;
  text-decoration: underline;
  margin-top: 5px;
  display: inline-block;
}
.login-btn,
.register-btn {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
}
.language-options {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.language-item {
  text-align: center;
}
.language-img {
  width: 80px;
  height: 50px;
  border-radius: 5px;
}
.language-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
footer {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 2;
}
</style>