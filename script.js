var score=0;

$(".start").click(function(){
  $(".que").css("height", "270px");
  $(".start").unbind();
});


//Q1
$(".q1btn").click(function(){
  if($("#q1input").val() == 'B'){
    $(".q1btn").html('✓');
    $(".q1btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('答對了呦( •̀ ω •́ )✧');
  }
  else{
    $(".q1btn").html('⨉');
    $(".q1btn").css("color", "#FF0202");
    alert('答錯了哭哭＞︿＜我們是資訊「研習」啦');
  }
  $(".q1btn").unbind();
  $(".que").css("height", "530px");
});

//Q2
$(".q2btn").click(function(){
  if($("#q2input").val() == '36'){
    $(".q2btn").html('✓');
    $(".q2btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('耶耶答對了q(≧▽≦q)我們是第36屆 學妹們就是37屆啦\(@^0^@)/');
  }
  else{
    $(".q2btn").html('⨉');
    $(".q2btn").css("color", "#FF0202");
    alert('我們是第36屆 學妹們就是37屆啦\(@^0^@)/');
  }
  $(".q2btn").unbind();
  $(".que").css("height", "795px");
});


//Q3
$(".q3btn").click(function(){
  if($("#q3input").val() == 'B'){
    $(".q3btn").html('✓');
    $(".q3btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('對的沒錯！友社也是「研習」喔');
  }
  else{
    $(".q3btn").html('⨉');
    $(".q3btn").css("color", "#FF0202");
    if($("#q3input").val() == 'A'){
      alert('雖然建中也有資訊社，但我們都是跟電子計算機研習社一起上課、辦活動喔~~');
    }
    else if($("#q3input").val() == 'C'){
      alert('友社跟我們一樣是「研習」喔~~以後都會常常接觸他們的！');
    }
    else if($("#q3input").val() == 'D'){
      alert('雖然...這麼說也沒錯啦(¬‿¬) 但他們是「電子計算機研習社」喔！');
    }
  }
  $(".q3btn").unbind();
  $(".que").css("height", "1060px");
});


//Q4
$(".q4btn").click(function(){
  if($("#q4input").val() == 'D'){
    $(".q4btn").html('✓');
    $(".q4btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('答對啦(*￣3￣)╭大社課會由專業的老師教大家C++喔');
  }
  else{
    $(".q4btn").html('⨉');
    $(".q4btn").css("color", "#FF0202");
    if($("#q4input").val() == 'A'){
      alert('大社課會教C++喔~如果想學Python就來小社課\(￣︶￣*\)');
    }
    else if($("#q4input").val() == 'C'){
      alert('大社課會教C++喔~如果想學網頁就來小社課\(￣︶￣*\)');
    }
    else if($("#q4input").val() == 'B'){
      alert('大社課會教C++喔~如果想學Unity就來小社課\(￣︶￣*\)');
    }
  }
  $(".q4btn").unbind();
  $(".que").css("height", "1325px");
});

//Q5
$(".q5btn").click(function(){
  if($("#q5input").val() == 'D'){
    $(".q5btn").html('✓');
    $(".q5btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('哈哈哈答對啦~我們沒有冬遊啦~但我們有寒訓喔！');
  }
  else{
    $(".q5btn").html('⨉');
    $(".q5btn").css("color", "#FF0202");
    if($("#q5input").val() == 'A'){
      alert('有春遊喔~春遊會是學妹們第一個自己辦的活動！');
    }
    else if($("#q5input").val() == 'B'){
      alert('我們有暑訓啦~暑訓是辦給新生的7天營隊，有參加的學妹在這裡有沒有看到熟悉的面孔阿\(@^0^@)/');
    }
    else if($("#q5input").val() == 'C'){
      alert('我們有秋遊！！就快到了喔~\\學妹來秋遊/');
    }
  }
  $(".q5btn").unbind();
  $(".que").css("height", "1590px");
});


//Q6
$(".q6btn").click(function(){
  if($("#q6input").val() == 'C'){
    $(".q6btn").html('✓');
    $(".q6btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('沒錯哭哭我們沒有社辦QQ但是建中有社辦，我們會去那裡喔(　o=^•ェ•)o');
  }
  else{
    $(".q6btn").html('⨉');
    $(".q6btn").css("color", "#FF0202");
    if($("#q6input").val() == 'A'){
      alert('什麼！！抬頭就看到了啊！！XD');
    }
    else if($("#q6input").val() == 'B'){
      alert('我們當然有阿！剛剛的課程介紹還不心動嗎✪ ω ✪');
    }
    else if($("#q6input").val() == 'D'){
      alert('我們都一起辦活動、上課，還不夠友好嗎(◔◡◔)');
    }
  }
  $(".q6btn").unbind();
  $(".que").css("height", "1850px");
});


//Q7
$(".q7btn").click(function(){
  if($("#q7input").val() == 'D'){
    $(".q7btn").html('✓');
    $(".q7btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('答對啦好厲害喔有專心聽喔ヾ(≧▽≦*)o');
  }
  else{
    $(".q7btn").html('⨉');
    $(".q7btn").css("color", "#FF0202");
    if($("#q7input").val() == 'A'){
      alert('才不會勒～我們沒有人數限制喔學妹加資研！');
    }
    else if($("#q7input").val() == 'B'){
      alert('我們建北電資是27屆了喔～不只13那麼年輕啦');
    }
    else if($("#q7input").val() == 'C'){
      alert('ㄟ都顯然不是吧～但我們很希望學妹來電我們( •̀ ω •́ )✧');
    }
  }
  $(".q7btn").unbind();
  $(".que").css("height", "2110px");
});


//Q8
$(".q8btn").click(function(){
  if($("#q8input").val() == 'C'){
    $(".q8btn").html('✓');
    $(".q8btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('答對啦好厲害～嗯嗯學姊會愛你喔');
  }
  else{
    $(".q8btn").html('⨉');
    $(".q8btn").css("color", "#FF0202");
    alert('阿不是啦～嗯嗯學姊要哭哭了');
  }
  $(".q8btn").unbind();
  $(".que").css("height", "2370px");
});


//Q9
$(".q9btn").click(function(){
  if($("#q9input").val() == 'A'){
    $(".q9btn").html('✓');
    $(".q9btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('答對啦好厲害～玉米學姊會愛你喔');
  }
  else{
    $(".q9btn").html('⨉');
    $(".q9btn").css("color", "#FF0202");
    alert('阿不是啦～玉米學姊要哭哭了');
  }
  $(".q9btn").unbind();
  $(".que").css("height", "2630px");
});


//Q10
$(".q10btn").click(function(){
  if($("#q10input").val() == 'D'){
    $(".q10btn").html('✓');
    $(".q10btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('答對啦好厲害～冰鯊學姊會愛你喔');
  }
  else{
    $(".q10btn").html('⨉');
    $(".q10btn").css("color", "#FF0202");
    alert('阿不是啦～冰鯊學姊要哭哭了');
  }
  $(".q10btn").unbind();
  $(".que").css("height", "2890px");
});


//Q11
$(".q11btn").click(function(){
  if($("#q11input").val() == 'A'){
    $(".q11btn").html('✓');
    $(".q11btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('對喔～我們會在電腦教室上課，所以不需要自備電腦～');
  }
  else{
    $(".q11btn").html('⨉');
    $(".q11btn").css("color", "#FF0202");
    if($("#q11input").val() == 'D'){
      alert('建議可以帶著喔～不過忘記帶也沒關係，我們會給大家上課簡報～');
    }
    else if($("#q11input").val() == 'B'){
      alert('這很重要！！小社課會教很多東西喔 睡著就不好玩啦');
    }
    else if($("#q11input").val() == 'C'){
      alert('小社課的內容真的很豐富，可以好好期待(≧∇≦)ﾉ');
    }
  }
  $(".q11btn").unbind();
  $(".que").css("height", "3150px");
});


//Q12
$(".q12btn").click(function(){
  if($("#q12input").val() == 'B'){
    $(".q12btn").html('✓');
    $(".q12btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('對沒錯數論中午沒有開課QQ，想上數論的可以上放學的聯課喔');
  }
  else{
    $(".q12btn").html('⨉');
    $(".q12btn").css("color", "#FF0202");
    if($("#q12input").val() == 'D'){
      alert('星期四中午有unity小社課喔~數論中午沒有開課QQ，想上數論的可以上放學的聯課喔');
    }
    else if($("#q12input").val() == 'A'){
      alert('星期一中午有python小社課喔~數論中午沒有開課QQ，想上數論的可以上放學的聯課喔');
    }
    else if($("#q12input").val() == 'C'){
      alert('星期三中午有網頁小社課喔~數論中午沒有開課QQ，想上數論的可以上放學的聯課喔');
    }
  }
  $(".q12btn").unbind();
  $(".que").css("height", "3410px");
});


//Q13
$(".q13btn").click(function(){
  if($("#q13input").val() == 'D'){
    $(".q13btn").html('✓');
    $(".q13btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
    alert('哇嗚好棒喔~~趕快追起來！！');
  }
  else{
    $(".q13btn").html('⨉');
    $(".q13btn").css("color", "#FF0202");
    if($("#q13input").val() == 'B'){
      alert('我們的IG是fgisc36th喔~~趕快追起來！！');
    }
    else if($("#q13input").val() == 'A'){
      alert('我們的IG是fgisc36th喔~~趕快追起來！！');
    }
    else if($("#q13input").val() == 'C'){
      alert('我們的IG是fgisc36th喔~~趕快追起來！！');
    }
  }
  $(".q13btn").unbind();
  $(".que").css("height", "3670px");
});


//Q14
$(".q14btn").click(function(){
  if($("#q14input").val() == 'A'){
    alert('會的會的！建北電資裡會有超~電的人！');
    $(".q14btn").html('✓');
    $(".q14btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
  }
  if($("#q14input").val() == 'B'){
    alert('會的！大社小社聯課都會教程式語言！讓你資訊躺一年 變成電神( •̀ ω •́ )✧');
    $(".q14btn").html('✓');
    $(".q14btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
  }
  if($("#q14input").val() == 'C'){
    alert('學姊都會超愛學妹的啦(´▽`ʃ♡ƪ)');
    $(".q14btn").html('✓');
    $(".q14btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
  }
  if($("#q14input").val() == 'D'){
    alert('想去建中玩？當然可以！來聯課！！！');
    $(".q14btn").html('✓');
    $(".q14btn").css("color", "#00B37B");
    score += 10;
    show_score(score);
  }
  $(".q14btn").unbind();
  $(".end").css("opacity", "1");
  
});


function show_score(temp){
  $("#score").html(temp);
  $(".end_score").html(temp+"分");
}

var s1 = -1;
$(".span1").click(function(){
  if(s1 == -1){
    $(".span1").css("color", "#BB2618");
  }
  else{
    $(".span1").css("color", "black");
  }
  s1 = s1*-1;
});

var s2 = -1;
$(".span2").click(function(){
  if(s2 == -1){
    $(".span2").css("color", "#BD7742");
  }
  else{
    $(".span2").css("color", "black");
  }
  s2 = s2*-1;
});

var s3 = -1;
$(".span3").click(function(){
  if(s3 == -1){
    $(".span3").css("color", "#BD9211");
  }
  else{
    $(".span3").css("color", "black");
  }
  s3 = s3*-1;
});

var s4 = -1;
$(".span4").click(function(){
  if(s4 == -1){
    $(".span4").css("color", "#59B591");
  }
  else{
    $(".span4").css("color", "black");
  }
  s4 = s4*-1;
});

var s5 = -1;
$(".span5").click(function(){
  if(s5 == -1){
    $(".span5").css("color", "#408269");
  }
  else{
    $(".span5").css("color", "black");
  }
  s5 = s5*-1;
});

var s6 = -1;
$(".span6").click(function(){
  if(s6 == -1){
    $(".span6").css("color", "#7277D4");
  }
  else{
    $(".span6").css("color", "black");
  }
  s6 = s6*-1;
});

var s7 = -1;
$(".span7").click(function(){
  if(s7 == -1){
    $(".span7").css("color", "#0A6E9E");
  }
  else{
    $(".span7").css("color", "black");
  }
  s7 = s7*-1;
});

var s8 = -1;
$(".span8").click(function(){
  if(s8 == -1){
    $(".span8").css("color", "#414A78");
  }
  else{
    $(".span8").css("color", "black");
  }
  s8 = s8*-1;
});

var s9 = -1;
$(".span9").click(function(){
  if(s9 == -1){
    $(".span9").css("color", "#673F7A");
  }
  else{
    $(".span9").css("color", "black");
  }
  s9 = s9*-1;
});

var s10 = -1;
$(".span10").click(function(){
  if(s10 == -1){
    $(".span10").css("color", "#9A2B5F");
  }
  else{
    $(".span10").css("color", "black");
  }
  s10 = s10*-1;
});

var s11 = -1;
$(".span11").click(function(){
  if(s11 == -1){
    $(".span11").css("color", "#803636");
  }
  else{
    $(".span11").css("color", "black");
  }
  s11 = s11*-1;
});

var s12 = -1;
$(".span12").click(function(){
  if(s12 == -1){
    $(".span12").css("color", "#661104");
  }
  else{
    $(".span12").css("color", "black");
  }
  s12 = s12*-1;
});
