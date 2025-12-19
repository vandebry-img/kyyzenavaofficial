
// ===== KONFIGURASI KYYZE NAVA =====
const CONFIG = {
    ADMIN_PHONE: "62895365140691",
    ADMIN_NAME: "Kyyze Nava",
    TYPING_SPEED: 100,
    PARTICLE_COUNT: 40
};

// ===== DATA PRODUK =====
const products = {
    rental: {
        title: "🤖 Sewa Bot WhatsApp",
        items: [
            { name: "Sewa Reguler", price: "30.000", features: ["Fitur Downloader", "AI Aktif", "Grup Only", "Aktif 30 Hari"] },
            { name: "Sewa VIP", price: "50.000", features: ["Semua Fitur Premium", "Bebas Masuk Bot", "Prioritas Respon", "Aktif 30 Hari"] }
        ]
    },
    script: {
        title: "📜 Script & Digital",
        items: [
            { 
                name: "Script Vellia Elvya", 
                price: "Hubungi Admin", 
                features: ["3000+ Fitur Aktif", "Base Folder Premium", "Full Case Fitur", "Update Berkala"] 
            },
            { 
                name: "Script Alice Assistant", 
                price: "Hubungi Admin", 
                features: ["1700+ Fitur Pilihan", "Ringan & Fast Respon", "Menu Estetik", "No Button"] 
            },
            { 
                name: "Script Ochobot", 
                price: "Hubungi Admin", 
                features: ["400+ Fitur Utama", "Cocok Untuk Pemula", "Mudah Dimodifikasi", "Hemat RAM"] 
            },
            { 
                name: "Panel Pterodactyl", 
                price: "10.000", 
                features: ["RAM 1-2GB Gahar", "Uptime 99.9%", "Anti Delay", "Full Akses Panel"] 
            },
            { 
                name: "Nokos All Negara", 
                price: "5.000", 
                isNokos: true,
                features: ["Tersedia Indo, USA, dll", "Proses OTP Cepat", "Garansi Login", "Aman & Murah"] 
            }
        ]
    },
    jasa: {
        title: "🛠️ Jasa Developer",
        items: [
            { name: "Jasa Rename", price: "15.000", features: ["Ganti Nama Owner", "Ganti No Owner", "Tampilan Rapi", "Proses Cepat"] },
            { name: "Tambah Fitur", price: "10.000", features: ["Request Fitur Baru", "Fix Bug / Error", "Integrasi API", "Instalasi Plugin"] }
        ]
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1200);

    initParticles();
    initTyping();
    initScroll();
});

// ===== TYPING EFFECT =====
function initTyping() {
    const text = "KYYZE NAVA STORE";
    const typingElement = document.getElementById('typingText');
    let i = 0;
    function type() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, CONFIG.TYPING_SPEED);
        }
    }
    type();
}

// ===== RENDER PRODUK =====
function showProducts(key) {
    const container = document.getElementById('product-content');
    const section = document.getElementById('product-lists');
    const data = products[key];

    section.style.display = 'block';
    
    container.innerHTML = `
        <h2 class="section-title" style="margin-top:20px">${data.title}</h2>
        <div class="product-grid">
            ${data.items.map(item => `
                <div class="p-card">
                    <div class="p-badge">HOT ITEM</div>
                    <h3>${item.name}</h3>
                    <div class="p-price">${item.price === 'Hubungi Admin' ? 'Ask Admin' : 'Rp ' + item.price}</div>
                    
                    ${item.isNokos ? `
                        <div class="nokos-select">
                            <label>Pilih Negara:</label>
                            <select id="countrySelect" class="styled-select">
                                <option value="Indonesia">Indonesia (+62)</option>
                                <option value="USA">United States (+1)</option>
                                <option value="Malaysia">Malaysia (+60)</option>
                                <option value="Vietnam">Vietnam (+84)</option>
                            </select>
                        </div>
                    ` : ''}

                    <ul class="p-features">
                        ${item.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
                    </ul>
                    
                    <button class="btn-buy" onclick="handleOrder('${item.name}', '${item.price}', ${item.isNokos || false})">
                        <i class="fab fa-whatsapp"></i> BELI SEKARANG
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    window.scrollTo({ top: section.offsetTop - 100, behavior: 'smooth' });
}

// ===== LOGIKA ORDER =====
function handleOrder(name, price, isNokos) {
    let finalMsg = "";
    if (isNokos) {
        const country = document.getElementById('countrySelect').value;
        finalMsg = `Halo Admin,\n\nSaya ingin memesan:\n📦 *Produk:* ${name}\n🌍 *Negara:* ${country}\n💰 *Harga:* Rp ${price}\n\nMohon instruksinya.`;
    } else {
        finalMsg = `Halo Admin,\n\nSaya ingin memesan:\n📦 *Produk:* ${name}\n💰 *Harga:* ${price === 'Hubungi Admin' ? 'Cek Harga' : 'Rp ' + price}\n\nMohon detailnya.`;
    }
    window.open(`https://wa.me/${CONFIG.ADMIN_PHONE}?text=${encodeURIComponent(finalMsg)}`, '_blank');
}

// ===== PARTICLES =====
function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.setProperty('--duration', (Math.random() * 10 + 7) + 's');
        p.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(p);
    }
}

function initScroll() {
    const header = document.getElementById('header');
    const progress = document.getElementById('scrollProgress');
    window.onscroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progress.style.width = (winScroll / height) * 100 + "%";
        if (winScroll > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
}
