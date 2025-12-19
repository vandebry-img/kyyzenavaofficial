// ===== KONFIGURASI KYYZE NAVA =====
const CONFIG = {
    ADMIN_PHONE: "62895365140691",
    ADMIN_NAME: "Kyyze Nava",
    TYPING_SPEED: 120,
    PARTICLE_COUNT: 50 // Partikel diperbanyak agar terlihat jelas
};

// ===== DATA PRODUK LENGKAP =====
const products = {
    rental: {
        title: "🤖 Sewa Bot WhatsApp",
        items: [
            { name: "Sewabot Reguler", price: "30.000", features: ["Fitur Downloader", "AI Chat Active", "Khusus Grup", "Aktif 30 Hari"] },
            { name: "Sewabot VIP", price: "50.000", features: ["Semua Fitur Premium", "Bebas Masuk Bot", "Prioritas Respon", "Aktif 30 Hari"] }
        ]
    },
    script: {
        title: "📜 Script & Digital Services",
        items: [
            { 
                name: "Script Vellia Elvya", 
                price: "Hubungi Admin", 
                features: ["3000+ Fitur Premium", "Base Folder High-End", "Full Case Fitur", "Update Berkala"] 
            },
            { 
                name: "Script Alice Assistant", 
                price: "Hubungi Admin", 
                features: ["1700+ Fitur Pilihan", "Ringan & User Friendly", "Menu Estetik", "No Button System"] 
            },
            { 
                name: "Script Ochobot", 
                price: "Hubungi Admin", 
                features: ["400+ Fitur Utama", "Hemat RAM Hosting", "Simple & Fast", "Cocok Untuk Pemula"] 
            },
            { 
                name: "Panel Pterodactyl", 
                price: "10.000", 
                features: ["RAM 1GB - 2GB", "Uptime Server 99.9%", "Anti Delay / Lag", "Full Akses Panel"] 
            },
            { 
                name: "Nokos All Negara", 
                price: "5.000", 
                isNokos: true,
                features: ["Tersedia Berbagai Negara", "Proses OTP Instan", "Garansi Berhasil Login", "Bisa Pilih Negara"] 
            }
        ]
    },
    jasa: {
        title: "🛠️ Jasa Developer",
        items: [
            { name: "Jasa Rename Script", price: "15.000", features: ["Ganti Nama & No Owner", "Tampilan Jadi Rapi", "Hapus Watermark Lama", "Proses Kilat"] },
            { name: "Tambah/Fix Fitur", price: "10.000", features: ["Request Fitur Baru", "Perbaikan Bug/Error", "Integrasi API", "Instalasi Plugin"] }
        ]
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Hilangkan Preloader
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
        setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
    }, 1500);

    initParticles();
    initTyping();
    initScrollLogic();
});

// ===== VISIBLE PARTICLES LOGIC =====
function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        // Ukuran partikel lebih bervariasi agar terlihat jelas
        const size = Math.random() * 5 + 2; 
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        
        // Animasi durasi & delay
        p.style.setProperty('--duration', `${Math.random() * 12 + 8}s`);
        p.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(p);
    }
}

// ===== TYPING ANIMATION =====
function initTyping() {
    const text = "KYYZE NAVA STORE";
    const el = document.getElementById('typingText');
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, CONFIG.TYPING_SPEED);
        }
    }
    type();
}

// ===== RENDER PRODUCT CARDS =====
function showProducts(key) {
    const container = document.getElementById('product-content');
    const section = document.getElementById('product-lists');
    const data = products[key];

    section.classList.add('active');
    
    container.innerHTML = `
        <h2 class="section-title">${data.title}</h2>
        <div class="product-grid">
            ${data.items.map(item => `
                <div class="p-card">
                    <div class="p-badge">PREMIUM</div>
                    <h3>${item.name}</h3>
                    <div class="p-price">${item.price === 'Hubungi Admin' ? 'Ask Admin' : 'Rp ' + item.price}</div>
                    
                    ${item.isNokos ? `
                        <div class="nokos-container">
                            <label>Pilih Negara:</label>
                            <select id="countrySelect" class="nokos-select">
                                <option value="Indonesia">Indonesia (+62)</option>
                                <option value="USA">United States (+1)</option>
                                <option value="Malaysia">Malaysia (+60)</option>
                                <option value="Vietnam">Vietnam (+84)</option>
                                <option value="Thailand">Thailand (+66)</option>
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

    // Scroll ke section produk secara halus
    const offset = section.offsetTop - 100;
    window.scrollTo({ top: offset, behavior: 'smooth' });
}

// ===== ORDER LOGIC (WHATSAPP) =====
function handleOrder(name, price, isNokos) {
    let message = "";
    if (isNokos) {
        const country = document.getElementById('countrySelect').value;
        message = `Halo Admin ${CONFIG.ADMIN_NAME},\n\nSaya ingin memesan:\n📦 *Produk:* ${name}\n🌍 *Negara:* ${country}\n💰 *Harga:* Rp ${price}\n\nMohon instruksi selanjutnya.`;
    } else {
        const displayPrice = price === 'Hubungi Admin' ? 'Tanyakan Harga' : `Rp ${price}`;
        message = `Halo Admin ${CONFIG.ADMIN_NAME},\n\nSaya ingin memesan:\n📦 *Produk:* ${name}\n💰 *Harga:* ${displayPrice}\n\nTerima kasih.`;
    }
    
    window.open(`https://wa.me/${CONFIG.ADMIN_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
}

// ===== SCROLL LOGIC =====
function initScrollLogic() {
    const header = document.getElementById('header');
    const progress = document.getElementById('scrollProgress');
    
    window.onscroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        progress.style.width = scrolled + "%";
        
        if (winScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
}
