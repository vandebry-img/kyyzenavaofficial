// ===== KONFIGURASI KYYZE NAVA =====
const CONFIG = {
    ADMIN_PHONE: "62895365140691",
    ADMIN_NAME: "Kyyze Nava",
    TYPING_SPEED: 100,
    PARTICLE_COUNT: 40 
};

// ===== DATA PRODUK (Update: Jadi Bot & Pemisahan Panel/Script) =====
const products = {
    rental: {
        title: "🤖 Layanan Sewa Bot",
        items: [
            { name: "Sewabot Reguler", price: "30.000", features: ["Fitur Downloader", "AI Chat Active", "Khusus Grup", "Bebas Req Nama dan Tema Bot", "Masa Aktif: PERMANEN"] },
            { name: "Sewabot VIP", price: "50.000", features: ["Semua Fitur Premium", "Bebas Masuk Bot", "Prioritas Respon", "Bebas Req Nama dan Tema Bot", "Masa Aktif: PERMANEN"] }
        ]
    },
    jadibot: {
        title: "⚙️ Layanan Jadi Bot",
        items: [
            { name: "Jadi Bot Reguler", price: "50.000", features: ["Fitur Lengkap", "Full Akses Chat", "Masa Aktif: PERMANEN"] },
  { name: "Jadi Bot Reguler (Rename)", price: "70.000", features: ["Bisa Custom Nama Bot", "Fitur Lengkap", "Tampilan Profesional", "Masa Aktif: PERMANEN"] },
  { name: "Jadi Bot VIP", price: "90.000", features: ["Prioritas Server", "Fitur Super Lengkap", "Full Akses Chat", "Anti Delay / Lebih Stabil", "Masa Aktif: PERMANEN"] },
  { name: "Jadi Bot VIP (Rename)", price: "110.000", features: ["Prioritas Server", "Fitur Super Lengkap", "Tampilan Premium & Profesional", "Anti Delay / Lebih Stabil", "Support Prioritas", "Masa Aktif: PERMANEN"] }
        ]
    },
    script: {
        title: "📜 Script WhatsApp Bot",
        items: [
            { name: "Script Vellia Elvya", price: "Hubungi Admin", features: ["3000+ Fitur Premium", "Base Folder High-End", "Type CJS Ringan", "Update Berkala"] },
            { name: "Script Alice Assistant", price: "Hubungi Admin", features: ["1700+ Fitur Pilihan", "Ringan & User Friendly", "Menu Estetik", "Full Button System", "Full Update Lifetime"] },
            { name: "Script Ochobot", price: "Hubungi Admin", features: ["400+ Fitur Utama", "Hemat RAM Hosting", "Simple & Fast", "Cocok Untuk Pemula"] }
        ]
    },
    panel: {
        title: "🖥️ Panel Pterodactyl",
        items: [
            { name: "Panel RAM 5GB", price: "5.000", features: ["Uptime Server 97.9%", "Lokasi Server Indo/SG", "Full Akses Panel"] },
            { name: "Panel RAM 10GB", price: "8.000", features: ["Uptime Server 99.9%", "Anti Delay / Lag", "Lokasi Server Indo/SG", "Full Akses Panel"] },
            { name: "Panel RAM Unlimited", price: "10.000", features: ["Uptime Server 99.9%", "Lebih Stabil", "Lokasi Server Indo/SG", "Full Akses Panel"] }
        ]
    },
    jasa: {
        title: "🛠️ Jasa Developer",
        items: [
            { name: "Jasa Rename Script", price: "15.000", features: ["Ganti Nama & No Owner", "Tampilan Jadi Rapi", "Hapus Watermark Lama", "Proses Kilat"] },
            { name: "Tambah/Fix Fitur", price: "10.000", features: ["Request Fitur Baru", "Perbaikan Bug/Error", "Integrasi API", "Instalasi Plugin"] }
        ]
    },
   nokos: {
        title: "📱 Nokos",
        items: [
            { name: "Nokos All Negara", price: "5.000 - 30.000", features: ["Harga Setiap Negara Berbeda", "Lebih detail tanyakan admin"] }
        ]
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Hilangkan Preloader
    setTimeout(() => {
        const loader = document.getElementById('loading');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 1500);

    initParticles();
    initScrollLogic();
});

// ===== PARTICLES LOGIC =====
function initParticles() {
    const container = document.getElementById('particles');
    if(!container) return;
    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 2; 
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.setProperty('--duration', `${Math.random() * 10 + 7}s`);
        p.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(p);
    }
}

// ===== RENDER PRODUCT CARDS =====
function showProducts(key) {
    const container = document.getElementById('product-content');
    const section = document.getElementById('product-lists');
    const data = products[key];

    if(!data) return;

    section.style.display = 'block';
    
    container.innerHTML = `
        <h2 class="section-title">${data.title}</h2>
        <div class="product-grid">
            ${data.items.map(item => `
                <div class="p-card">
                    <div class="p-badge">PREMIUM</div>
                    <h3>${item.name}</h3>
                    <div class="p-price">${item.price === 'Hubungi Admin' ? 'Ask Admin' : 'Rp ' + item.price}</div>
                    <ul class="p-features">
                        ${item.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
                    </ul>
                    <button class="btn-buy" onclick="handleOrder('${item.name}', '${item.price}')">
                        <i class="fab fa-whatsapp"></i> BELI SEKARANG
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    // Scroll ke section produk secara halus
    const offset = section.offsetTop - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
}

// ===== ORDER LOGIC (WHATSAPP) =====
function handleOrder(name, price) {
    const displayPrice = price === 'Hubungi Admin' ? 'Tanyakan Harga' : `Rp ${price}`;
    const message = `Halo Admin ${CONFIG.ADMIN_NAME},\n\nSaya ingin memesan:\n📦 *Produk:* ${name}\n💰 *Harga:* ${displayPrice}\n\nMohon instruksi selanjutnya.`;
    window.open(`https://wa.me/${CONFIG.ADMIN_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
}

// ===== SCROLL PROGRESS =====
function initScrollLogic() {
    window.onscroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progBar = document.getElementById('scrollProgress');
        if(progBar) progBar.style.width = scrolled + "%";
    };
}
