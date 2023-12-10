var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida)
{
    duvida.addEventListener('click', function ()
    {

        duvida.classList.toggle('ativa')
    })
})

var Botao = document.querySelector('.botao');

Botao.addEventListener('mouseover', function() 
{
    this.style.backgroundColor = "red";
});

Botao.addEventListener('mouseout', function() 
{
    this.style.backgroundColor = "#009989";
});

// var Header = document.querySelector('.header');

// window.addEventListener('scroll', function() {
//     if (window.scrollY > 0) 
//     {
//         Header.classList.remove('.header'); // Verde quando está no topo
//         Header.classList.add('.header.scrolled'); // Verde quando está no topo
//     } else 
//     {

//         Header.style.backgroundColor = ".header"; // Vermelho quando está no topo
//     }
// });


