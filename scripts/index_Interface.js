const paragraph_Register = document.getElementsByClassName("studentMain")[0];
const btn_Back = document.getElementsByClassName("buttonBack")[0];

const input_SignUp = document.getElementsByClassName("register")[0];
const input_SignIn = document.getElementsByClassName("signIn")[0]; 

let input_Password  = document.getElementsByClassName("password");
let input_ButtonOk  = document.getElementsByClassName("backMenu")[0];

let select_Options = document.getElementsByClassName("select")[0];

let section_FatherImages      = document.getElementsByClassName("fatherImages")[0];
let section_registerStudentes = document.getElementsByClassName("painelRegisterStudents")[0];

let image_Eyes   = document.getElementsByClassName("passwordImage");
let advice_Error = document.getElementsByClassName("advice-Error");
let background_Certification = document.getElementsByClassName("usuallySigned")[2];

let progress_Bar = document.getElementsByClassName("progressAdvice");
let loop_Images = false;

for(let i = 0; i < image_Eyes.length; i++) image_Eyes[i].addEventListener("click", changeEyes);

paragraph_Register.addEventListener("click", showPainelRegisterStudents);

function changeEyes(e) {
    if (!loop_Images){

        for(let i = 0; i < image_Eyes.length; i++) 
        input_Password[i].type = "text";

        e.target.src="../assets/images/view.png"

    }    
    else{

        for(let i = 0; i < image_Eyes.length; i++) 
        input_Password[i].type = "password";

        e.target.src = "../assets/images/hidden.png";

    }

    loop_Images = !loop_Images
}

function showPainelRegisterStudents(){

    section_FatherImages.style = "display: none";
    section_registerStudentes.style = "display: flex !important";
    btn_Back.addEventListener("click", backPainelMain);

}

function backPainelMain(){

    section_FatherImages.style = "display: flex;";
    section_registerStudentes.style = "display: none !important";
    background_Certification.style  = "display: none";

}

