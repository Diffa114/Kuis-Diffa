const soalContainer = document.getElementById("soal");
const jawabanContainer = document.getElementById("jawaban");
const hasilContainer = document.getElementById("hasil");
const timerElement = document.getElementById("timer");

const pertanyaan = [
    {
        soal: "Apa ibu kota Indonesia?",
        jawaban: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        jawabanBenar: "Jakarta",
    },
    {
        soal: "Apa ibu kota Jepang?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
    {
        soal: "Apa ibu kota India?",
        jawaban: ["Kolkata", "New Delhi", "Hyderabad", "Mumbai"],
        jawabanBenar: "New Delhi",
    },
    {
        soal: "Apa ibu kota Kanada?",
        jawaban: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        jawabanBenar: "Ottawa",
    },
    {
        soal: "Apa ibu kota Brasil?",
        jawaban: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        jawabanBenar: "Brasília",
    },
    {
        soal: "Apa ibu kota Jerman?",
        jawaban: ["Frankfurt", "Hamburg", "Berlin", "Munich"],
        jawabanBenar: "Berlin",
    },
    {
        soal: "Apa ibu kota Mesir?",
        jawaban: ["Kairo", "Giza", "Alexandria", "Luxor"],
        jawabanBenar: "Kairo",
    },
    {
        soal: "Apa ibu kota Thailand?",
        jawaban: ["Bangkok", "Pattaya", "Chiang Mai", "Phuket"],
        jawabanBenar: "Bangkok",
    },
    {
        soal: "Apa ibu kota Rusia?",
        jawaban: ["Kazan", "Sochi", "Moskow", "St. Petersburg"],
        jawabanBenar: "Moskow",
    },
    {
        soal: "Apa ibu kota Turki?",
        jawaban: ["Istanbul", "Izmir", "Ankara", "Bursa"],
        jawabanBenar: "Ankara",
    }
];

let skor = 0;
let soalSaatIni = 0;
let waktu = 10;
let interval;

function tampilkanSoal() {
    resetTimer();
    const soal = pertanyaan[soalSaatIni];
    soalContainer.textContent = soal.soal;
    jawabanContainer.innerHTML = "";

    soal.jawaban.forEach((jawaban) => {
        const tombol = document.createElement("button");
        tombol.textContent = jawaban;
        tombol.addEventListener("click", () => {
            cekJawaban(jawaban);
        });
        jawabanContainer.appendChild(tombol);
    });

    mulaiTimer();
}

function mulaiTimer() {
    waktu = 10;
    timerElement.textContent = `Waktu: ${waktu} detik`;
    interval = setInterval(() => {
        waktu--;
        timerElement.textContent = `Waktu: ${waktu} detik`;
        if (waktu <= 0) {
            clearInterval(interval);
            soalSaatIni++;
            if (soalSaatIni < pertanyaan.length) {
                tampilkanSoal();
            } else {
                tampilkanHasil();
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(interval);
}

function cekJawaban(jawaban) {
    resetTimer();
    const soal = pertanyaan[soalSaatIni];
    if (jawaban === soal.jawabanBenar) {
        skor++;
    }
    soalSaatIni++;
    if (soalSaatIni < pertanyaan.length) {
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
}

function tampilkanHasil() {
    timerElement.textContent = "";
    soalContainer.textContent = "";
    jawabanContainer.innerHTML = "";
    hasilContainer.textContent = `Skor Anda: ${skor} dari ${pertanyaan.length}`;
}

tampilkanSoal();
