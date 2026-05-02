// --- Função de Multiplicação e Testes ---
function multiplicar(a, b) {
    return a * b;
}

// Executando testes unitários silenciosos
console.assert(multiplicar(5, 5) === 25, "Falha: 5 * 5");
console.assert(multiplicar(10, 2) === 20, "Falha: 10 * 2");
console.assert(multiplicar(0, 100) === 0, "Falha: 0 * 100");

// Mensagem de sucesso no console
console.log("✅ Todos os testes de multiplicação passaram!");

// --- Validação do Formulário ---
const form = document.getElementById('meuForm');
const statusGeral = document.getElementById('statusGeral');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let valido = true;
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const erroNome = document.getElementById('erroNome');
    const erroEmail = document.getElementById('erroEmail');

    // Reset de mensagens
    statusGeral.style.display = "none";
    erroNome.style.display = "none";
    erroEmail.style.display = "none";

    // Validação Nome
    if (nome.value.trim() === "") {
        erroNome.textContent = "❌ O nome não pode estar em branco.";
        erroNome.style.display = "block";
        valido = false;
    } else if (nome.value.length < 3) {
        erroNome.textContent = "❌ Nome muito curto (mínimo 3 letras).";
        erroNome.style.display = "block";
        valido = false;
    }

    // Validação Email
    const regexEmail = /\S+@\S+\.\S+/;
    if (email.value.trim() === "") {
        erroEmail.textContent = "❌ E-mail é obrigatório.";
        erroEmail.style.display = "block";
        valido = false;
    } else if (!regexEmail.test(email.value)) {
        erroEmail.textContent = "❌ Formato de e-mail inválido.";
        erroEmail.style.display = "block";
        valido = false;
    }

    // Resultado Final
    if (valido) {
        statusGeral.textContent = "✅ Formulário enviado com sucesso!";
        statusGeral.style.display = "block";
        form.reset(); 
    }
});
