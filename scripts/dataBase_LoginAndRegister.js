import {typeWriter, title_Welcome, input_ButtonOk} from "./functions_Export.js";

input_SignUp.addEventListener("click", createUser);
input_SignIn.addEventListener("click", loginUser);

//Adicionar email do professor aqui
//Add teacher email here
const email_Teacher = [
    "vandamaria@unicamp.br",
    "josepedro@unicamp.br",
]; 

const name_Teacher = [
    "Vanda",
    "Jose",
]

//Minimo 6 caracteres
//Minimum 6 characters
const password_Teacher = [
    "123456",
    "123456",
];

function createUser() {

    let input_All = document.querySelectorAll("[data-content]");

    const usually_Name = input_All[0].value
    const usually_Email = input_All[1].value;
    const usually_Password = input_All[2].value;

    if (input_All[0].value.length < 2) {

        advice_Error[1].innerHTML = "Please enter your name in the box";

    } else {
        progress_Bar[1].style = "display: flex !important";

        auth.createUserWithEmailAndPassword(usually_Email.toLowerCase(), usually_Password).then(user => {

            if (user) {

                progress_Bar[1].style = "display: none !important";
                for (let i = 0; i < input_All.length; i++) input_All[i].value = '';
                advice_Error[1].innerHTML = '';
                input_ButtonOk.addEventListener("click", backPainelMain);
                background_Certification.style = 'display: flex;';
                typeWriter(title_Welcome, 80)
                
                db.collection("Students").doc(user.user.uid).set({

                    name: usually_Name,
                    email: user.user.email,
                    year: `${select_Options.selectedIndex + 1}st`,
                    RA:  Math.floor((100000 + Math.random() * 900000)),
                    Math: [ 0, 0, 0, 0],
                    Eng: [0, 0, 0, 0],
                    Geo: [ 0, 0, 0, 0],
                    His: [ 0, 0, 0, 0],
                    Ed: [ 0, 0, 0, 0],
                    Physical: [ 0, 0, 0, 0],
                    Arts: [ 0, 0, 0, 0],
                    chemical: [ 0, 0, 0, 0],
                    Abs_Math: [ 0, 0, 0, 0],
                    Abs_Eng: [0, 0, 0, 0],
                    Abs_Geo: [ 0, 0, 0, 0],
                    Abs_His: [ 0, 0, 0, 0],
                    Abs_Ed: [ 0, 0, 0, 0],
                    Abs_Physical: [ 0, 0, 0, 0],
                    Abs_Arts: [ 0, 0, 0, 0],
                    Abs_chemical: [ 0, 0, 0, 0],

                })
                setTimeout(() => {auth.signOut()}, 2000)
            }
        })
        .catch(err => {
            advice_Error[1].innerHTML = err.message;
            progress_Bar[1].style = "display: none !important";

        })
    }
}

async function createTeacher() {
    for (let i = 0; i < email_Teacher.length; i++) {
        try {
            const snapshot = await db.collection("Students").where("email", "==", email_Teacher[i]).get();
                if (!snapshot.empty) {
                continue; 
            }
            let name_User = name_Teacher[i];
            const userCredential = await auth.createUserWithEmailAndPassword(email_Teacher[i], password_Teacher[i]);
            const user = userCredential.user;
            if (user) {
                await db.collection("Students").doc(user.uid).set({
                    name: name_User,
                    email: user.email,
                    year: "1st",
                    RA: Math.floor((100000 + Math.random() * 900000))
                });

                setTimeout(() => {
                    auth.signOut();
                }, 2000);
            }
        } catch (err) {
        }
    }

}

const originalConsoleLog = console.log;
const originalConsoleError = console.error;

console.log = () => {};
console.error = () => {};

try {
    createTeacher(); 
} catch (err) {
}

console.log = originalConsoleLog;
console.error = originalConsoleError;

async function loginUser() {

    let input_All = document.querySelectorAll('[data-login]')

    const usually_Email = input_All[0].value;
    const usually_Password = input_All[1].value;

    progress_Bar[0].style = "display: flex !important";

    try{

        await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        await auth.signInWithEmailAndPassword(usually_Email.toLowerCase(), usually_Password);

        input_All.forEach(input => input.value = '');
        progress_Bar[0].style = "display: none !important";
        advice_Error[0].innerHTML = '';

        if(email_Teacher.includes(usually_Email.toLowerCase())){
            window.location.href = "../pages/pageTeacher.html";
            localStorage.setItem("isTeacher", true);
        }
        else{
            window.location.href = "../pages/pageStudent.html";
            localStorage.setItem("isTeacher", false);
        }
    } catch(err){
    
        advice_Error[0].innerHTML = err.message;
        progress_Bar[0].style = "display: none !important"

    }


}


