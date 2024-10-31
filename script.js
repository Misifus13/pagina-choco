document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;

    document.getElementById('result').textContent = `La suma es: ${sum}`;
});
