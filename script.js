
const CONFIG = {
    ADMIN_PHONE: "62895365140691",
    ADMIN_NAME: "Kyyze Nava",
    TYPING_SPEED: 100,
    PARTICLE_COUNT: 40
};

const products = {
    rental: {
        title: "🤖 SEWA BOT WHATSAPP",
        items: [
            { title: "REGULER", price: "30k", features: ["Fitur Downloader", "AI Chat Active", "Grup Only", "Aktif 30 Hari"] },
            { title: "VIP PREMIUM", price: "50k", features: ["Fitur VIP Akses", "Prioritas Respon", "Bebas Masuk Bot", "Full Custom"] }
        ]
    },
    jadibot: {
        title: "📲 LAYANAN JADIBOT",
        items: [
            { title: "JADIBOT STANDAR", price: "90k", features: ["Gunakan No Pribadi", "Panel Gratis", "Full Fitur Bot", "Permanen"] },
            { title: "JADIBOT RENAME", price: "110k", features: ["Custom Nama Bot", "Menu Custom", "No Pribadi Jadi Bot", "VVIP Support"] }
        ]
    },
    script: {
        title: "📜 SCRIPT & PANEL",
        items: [
            { title: "3 JENIS SCRIPT", price: "Cek Admin", features: ["Script No Button", "Script Full Fitur", "Base Ori", "Free Update"] },
            { title: "PANEL PTERODACTYL", price: "10k", features: ["RAM 1GB-2GB", "Uptime 99%", "Support All Bot", "Anti Delay"] },
            { title: "NOKOS ALL NEGARA", price: "5k", features: ["Fresh OTP", "Banyak Negara", "Garansi Login", "Proses Cepat"] }
        ]
    },
    jasa: {
        title: "🛠️ JASA EDIT SCRIPT",
        items: [
            { title: "RENAME SCRIPT", price: "15k", features: ["Ganti Nama Owner", "Ganti No Owner", "Tampilan Bersih", "Rapih"] },
            { title: "TAMBAH FITUR", price: "10k", features: ["Request Fitur Baru", "Fix Error", "Integrasi API", "Instalasi Plugin"] }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initParticles();
    initTyping();
    setupSelector();
});

function initClock() {
    setInterval(() => {
        const now = new Date();
        document.getElementById('clock').textContent = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    }, 1000);
}

function initParticles() {
    const container = document.getElementById('particles');
    for(let i=0; i<CONFIG.PARTICLE_COUNT; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.width = p.style.height = Math.random() * 5 + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(p);
    }
}

function initTyping() {
    const text = "KYYZE NAVA STORE";
    let i = 0;
    const el = document.getElementById('typingText');
    function type() {
        if(i < text.length) { el.textContent += text[i++]; setTimeout(type, CONFIG.TYPING_SPEED); }
    }
    type();
}

function setupSelector() {
    document.querySelectorAll('.selector-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.dataset.product;
            renderProducts(type);
            document.querySelector('.product-lists-container').classList.add('active');
            window.scrollTo({ top: document.getElementById('product-lists').offsetTop - 100, behavior: 'smooth' });
        });
    });
}

function renderProducts(type) {
    const data = products[type];
    const container = document.getElementById('product-content');
    container.innerHTML = `
        <h2 style="text-align:center; margin-bottom:30px;">${data.title}</h2>
        <div class="product-grid">
            ${data.items.map(item => `
                <div class="product-card">
                    <h3>${item.title}</h3>
                    <div class="price" style="font-size:1.5rem; color:#8ECAE6; margin:10px 0;">Rp ${item.price}</div>
                    <ul>${item.features.map(f => `<li>✓ ${f}</li>`).join('')}</ul>
                    <button class="btn-order" onclick="order('${item.title}', '${item.price}')">Beli Sekarang</button>
                </div>
            `).join('')}
        </div>
    `;
}

function order(name, price) {
    const msg = `Halo Kyyze Nava, saya mau beli ${name} harga ${price}`;
    window.open(`https://wa.me/${CONFIG.ADMIN_PHONE}?text=${encodeURIComponent(msg)}`);
}
