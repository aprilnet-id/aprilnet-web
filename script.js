document.addEventListener('DOMContentLoaded', () => {
    // Logic Tab Pilihan Paket
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const targetId = 'paket-' + tab.dataset.target;
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Perbaikan Integrasi WhatsApp
    const formPendaftaran = document.getElementById('formPendaftaran');
    if (formPendaftaran) {
        formPendaftaran.addEventListener('submit', (e) => {
            e.preventDefault();
            const paket = document.getElementById('inputPaket').value;
            const nama = document.getElementById('regNama').value;
            const alamat = document.getElementById('regAlamat').value;
            
            const waNumber = "628123456789"; // Sesuaikan dengan nomor Anda
            const message = `Halo Admin APRILNET, saya mau daftar!\n\n${paket}\nNama: ${nama}\nAlamat: ${alamat}`;
            
            window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
        });
    }
});

// Fungsi Navigasi Halaman Pendaftaran
function bukaPendaftaran(namaPaket) {
    const mainContent = document.getElementById('main-content');
    const halDaftar = document.getElementById('halaman-daftar');
    const inputPaket = document.getElementById('inputPaket');

    if (mainContent && halDaftar && inputPaket) {
        mainContent.style.display = 'none';
        halDaftar.style.display = 'block';
        inputPaket.value = "Paket: " + namaPaket;
        window.scrollTo(0, 0);
    }
}

function tutupPendaftaran() {
    const mainContent = document.getElementById('main-content');
    const halDaftar = document.getElementById('halaman-daftar');

    if (mainContent && halDaftar) {
        mainContent.style.display = 'block';
        halDaftar.style.display = 'none';
        window.scrollTo(0, 0);
    }
}