
const otazky = ["Jaké je správné číslo pí ?", "Jaké je nejrychlejší suchozemské zvíře ?", "Kolik je 11 * 11 ?"];

const spravneOdpovedi = ["3.14", "Gepard", "121"];

const odpovediOtazky = [
    ["2.14", "3.14", "2.24", "5.2", "1.8"],
    ["Já", "Pes", "Puma", "Gepard", "Tiger"],
    ["111", "122", "131", "121", "130"]
];

let blokace = 0;

let poradiOtazky = 0;
window.addEventListener("load", () => {
    let odpovedi = document.getElementsByClassName("text");
    let question = document.querySelector(".question");

    question.innerHTML = `<span class="poradiOtazky">1</span><span class="tecka">.</span>${otazky[0]}`;

    let seznam = odpovediOtazky[poradiOtazky];
    for(let a = 0; a < odpovediOtazky[0].length; a++) {
        odpovedi[a].innerText = seznam[a];
    }

})

function odpovedFunction(tlacitko) {
    
    if(blokace === 0) {
        let radek = tlacitko.parentNode;
        let text = tlacitko.innerText;
        let otazka = document.querySelector(".poradiOtazky").innerText;
        otazka = Number(otazka) - 1;

        if (text === spravneOdpovedi[otazka]) {
            radek.style = "background: green;";
        } else {
            radek.style = "background: red;";
        }
    }
    blokace = blokace + 1;
    
}

function dalsiOtazka() {
    let randky = document.querySelectorAll(".answers p");
    for(let a = 0; a < randky.length; a++) {
        randky[a].style = "";
    }
    blokace = 0;
    
    poradiOtazky = poradiOtazky + 1;

    let odpovedi = document.getElementsByClassName("text");
    let question = document.querySelector(".question");

    let seznam = odpovediOtazky[poradiOtazky];
    for (let a = 0; a < odpovediOtazky[poradiOtazky].length; a++) {
        odpovedi[a].innerText = seznam[a];
    }


    question.innerHTML = `<span class="poradiOtazky">${poradiOtazky + 1}</span><span class="tecka">.</span>${otazky[poradiOtazky]}`;

    if (poradiOtazky === 2) {
        let radek__tlacitko = document.querySelector(".tlacitko");
        radek__tlacitko.innerHTML = "";
    }
    
    
}
