// 모바일 탭 메뉴
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.querySelector('.mo-menu');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuToggleBtn.classList.add('active');
        menuHide.classList.add('show');
    } else{
        menuToggleBtn.classList.remove('active');
        menuHide.classList.remove('show');
    }
});

// 공차 티 레시피
const teaBtn1 = document.querySelector('.tea-recipe .tea-one');
const teaBox1 = document.querySelector('.tea-recipe .tea1');
const teaBtn2 = document.querySelector('.tea-recipe .tea-two');
const teaBox2 = document.querySelector('.tea-recipe .tea2');
const teaBtn3 = document.querySelector('.tea-recipe .tea-three');
const teaBox3 = document.querySelector('.tea-recipe .tea3');
let teaBtnClick2 = false;

teaBtn1.addEventListener('click', function(){
    teaBtn1.style.color = '#5E8432';
    teaBox1.style.display = 'flex';
    teaBtn2.style.color = '#202020';
    teaBox2.style.display = 'none';
    teaBtn3.style.color = '#202020';
    teaBox3.style.display = 'none';
});

teaBtn2.addEventListener('click', function(){
    teaBtn1.style.color = '#202020';
    teaBox1.style.display = 'none';
    teaBtn2.style.color = '#5E8432';
    teaBox2.style.display = 'flex';
    teaBtn3.style.color = '#202020';
    teaBox3.style.display = 'none';
});

teaBtn3.addEventListener('click', function(){
    teaBtn1.style.color = '#202020';
    teaBox1.style.display = 'none';
    teaBtn2.style.color = '#202020';
    teaBox2.style.display = 'none';
    teaBtn3.style.color = '#5E8432';
    teaBox3.style.display = 'flex';
});


// 하단 메뉴
$('.sel_btn').click(function(){
    if( !$(this).hasClass('active') ){
      $('.sel_lst').siblings('.sel_btn').removeClass('active')
      $('.sel_lst').hide();
      $(this).addClass('active');
      $(this).siblings('.sel_lst').show();
    }else if( $(this).hasClass('active') ){
      $(this).removeClass('active');
      $(this).siblings('.sel_lst').hide();
    }
  });
  
  $('.sel_lst a').click(function(){
    var sel_value = $(this).text();
    $(this).parents('.sel_lst').siblings('.sel_btn').removeClass('active')
    $(this).parents('.sel_lst').hide();
    $(this).parents('.sel_lst').siblings('.sel_btn').text(sel_value);
  
    return false;
  });