// > https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
// > Avec la methode removeChild()
// ## 1. 
// - Utilise le second bouton pour supprimer le premier enfant
let ul1 = document.querySelectorAll('ul')[0];
let button1 = document.querySelectorAll('input')[0]
button1.addEventListener('click', () => {
    ul1.removeChild(ul1.firstChild)
})
// ## 2. 
// - Utilise le second bouton pour supprimer le dernier enfant 
let button2 = document.querySelectorAll('input')[1]
button2.addEventListener('click', () => {
    ul1.removeChild(ul1.lastChild)
})
// ## 3 .
// - Utilise le dernier bouton pour supprimer un enfant au hasard
let button3 = document.querySelectorAll('input')[2]
button3.addEventListener('click', () => {
    let random, arr
    arr = Array.from(document.querySelectorAll('ul')[0].children)
    random = Math.round(Math.random() * arr.length)
    ul1.removeChild(arr[random])
})


// > https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild
// > Avec la methode replaceChild()


// ## 4 . Dans la partie Remplacement de ton HTML
let ul2 = document.querySelectorAll('ul')[1];
// - Créer un élément li dans ton fichier JS
let li = document.createElement('li')
li.innerHTML = "bonjour"
// - Remplace le deuxième li par celui ci quand on clique sur le button exercice 4
let button4 = document.querySelectorAll('input')[3]
button4.addEventListener('click', () => {
    ul2.replaceChild(li, ul2.querySelectorAll('li')[1])
})

// ## 5. 
// - Créer un programme qui permet avec l'input de créer un li et de remplacer le "li" 3 par celui ci en appuyant sur le bouton exercice 5
let button5 = document.querySelectorAll('input')[5]
console.log(button5);
button5.addEventListener('click', function () {
        let newLi, li3, inputValue
        li3 = ul2.querySelectorAll('li')[2]
        newLi = document.createElement('li')
        inputValue = document.getElementById('replaceValue').value
        newLi.innerHTML = inputValue
        ul2.replaceChild(newLi, li3)
    }
)
