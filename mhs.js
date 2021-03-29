

var tabel = document.getElementById('tabel'),
            nim = document.getElementById('nim'),
            nama = document.getElementById('nama'),
            prodi = document.getElementById('prodi'),
            btnTambah = document.getElementById('btnTambah'),
            form = document.getElementById('frmUtama'),
            pesan = document.getElementById('pesan'),
            email = document.getElementById('email'),
            db;      
 
function tambahBaris(e) {
    // Periksa apakah NIM sudah ada
    if (tabel.rows.namedItem(nim.value)) {
        pesan.textContent = 'Maaf, NIM yang diinput telah terdaftar!';
        e.preventDefault();
        return;
    }

    data.nama = nama.value;
    data.nim = nim.value;
    data.prodi = prodi.value;
    data.email = email.value;

    // Membuat baris baru
    var baris = tabel.insertRow();
    baris.id = nim.value;
    
    baris.insertCell().appendChild(document.createTextNode(data.nama));
    baris.insertCell().appendChild(document.createTextNode(data.nim));
    baris.insertCell().appendChild(document.createTextNode(data.prodi));
    baris.insertCell().appendChild(document.createTextNode(data.email));
 
    // Membuat tombol hapus untuk setiap baris
    var btnHapus = document.createElement('input');
    btnHapus.type = 'button';
    btnHapus.value = 'Hapus';
    btnHapus.id = nim.value;            
    baris.insertCell().appendChild(btnHapus);
 
    // Tambah ke database
    tambahKeDatabase({
        nim: nim.value,
        nama: nama.value,
        prodi: prodi.value,
        email: email.value
    });

    e.preventDefault();
}

form.addEventListener('submit', tambahBaris, false);
tabel.addEventListener('click', hapusBaris, true);

function kesalahanHandler(e) {
}

function buatDatabase() {
    var request = window.indexedDB.open('latihan', 1);
    request.onerror = kesalahanHandler;
    request.onupgradeneeded = function(e) {
        var db = e.target.result;
        db.onerror = kesalahanHandler;
        var objectstore = db.createObjectStore('mahasiswa', { keyPath: 'nim' });
        pesan.innerHTML += 'Object store mahasiswa berhasil dibuat.<br>';
    }
    request.onsuccess = function(e) {
        db = e.target.result;
        db.onerror = kesalahanHandler;
        pesan.innerHTML += 'Berhasil melakukan koneksi ke database!<br>';
        bacaDariDatabase();
    }
}

buatDatabase();

function cetakPesanHandler(msg) {
    return function(e) {
        pesan.innerHTML += msg + '<br>';
    }
}

function buatTransaksi() {
    var transaction = db.transaction(['mahasiswa'], 'readwrite');
    transaction.onerror = kesalahanHandler;
    return transaction;
}

function tambahKeDatabase(mahasiswa) {
    var objectstore = buatTransaksi().objectStore('mahasiswa');
    var request = objectstore.add(mahasiswa);
    request.onerror = kesalahanHandler;

}

 
function hapusBaris(e) {
    if (e.target.type=='button') {                
        tabel.deleteRow(tabel.rows.namedItem(e.target.id).sectionRowIndex);
    }
}
function Kembali(){
    history.go(-1);
}
function Hapus(){
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("prodi").value = "";
    document.getElementById("email").value = "";
    pesan.textContent = '';
    
form.addEventListener('submit', tambahBaris, false);                  
tabel.addEventListener('click', hapusBaris, true);  
}

let data = {
    nama : '',
    nim : '',
    prodi :'',  
    email :'', 
    
    set setNama(newNama){
        this.nama = newNama;
    },
    get getNama(){
        return this.nama;
    },
    set setNim(newNim){
        this.nim = newNim;
    },
    get getNim(){
        return this.nim;
    },
    set setProdi(newProdi){
        this.prodi = newProdi;
    },
    get getProdi(){
        return this.prodi;
    },
    set setEmail(newEmail){
        this.email = newEmail;
    },
    get getEmail(){
        return this.email;
    } 
}