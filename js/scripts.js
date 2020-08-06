function submitForm(event) {
    var form = new FormData(event.target)
    var name = $("input#name").val();
    var email = $("input#email").val();
    var phone = $("input#contact").val();
    var location = $("input#location").val();

    if($("input#name").val() && $("input#email").val() && $("input#contact").val() && $("input#location").val()){
        alert(name +","+  "we have received your request. Thankyou for reaching out to us.");
    }else {
        alert("please enter your details");
    }
    event.preventDefault();
}

const mySlide = function(){
  const bar = document.querySelector('.bars');
  const nav = document.querySelector('.nav-links')

  bar.addEventListener('click', function(){
    nav.classList.toggle('nav-active');
  });
}

mySlide();
