var current = 0;
var slide = $('.img-zip ul li');
var button = $(".banner-imgbtn>a");
function move(a,b,c){
    a.css({left:b,opacity:0}).stop().animate({left:c,opacity:1})
}
time();
function time(){
    setIntervalId=setInterval(function(){
    var prev = slide.eq(current);
    var prevBt=button.eq(current);
    move(prev,0,'-100%');
    prevBt.removeClass('on');
    current++;
    if (current==slide.size()) {current=0;}
    var next = slide.eq(current);
    var nextBt = button.eq(current);
    nextBt.addClass('on');
    move(next,'100%',0);
},7000)};

var nextBtn = $('.btn_next');
var prevBtn = $('.btn_prev');
nextBtn.on('click',function(){
    var prev2=slide.eq(current);
    var prevBt=button.eq(current);
    prevBt.removeClass('on');
    current++;
    move(prev2,0,'-100%');
    if (current==slide.size()) {current=0;}
    var next2 =slide.eq(current);
    var nextBt = button.eq(current);
    nextBt.addClass('on');
    move(next2,'100%',0);
});
prevBtn.on('click',function(){
    var prev3=slide.eq(current);
    var prevBt=button.eq(current);
    prevBt.removeClass('on');
    current--;
    move(prev3,0,'100%');
    if (current==-slide.size()) {current=0;}
    var next3 =slide.eq(current);
    var nextBt = button.eq(current);
    nextBt.addClass('on');
    move(next3,'-100%',0);
});

$('.img-zip').hover(function(){
    clearInterval(setIntervalId);
},function(){
    time();
});

$('.btnstop').click(function(){
    $(this).toggleClass('play');
});

var current1=0;
var slideNotice = $('.notice-pic li');

function move1(a,b,c){
    a.css({left:b}).css({left:c})
}
timer();
function timer(){
    setIntervalId1=setInterval(function(){
    var prev = slideNotice.eq(current1);
    move1(prev,0,'-110%');
    current1++;
    if (current1==slideNotice.size()) {current1=0;}
    var next = slideNotice.eq(current1);
    move1(next,'100%',0);
},1000)};

var nextBtn1 = $('.next');
var prevBtn1 = $('.prev');
nextBtn1.on('click',function(){
    var prev2=slideNotice.eq(current1);
    current1++;
    move1(prev2,0,'-110%');
    if (current1==slideNotice.size()) {current1=0;}
    var next2 =slideNotice.eq(current1);
    move1(next2,'100%',0);
});
prevBtn1.on('click',function(){
    var prev3=slideNotice.eq(current1);
    current1--;
    move1(prev3,0,'100%');
    if (current1==-slideNotice.size()) {current1=0;}
    var next3 =slideNotice.eq(current1);
    move1(next3,'-110%',0);
});

$('.notice-img').hover(function(){
    clearInterval(setIntervalId1);
},function(){
    timer();
});

$('.stop').click(function(){
    $(this).toggleClass('play')
})

