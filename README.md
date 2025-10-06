# 🎓 Praktikum HTML, CSS, dan JavaScript

Repositori ini berisi dua project sederhana untuk belajar dasar-dasar **HTML, CSS, dan JavaScript**:

1. **Laporan Nilai Mahasiswa** → latihan form input, validasi, dan logika if-else.  
2. **Weather Dashboard** → latihan input kota dan menampilkan data cuaca simulasi ke console log.

---

## 📌 1. Laporan Nilai Mahasiswa

### 📖 Deskripsi
Aplikasi ini menampilkan form untuk memasukkan **nama mahasiswa** dan **nilai**.  
Ketika tombol submit ditekan, data akan ditampilkan di layar bersama status kelulusan.  

- Jika nilai **≥ 75** → LULUS ✅  
- Jika nilai **< 75** → HARUS MENGULANG ❌  

### 📂 Struktur File

### ⚙️ Cara Kerja
1. **HTML**: Menyediakan struktur form input nama, nilai, dan tombol submit.  
2. **CSS**: Mengatur tampilan form agar rapi (menggunakan card, warna, spacing, dan efek hover).  
3. **JavaScript**:  
   - Menangkap input dari user.  
   - Mengecek apakah nilai ≥ 75.  
   - Menampilkan pesan status ke layar dengan warna hijau (lulus) atau merah (tidak lulus).  

---

## 📌 2. Weather Dashboard

### 📖 Deskripsi
Aplikasi sederhana untuk menampilkan cuaca berdasarkan **nama kota** yang dimasukkan pengguna.  
Data cuaca **disimulasikan** dalam bentuk objek JavaScript (`weatherData`).  

### 📂 Struktur File

### ⚙️ Cara Kerja
1. **HTML**:  
   - Input text untuk mengetik nama kota.  
   - Tombol *"Tampilkan Cuaca"*.  
   - Card sederhana untuk UI.  

2. **CSS (inline dalam index.html)**:  
   - Membuat tampilan card dengan background putih.  
   - Input dan tombol memiliki style modern.  
   - Warna hijau untuk tombol agar jelas sebagai aksi utama.  

3. **JavaScript**:  
   - Data cuaca disimpan dalam objek `weatherData`.  
   - Saat user memasukkan kota → sistem mencocokkan dengan data.  
   - Jika ditemukan → tampilkan **Cuaca, Suhu, dan Kondisi** di console log.  
   - Jika tidak ditemukan → tampilkan pesan *data tidak tersedia*.  

### 📊 Contoh Output di Console
Input: **Samarinda**  

---

## 🚀 Cara Menjalankan
1. Clone atau download project ini.  
2. Buka file **index.html** masing-masing project di browser.  
3. Buka **DevTools → Console** untuk melihat hasil dari *Weather Dashboard*.  
4. Untuk *Laporan Nilai Mahasiswa*, hasil langsung muncul di layar.  

---

## 💡 Desain Program
- **HTML** digunakan sebagai struktur dasar.  
- **CSS** dipisahkan (kecuali di Weather Dashboard dibuat inline sederhana) untuk latihan styling.  
- **JavaScript** digunakan untuk logika aplikasi:  
  - Event listener (`addEventListener`) untuk tombol.  
  - Manipulasi DOM (`getElementById`, `textContent`).  
  - Kondisi `if-else` untuk logika kelulusan dan pengecekan data cuaca.  

---

## 📚 Tujuan Pembelajaran
- Melatih penggunaan **form input** dan **button event**.  
- Belajar **DOM Manipulation**.  
- Mengimplementasikan **logika kondisi** dalam aplikasi nyata.  
- Menyusun **project kecil** dengan file terpisah (HTML, CSS, JS).  
