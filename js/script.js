/* =========================================================
   IMPERA — Alpha 0.2
   Ana Menü ve Ülke Seçim Sistemi
   ========================================================= */

"use strict";

/* ---------- Sayfa elemanları ---------- */

const mainMenu = document.getElementById("mainMenu");
const countrySelect = document.getElementById("countrySelect");

/* ---------- Ülke bilgileri ---------- */

const countries = {
    Türkiye: {
        flag: "🇹🇷",
        leader: "Mustafa Kemal Atatürk",
        capital: "Ankara",
        population: "17 milyon",
        industry: 32,
        army: 38,
        economy: 45
    },

    Almanya: {
        flag: "🇩🇪",
        leader: "Adolf Hitler",
        capital: "Berlin",
        population: "67 milyon",
        industry: 82,
        army: 78,
        economy: 76
    },

    Fransa: {
        flag: "🇫🇷",
        leader: "Albert Lebrun",
        capital: "Paris",
        population: "41 milyon",
        industry: 68,
        army: 65,
        economy: 72
    },

    İtalya: {
        flag: "🇮🇹",
        leader: "Benito Mussolini",
        capital: "Roma",
        population: "43 milyon",
        industry: 54,
        army: 61,
        economy: 57
    },

    İngiltere: {
        flag: "🇬🇧",
        leader: "George V",
        capital: "Londra",
        population: "47 milyon",
        industry: 86,
        army: 70,
        economy: 89
    },

    Rusya: {
        flag: "🇷🇺",
        leader: "Josef Stalin",
        capital: "Moskova",
        population: "168 milyon",
        industry: 74,
        army: 88,
        economy: 69
    },

    Amerika: {
        flag: "🇺🇸",
        leader: "Franklin D. Roosevelt",
        capital: "Washington",
        population: "128 milyon",
        industry: 94,
        army: 48,
        economy: 91
    },

    Japonya: {
        flag: "🇯🇵",
        leader: "Hirohito",
        capital: "Tokyo",
        population: "69 milyon",
        industry: 65,
        army: 75,
        economy: 63
    }
};

/* ---------- Yeni oyun ---------- */

function newGame() {
    mainMenu.style.display = "none";
    countrySelect.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ---------- Devam et ---------- */

function continueGame() {
    const savedCountry = localStorage.getItem("imperaSelectedCountry");

    if (!savedCountry) {
        alert("Henüz kayıtlı bir oyun bulunmuyor.");
        return;
    }

    chooseCountry(savedCountry);
}

/* ---------- Ülke seçimi ---------- */

function chooseCountry(countryName) {
    const country = countries[countryName];

    if (!country) {
        alert("Bu ülkenin verileri henüz hazırlanmadı.");
        return;
    }

    localStorage.setItem("imperaSelectedCountry", countryName);

    showCountryConfirmation(countryName, country);
}

/* ---------- Seçim onay ekranı ---------- */

function showCountryConfirmation(countryName, country) {
    countrySelect.innerHTML = `
        <div class="selection-confirmation">

            <button
                class="back-button"
                onclick="returnToCountrySelection()"
                aria-label="Ülke seçimine dön"
            >
                ← Geri
            </button>

            <div class="selected-country-card">

                <div class="selected-flag">
                    ${country.flag}
                </div>

                <p class="selected-label">
                    Seçilen Ülke
                </p>

                <h1>
                    ${countryName}
                </h1>

                <div class="country-details">

                    <div class="detail-row">
                        <span>Lider</span>
                        <strong>${country.leader}</strong>
                    </div>

                    <div class="detail-row">
                        <span>Başkent</span>
                        <strong>${country.capital}</strong>
                    </div>

                    <div class="detail-row">
                        <span>Nüfus</span>
                        <strong>${country.population}</strong>
                    </div>

                    <div class="detail-row">
                        <span>Sanayi</span>
                        <strong>${country.industry}</strong>
                    </div>

                    <div class="detail-row">
                        <span>Ordu</span>
                        <strong>${country.army}</strong>
                    </div>

                    <div class="detail-row">
                        <span>Ekonomi</span>
                        <strong>${country.economy}</strong>
                    </div>

                </div>

                <button
                    class="start-game-button"
                    onclick="startGame('${countryName}')"
                >
                    Oyuna Başla
                </button>

            </div>

        </div>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ---------- Ülke listesine dönüş ---------- */

function returnToCountrySelection() {
    window.location.reload();
}

/* ---------- Oyunu başlat ---------- */

function startGame(countryName) {
    const country = countries[countryName];

    document.body.innerHTML = `
        <div class="game-start-screen">

            <div class="game-start-content">

                <div class="game-start-flag">
                    ${country.flag}
                </div>

                <p>
                    1 Ocak 1936
                </p>

                <h1>
                    ${countryName}
                </h1>

                <h2>
                    Tarihin yönü artık senin kararlarına bağlı.
                </h2>

                <div class="game-start-loader">
                    <span></span>
                </div>

                <p class="game-start-message">
                    Dünya haritası hazırlanıyor...
                </p>

            </div>

        </div>
    `;

    setTimeout(() => {
        alert(
            `${countryName} ile oyun başlatıldı.\n\n` +
            "Bir sonraki geliştirme aşamasında gerçek oyun ekranı ve harita eklenecek."
        );
    }, 1800);
}

/* ---------- Ayarlar ---------- */

function openSettings() {
    alert(
        "Ayarlar bölümü hazırlanıyor.\n\n" +
        "Yakında ses, müzik, dil ve grafik seçenekleri eklenecek."
    );
}

/* ---------- Hakkında ---------- */

function openCredits() {
    alert(
        "IMPERA — Alpha 0.2\n\n" +
        "Tarayıcı tabanlı büyük strateji oyunu.\n" +
        "Tarihi yeniden yaz. Dünyayı yönet."
    );
}

/* ---------- Klavye desteği ---------- */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && countrySelect.classList.contains("active")) {
        window.location.reload();
    }
});

/* ---------- Sayfa hazır olduğunda ---------- */

document.addEventListener("DOMContentLoaded", () => {
    console.log("IMPERA Alpha 0.2 başarıyla yüklendi.");
});