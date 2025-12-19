// ===== KONFIGURASI =====
const ADMIN_WA = "62895365140691";
const BRAND = "Kyyze Nava";

// ===== SMOOTH SCROLL CTA =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== ORDER VIA WHATSAPP =====
document.querySelectorAll(".order").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const card = this.closest(".card");
    const produk = card.querySelector("h3")?.innerText || "-";
    const harga = card.querySelector(".harga")?.innerText || "-";

    const pesan = 
`Halo Admin ${BRAND},
Saya ingin order:

📦 Produk: ${produk}
💰 Harga: ${harga}

Mohon info selanjutnya.`;

    const url = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  });
});

// ===== ANIMASI MASUK (LIGHT) =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card").forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  card.style.transition = "0.4s ease";
  observer.observe(card);
});

console.log("Kyyze Nava landing page ready");
