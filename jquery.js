// Feedback from animation

{
  $(document).ready(function () {
    //Feedback form heading and details
    $("h1").click(function () {
      $("#details").toggle(1000);
    });

    //Non technical skills animation
    // $(".skill").mouseleave(function () {
    //   $(".skill-details").hide(1000);
    //   $(".skill-details").css('display', 'block');
    // });

    $(".skill").hover(function () {
      $(".skill-details").show(1000);
      $(".skill-details").css('display', 'block');
      
    });

    // $(".skill2").mouseleave(function () {
    //   $(".skill-details2").hide(1000);
    //   $(".skill-details2").css('display', 'block');
    // });
    $(".skill2").hover(function () {
      $(".skill-details2").show(1000);
      $(".skill-details2 ").css('display', 'block');
    });

     $(".animated-div").mouseleave(function () {
      $(".skill-details2").hide(1000);
      $(".skill-details").hide(1000);
     $(".skill-details2").css('display', 'block');
     $(".skill-details").css('display', 'block');
     });

    //Animate Function in Jquery
    // $('#lorem').animate({
    //     opacity:0.3,
    //     height : '150px',
    //     width :'350px'
    // },1000)
    // $('#lorem').animate({
    //     opacity:0.9,
    //     height : '550px',
    //     width :'1050px'
    // },1000)
  });
}
