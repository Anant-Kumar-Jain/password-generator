const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const generatePassword = (length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=\\";
    
    if (charset === "") {
        throw new Error("At least one character set must be selected.");
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};

app.post('/generate-password', (req, res) => {
    const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = req.body;
    try {
        const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
        res.json({ password });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});