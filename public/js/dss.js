



function init() {
    document.getElementsByClassName('gd-form-container')[0].style.transform = "scale(1.5)";
    document.getElementsByClassName('gd-ellipsis-overflow')[0].innerHTML = ''
    document.getElementsByClassName('gd-info-icon')[0].innerHTML = ''
    document.getElementsByClassName('gd-footer-bar')[0].innerHTML = ''
    document.getElementsByClassName('gd-can-i-run-it-btn')[0].innerHTML = 'COMPROBAR'
    document.getElementsByClassName('select2-selection__rendered')[0].innerHTML = 'Elija el Procesador'
    document.getElementsByClassName('select2-selection__rendered')[1].innerHTML = 'Elija Tarjeta Gráfica'
    document.getElementsByClassName('select2-selection__rendered')[2].innerHTML = 'Elija    Memoria RAM'
    document.getElementsByClassName('select2-selection__rendered')[3].innerHTML = 'Elija el Juego'
    $('.gd-header').css('background','none')
    $('.gd-form-wrapper').css('background','rgba(255, 255, 255, 0)')
    $('.gd-info-icon').css('background','rgba(255, 255, 255, 0)')
    $('.gd-flex').css('background','rgba(255, 255, 255, 0)')
    $('.gd-can-i-run-it-btn').css('background','rgba(0, 0, 0)')
    $('.gd-can-i-run-it-btn').css('border','1px solid white')
    $('.gd-can-i-run-it-btn').css('rounded','0.5rem')
    document.getElementsByClassName('select2-selection')[0].classList.add('mb-3')
    document.getElementsByClassName('select2-selection')[1].classList.add('mb-3')
    document.getElementsByClassName('select2-selection')[2].classList.add('mb-3')
    document.getElementsByClassName('select2-selection')[3].classList.add('mb-3')
    document.getElementsByClassName('gd-can-i-run-it-btn')[0].onclick = function(){
        setTimeout(function () {
            // document.getElementsByClassName('gd-error-msg')[0].innerHTML = 'Por favor Rellene todos los campos necesarios'
            setInterval(function () {
                document.getElementsByClassName('gd-canIRunItResult')[0].children[1].style.background = "none"
                document.getElementsByClassName('gd-canIRunItResult')[0].style.transform = "scale(2)"
                $('.gd-header').css('background','none')
                $('.gd-form-wrapper').css('background','rgba(255, 255, 255, 0)')
                $('.gd-info-icon').css('background','rgba(255, 255, 255, 0)')
                $('.gd-flex').css('background','rgba(255, 255, 255, 0)')
                document.getElementsByClassName('gd-ellipsis-overflow')[0].innerHTML = ''
                $('.gd-info-icon').css('background','rgba(255, 255, 255, 0)')
                $('.gd-form-wrapper').css('background','rgba(255, 255, 255, 0)')
                document.getElementsByClassName('gd-info-icon')[0].innerHTML = ''
                document.getElementsByTagName('a')[3].innerHTML = ''
                document.getElementsByTagName('a')[4].innerHTML = ''
                document.getElementsByClassName('gd-reqBtnRecommended')[0].innerHTML = 'Recomendados'
                document.getElementsByClassName('highcharts-container')[0].children[0].children[5].children[0].children[0].innerHTML = "Resultados estadísticos del juego en base a los componentes"
                document.getElementsByClassName('gd-reqBtnMinimum')[0].innerHTML = 'Mínimos'
                $('.gd-reqBtnRecommended').css('background','rgba(151, 0, 252, 0.904)')
                $('.gd-reqBtnMinimum').css('background','rgba(151, 0, 252, 0.904)')
                $('.gd-go-back-btn').css('background','rgba(151, 0, 252, 0.904)')
                document.getElementsByClassName('gd-go-back-btn')[0].innerHTML = 'Regresar'
                document.getElementsByClassName('gd-go-back-btn')[0].onclick = function () {
                    setTimeout(function () { 
                        init();
                     },500)
                  }
              },500)
        },300);
    }
}

