var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function sendEmail() {
  var name=document.getElementById('fname').value;
  var mailid=document.getElementById('mailid').value;
  var mess=document.getElementById('mess').value;
  if(name==""){
    alert("please enter yoyr name");
    return false;
  }
  else if(mailid==""){
    alert("please enter your mailid");
    return false;
  }
  
  var mailbody='<html><table><tr><td>name:</td><td>'+name+'</td></tr><tr><td>email:</td><td>'+mailid+'</td></tr><tr><td>message:</td><td>'+mess+'</td></tr></table></html>';
  Email.send({
  Host: "lin.ezveb.com",
  Port:25,
  Username : "prabha@sis.in",
  Password : "Prabha1990",
  To : 'nandhakumar26092000@gmail.com',
  From : "prabha@sis.in",
  Subject : "Test",
  Body : mailbody,
  }).then(
  message => alert("your message successfully submited")
  );
  }
