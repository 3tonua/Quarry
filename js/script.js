$(function() {      
  var slider = $('.slider'),
    sliderContent = slider.html(),                      // Содержимое слайдера
    slideWidth = $('.slider-box').outerWidth(),         // Ширина слайдера
    slideCount = $('.slider img').length,               // Количество слайдов
    prev = $('.slider-box .prev'),                      // Кнопка "назад"
    next = $('.slider-box .next'),                      // Кнопка "вперед"
    sliderInterval = 3300,                              // Интервал смены слайдов
    animateTime = 1000,                                 // Время смены слайдов
    course = 1,                                         // Направление движения слайдера (1 или -1)
    margin = - slideWidth;                              // Первоначальное смещение слайдов
 
  $('.slider img:last').clone().prependTo('.slider');   // Копия последнего слайда помещается в начало.
  $('.slider img').eq(1).clone().appendTo('.slider');   // Копия первого слайда помещается в конец.  
  $('.slider').css('margin-left', -slideWidth);         // Контейнер .slider сдвигается влево на ширину одного слайда.
 
  // function nextSlide(){                                 // Запускается функция animation(), выполняющая смену слайдов.
  //   interval = window.setInterval(animate, sliderInterval);
  // }
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     // Если слайдер дошел до конца
      slider.css({'marginLeft':-slideWidth});           // то блок .slider возвращается в начальное положение
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  // Если слайдер находится в начале и нажата кнопка "назад"
      slider.css({'marginLeft':-slideWidth*slideCount});// то блок .slider перемещается в конечное положение
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              // Если условия выше не сработали,
    margin = margin - slideWidth*(course);              // значение margin устанавливается для показа следующего слайда
    }
    slider.animate({'marginLeft':margin},animateTime);  // Блок .slider смещается влево на 1 слайд.
  }
 
  function sliderStop(){                                // Функция преостанавливающая работу слайдера      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = -1;                                        // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
  next.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = 1;                                         // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
 
  // slider.add(next).add(prev).hover(function() {         // Если курсор мыши в пределах слайдера
  //   sliderStop();                                       // Вызывается функция sliderStop() для приостановки работы слайдера
  // }, nextSlide);                                        // Когда курсор уходит со слайдера, анимация возобновляется.
 
  // nextSlide();                                          // Вызов функции nextSlide()
});


// модальное окно
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
  $('div#zakaz').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('#modal_form') 
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('#overlay').fadeOut(400); // скрывaем пoдлoжку
        }
      );
  });
});



//плавный переход по якорям
$(document).ready(function() {
    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1000);
        return false;
    });
});