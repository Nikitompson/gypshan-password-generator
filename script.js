const parts = [
    "ikobatrai", "SPAWN", "-0-", "whale", "gib",
    "toska", "papa", "frog", "765", "0.12",
    "mancerotbash", "kapstarassa", "alvri", "transcon"
];

let passwordCount = 0;

function generatePassword() {
    const complexity = document.getElementById("complexity").value;

    let count = 4;
    if (complexity === "easy") count = 2;
    if (complexity === "medium") count = 3;
    if (complexity === "hard") count = 5;
    if (complexity === "infinite") count = 8;

    const password = parts
        .sort(() => Math.random() - 0.5)
        .slice(0, count)
        .join("-");

    document.getElementById("passwordOutput").value = password;

    passwordCount++;
    document.getElementById("counterValue").textContent = passwordCount;
}

document.getElementById("generateBtn").addEventListener("click", generatePassword);

document.getElementById("copyBtn").addEventListener("click", function() {
    const output = document.getElementById("passwordOutput");
    if (output.value === "") {
        alert("Сначала сгенерируй пароль, брат.");
        return;
    }
    navigator.clipboard.writeText(output.value)
        .then(() => {
            alert("Пароль скопирован. Кит одобряет.");
        })
        .catch(err => {
            alert("Ошибка копирования. Папа не одобряет.");
        });
});

document.getElementById("papaBtn").addEventListener("click", function() {
    const phrases = [
        "Папа не одобряет.",
        "Папа говорит: «Сначала сделай уроки».",
        "Папа смотрит на тебя с укором.",
        "Папа говорит: «Я в твои годы...»",
        "Папа молчит. Это хуже.",
        "Папа одобряет. Но тоска остаётся."
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    alert(randomPhrase);
});
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    this.textContent = isDark ? "☀️" : "🌙";
});