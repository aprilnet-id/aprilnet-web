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
let promoIndex = 0; // Variabel posisi slide

document.addEventListener('DOMContentLoaded', () => {
    // Jalankan auto-slide setiap 5 detik
    setInterval(() => {
        movePromo(1);
    }, 5000);
});

// Fungsi untuk menggerakkan slider tengah
function movePromo(direction) {
    const slides = document.getElementById('promoSlides');
    const totalPromoSlides = 3; // Sesuaikan dengan jumlah gambar

    if (slides) {
        promoIndex = (promoIndex + direction + totalPromoSlides) % totalPromoSlides;
        
        // Geser berdasarkan persentase (33.333% karena ada 3 slide)
        slides.style.transform = `translateX(-${promoIndex * 33.333}%)`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // ... kode hamburger menu Anda ...

    // Logika Pengiriman Form ke WhatsApp
    const formDaftar = document.getElementById('formPendaftaran');

    if (formDaftar) {
        formDaftar.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah halaman refresh

            // Ambil Data dari Input
            const paket = document.getElementById('inputPaket').value;
            const nama = document.getElementById('regNama').value;
            const alamat = document.getElementById('regAlamat').value;

            // Nomor WhatsApp Tujuan (Ganti dengan nomor Anda, awali dengan 62)
            const noWA = "628123456789"; 

            // Susun Pesan
            const pesan = `Halo APRILNET, saya ingin mendaftar pemasangan internet.%0A%0A` +
                          `*Detail Pendaftaran:*%0A` +
                          `- Paket: ${paket}%0A` +
                          `- Nama: ${nama}%0A` +
                          `- Alamat: ${alamat}%0A%0A` +
                          `Mohon segera diproses, terima kasih.`;

            // Buka Link WhatsApp
            const urlWA = `https://wa.me/${noWA}?text=${pesan}`;
            window.open(urlWA, '_blank');
        });
    }
});

// Fungsi untuk membuka halaman daftar (panggil dari tombol paket)
function bukaPendaftaran(namaPaket) {
    const mainContent = document.getElementById('main-content');
    const halamanDaftar = document.getElementById('halaman-daftar');
    const inputPaket = document.getElementById('inputPaket');

    if (mainContent && halamanDaftar) {
        mainContent.style.display = 'none';
        halamanDaftar.style.display = 'block';
        inputPaket.value = namaPaket;
        window.scrollTo(0, 0); // Scroll ke atas
    }
}

// Fungsi untuk kembali
function tutupPendaftaran() {
    document.getElementById('halaman-daftar').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}