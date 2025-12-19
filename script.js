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
        title: "📜 Script & Panel",
        items: [
            { name: "Script Bot V1", price: "50.000", features: ["Case Folder", "No Button", "Full Fitur", "Permanen"] },
            { name: "Nokos All Negara", price: "5.000", features: ["OTP Cepat", "Banyak Pilihan", "Garansi Login", "Aman"] },
            { name: "Panel Pterodactyl", price: "10.000", features: ["RAM 1-2GB", "Uptime 99.9%", "Support All Bot", "Anti Delay"] }
        ]
    },
    jasa: {
        title: "🛠️ Jasa Developer",
        items: [
            { name: "Jasa Rename", price: "15.000", features: ["Ganti Nama Owner", "Ganti No Owner", "Tampilan Rapi", "Proses Cepat"] },
            { name: "Tambah Fitur", price: "10.000", features: ["Request Fitur", "Fix Bug / Error", "Integrasi API", "Instalasi Plugin"] }
        ]
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Hilangkan Preloader
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1200);

    initParticles();
    initTyping();
    initScrollHeader();
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

// ===== PARTICLES BACKGROUND =====
function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.setProperty('--duration', `${Math.random() * 10 + 5}s`);
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
    }
}

// ===== RENDER PRODUK =====
function showProducts(key) {
    const container = document.getElementById('product-content');
    const section = document.getElementById('product-lists');
    const data = products[key];

    // Animasi muncul
    section.style.display = 'block';
    
    container.innerHTML = `
        <div class="product-grid">
            ${data.items.map(item => `
                <div class="p-card">
                    <div class="p-badge">TERLARIS</div>
                    <h3>${item.name}</h3>
                    <div class="p-price">Rp ${item.price}</div>
                    <ul class="p-features">
                        ${item.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
                    </ul>
                    <button class="btn-buy" onclick="order('${item.name}', '${item.price}')">
                        <i class="fab fa-whatsapp"></i> BELI SEKARANG
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    // Scroll otomatis ke produk
    window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
    });
}

// ===== FUNGSI BELI (WHATSAPP) =====
function order(name, price) {
    const text = `Halo Admin ${CONFIG.ADMIN_NAME},\n\nSaya ingin memesan:\n📦 *Produk:* ${name}\n💰 *Harga:* Rp ${price}\n\nMohon info detailnya.`;
    window.open(`https://wa.me/${CONFIG.ADMIN_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
}

// ===== HEADER SCROLL EFFECT =====
function initScrollHeader() {
    const header = document.getElementById('header');
    const progress = document.getElementById('scrollProgress');
    
    window.onscroll = () => {
        // Scroll Progress Bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progress.style.width = scrolled + "%";

        // Glassmorphism effect on scroll
        if (winScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
             }
