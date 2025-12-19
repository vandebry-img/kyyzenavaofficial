// ===== CONFIG =====
const ADMIN = "62895365140691";
const BRAND = "Kyyze Nava";

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(el.getAttribute("href"))
      ?.scrollIntoView({ behavior:"smooth" });
  });
});

// ===== WHATSAPP ORDER =====
document.querySelectorAll(".order").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const card = btn.closest(".card");
    const produk = card.querySelector("h3").innerText;
    const harga = card.querySelector(".harga").innerText;

    const msg =
`Halo ${BRAND}
Saya ingin order:

📦 Produk: ${produk}
💰 Harga: ${harga}

Mohon info selanjutnya.`;

    window.open(
      `https://wa.me/${ADMIN}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  });
});

// ===== SCROLL ANIMATION (CARD FADE UP) =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".card").forEach(card => {
  card.style.transition = "0.6s ease";
  observer.observe(card);
});

// ===== HERO PARALLAX =====
window.addEventListener("scroll", () => {
  document.querySelector(".header")
    .style.transform = `translateY(${window.scrollY * 0.2}px)`;
});

console.log("Kyyze Nava — Azbry-style loaded");
