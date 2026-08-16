// HIER ÄNDERN: echte WhatsApp-Nummer mit Ländervorwahl, ohne +, Leerzeichen oder Bindestriche.
const WHATSAPP_NUMBER = "4917631461159";
const WEDDING_DATE = new Date("2026-10-09T11:00:00+02:00");

const messages = {
  yes: "Hallo Osayamen & George, ich/wir sind bei eurer Hochzeit am 09.10.2026 sehr gerne dabei. Ich/Wir sind auch gerne danach beim Essen im Restaurant. Name(n): ",
  no: "Hallo Osayamen & George, leider kann/können ich/wir am 09.10.2026 nicht dabei sein. Name(n): ",
};

document.querySelectorAll("[data-rsvp]").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[link.dataset.rsvp])}`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.13, rootMargin: "0px 0px -40px" });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

function updateCountdown() {
  const total = Math.max(0, Math.floor((WEDDING_DATE.getTime() - Date.now()) / 1000));
  const values = { days: Math.floor(total / 86400), hours: Math.floor((total % 86400) / 3600), minutes: Math.floor((total % 3600) / 60), seconds: total % 60 };
  Object.entries(values).forEach(([key, value]) => {
    document.querySelector(`[data-count="${key}"]`).textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Sobald du die PDFs in den Ordner /menus legst, entferne in index.html bei den beiden Links
// die Klasse "is-disabled", ändere den Text und setze href="menus/speisekarte.pdf" bzw. href="menus/pizzakarte.pdf".
