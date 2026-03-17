const lista = document.getElementById('listaItens');
const input = document.getElementById('novoItem');
const botao = document.getElementById('AdicionarBtn');
const mensagem = document.getElementById('mensagem-remocao');
const aviso = document.getElementById('aviso');

aviso.style.display = 'none';

botao.addEventListener('click', adicionarItem);


function adicionarItem() {

    const texto = input.value.trim();

    if (texto !== '') {

        aviso.style.display = 'none';
        const li = document.createElement('li');

        const checkbox = document.createElement("input")
        checkbox.type = 'checkbox';

        const span = document.createElement('span');
        span.textContent = texto;

        const btn = document.createElement('button');
        btn.textContent = '🗑️';
        btn.className = 'lixeira';
        btn.onclick = () => removerItem(li);

        const esquerda = document.createElement('div');
        esquerda.className = 'item-esquerda';
        esquerda.appendChild(checkbox);
        esquerda.appendChild(span);

        li.appendChild(esquerda);
        li.appendChild(btn);
        lista.appendChild(li);

        input.value = '';

    } else {
        aviso.style.display = 'block';
    }
}

function removerItem(item) {
    item.remove();
    mensagem.style.display = 'flex';
    setTimeout(() => {
        mensagem.style.display = 'none';
    }, 3000);
}




