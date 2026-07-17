/* =========================================================
   IMPERA — Alpha 0.3
   Ana Oyun Motoru
   ========================================================= */

"use strict";

/* =========================================================
   HTML ELEMANLARI
   ========================================================= */

const mainMenu = document.getElementById("mainMenu");
const countrySelect = document.getElementById("countrySelect");
const countryConfirmation = document.getElementById("countryConfirmation");
const confirmationContent = document.getElementById("confirmationContent");
const gameScreen = document.getElementById("gameScreen");
const pauseMenu = document.getElementById("pauseMenu");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const worldMap = document.getElementById("worldMap");

/* =========================================================
   ÜLKE VERİLERİ
   ========================================================= */

const countries = {
    Türkiye: {
        name: "Türkiye",
        mapName: "Türkiye",
        flag: "🇹🇷",
        leader: "Mustafa Kemal Atatürk",
        leaderSymbol: "★",
        capital: "Ankara",
        government: "Cumhuriyet",
        ideology: "Ulusal Kalkınma",
        population: 17,
        populationText: "17M",
        industry: 32,
        army: 38,
        economy: 45,
        treasury: 120,
        stability: 72,
        diplomacy: 45,
        focus: "Sanayileşme Hamlesi",
        focusDays: 70,
        focusProgress: 35
    },

    Almanya: {
        name: "Almanya",
        mapName: "Almanya",
        flag: "🇩🇪",
        leader: "Adolf Hitler",
        leaderSymbol: "◆",
        capital: "Berlin",
        government: "Tek Parti Devleti",
        ideology: "Milliyetçi Otoriterlik",
        population: 67,
        populationText: "67M",
        industry: 82,
        army: 78,
        economy: 76,
        treasury: 210,
        stability: 68,
        diplomacy: 52,
        focus: "Yeniden Silahlanma",
        focusDays: 56,
        focusProgress: 48
    },

    Fransa: {
        name: "Fransa",
        mapName: "Fransa",
        flag: "🇫🇷",
        leader: "Albert Lebrun",
        leaderSymbol: "⚜",
        capital: "Paris",
        government: "Parlamenter Cumhuriyet",
        ideology: "Demokratik Cumhuriyet",
        population: 41,
        populationText: "41M",
        industry: 68,
        army: 65,
        economy: 72,
        treasury: 185,
        stability: 59,
        diplomacy: 75,
        focus: "Savunma Hatlarını Güçlendir",
        focusDays: 63,
        focusProgress: 29
    },

    İtalya: {
        name: "İtalya",
        mapName: "İtalya",
        flag: "🇮🇹",
        leader: "Benito Mussolini",
        leaderSymbol: "✦",
        capital: "Roma",
        government: "Otoriter Rejim",
        ideology: "Faşist Yönetim",
        population: 43,
        populationText: "43M",
        industry: 54,
        army: 61,
        economy: 57,
        treasury: 145,
        stability: 66,
        diplomacy: 48,
        focus: "Akdeniz Hakimiyeti",
        focusDays: 49,
        focusProgress: 42
    },

    İngiltere: {
        name: "Birleşik Krallık",
        mapName: "İngiltere",
        flag: "🇬🇧",
        leader: "George V",
        leaderSymbol: "♛",
        capital: "Londra",
        government: "Anayasal Monarşi",
        ideology: "Parlamenter Demokrasi",
        population: 47,
        populationText: "47M",
        industry: 86,
        army: 70,
        economy: 89,
        treasury: 280,
        stability: 81,
        diplomacy: 92,
        focus: "İmparatorluğu Savun",
        focusDays: 84,
        focusProgress: 21
    },

    Rusya: {
        name: "Sovyetler Birliği",
        mapName: "Rusya",
        flag: "🇷🇺",
        leader: "Josef Stalin",
        leaderSymbol: "★",
        capital: "Moskova",
        government: "Sovyet Devleti",
        ideology: "Komünizm",
        population: 168,
        populationText: "168M",
        industry: 74,
        army: 88,
        economy: 69,
        treasury: 195,
        stability: 63,
        diplomacy: 44,
        focus: "Beş Yıllık Plan",
        focusDays: 91,
        focusProgress: 37
    },

    Amerika: {
        name: "Amerika Birleşik Devletleri",
        mapName: "Amerika",
        flag: "🇺🇸",
        leader: "Franklin D. Roosevelt",
        leaderSymbol: "★",
        capital: "Washington",
        government: "Federal Cumhuriyet",
        ideology: "Liberal Demokrasi",
        population: 128,
        populationText: "128M",
        industry: 94,
        army: 48,
        economy: 91,
        treasury: 340,
        stability: 76,
        diplomacy: 78,
        focus: "Yeni Düzen Programı",
        focusDays: 77,
        focusProgress: 31
    },

    Japonya: {
        name: "Japonya",
        mapName: "Japonya",
        flag: "🇯🇵",
        leader: "Hirohito",
        leaderSymbol: "☀",
        capital: "Tokyo",
        government: "İmparatorluk",
        ideology: "Askerî Monarşi",
        population: 69,
        populationText: "69M",
        industry: 65,
        army: 75,
        economy: 63,
        treasury: 175,
        stability: 74,
        diplomacy: 51,
        focus: "Pasifik Hakimiyeti",
        focusDays: 68,
        focusProgress: 40
    }
};

/* =========================================================
   HARİTA BÖLGELERİ
   ========================================================= */

const mapRegions = {
    Türkiye: {
        region: "Ankara",
        owner: "Türkiye",
        population: "1.2M",
        industry: 8,
        position: {
            left: "71%",
            top: "62%"
        }
    },

    Almanya: {
        region: "Berlin",
        owner: "Almanya",
        population: "4.2M",
        industry: 18,
        position: {
            left: "48%",
            top: "37%"
        }
    },

    Fransa: {
        region: "Paris",
        owner: "Fransa",
        population: "5.1M",
        industry: 14,
        position: {
            left: "36%",
            top: "47%"
        }
    },

    İtalya: {
        region: "Roma",
        owner: "İtalya",
        population: "2.9M",
        industry: 10,
        position: {
            left: "51%",
            top: "63%"
        }
    },

    İngiltere: {
        region: "Londra",
        owner: "Birleşik Krallık",
        population: "8.1M",
        industry: 17,
        position: {
            left: "27%",
            top: "32%"
        }
    },

    Rusya: {
        region: "Moskova",
        owner: "Sovyetler Birliği",
        population: "3.6M",
        industry: 16,
        position: {
            left: "73%",
            top: "31%"
        }
    }
};

/* =========================================================
   OYUN DURUMU
   ========================================================= */

const gameState = {
    selectedCountry: null,
    selectedMapCountry: "Türkiye",

    date: new Date(1936, 0, 1),

    speed: 0,
    timer: null,
    paused: true,

    resources: {
        treasury: 0,
        industry: 0,
        army: 0,
        population: 0,
        stability: 0
    }
};

/* =========================================================
   EKRAN YÖNETİMİ
   ========================================================= */

function hideAllScreens() {
    mainMenu.style.display = "none";

    countrySelect.classList.remove("active");
    countryConfirmation.classList.remove("active");
    gameScreen.classList.remove("active");
    pauseMenu.classList.remove("active");
    modalOverlay.classList.remove("active");
}

function showMainMenu() {
    hideAllScreens();

    mainMenu.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function newGame() {
    hideAllScreens();

    countrySelect.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function returnToMainMenu() {
    stopGameTimer();
    showMainMenu();
}

function returnToCountrySelection() {
    hideAllScreens();

    countrySelect.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* =========================================================
   ÜLKE SEÇİMİ
   ========================================================= */

function chooseCountry(countryKey) {
    const country = countries[countryKey];

    if (!country) {
        alert("Bu ülkenin verileri henüz eklenmedi.");
        return;
    }

    gameState.selectedCountry = countryKey;

    hideAllScreens();

    countryConfirmation.classList.add("active");

    confirmationContent.innerHTML = `
        <div class="selected-country-card">

            <div class="selected-flag">
                ${country.flag}
            </div>

            <p class="selected-label">
                Seçilen Ülke
            </p>

            <h1>
                ${country.name}
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
                    <span>Yönetim</span>
                    <strong>${country.government}</strong>
                </div>

                <div class="detail-row">
                    <span>Nüfus</span>
                    <strong>${country.populationText}</strong>
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

                <div class="detail-row">
                    <span>İstikrar</span>
                    <strong>%${country.stability}</strong>
                </div>

            </div>

            <button
                type="button"
                class="start-game-button"
                onclick="startGame('${countryKey}')"
            >
                Oyuna Başla
            </button>

        </div>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* =========================================================
   OYUNU BAŞLATMA
   ========================================================= */

function startGame(countryKey) {
    const country = countries[countryKey];

    if (!country) {
        alert("Ülke bilgileri bulunamadı.");
        return;
    }

    gameState.selectedCountry = countryKey;
    gameState.selectedMapCountry = country.mapName;

    gameState.date = new Date(1936, 0, 1);

    gameState.resources = {
        treasury: country.treasury,
        industry: country.industry,
        army: country.army,
        population: country.population,
        stability: country.stability
    };

    hideAllScreens();

    const loadingScreen = document.createElement("section");

    loadingScreen.className = "game-start-screen";

    loadingScreen.innerHTML = `
        <div class="game-start-content">

            <div class="game-start-flag">
                ${country.flag}
            </div>

            <p>
                1 Ocak 1936
            </p>

            <h1>
                ${country.name}
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
    `;

    document.body.appendChild(loadingScreen);

    window.setTimeout(() => {
        loadingScreen.remove();

        openGameScreen(countryKey);
    }, 1800);
}

function openGameScreen(countryKey) {
    const country = countries[countryKey];

    hideAllScreens();

    gameScreen.classList.add("active");

    updateNationInterface(country);
    updateResourceInterface();
    updateDateInterface();
    highlightPlayerCountry(country.mapName);
    selectMapCountry(country.mapName);

    addEvent(
        "🌍",
        "Yeni Bir Dönem",
        `${country.name}, 1936 yılına yeni hedeflerle başladı.`,
        "1 Ocak 1936",
        true
    );

    setGameSpeed(0);
}

/* =========================================================
   ÜLKE ARAYÜZÜ
   ========================================================= */

function updateNationInterface(country) {
    document.getElementById("playerFlag").textContent = country.flag;
    document.getElementById("playerCountryName").textContent = country.name;
    document.getElementById("playerGovernment").textContent = country.government;

    document.getElementById("leaderSymbol").textContent =
        country.leaderSymbol;

    document.getElementById("leaderName").textContent =
        country.leader;

    document.getElementById("capitalName").textContent =
        country.capital;

    document.getElementById("governmentName").textContent =
        country.government;

    document.getElementById("ideologyName").textContent =
        country.ideology;

    document.getElementById("diplomacyPower").textContent =
        country.diplomacy;

    document.getElementById("nationalFocus").textContent =
        country.focus;

    document.getElementById("focusDays").textContent =
        `${country.focusDays} gün kaldı`;

    document.getElementById("focusProgress").style.width =
        `${country.focusProgress}%`;
}

function updateResourceInterface() {
    document.getElementById("treasuryValue").textContent =
        Math.floor(gameState.resources.treasury);

    document.getElementById("industryValue").textContent =
        gameState.resources.industry;

    document.getElementById("populationValue").textContent =
        `${gameState.resources.population.toFixed(1)}M`;

    document.getElementById("armyValue").textContent =
        gameState.resources.army;

    document.getElementById("stabilityValue").textContent =
        `${Math.floor(gameState.resources.stability)}%`;
}

/* =========================================================
   HARİTA SİSTEMİ
   ========================================================= */

function highlightPlayerCountry(countryMapName) {
    document
        .querySelectorAll(".map-country")
        .forEach((countryElement) => {
            countryElement.classList.remove("player-country");
        });

    const playerMapElement = document.querySelector(
        `[data-country="${countryMapName}"]`
    );

    if (playerMapElement) {
        playerMapElement.classList.add("player-country");
    }
}

function selectMapCountry(countryMapName) {
    const region = mapRegions[countryMapName];

    if (!region) {
        alert("Bu bölgenin ayrıntılı verileri henüz hazırlanmadı.");
        return;
    }

    gameState.selectedMapCountry = countryMapName;

    document
        .querySelectorAll(".map-country")
        .forEach((countryElement) => {
            countryElement.classList.remove("selected");
        });

    const selectedMapElement = document.querySelector(
        `[data-country="${countryMapName}"]`
    );

    if (selectedMapElement) {
        selectedMapElement.classList.add("selected");
    }

    document.getElementById("selectedRegionName").textContent =
        region.region;

    document.getElementById("selectedRegionOwner").textContent =
        region.owner;

    document.getElementById("selectedRegionPopulation").textContent =
        region.population;

    document.getElementById("selectedRegionIndustry").textContent =
        region.industry;

    const marker = document.getElementById("selectedProvinceMarker");

    marker.style.left = region.position.left;
    marker.style.top = region.position.top;
}

function changeMapMode(mode, buttonElement) {
    const allowedModes = [
        "political",
        "economy",
        "military",
        "diplomacy"
    ];

    if (!allowedModes.includes(mode)) {
        return;
    }

    worldMap.classList.remove(
        "political-mode",
        "economy-mode",
        "military-mode",
        "diplomacy-mode"
    );

    worldMap.classList.add(`${mode}-mode`);

    document
        .querySelectorAll(".map-toolbar button")
        .forEach((button) => {
            button.classList.remove("active");
        });

    if (buttonElement) {
        buttonElement.classList.add("active");
    }
}

function openRegionPanel() {
    const region = mapRegions[gameState.selectedMapCountry];

    if (!region) {
        return;
    }

    showGameModal(`
        <h2>${region.region} Bölgesi</h2>

        <p>
            ${region.region}, ${region.owner} yönetiminde bulunan
            önemli bir stratejik bölgedir.
        </p>

        <div class="modal-stat-grid">

            <div class="modal-stat-card">
                <small>Sahibi</small>
                <strong>${region.owner}</strong>
            </div>

            <div class="modal-stat-card">
                <small>Nüfus</small>
                <strong>${region.population}</strong>
            </div>

            <div class="modal-stat-card">
                <small>Sanayi</small>
                <strong>${region.industry}</strong>
            </div>

            <div class="modal-stat-card">
                <small>Altyapı</small>
                <strong>Seviye 3</strong>
            </div>

        </div>
    `);
}

/* =========================================================
   TARİH VE ZAMAN SİSTEMİ
   ========================================================= */

function nextTurn() {
    advanceGameDay();
}

function advanceGameDay() {
    gameState.date.setDate(gameState.date.getDate() + 1);

    gameState.resources.treasury +=
        gameState.resources.industry * 0.08;

    if (gameState.date.getDate() === 1) {
        gameState.resources.population += 0.05;
    }

    if (Math.random() < 0.035) {
        createRandomEvent();
    }

    updateResourceInterface();
    updateDateInterface();
}

function updateDateInterface() {
    const dayNames = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ];

    const monthNames = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
    ];

    const dayName = dayNames[gameState.date.getDay()];

    const dateText =
        `${gameState.date.getDate()} ` +
        `${monthNames[gameState.date.getMonth()]} ` +
        `${gameState.date.getFullYear()}`;

    document.getElementById("gameDayName").textContent = dayName;
    document.getElementById("gameDate").textContent = dateText;
}

function setGameSpeed(speed) {
    stopGameTimer();

    gameState.speed = speed;

    document
        .querySelectorAll(".time-controls > button")
        .forEach((button) => {
            button.classList.remove("active");
        });

    if (speed === 0) {
        gameState.paused = true;
        return;
    }

    gameState.paused = false;

    const speedIntervals = {
        1: 1800,
        2: 1000,
        3: 500
    };

    const interval = speedIntervals[speed] || 1800;

    gameState.timer = window.setInterval(() => {
        advanceGameDay();
    }, interval);
}

function stopGameTimer() {
    if (gameState.timer) {
        window.clearInterval(gameState.timer);
        gameState.timer = null;
    }

    gameState.speed = 0;
    gameState.paused = true;
}

/* =========================================================
   RASTGELE OLAYLAR
   ========================================================= */

const randomEvents = [
    {
        icon: "🏭",
        title: "Yeni Fabrika Açıldı",
        description: "Sanayi üretimi küçük bir artış gösterdi.",
        effect() {
            gameState.resources.industry += 1;
        }
    },

    {
        icon: "💰",
        title: "Vergi Gelirleri Arttı",
        description: "Hazineye ek gelir aktarıldı.",
        effect() {
            gameState.resources.treasury += 18;
        }
    },

    {
        icon: "👥",
        title: "Nüfus Artışı",
        description: "Ülke nüfusu artmaya devam ediyor.",
        effect() {
            gameState.resources.population += 0.2;
        }
    },

    {
        icon: "⚔️",
        title: "Askerî Tatbikat",
        description: "Ordunun hazırlık seviyesi yükseldi.",
        effect() {
            gameState.resources.army += 1;
        }
    },

    {
        icon: "⭐",
        title: "Halk Desteği",
        description: "Hükûmete duyulan güven yükseldi.",
        effect() {
            gameState.resources.stability = Math.min(
                100,
                gameState.resources.stability + 2
            );
        }
    }
];

function createRandomEvent() {
    const event =
        randomEvents[
            Math.floor(Math.random() * randomEvents.length)
        ];

    event.effect();

    updateResourceInterface();

    addEvent(
        event.icon,
        event.title,
        event.description,
        getCurrentDateText()
    );
}

function getCurrentDateText() {
    return document.getElementById("gameDate").textContent;
}

function addEvent(
    icon,
    title,
    description,
    category,
    important = false
) {
    const eventList = document.getElementById("eventList");

    const article = document.createElement("article");

    article.className = important
        ? "event-card important"
        : "event-card";

    article.innerHTML = `
        <span class="event-icon">
            ${icon}
        </span>

        <div>
            <small>${category}</small>

            <h3>${title}</h3>

            <p>${description}</p>
        </div>
    `;

    eventList.prepend(article);

    while (eventList.children.length > 8) {
        eventList.removeChild(eventList.lastElementChild);
    }
}

/* =========================================================
   OYUN PANELLERİ
   ========================================================= */

function openGamePanel(panelName) {
    const country = countries[gameState.selectedCountry];

    const panels = {
        government: `
            <h2>Hükûmet</h2>

            <p>
                ${country.name}, ${country.government} sistemiyle
                yönetilmektedir.
            </p>

            <div class="modal-stat-grid">

                <div class="modal-stat-card">
                    <small>Devlet Başkanı</small>
                    <strong>${country.leader}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>İdeoloji</small>
                    <strong>${country.ideology}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>İstikrar</small>
                    <strong>%${Math.floor(
                        gameState.resources.stability
                    )}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Diplomatik Güç</small>
                    <strong>${country.diplomacy}</strong>
                </div>

            </div>
        `,

        economy: `
            <h2>Ekonomi</h2>

            <p>
                Devlet hazinesi, vergi gelirleri ve ekonomik
                yatırımlar buradan yönetilecek.
            </p>

            <div class="modal-stat-grid">

                <div class="modal-stat-card">
                    <small>Hazine</small>
                    <strong>${Math.floor(
                        gameState.resources.treasury
                    )} Altın</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Ekonomik Güç</small>
                    <strong>${country.economy}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Günlük Gelir</small>
                    <strong>+${(
                        gameState.resources.industry * 0.08
                    ).toFixed(1)}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Nüfus</small>
                    <strong>${gameState.resources.population.toFixed(
                        1
                    )}M</strong>
                </div>

            </div>
        `,

        industry: `
            <h2>Üretim ve Sanayi</h2>

            <p>
                Fabrikalar, altyapı ve devlet üretimi bu panelden
                yönetilecek.
            </p>

            <div class="modal-stat-grid">

                <div class="modal-stat-card">
                    <small>Toplam Sanayi</small>
                    <strong>${gameState.resources.industry}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Sivil Fabrika</small>
                    <strong>${Math.floor(
                        gameState.resources.industry * 0.6
                    )}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Askerî Fabrika</small>
                    <strong>${Math.floor(
                        gameState.resources.industry * 0.4
                    )}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Üretim Verimliliği</small>
                    <strong>%64</strong>
                </div>

            </div>
        `,

        military: `
            <h2>Silahlı Kuvvetler</h2>

            <p>
                Kara, deniz ve hava kuvvetlerinin genel durumu.
            </p>

            <div class="modal-stat-grid">

                <div class="modal-stat-card">
                    <small>Ordu Gücü</small>
                    <strong>${gameState.resources.army}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Kara Tümeni</small>
                    <strong>${Math.max(
                        5,
                        Math.floor(gameState.resources.army / 2)
                    )}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Donanma</small>
                    <strong>${Math.max(
                        2,
                        Math.floor(gameState.resources.army / 5)
                    )} Filo</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Hava Gücü</small>
                    <strong>${Math.max(
                        3,
                        Math.floor(gameState.resources.army / 3)
                    )}</strong>
                </div>

            </div>
        `,

        diplomacy: `
            <h2>Diplomasi</h2>

            <p>
                Diğer devletlerle ilişkiler, anlaşmalar ve
                ittifaklar burada yönetilecek.
            </p>

            <div class="modal-stat-grid">

                <div class="modal-stat-card">
                    <small>Diplomatik Güç</small>
                    <strong>${country.diplomacy}</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Aktif İttifak</small>
                    <strong>Yok</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Ticaret Ortağı</small>
                    <strong>2 Devlet</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Dünya Gerilimi</small>
                    <strong>%12</strong>
                </div>

            </div>
        `,

        research: `
            <h2>Araştırma</h2>

            <p>
                Yeni teknolojiler araştırarak ülkenin sanayi,
                ekonomi ve askerî gücünü artır.
            </p>

            <div class="modal-stat-grid">

                <div class="modal-stat-card">
                    <small>Aktif Araştırma</small>
                    <strong>Temel Endüstri</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Kalan Süre</small>
                    <strong>94 Gün</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Araştırma Yuvası</small>
                    <strong>2</strong>
                </div>

                <div class="modal-stat-card">
                    <small>Teknoloji Seviyesi</small>
                    <strong>1936</strong>
                </div>

            </div>
        `
    };

    const selectedPanel = panels[panelName];

    if (!selectedPanel) {
        return;
    }

    showGameModal(selectedPanel);
}

function showGameModal(content) {
    modalContent.innerHTML = content;
    modalOverlay.classList.add("active");
}

function closeGameModal() {
    modalOverlay.classList.remove("active");
}

function closeModalFromOverlay(event) {
    if (event.target === modalOverlay) {
        closeGameModal();
    }
}

/* =========================================================
   DURAKLATMA MENÜSÜ
   ========================================================= */

function toggleGameMenu() {
    stopGameTimer();
    pauseMenu.classList.add("active");
}

function resumeGame() {
    pauseMenu.classList.remove("active");
}

function returnToMainMenuFromGame() {
    stopGameTimer();

    pauseMenu.classList.remove("active");

    showMainMenu();
}

/* =========================================================
   KAYIT SİSTEMİ
   ========================================================= */

function saveGame() {
    if (!gameState.selectedCountry) {
        alert("Kaydedilecek aktif oyun bulunamadı.");
        return;
    }

    const saveData = {
        selectedCountry: gameState.selectedCountry,
        selectedMapCountry: gameState.selectedMapCountry,
        date: gameState.date.toISOString(),
        resources: gameState.resources
    };

    localStorage.setItem(
        "imperaSave",
        JSON.stringify(saveData)
    );

    alert("Oyun başarıyla kaydedildi.");
}

function continueGame() {
    const savedGame = localStorage.getItem("imperaSave");

    if (!savedGame) {
        alert("Henüz kayıtlı bir oyun bulunmuyor.");
        return;
    }

    try {
        const saveData = JSON.parse(savedGame);

        if (!countries[saveData.selectedCountry]) {
            throw new Error("Kayıtlı ülke bulunamadı.");
        }

        gameState.selectedCountry =
            saveData.selectedCountry;

        gameState.selectedMapCountry =
            saveData.selectedMapCountry ||
            countries[saveData.selectedCountry].mapName;

        gameState.date =
            new Date(saveData.date);

        gameState.resources = {
            ...saveData.resources
        };

        hideAllScreens();

        gameScreen.classList.add("active");

        updateNationInterface(
            countries[gameState.selectedCountry]
        );

        updateResourceInterface();
        updateDateInterface();

        highlightPlayerCountry(
            countries[gameState.selectedCountry].mapName
        );

        selectMapCountry(
            gameState.selectedMapCountry
        );

        setGameSpeed(0);
    } catch (error) {
        console.error(error);

        alert(
            "Kayıt dosyası açılamadı. Yeni bir oyun başlatabilirsin."
        );
    }
}

/* =========================================================
   AYARLAR VE HAKKINDA
   ========================================================= */

function openSettings() {
    alert(
        "Ayarlar bölümü hazırlanıyor.\n\n" +
        "Yakında ses, müzik, grafik ve dil seçenekleri eklenecek."
    );
}

function openCredits() {
    alert(
        "IMPERA — Alpha 0.3\n\n" +
        "Tarayıcı tabanlı büyük strateji oyunu.\n\n" +
        "İmparatorluğunu kur. Tarihin yönünü değiştir."
    );
}

/* =========================================================
   KLAVYE DESTEĞİ
   ========================================================= */

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }

    if (modalOverlay.classList.contains("active")) {
        closeGameModal();
        return;
    }

    if (pauseMenu.classList.contains("active")) {
        resumeGame();
        return;
    }

    if (gameScreen.classList.contains("active")) {
        toggleGameMenu();
        return;
    }

    if (
        countrySelect.classList.contains("active") ||
        countryConfirmation.classList.contains("active")
    ) {
        showMainMenu();
    }
});

/* =========================================================
   SAYFA BAŞLANGICI
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    mainMenu.style.display = "flex";

    console.log(
        "IMPERA Alpha 0.3 başarıyla yüklendi."
    );
});
/* =====================================================
   SVG ÜLKE SEÇİM SİSTEMİ
===================================================== */

function findGameCountryBySVGName(svgCountryName) {
    const countryAliases = {
        "Birleşik Krallık": "İngiltere",
        "Sovyetler Birliği": "Rusya"
    };

    const countryKey =
        countryAliases[svgCountryName] || svgCountryName;

    return {
        key: countryKey,
        data: countries[countryKey] || null
    };
}

function bindSVGCountrySelection(svgObject) {
    const svgDocument = svgObject.contentDocument;

    if (!svgDocument) {
        console.warn("SVG belge içeriğine ulaşılamadı.");
        return;
    }

    const svgCountries =
        svgDocument.querySelectorAll(".map-country-svg");

    svgCountries.forEach((countryPath) => {
        countryPath.addEventListener("click", () => {
            const svgCountryName =
                countryPath.dataset.country || "Bilinmeyen Ülke";

            const svgCapital =
                countryPath.dataset.capital || "—";

            svgCountries.forEach((item) => {
                item.classList.remove("selected-country-svg");
            });

            countryPath.classList.add(
                "selected-country-svg"
            );

            const matchedCountry =
                findGameCountryBySVGName(svgCountryName);

            const countryData = matchedCountry.data;

            gameState.selectedMapCountry =
                matchedCountry.key;

            document.getElementById(
                "selectedRegionName"
            ).textContent = svgCapital;

            document.getElementById(
                "selectedRegionOwner"
            ).textContent = svgCountryName;

            document.getElementById(
                "selectedRegionPopulation"
            ).textContent = countryData
                ? countryData.populationText
                : "Hazırlanıyor";

            document.getElementById(
                "selectedRegionIndustry"
            ).textContent = countryData
                ? countryData.industry
                : "—";

            const marker = document.getElementById(
                "selectedProvinceMarker"
            );

            if (marker) {
                marker.style.display = "none";
            }

            console.log(
                `${svgCountryName} seçildi. Başkent: ${svgCapital}`
            );
        });
    });

    console.log(
        `${svgCountries.length} SVG ülkesi tıklama sistemine bağlandı.`
    );
}
/* =====================================================
   SVG HARİTA SİSTEMİ
===================================================== */

let mapScale = 1;
let mapX = 0;
let mapY = 0;

function initializeSVGMap() {
    const viewport = document.getElementById("mapViewport");
    const layer = document.getElementById("mapTransformLayer");
    const status = document.getElementById("mapStatus");
    const svgObject = document.getElementById("europeMapObject");

    if (!viewport || !layer) {
        console.warn("Harita alanı bulunamadı.");
        return;
    }

    function updateTransform() {
        layer.style.transform =
            `translate(${mapX}px, ${mapY}px) scale(${mapScale})`;

        layer.style.transformOrigin = "center center";
    }

    function bindMapDragging(dragSurface) {
        if (!dragSurface) return;

        let isDragging = false;
        let hasMoved = false;

        let pointerStartX = 0;
        let pointerStartY = 0;

        let mapStartX = 0;
        let mapStartY = 0;

        dragSurface.style.touchAction = "none";
        dragSurface.style.cursor = "grab";

        dragSurface.addEventListener("pointerdown", (event) => {
            isDragging = true;
            hasMoved = false;

            pointerStartX = event.clientX;
            pointerStartY = event.clientY;

            mapStartX = mapX;
            mapStartY = mapY;

            dragSurface.style.cursor = "grabbing";

            if (dragSurface.setPointerCapture) {
                try {
                    dragSurface.setPointerCapture(event.pointerId);
                } catch (error) {
                    console.warn(error);
                }
            }
        });

        dragSurface.addEventListener("pointermove", (event) => {
            if (!isDragging) return;

            const deltaX =
                event.clientX - pointerStartX;

            const deltaY =
                event.clientY - pointerStartY;

            if (
                Math.abs(deltaX) > 5 ||
                Math.abs(deltaY) > 5
            ) {
                hasMoved = true;
            }

            mapX = mapStartX + deltaX;
            mapY = mapStartY + deltaY;

            updateTransform();

            if (event.cancelable) {
                event.preventDefault();
            }
        });

        function stopDragging(event) {
            if (!isDragging) return;

            isDragging = false;

            dragSurface.style.cursor = "grab";

            if (
                dragSurface.releasePointerCapture &&
                dragSurface.hasPointerCapture &&
                dragSurface.hasPointerCapture(event.pointerId)
            ) {
                try {
                    dragSurface.releasePointerCapture(
                        event.pointerId
                    );
                } catch (error) {
                    console.warn(error);
                }
            }

            if (hasMoved) {
                if (event.cancelable) {
                    event.preventDefault();
                }

                event.stopPropagation();
            }
        }

        dragSurface.addEventListener(
            "pointerup",
            stopDragging
        );

        dragSurface.addEventListener(
            "pointercancel",
            stopDragging
        );
    }

    document
        .getElementById("zoomInBtn")
        ?.addEventListener("click", () => {
            mapScale += 0.15;

            if (mapScale > 3) {
                mapScale = 3;
            }

            updateTransform();
        });

    document
        .getElementById("zoomOutBtn")
        ?.addEventListener("click", () => {
            mapScale -= 0.15;

            if (mapScale < 0.6) {
                mapScale = 0.6;
            }

            updateTransform();
        });

    document
        .getElementById("resetMapBtn")
        ?.addEventListener("click", () => {
            mapScale = 1;
            mapX = 0;
            mapY = 0;

            updateTransform();
        });

    bindMapDragging(viewport);

    if (svgObject) {
        svgObject.addEventListener("load", () => {
            const svgDocument =
                svgObject.contentDocument;

            const svgRoot =
                svgDocument?.documentElement;

            if (svgRoot) {
                bindMapDragging(svgRoot);
            }

            if (status) {
                status.textContent =
                    "Avrupa haritası yüklendi.";

                status.classList.add("loaded");
            }
        });

        svgObject.addEventListener("error", () => {
            if (status) {
                status.textContent =
                    "Harita yüklenemedi.";

                status.classList.add("error");
            }
        });
    }

    updateTransform();
}

/* Sayfa tamamen açılınca */

window.addEventListener("load", () => {
    window.setTimeout(() => {
        initializeSVGMap();
    }, 300);
});