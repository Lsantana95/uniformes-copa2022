"use strict";

const uniformes = [

  { id: "1", url: "./img/uniforme-catar.jpg" },
  { id: "5", url: "./img/uniforme-inglaterra.jpg" },
  { id: "2", url: "./img/uniforme-equador.jpg" },
  { id: "6", url: "./img/uniforme-eua.jpg" },
  { id: "3", url: "./img/uniforme-holanda.jpg" },
  { id: "7", url: "./img/uniforme-pais-de-gales.jpg" },
  { id: "4", url: "./img/uniforme-senegal.jpg" },
  { id: "8", url: "./img/uniforme-ira.jpg" },

  { id: "9", url: "./img/uniforme-argentina.jpg" },
  { id: "13", url: "./img/uniforme-franca.jpg" },
  { id: "10", url: "./img/uniforme-arabia-saudita.jpg" },
  { id: "14", url: "./img/uniforme-australia.jpg" },
  { id: "11", url: "./img/uniforme-mexico.jpg" },
  { id: "15", url: "./img/uniforme-dinamarca.jpg" },
  { id: "12", url: "./img/uniforme-polonia.jpg" },
  { id: "16", url: "./img/uniforme-tunisia.jpg" },

  { id: "17", url: "./img/uniforme-espanha.jpg" },
  { id: "21", url: "./img/uniforme-belgica.jpg" },
  { id: "18", url: "./img/uniforme-costa-rica.jpg" },
  { id: "22", url: "./img/uniforme-canada.jpg" },
  { id: "19", url: "./img/uniforme-alemanha.jpg" },
  { id: "23", url: "./img/uniforme-marrocos.jpg" },
  { id: "20", url: "./img/uniforme-japao.jpg" },
  { id: "24", url: "./img/uniforme-croacia.jpg" },

  { id: "25", url: "./img/uniforme-brasil.jpg" },
  { id: "29", url: "./img/uniforme-portugal.jpg" },
  { id: "26", url: "./img/uniforme-servia.jpg" },
  { id: "30", url: "./img/uniforme-gana.jpg" },
  { id: "27", url: "./img/uniforme-suica.jpg" },
  { id: "31", url: "./img/uniforme-coreia-do-sul.jpg" },
  { id: "28", url: "./img/uniforme-camaroes.jpg" },
  { id: "32", url: "./img/uniforme-uruguai.jpg" },
];

const containerUniformes = document.querySelector("#container-uniformes");

const loadUniformes = (uniformes, container) => {
  uniformes.forEach((uniformes) => {
    container.innerHTML += `  
            <div class="uniformes">
                <img src='${uniformes.url}'
            </div>
        `;
  });
};

loadUniformes(uniformes, containerUniformes);

let uniformes32 = document.querySelectorAll(".uniformes");

const previous = () => {
  containerUniformes.appendChild(uniformes32[0]);
  uniformes32 = document.querySelectorAll(".uniformes");
};

const next = () => {
  const lastUniformes = uniformes32[uniformes32.length - 1];
  containerUniformes.insertBefore(lastUniformes, uniformes32[0]);
  uniformes32 = document.querySelectorAll(".uniformes");
};

document.querySelector("#previous").addEventListener("click", next);
document.querySelector("#next").addEventListener("click", previous);