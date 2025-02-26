document.getElementById('length').addEventListener('input', function() {
    document.getElementById('lengthValue').textContent = this.value;
});

document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let availableChars = '';
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeLowercase) availableChars += lowercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSymbols) availableChars += symbolChars;

    if (availableChars.length === 0) {
        alert('Seleziona almeno un tipo di carattere.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    document.getElementById('result').textContent = password;
});

document.getElementById('copy').addEventListener('click', function() {
    const password = document.getElementById('result').textContent;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copiata negli appunti!');
        }, () => {
            alert('Errore nella copia della password.');
        });
    } else {
        alert('Genera una password prima di copiarla.');
    }
});
