Nama    : Fariska Fedira Ardhanariswari
NPM     : 2206815705
Kelas   : PBP A

> Membuat sebuah proyek Django baru.
   - Membuat direktori sebagai tempat menyimpan proyek Git dan membuat repositori baru untuk mengelola proyek sesuai ketentuan dan diberi nama sesuai keinginan.
   - Menghubungkan repositori lokal dengan repositori pada GitHub.
   - Membuat virtual environment dengan menjalankan perintah "python -m venv env" pada terminal.
   - Aktifkan virtual environment dengan menjalankan perintah "source env/bin/activate", virtual environment digunakan untuk mengisolasi package serta dependencies dari aplikasi sehingga tidak bertabrakan dengan versi lain yang ada pada komputer. Aktifnya virtual environment ditandai dengan "(env)" di barus input pada terminal.
   - Menyiapkan dependencies sesuai ketentuan dengan nama file requirement.txt. Dependencies adalah komponen/modul yang dibutuhkan oleh suatu perangkat lunak untuk bekerja.
   - Pasang dependencies dengan menjalankan perintah "pip install -r requirements.txt"
   - Membuat proyek Django dengan nama "vineyard" dengan menjalankan perintah "django-admin startproject vineyard ."
   - Mengonfigurasi proyek dan menjalankan server dengan menambahkan "*" pada ALLOWED_HOSTS di settings.py untuk memberi akses pada semua host.
   - Memastikan berkas manage.py aktif dengan menjalankan server Django dengan perintah "python manage.py runserver" kemudian cek pada peramban web "http://localhost:8000" untuk mengetahui aplikasi yang dibuat berhasil.

> Membuat aplikasi dengan nama main pada proyek tersebut.
   - Aktifkan virtual environment yang telah dibuat sesuai perintah di atas.

> Melakukan routing pada proyek agar dapat menjalankan aplikasi main.
   - Buat aplikasi baru bernama main dengan menjalankan perintah "python manage.py startapp main" untuk memberi struktur awal dan aplikasi tersebut.
   - Daftarkan aplikasi main tersebut ke dalam proyek dengan menambahkan "main" pada variabel INSTALLED-APPS di berkas settings.py

> Membuat model pada aplikasi main dengan nama Item dan memiliki atribut wajib sebagai berikut.
    - Mengubah berkas models.py untuk mendefinisikan model yang baru.
    - Impor modul models dari django.db sebagai modul untuk membantu mendefinisikan model basis data untuk aplikasi.
    - Sertakan class Product (models.Model) sebagai kelas dasar untuk mendefinisikan model dalam Django.
    - Isi berkas models.py dengan atribut dan definisikan dengan tipe data yang sesuai seperti name dengan tipe CharField, amount dengan tipe IntegerField, dan description dengan tipe TextField.
    - Lakukan migrasi model untuk melihat perubahan pada model basis data yang didefinisikan. Buat migrasi model dengan menjalankan perintah "python manage.py makemigrations".
    - Aplikasikan perubahan model dengan perintah "python manage.py migrate".

>  Membuat sebuah fungsi pada views.py untuk dikembalikan ke dalam sebuah template HTML yang menampilkan nama aplikasi serta nama dan kelas kamu.
   - Impor render dari django.shortcuts untuk me-render tampilan HTML sesuai dengan data yang diberikan.
   - Membuat fungsi show_main dengan parameter request untuk mengatur permintaan HTTP dan mengembalikan tampilan yang sesuai.
   - Melengkapi "context" pada fungsi show_main yaitu dictionary yang berisi data untuk ditampilkan.
   - Fungsi show_main menggunakan return render(request, "main.html", context) untuk me-render tampilan main.html dengan menggunakan fungsi render.

> Membuat sebuah routing pada urls.py aplikasi main untuk memetakan fungsi yang telah dibuat pada views.py.
   - Melakukan routing pada proyek agar aplikasi main dapat diakses melalui peramban web.
   - Membuat berkas urls.py di dalam direktiri main untuk mengatur rute URL yang terkait dengan aplikasi main.
   - Melakukan impor path dari django.urls untuk mendefinisikan pola URL dan menggunakan fungsi show_main dari modul main.views sebagai tampilan ketika URL diakses.
   - Mengonfigurasi routing URL proyek dengan mengimpor fungsi include dari django.urls untuk mengimpor rute URL dari aplikasi main ke dalam berkas urls.py.
   - Tambahkan path URL "main/" untuk mengarahkan rute pada aplikasi main.

> Melakukan deployment ke Adaptable terhadap aplikasi yang sudah dibuat sehingga nantinya dapat diakses oleh teman-temanmu melalui Internet.
   - Login Adaptable dengan menggunakan akun GitHub.
   - Sambungkan GitHub dengan repositori yang ingin di-deploy.
   - Tekan tombol New App -> Connect an Existing Repository -> pilih proyek "Vineyard" sebagai basis aplikasi yang ingin di-deploy.
   - Pilih Python App Template sebagai template deployment dan PostgreSQL sebagai tipe basis data yang akan digunakan.
   - Sesuaikan versi Python yang digunakan.
   - Untuk bagian Start Command isi dengan perintah "python manage.py migrate && gunicorn vineyard.wsgi".
   - Isi nama aplikasi dengan "vineyard".
   - Centang bagian HTTP Listener on PORT lalu klik Deploy App.

> Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara urls.py, views.py, models.py, dan berkas html.
   - User mengirimkan request ke URL, kemudian berkas urls.py akan mencocokan permintaan user dengan pola URL yang sesuai dan mengarahkan ke views sesuai berkas views.py. Views akan menggunakan Model dalam berkas models.py untuk mengakses data yang diperlukan. Views akan me-render halaman HTML dengan template yang sesuai kemudian menggabungkan dengan data dari model ke halaman web. Halaman web akan dikirim kembali sebagai respon kepada user.


> Jelaskan mengapa kita menggunakan virtual environment? Apakah kita tetap dapat membuat aplikasi web berbasis Django tanpa menggunakan virtual environment?
   - Kita tetap sapat membuat aplikasi web berbasis Django tanpa menggunakan virtual environment, tetapi tidak disarankan. Jika tidak menggunakan virtual environment terdapat risiko konflik dependencies. Virtual environment berguna untuk mengisolasi package serta dependencies dari aplikasi sehingga tidak bertabrakan dengan versi lain pada perangkat user.

> Jelaskan apakah itu MVC, MVT, MVVM dan perbedaan dari ketiganya.
   - MVC : Model View Controller
        - Model : Tempat menyimpan data dan informasi aplikasi.
        - View : Tampilan, menunjukkan informasi kepada pengguna. Seperti halaman web pengguna aplikasi.
        - Controller : Mengatur bagaimana permintaan pengguna ditangani. Penghubung antara View dan Model.
        Perbedaan : Cara mengorganisir kode dalam aplikasi agar mudah dimengerti, biasa digunakan dalam aplikasi berbasis desktop dan web.
   - MVT : Model View Template
        - Model : Tempat menyimpan data dan informasi aplikasi seperti pada MVC.
        - View : Tampilan yang menampilkan informasi kepada pengguna.
        - Template : Mengatur tampilan halaman web dan menentukan bagaimana data dari Model akan ditampilkan.
        Perbedaan : Varian dari MVC yang digunakan dalam kerangka Django, Template mengatur tampilan dalam halaman web dan menggabungkan dengan data dari Model.
   - MVVM : Model View ViewModel
        - Model : Tempat menyimpan data dan informasi aplikasi.
        - View : Tampilan yang menampilkan informasi kepada pengguna.
        - ViewModel : Penghubung antara Model dan View, mengelola tampilan data dari Model, dan menyediakan cara untuk berinteraksi dengan data tersebut.
        Perbedaan : ViewModel memisahkan cara data ditampilan dari data itu sendiri.