// ===== KONFIGURASI KYYZE NAVA =====
const CONFIG = {
    ADMIN_PHONE: "62895365140691",
    ADMIN_NAME: "Kyyze Nava",
    TYPING_SPEED: 100,
    PARTICLE_COUNT: 40,
    TOAST_DURATION: 3000
};

// ===== DATA PRODUK =====
const products = {
    rental: {
        title: "🤖 SEWA BOT WHATSAPP",
        items: [
            {
                name: "Sewabot Reguler",
                price: "30.000",
                features: ["Fitur Downloader (IG, YT, FB)", "Akses AI Chatbot 24/7", "Khusus Penggunaan Grup", "Aktif Selama 30 Hari"]
            },
            {
                name: "Sewabot VIP",
                price: "50.000",
                features: ["Semua Fitur Reguler", "Akses Fitur Premium Eksklusif", "Bebas Masuk Ke Bot", "Prioritas Respon & Antrean"]
            }
        ]
    },
    jadibot: {
        title: "📲 LAYANAN JADIBOT",
        items: [
            {
                name: "Jadibot Standar",
                price: "90.000",
                features: ["Ubah Nomor Pribadi Jadi Bot", "Termasuk Panel Hosting", "Full Fitur Script Terbaru", "Masa Aktif Permanen"]
            },
            {
                name: "Jadibot Rename",
                price: "110.000",
                features: ["Custom Nama Bot Sesukamu", "Custom Menu & Tampilan", "Full Akses Sebagai Owner", "Bantuan Support VVIP"]
            }
        ]
    },
    script: {
        title: "📜 SCRIPT & DIGITAL",
        items: [
            {
                name: "Script Bot (3 Jenis)",
                price: "Hubungi Admin",
                features: ["Script Base Folder / Ori", "Script No Button & Full Fitur", "Mudah Dipasang (Newbie Friendly)", "Gratis Update Berkala"]
            },
            {
                name: "Nokos All Negara",
                price: "5.000",
                features: ["Proses OTP Sangat Cepat", "Tersedia Berbagai Negara", "Garansi Berhasil Login", "Aman & Anti Spam"]
            },
            {
                name: "Panel Pterodactyl",
                price: "10.000",
                features: ["RAM 1GB - 2GB Gahar", "Uptime Server 99.9%", "Support Semua Jenis Bot WA", "Anti Delay & No Lag"]
            }
        ]
    },
    jasa: {
        title: "🛠️ JASA DEVELOPER",
        items: [
            {
                name: "Jasa Rename Script",
                price: "15.000",
                features: ["Ganti Nama & Nomor Owner", "Tampilan Script Jadi Rapi", "Hapus Watermark Lama", "Pengerjaan Cepat (Ekspres)"]
            },
            {
                name: "Tambah Fitur Script",
                price: "10.000",
                features: ["Request Fitur Sesuai Keinginan", "Perbaikan Bug / Error", "Integrasi API Pihak Ketiga", "Instalasi Plugin Tambahan"]
            }
        ]
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Hilangkan Loading Preloader
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1500);

    initClock();
    initParticles();
    initTyping();
    initTheme();
    handleScroll();
});

// ===== FUNGSI JAM =====
function initClock() {
    const clockElement = document.getElementById('clock');
    setInterval(() => {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString('id-ID', { hour12: false }).replace(/\./g, ':');
    }, 1000);
}

// ===== FUNGSI TYPING EFFECT =====
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

// ===== FUNGSI PARTICLES =====
function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
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

    section.classList.add('active');
    
    container.innerHTML = `
        <h2 class="section-title" style="text-align:center; font-size:2.5rem; margin-bottom:40px; color:var(--primary-dark);">${data.title}</h2>
        <div class="product-grid">
            ${data.items.map(item => `
                <div class="product-card">
                    <div class="card-badge" style="position:absolute; top:15px; right:15px; background:var(--primary); color:white; padding:5px 12px; border-radius:10px; font-size:0.7rem; font-weight:bold;">BEST SELLER</div>
                    <h3>${item.name}</h3>
                    <div class="price-tag" style="font-size:1.8rem; font-weight:800; color:var(--text-primary); margin:15px 0;">Rp ${item.price}</div>
                    <ul class="feature-list" style="list-style:none; text-align:left; margin-bottom:25px;">
                        ${item.features.map(f => `<li style="margin-bottom:10px; font-size:0.9rem; color:var(--text-secondary);"><i class="fas fa-check-circle" style="color:var(--primary-dark); margin-right:8px;"></i> ${f}</li>`).join('')}
                    </ul>
                    <button class="btn-order" onclick="order('${item.name}', '${item.price}')">
                        <i class="fab fa-whatsapp"></i> BELI SEKARANG
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
    });
}

// ===== FUNGSI ORDER =====
function order(product, price) {
    const message = `Halo Admin ${CONFIG.ADMIN_NAME},\n\nSaya ingin memesan produk berikut:\n📦 *Produk:* ${product}\n💰 *Harga:* Rp ${price}\n\nMohon info instruksi pembayarannya. Terima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONFIG.ADMIN_PHONE}?text=${encodedMessage}`, '_blank');
}

// ===== THEME TOGGLE =====
function initTheme() {
    const btn = document.getElementById('themeToggle');
    btn.onclick = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        btn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        showToast(`Mode ${newTheme === 'dark' ? 'Gelap' : 'Terang'} Diaktifkan`);
    };
}

// ===== UTILS =====
function handleScroll() {
    const progress = document.getElementById('scrollProgress');
    window.onscroll = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressWidth = (window.pageYOffset / totalHeight) * 100;
        progress.style.width = progressWidth + "%";
        
        const header = document.getElementById('header');
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').innerText = msg;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), CONFIG.TOAST_DURATION);
}
