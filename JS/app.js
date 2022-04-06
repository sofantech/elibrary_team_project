/* Slider */
var slideIndex = 0 ;

showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    slideIndex = n ;
    showSlides(slideIndex);
}

function showSlides(n){
    var slides = document.getElementsByClassName('slider') ;
    var dot = document.getElementsByClassName('dot');
    var i ;
    for (i = 0 ; i < slides.length ; i++ ){
        slides[i].style.display = "none";
    }
    for (i = 0 ; i < dot.length ; i++ ){
        dot[i].className = dot[i].className.replace(" active" , "") ;
    }

    if(n > slides.length)
        slideIndex = 1 ;

    if (n < 1) {slideIndex = slides.length}

    slides[slideIndex-1].style.display = "block" ;
    dot[slideIndex-1].className += " active"; 

  // setTimeout(showSlides, 3000) ;  /* لما استخدم الفنكشن ذي م اقدر اتحكم بحركة الصور في السلايدر كويس .. وقفتها */
}


/* Change Language */

function changeLang(){
    var style = document.getElementsByTagName('link')[0];
    var header=document.getElementsByTagName('nav')[0];
    if(style.getAttribute("href") == "css/style.css")
        { 
            style.setAttribute("href" , "css/EnStyle.css");
            header.innerHTML = ' <div class="fas fa-user box" id="show-btn" > <a class="log"> Login or Register NOW </a> </div>            <a href="#" > <div class="box"> Home </div> </a> <a href="#" > <div class="box"> About Us </div>  </a> <a href="#" > <div class="box"> Help </div> </a> <a href="#" > <div class="box" onclick="changeLang()"> العربية </div> </a> ' ;

         }

    else if(style.getAttribute("href") == "css/EnStyle.css")
       { 
           style.setAttribute("href" , "css/style.css");
           header.innerHTML = ' <div class="fas fa-user box" id="show-btn" > <a class="log"> ادخل لحسابك أو سجل الآن  </a> </div>     <a href="#" > <div class="box"> الرئيسية </div> </a> <a href="#" > <div class="box"> من نحن </div>  </a> <a href="#" > <div class="box"> المساعدة </div> </a> <a href="#" > <div class="box" onclick="changeLang()"> English </div> </a>  ' ;
        }

}

/* Login Modal */

    var modal = document.getElementById('modal');
    var showBTN  = document.getElementById('show-btn') ;

    showBTN.addEventListener("click" , ()=> {
        modal.style.visibility = "visible";
    });

    function login(){
        modal.innerHTML = '<span class="exit" style="z-index: 11; " onclick="exit()"> &#x2717;</span>        <div class="login" dir="rtl"><div><h2> تسجيل الدخول </h2>   <hr></div> <div> <form> <input type="text" placeholder="البريدالإلكتروني"/> <div> <input type="password" placeholder="كلمة السر" style="position: relative;"/> <span id="child" style="position: absolute; margin-top: -30px;"> نسيت ؟</span> </div> <button class="main"> تسجيل الدخول </button>                    <div class="signup"> <p style="text-align: center; margin-top: 50px;"> ليس لديك حساب؟</p> <button class="main white" onclick="createAccount()"> إنشاء حساب جديد </button> </div> </form> </div> </div>' ; 
        modal.style.height = "100vh";
    }

    function exit() {
        modal.style.visibility = "hidden";
    }

    /* Signup Modal */

    function createAccount(){
        modal.innerHTML = '<span class="exit" style="z-index: 11; top:150px;" onclick="exit()"> &#x2717;</span>        <div class="login" dir="rtl">            <div> <h2> إنشاء حساب </h2>     <hr> </div> <div> <form>            <div style="margin-bottom: 20px;"> <input type="tel" placeholder=" رقم الجوال"/> <p style="text-align: center;"> سوف نرسل لك رمز التحقق عبر رسالة نصية</p> <button class="main white" style="color: grey; background-color: rgb(231, 231, 231); font-weight: bold;" > إرسال رمز التحقق </button> </div> <input type="text" placeholder="الاسم الأول"/> <input type="text" placeholder="اسم العائلة" /> <input type="text" placeholder=" البريدالإلكتروني" /> <input type="text" placeholder=" تأكيد البريدالإلكتروني" /> <input type="password" placeholder="كلمة السر"/> <div style="display: flex; text-align: right;"> <input type="checkbox" id="agreement" style="padding: 0px; width: 20px;"/> <label for="agreement" style="color: rgb(150, 150, 150);" > أوافق على الشروط والأحكام</label> </div> <div style="display: flex;  text-align: right;"> <input type="checkbox" id="register" style="padding: 0px; width: 20px;" /> <label for="register" style="color: rgb(150, 150, 150);" > التسجيل للانضمام للنشرة البريدية</label>  </div> <button class="main white" style="color: grey; background-color: rgb(231, 231, 231); font-weight: bold; padding-right: 100px; " > إنشاء حساب </button> <p style="text-align: center; margin-top: 50px; margin-right: 50px;"> لديك حساب؟ <span style="color: royalblue;" id="btn" onclick= "login()"> تسجيل الدخول</span>  </p> </form> </div>' ; 
        modal.style.height = "150vh";
    }

   
    /* Show Category (eaither By search or By clicking on the Card) */
    
    const type = document.getElementById('type'); 
    const arrType = document.getElementsByClassName('type');
    const spacing = document.getElementsByClassName('spacing');
    
    type.addEventListener('keyup' , function(event){
    
        if(event.keyCode === 13){
            for(var i=0 ; i <= arrType.length ; i++) {
                arrType[i].style.display="none";
                spacing[i].style.display="none";
    
                switch(type.value){
                    case "دين": {
                        arrType[0].style.display="flex";
                        spacing[0].style.display="flex";
                        break;
                    }
    
                    case "تاريخ": {
                        arrType[1].style.display="flex";
                        spacing[1].style.display="flex";
                        break;
                    }
                    
                    case "روايات": {
                        arrType[2].style.display="flex";
                        spacing[2].style.display="flex";
                        break;
                    }
    
                    case "سياسة": {
                        arrType[3].style.display="flex";
                        spacing[3].style.display="flex";
                        break;
                    }
    
                    case "اقتصاد": {
                        arrType[4].style.display="flex";
                        spacing[4].style.display="flex";
                        break;
                    }
    
                    case "طبخ": {
                        arrType[5].style.display="flex";
                        spacing[5].style.display="flex";
                        break;
                    }
    
                    default: {
                        document.getElementById('message').style.display="block";
                        setTimeout(document.getElementById('message').style.display="block" , 5000);
                        break;
                    }
                }
            }
            
            
        }
    });


    function showCategory(n){
    
        for(var i=0 ; i <= arrType.length ; i++) {
            arrType[i].style.display="none";
            spacing[i].style.display="none";
            switch(n){
                case 1: {
                    arrType[0].style.display="flex";
                    spacing[0].style.display="flex";
                    break;
                }
    
                case 2: {
                    arrType[1].style.display="flex";
                    spacing[1].style.display="flex";
                    break;
                }
                
                case 3: {
                    arrType[2].style.display="flex";
                    spacing[2].style.display="flex";
                    break;
                }
    
                case 4: {
                    arrType[3].style.display="flex";
                    spacing[3].style.display="flex";
                    break;
                }
    
                case 5: {
                    arrType[4].style.display="flex";
                    spacing[4].style.display="flex";
                    break;
                }
    
                case 6: {
                    arrType[5].style.display="flex";
                    spacing[5].style.display="flex";
                    break;
                }
    
                default: {
                    document.getElementById('message').style.display="block";
                    break;
                }
            }
            document.getElementById('message').style.display="none";        
    }
}

/* Move from category to details */

var cate = document.getElementsByClassName('cate') ;
var i ; 

for (i = 0 ; i < cate.length ; i++) {
    /* لقد راودني النعاس لم استطع إكماله <\3 :3 */
}
cate.addEventListener("click" , function() {
    alert("hi") ;
});


/* Stepper in Cart :3 */
const nextBTN = document.getElementById('next-btn') ;
const prevBTN = document.getElementById ('prev-btn') ;
const progress = document.getElementById('progress'); 
const steps = document.querySelectorAll(".circle");

let index = 0 ;
nextBTN.addEventListener("click", function(){
    index++;
    if ( index > steps.length)
         { 
              index = steps.length;
         }

    steps.forEach((item ,i) => {

        if (i < index) {
            item.classList.add('Sactive');
        }

        else{
            item.classList.remove('Sactive');
        }

    });


}) ;


prevBTN.addEventListener('click' , function(){
    index--;
    if (index < 0) 
    index = 0 ;


})

const active_steps=document.querySelectorAll(".Sactive");

progress.style.width=((active_steps.length-1)/(steps.length-1))*100+"%" ;
