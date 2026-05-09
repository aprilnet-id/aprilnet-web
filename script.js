document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Cek apakah elemen ada di halaman
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Menambah/menghapus class active dan is-active
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
            console.log("Menu diklik!"); // Cek di console browser (F12)
        });
    }

    // Slider Promo Otomatis
    setInterval(() => {
        if (typeof movePromo === "function") movePromo(1);
    }, 5000);
});

// Fungsi untuk menutup menu saat link diklik
function tutupMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('active');
    }
}

// Fungsi Slider Promo Bawah
let promoIndex = 0;
function movePromo(direction) {
    const slides = document.getElementById('promoSlides');
    if (slides) {
        promoIndex = (promoIndex + direction + 3) % 3;
        slides.style.transform = `translateX(-${promoIndex * 33.333}%)`;
    }
}