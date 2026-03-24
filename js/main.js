import { filmes } from "./filmes.js";

let filme = JSON.parse(localStorage.getItem("filmes"))


const table = document.getElementById("table");



function createTable() {
    table.innerHTML = `
        <tr>
                <th>Filme</th>
                <th>Ano</th>
                <th>Gênero</th>
            </tr>
    `


    filme.forEach((fil)=>{
        const tr = document.createElement("tr");
        tr.dataset.id = fil.id;
        tr.innerHTML = `
            <td>${fil.nome}</td>
            <td>${fil.ano}</td>
            <td>${fil.genero}</td>
            <td class="btnRemover">Remover</td>
        `

        table.appendChild(tr);
    })
}


createTable();





table.addEventListener("click", (event)=>{
    const btnRemover = event.target.closest(".btnRemover");

    if(!btnRemover) return;

    const tdId = event.target.closest("tr");
    const idd = Number(tdId.dataset.id);

    const indice = filmes.findIndex(f => f.id === idd);

    filme.splice(indice,1);

    
    
    localStorage.setItem("filmes", JSON.stringify(filme))
    createTable()
    

    
    
})