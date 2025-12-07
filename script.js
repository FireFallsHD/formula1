// F1 Pilotları verileri - 7 Aralık 2025 itibariyle
const drivers = [
    {
        number: 1,
        name: "Max Verstappen",
        country: "Hollanda",
        team: "Red Bull Racing",
        teamColor: "#1e41ff",
        age: 28,
        championships: 4,
        wins: 75,
        podiums: 110,
        biography: "Max Verstappen, Formula 1'in en genç şampiyonlarından biri olarak tarihe geçti. 2015'te 17 yaşında F1'e başlayan Verstappen, agresif sürüş stili ve olağanüstü yetenekleriyle dikkat çekti. Red Bull Racing ile 4 kez dünya şampiyonu oldu ve modern F1'in en dominant pilotlarından biri haline geldi. Hızlı karar verme yeteneği ve yarış günü performansıyla ünlüdür."
    },
    {
        number: 16,
        name: "Charles Leclerc",
        country: "Monako",
        team: "Ferrari",
        teamColor: "#dc143c",
        age: 27,
        championships: 0,
        wins: 12,
        podiums: 35,
        biography: "Monako doğumlu Charles Leclerc, Ferrari'nin gelecek vadeden yıldız pilotudur. 2018'de F1'e başladı ve hızlı bir şekilde en iyi pilotlar arasına girdi. Pole position'larda güçlü performans sergileyen Leclerc, Ferrari'nin şampiyonluk umutlarını taşıyan pilotlardan biridir. Hassas sürüş tekniği ve hızlı tur zamanlarıyla tanınır."
    },
    {
        number: 55,
        name: "Carlos Sainz",
        country: "İspanya",
        team: "Ferrari",
        teamColor: "#dc143c",
        age: 31,
        championships: 0,
        wins: 5,
        podiums: 22,
        biography: "Carlos Sainz, tutarlı performansı ve stratejik düşüncesiyle tanınan İspanyol pilot. F1 kariyerine 2015'te başladı ve McLaren'den Ferrari'ye geçerek kariyerinin en iyi dönemini yaşıyor. 2022'de ilk galibiyetini alan Sainz, güvenilir sürüş stili ve takım oyuncusu yaklaşımıyla takımlarına değer katıyor."
    },
    {
        number: 44,
        name: "Lewis Hamilton",
        country: "İngiltere",
        team: "Mercedes",
        teamColor: "#00d2be",
        age: 40,
        championships: 7,
        wins: 103,
        podiums: 197,
        biography: "Lewis Hamilton, Formula 1 tarihinin en başarılı pilotlarından biridir. 7 dünya şampiyonluğu ve 100'den fazla galibiyetle rekorlar kitabına adını yazdırdı. 2007'de F1'e başlayan Hamilton, hem McLaren hem de Mercedes ile büyük başarılar elde etti. Sürüş yeteneği, deneyimi ve sosyal aktivizmiyle F1'in en ikonik isimlerinden biridir."
    },
    {
        number: 63,
        name: "George Russell",
        country: "İngiltere",
        team: "Mercedes",
        teamColor: "#00d2be",
        age: 27,
        championships: 0,
        wins: 2,
        podiums: 15,
        biography: "George Russell, genç yaşına rağmen olgun sürüş stiliyle dikkat çeken İngiliz pilot. Williams'tan Mercedes'e geçerek kariyerinde önemli bir adım attı. 2022'de ilk galibiyetini alan Russell, hızlı öğrenme yeteneği ve tutarlı performansıyla Mercedes'in geleceğini temsil ediyor. Teknik bilgisi ve analitik yaklaşımıyla tanınır."
    },
    {
        number: 4,
        name: "Lando Norris",
        country: "İngiltere",
        team: "McLaren",
        teamColor: "#ff8700",
        age: 26,
        championships: 1,
        wins: 3,
        podiums: 20,
        biography: "Lando Norris, McLaren'in genç yıldızı ve sosyal medyada aktif olmasıyla tanınan pilot. 2019'da F1'e başladı ve hızla gelişerek takımının lider pilotu haline geldi. 2025 sezonunda ilk dünya şampiyonluğunu kazanan Norris, enerjik kişiliği ve agresif sürüş stiliyle seyircilerin sevgisini kazandı. McLaren'in şampiyonluk hedeflerini gerçekleştiren başarılı pilotlardan biridir."
    },
    {
        number: 81,
        name: "Oscar Piastri",
        country: "Avustralya",
        team: "McLaren",
        teamColor: "#ff8700",
        age: 24,
        championships: 0,
        wins: 1,
        podiums: 8,
        biography: "Oscar Piastri, Formula 2 ve Formula 3 şampiyonluklarını kazandıktan sonra 2023'te F1'e başlayan Avustralyalı yetenek. McLaren ile ilk sezonunda etkileyici performans sergileyen Piastri, hızlı adaptasyon yeteneği ve teknik bilgisiyle dikkat çekti. Geleceğin şampiyon adaylarından biri olarak görülüyor."
    },
    {
        number: 14,
        name: "Fernando Alonso",
        country: "İspanya",
        team: "Aston Martin",
        teamColor: "#006f62",
        age: 44,
        championships: 2,
        wins: 32,
        podiums: 106,
        biography: "Fernando Alonso, F1'in en deneyimli ve saygın pilotlarından biridir. 2005 ve 2006'da iki kez dünya şampiyonu oldu. 20 yılı aşkın F1 kariyerinde Renault, Ferrari, McLaren ve şimdi Aston Martin ile yarıştı. Stratejik zekası, deneyimi ve hala gösterdiği yüksek performansla F1'in efsane isimlerinden biridir."
    },
    {
        number: 18,
        name: "Lance Stroll",
        country: "Kanada",
        team: "Aston Martin",
        teamColor: "#006f62",
        age: 26,
        championships: 0,
        wins: 0,
        podiums: 3,
        biography: "Lance Stroll, 2017'de F1'e başlayan Kanadalı pilot. Williams'tan Racing Point'e, oradan da Aston Martin'e geçti. Yağmurlu yarışlarda güçlü performans sergileyen Stroll, takım sahibi babası Lawrence Stroll'un desteğiyle kariyerini sürdürüyor. Tutarlı puan toplama yeteneğiyle tanınır."
    },
    {
        number: 23,
        name: "Alexander Albon",
        country: "Tayland",
        team: "Williams",
        teamColor: "#005aff",
        age: 29,
        championships: 0,
        wins: 0,
        podiums: 2,
        biography: "Alexander Albon, İngiliz-Tayland kökenli pilot. Red Bull programından yetişti ve 2019'da F1'e başladı. Red Bull Racing'de kısa bir süre yarıştıktan sonra Williams'a geçti. Sakin sürüş stili ve takım oyuncusu yaklaşımıyla tanınan Albon, Williams'ın gelişiminde önemli rol oynuyor."
    },
    {
        number: 2,
        name: "Logan Sargeant",
        country: "ABD",
        team: "Williams",
        teamColor: "#005aff",
        age: 24,
        championships: 0,
        wins: 0,
        podiums: 0,
        biography: "Logan Sargeant, 2023'te F1'e başlayan Amerikalı pilot. Formula 2'deki başarılı performansının ardından Williams ile F1'e adım attı. Genç yaşına rağmen hızlı öğrenme yeteneği gösteren Sargeant, ABD'nin F1'deki temsilcilerinden biridir ve gelecekte daha iyi sonuçlar bekleniyor."
    },
    {
        number: 10,
        name: "Pierre Gasly",
        country: "Fransa",
        team: "Alpine",
        teamColor: "#0090ff",
        age: 29,
        championships: 0,
        wins: 1,
        podiums: 4,
        biography: "Pierre Gasly, Red Bull programından yetişen Fransız pilot. 2020'de Monza'da ilk galibiyetini alarak büyük bir başarı elde etti. AlphaTauri'den Alpine'e geçen Gasly, hızlı tur zamanları ve yarış günü performansıyla tanınır. Agresif sürüş stili ve cesur geçişleriyle dikkat çeker."
    },
    {
        number: 31,
        name: "Esteban Ocon",
        country: "Fransa",
        team: "Alpine",
        teamColor: "#0090ff",
        age: 28,
        championships: 0,
        wins: 1,
        podiums: 3,
        biography: "Esteban Ocon, 2021'de Macaristan'da ilk galibiyetini alan Fransız pilot. Mercedes genç pilot programından yetişti ve Force India'dan Alpine'e kadar çeşitli takımlarda yarıştı. Tutarlı performansı ve dayanıklılığıyla tanınan Ocon, Alpine'in güvenilir pilotlarından biridir."
    },
    {
        number: 77,
        name: "Valtteri Bottas",
        country: "Finlandiya",
        team: "Sauber",
        teamColor: "#52c41a",
        age: 36,
        championships: 0,
        wins: 10,
        podiums: 67,
        biography: "Valtteri Bottas, Mercedes'te Lewis Hamilton'ın takım arkadaşı olarak 5 yıl geçirdikten sonra Sauber'e geçen Finli pilot. 10 galibiyeti ve 67 podyumu bulunan Bottas, deneyimli ve güvenilir bir pilot. Sakin kişiliği ve tutarlı performansıyla tanınır. Ayrıca bisiklet ve koşu gibi sporlarla da ilgilenir."
    },
    {
        number: 24,
        name: "Zhou Guanyu",
        country: "Çin",
        team: "Sauber",
        teamColor: "#52c41a",
        age: 26,
        championships: 0,
        wins: 0,
        podiums: 0,
        biography: "Zhou Guanyu, 2022'de F1'e başlayan ilk Çinli pilot. Formula 2'deki başarılı performansının ardından Sauber ile F1 kariyerine başladı. Çin'in F1'deki temsilcisi olarak büyük bir öneme sahip. Genç yaşına rağmen olgun sürüş stili ve hızlı öğrenme yeteneğiyle dikkat çekiyor."
    },
    {
        number: 11,
        name: "Sergio Pérez",
        country: "Meksika",
        team: "Red Bull Racing",
        teamColor: "#1e41ff",
        age: 35,
        championships: 0,
        wins: 6,
        podiums: 35,
        biography: "Sergio 'Checo' Pérez, lastik yönetimi konusunda uzmanlaşmış Meksikalı pilot. Red Bull Racing'de Max Verstappen'in takım arkadaşı olarak yarışıyor. 2020'de Sakhir'de ilk galibiyetini alan Pérez, takım oyuncusu yaklaşımı ve stratejik düşüncesiyle tanınır. Meksika'nın en başarılı F1 pilotlarından biridir."
    },
    {
        number: 3,
        name: "Daniel Ricciardo",
        country: "Avustralya",
        team: "RB",
        teamColor: "#2b4562",
        age: 35,
        championships: 0,
        wins: 8,
        podiums: 32,
        biography: "Daniel Ricciardo, enerjik kişiliği ve cesur geçişleriyle tanınan Avustralyalı pilot. Red Bull, Renault ve McLaren'de yarıştıktan sonra RB'ye döndü. 8 galibiyeti bulunan Ricciardo, geç geçişleri ve güçlü frenleme tekniğiyle ünlüdür. 'Honey Badger' lakabıyla bilinir ve seyircilerin sevdiği pilotlardan biridir."
    },
    {
        number: 22,
        name: "Yuki Tsunoda",
        country: "Japonya",
        team: "RB",
        teamColor: "#2b4562",
        age: 25,
        championships: 0,
        wins: 0,
        podiums: 1,
        biography: "Yuki Tsunoda, 2021'de F1'e başlayan Japon pilot. Red Bull genç pilot programından yetişti ve AlphaTauri (şimdi RB) ile kariyerine devam ediyor. Hızlı öğrenme yeteneği ve agresif sürüş stiliyle dikkat çeken Tsunoda, Japonya'nın F1'deki umut vadeden pilotlarından biridir."
    },
    {
        number: 20,
        name: "Kevin Magnussen",
        country: "Danimarka",
        team: "Haas",
        teamColor: "#ffffff",
        age: 32,
        championships: 0,
        wins: 0,
        podiums: 1,
        biography: "Kevin Magnussen, 2014'te F1'e başlayan Danimarkalı pilot. McLaren, Renault ve Haas'ta yarıştı. Agresif sürüş stili ve cesur geçişleriyle tanınan Magnussen, babası Jan Magnussen'in izinden gidiyor. Haas'ın deneyimli pilotu olarak takımın gelişiminde önemli rol oynuyor."
    },
    {
        number: 27,
        name: "Nico Hülkenberg",
        country: "Almanya",
        team: "Haas",
        teamColor: "#ffffff",
        age: 37,
        championships: 0,
        wins: 0,
        podiums: 0,
        biography: "Nico Hülkenberg, F1'in en deneyimli pilotlarından biri. 2010'da F1'e başladı ve Force India, Renault, Racing Point gibi takımlarda yarıştı. Podyum alamamasına rağmen tutarlı performansı ve hızlı tur zamanlarıyla tanınır. 'The Hulk' lakabıyla bilinen Hülkenberg, Haas'ın güvenilir pilotlarından biridir."
    }
];

let filteredDrivers = [...drivers];

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    renderDrivers(drivers);
    populateFilters();
    
    // Arama fonksiyonu
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Filtre fonksiyonları
    document.getElementById('teamFilter').addEventListener('change', handleFilter);
    document.getElementById('countryFilter').addEventListener('change', handleFilter);
    
    // Modal kapatma
    const modal = document.getElementById('driverModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        closeModal();
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC tuşu ile modal kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});

// Pilotları render et
function renderDrivers(driversToRender) {
    const grid = document.getElementById('driversGrid');
    
    if (driversToRender.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h3>Sonuç bulunamadı</h3>
                <p>Arama kriterlerinize uygun pilot bulunamadı.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = driversToRender.map(driver => `
        <div class="driver-card" onclick="openModal(${driver.number})">
            <div class="driver-header">
                <div class="driver-number">${driver.number}</div>
                <div class="driver-name">
                    <h2>${driver.name}</h2>
                    <p>${driver.country}</p>
                </div>
            </div>
            <div class="driver-info">
                <div class="info-item">
                    <span class="info-label">Takım:</span>
                    <span class="info-value">
                        <span class="team-badge" style="background-color: ${driver.teamColor}; color: ${getContrastColor(driver.teamColor)};">
                            ${driver.team}
                        </span>
                    </span>
                </div>
                <div class="info-item">
                    <span class="info-label">Yaş:</span>
                    <span class="info-value">${driver.age}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Şampiyonluk:</span>
                    <span class="info-value">${driver.championships}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Galibiyet:</span>
                    <span class="info-value">${driver.wins}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Podyum:</span>
                    <span class="info-value">${driver.podiums}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Filtreleri doldur
function populateFilters() {
    const teams = [...new Set(drivers.map(d => d.team))].sort();
    const countries = [...new Set(drivers.map(d => d.country))].sort();
    
    const teamFilter = document.getElementById('teamFilter');
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamFilter.appendChild(option);
    });
    
    const countryFilter = document.getElementById('countryFilter');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });
}

// Arama fonksiyonu
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    applyFilters(searchTerm);
}

// Filtre fonksiyonu
function handleFilter() {
    applyFilters(document.getElementById('searchInput').value.toLowerCase());
}

// Filtreleri uygula
function applyFilters(searchTerm = '') {
    const teamFilter = document.getElementById('teamFilter').value;
    const countryFilter = document.getElementById('countryFilter').value;
    
    filteredDrivers = drivers.filter(driver => {
        const matchesSearch = !searchTerm || 
            driver.name.toLowerCase().includes(searchTerm) ||
            driver.team.toLowerCase().includes(searchTerm) ||
            driver.country.toLowerCase().includes(searchTerm);
        
        const matchesTeam = !teamFilter || driver.team === teamFilter;
        const matchesCountry = !countryFilter || driver.country === countryFilter;
        
        return matchesSearch && matchesTeam && matchesCountry;
    });
    
    renderDrivers(filteredDrivers);
}

// Kontrast rengi hesapla (badge için)
function getContrastColor(hexColor) {
    // Hex rengini RGB'ye çevir
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Luminance hesapla
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Açık renkler için siyah, koyu renkler için beyaz
    return luminance > 0.5 ? '#000000' : '#ffffff';
}

// Modal açma fonksiyonu
function openModal(driverNumber) {
    const driver = drivers.find(d => d.number === driverNumber);
    if (!driver) return;
    
    const modal = document.getElementById('driverModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div class="driver-number">${driver.number}</div>
                <div>
                    <h2 style="margin: 0; font-size: 2rem;">${driver.name}</h2>
                    <p style="margin: 0.5rem 0 0 0; font-size: 1.1rem; opacity: 0.9;">${driver.country}</p>
                </div>
            </div>
        </div>
        <div class="modal-body">
            <p class="modal-bio">${driver.biography}</p>
            <div class="modal-stats">
                <div class="modal-stat-item">
                    <span class="modal-stat-value">${driver.championships}</span>
                    <span class="modal-stat-label">Şampiyonluk</span>
                </div>
                <div class="modal-stat-item">
                    <span class="modal-stat-value">${driver.wins}</span>
                    <span class="modal-stat-label">Galibiyet</span>
                </div>
                <div class="modal-stat-item">
                    <span class="modal-stat-value">${driver.podiums}</span>
                    <span class="modal-stat-label">Podyum</span>
                </div>
                <div class="modal-stat-item">
                    <span class="modal-stat-value">${driver.age}</span>
                    <span class="modal-stat-label">Yaş</span>
                </div>
            </div>
            <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid var(--border-color);">
                <div class="info-item">
                    <span class="info-label">Takım:</span>
                    <span class="info-value">
                        <span class="team-badge" style="background-color: ${driver.teamColor}; color: ${getContrastColor(driver.teamColor)};">
                            ${driver.team}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Modal kapatma fonksiyonu (global olarak erişilebilir)
window.closeModal = function() {
    const modal = document.getElementById('driverModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
};
