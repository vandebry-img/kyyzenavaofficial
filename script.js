
const CONFIG = {
    ADMIN_PHONE: "62895365140691",
    TYPING_SPEED: 100
};

const products = {
    sewabot: {
        title: "🤖 SEWA BOT WHATSAPP",
        items: [
            { name: "Sewabot Reguler", price: "30.000", desc: ["Fitur Downloader", "AI Chat", "Group Only", "Aktif 30 Hari"] },
            { name: "Sewabot VIP", price: "50.000", desc: ["Semua Fitur Premium", "Respon Prioritas", "Bebas Masuk Bot", "Aktif 30 Hari"] }
        ]
    },
    jadibot: {
        title: "📲 JADI BOT SERVICE",
        items: [
            { name: "Jadibot Standar", price: "90.000", desc: ["Nomor Pribadi Jadi Bot", "Panel Gratis", "Full Fitur", "Permanen"] },
            { name: "Jadibot Rename", price: "110.000", desc: ["Custom Nama Bot", "Custom Menu", "Full Akses Owner", "Permanen"] }
        ]
    },
    digital: {
        title: "📜 SCRIPT & PANEL",
        items: [
            { name: "Script Bot (3 Script)", price: "Hubungi Admin", desc: ["Script Base Folder", "Script No Button", "Script Full Fitur", "Update Berkala"] },
            { name: "Nokos All Negara", price: "5.000", desc: ["OTP Cepat", "Banyak Pilihan", "Garansi Login", "Aman"] },
            { name: "Panel Pterodactyl", price: "10.000", desc: ["Ram 1-2GB", "Uptime 99%", "Support All Bot", "Anti Delay"] }
        ]
    },
    jasa: {
        title: "🛠️ JASA DEVELOPER",
        items: [
            { name: "Jasa Rename Script", price: "15.000", desc: ["Ganti Nama Owner", "Ganti No Owner", "Tampilan Bersih", "Proses Cepat"] },
            { name: "Tambah Fitur Script", price: "10.000", desc: ["Request Fitur Baru", "Fix Error", "Integrasi API", "Instalasi Plugin"] }
        ]
    }
};

window.onload = () => {
    // Hilangkan Loading
    document.getElementById('loading').classList.add('hidden');
    
    // Jam
    setInterval(() => {
        const d = new Date();
        document.getElementById('clock').innerText = d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0');
    }, 1000);

    // Typing Effect
    const text = "KYYZE NAVA STORE";
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById('typingText').innerHTML += text.charAt(i);
            i++;
            setTimeout(type, CONFIG.TYPING_SPEED);
        }
    }
    type();
};

function showProducts(key) {
    const section = document.getElementById('product-lists');
    const container = document.getElementById('product-content');
    const data = products[key];

    section.classList.add('active');
    container.innerHTML = `
        <h2 style="text-align:center; font-size:2rem; margin-bottom:20px;">${data.title}</h2>
        <div class="product-grid">
            ${data.items.map(item => `
                <div class="product-card">
                    <h3>${item.name}</h3>
                    <p style="font-size:1.5rem; font-weight:800; color:#219EBC; margin:15px 0;">Rp ${item.price}</p>
                    <ul class="feature-list">
                        ${item.desc.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
                    </ul>
                    <button class="btn-order" onclick="order('${item.name}')">Beli Sekarang</button>
                </div>
            `).join('')}
        </div>
    `;
    window.scrollTo({ top: section.offsetTop - 100, behavior: 'smooth' });
}

function order(product) {
    window.open(`https://wa.me/${CONFIG.ADMIN_PHONE}?text=Halo+Admin+Kyyze+Nava,+saya+ingin+memesan+${product}`);
}

// Theme Toggle logic
document.getElementById('themeToggle').onclick = () => {
    const body = document.body;
    const current = body.getAttribute('data-theme');
    body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
};
