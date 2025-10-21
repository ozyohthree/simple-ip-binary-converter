document.getElementById('to-binary-btn').addEventListener('click', () => {
    const decimalInput = document.getElementById('decimal-input').value;
    const binaryResult = document.getElementById('binary-result');

    if (!/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(decimalInput)) {
        binaryResult.textContent = 'Invalid decimal IP address';
        return;
    }

    const octets = decimalInput.split('.');
    if (octets.some(octet => parseInt(octet, 10) > 255)) {
        binaryResult.textContent = 'Invalid decimal IP address';
        return;
    }

    const binaryArr = octets.map(octet => {
        return parseInt(octet, 10).toString(2).padStart(8, '0');
    });

    binaryResult.textContent = binaryArr.join('.');
});

document.getElementById('binary-input').addEventListener('input', e => {
    let input = e.target.value.replace(/\./g, '');
    if (input.length > 32) {
        input = input.slice(0, 32);
    }
    let formattedInput = '';
    for (let i = 0; i < input.length; i++) {
        if (i > 0 && i % 8 === 0) {
            formattedInput += '.';
        }
        formattedInput += input[i];
    }
    e.target.value = formattedInput;
});

document.getElementById('to-decimal-btn').addEventListener('click', () => {
    const binaryInput = document.getElementById('binary-input').value;
    const decimalResult = document.getElementById('decimal-result');

    if (!/^(?:[01]{8}\.){3}[01]{8}$/.test(binaryInput)) {
        decimalResult.textContent = 'Invalid binary IP address';
        return;
    }

    const octets = binaryInput.split('.');
    const decimalArr = octets.map(octet => {
        return parseInt(octet, 2);
    });

    decimalResult.textContent = decimalArr.join('.');
});