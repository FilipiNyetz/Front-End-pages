import { criarItemDaLista } from "./criarItem.js";


let item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");



export function adicionarItem(evento) {
    evento.preventDefault()

    const itemDaLista=criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista)
    item.value=""
}
