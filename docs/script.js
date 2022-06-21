
let header = document.createElement('header');

document.body.appendChild(header);

let div = document.createElement('div');
div.id = 'frase';

header.appendChild(div);

let strong = document.createElement('strong');

div.appendChild(strong);

let p = document.createElement('p');

const br = document.createElement('br');

let newContent = document.createTextNode('Quando pensar em desistir, lembre-se do caminho percorrido para chegar onde você está. ' +
'Mantenha o Foco no necessário. Força! Haverão muitos desafios. Tenha Fé e não desista!');

p.appendChild(newContent);

strong.appendChild(p);

let ul = document.createElement('ul');

header.appendChild(ul);

for(let j = 0; j < 3; j++) {
    var li = document.createElement('li');
    
    var i = document.createElement('i');

    var a = document.createElement('a');
    a.setAttribute('target', '_blank');
    switch(j){
        case 0: 
            i.className = 'fab fa-github';
            a.setAttribute('href', 'https://github.com/Hugo0307');
            a.innerHTML = 'GitHub';
        break;
        case 1:
            i.className = 'fab fa-linkedin-in';
            a.setAttribute('href', 'https://www.linkedin.com/in/hugo-almeida-72683488/');
            a.innerHTML = 'LinkedIn';
        break;
        default:
            i.className = 'fab fa-whatsapp';
            a.setAttribute('href', 'https://wa.me/71999887766');
            a.innerHTML = 'WhatsApp';
        break;
    }
    li.appendChild(i);
    li.appendChild(a);
  
    ul.appendChild(li);
}

