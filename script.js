document.addEventListener('DOMContentLoaded', () => {
    // 1. Logika Hamburger Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });
    }

    // 2. Logika Tab Paket (Perbaikan Masalah Voucher)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            // Reset active buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Reset active contents
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });
        });
    });
});

// Fungsi Menutup Menu
function tutupMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('active');
    }
}

// Fungsi Pendaftaran (Global)
function bukaPendaftaran(namaPaket) {
    const sectionDaftar = document.getElementById('halaman-daftar');
    const mainContent = document.getElementById('main-content');
    const inputPaket = document.getElementById('inputPaket');

    if (sectionDaftar && mainContent) {
        mainContent.style.display = 'none';
        sectionDaftar.style.display = 'block';
        inputPaket.value = namaPaket;
        window.scrollTo(0, 0);
    }
}

function tutupPendaftaran() {
    document.getElementById('halaman-daftar').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}