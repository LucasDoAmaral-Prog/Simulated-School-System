import {input_ButtonOk, detectUserLogin, convertDateForInput, convertDate, splitName} from "./functions_Export.js";
    

const subject_Students = ["Math", "Eng", "Geo", "His", "Ed", "Physical", "Arts", "chemical"];

const dark_Mode = document.getElementsByClassName("darkMode")[0];
const is_Teacher = localStorage.getItem("isTeacher");

let style_Collection = document.getElementsByTagName("style")[0];
let sun_Mode  = document.getElementsByClassName("Sun")[0];
let moon_Mode = document.getElementsByClassName("Moon")[0];

let background_Certification = document.getElementsByClassName("usuallySigned")[0];
let background_Description = document.getElementsByClassName("descriptionOccurrences");
let background_Grades = document.getElementsByClassName("yourGrades");
let background_DescriptionMain = document.getElementsByClassName("descriptionMain");
let half_Background = document.getElementsByClassName("backgroundGrades");

let back_Menu = document.getElementsByClassName("backArrow");
let button_Grade = document.getElementsByClassName("buttonsManager");
let button_Situation = document.getElementsByClassName("defaultSettings");
let button_Understand = document.getElementsByClassName("understandButton");


if(is_Teacher === "false"){
    for(let i = 0; i < 4; i++){
        button_Grade[i].addEventListener("click", () => { 
            background_Grades[i].style.display = "flex"; 
            if(i == 0){
                auth.onAuthStateChanged(user =>{
                    getNotesDefault(user.uid);
                })
            }
            if(i == 1){
                auth.onAuthStateChanged(user =>{
                    getAbsencesDefault(user.uid);
                })
            }

            if (i == 2){
                auth.onAuthStateChanged(user =>{
                    getOccurrence(user.uid);
                })
            }
            if (i == 3){
                auth.onAuthStateChanged(user =>{
                    getActivities(user.uid);
                })
            }
        });
        back_Menu[i].addEventListener("click", () => { 
            background_Grades[i].style.display = 'none'; 
        });
    }
    for(let i = 0; i < 2; i++){
        button_Understand[i].addEventListener("click", () => { 
            background_Description[i].style.display = "none"; 
            background_DescriptionMain[i].style.display = 'none'; 
        });
    }
}

let loop_DarkMode = false; 
let actually_Mode = "light";

dark_Mode.addEventListener("click", changeIconAndMode);
input_ButtonOk.addEventListener("click", backPainelStudents);

style_Collection.innerHTML = `:root{
    --light-Mode: #e3e9ff;
    --light-Mode-Header: #cbd5fa;
    --items-Color: rgba(255, 255, 255, 0.349);
    --font-Color: black;
}`

const themes_ForPage = {

    light: {

        background_Color: "#e3e9ff",
        background_Header: "#cbd5fa",
        items_Color: "#e9e7e7",
        font_Color: "#5D5D5D",

    },

    dark: {

        background_Color: "#25262a",
        background_Header: "rgba(218, 214, 214, 0.1)",
        items_Color: "rgba(14, 13, 13, 0.445)",
        font_Color: "#ffffff",

    },

}

const theme_Arm = localStorage.getItem("modeActually")

if(theme_Arm) {
    
    actually_Mode = theme_Arm;
    actually_Mode = actually_Mode == "dark" ? changeIconAndMode() : "light"
    setTheme(actually_Mode);
    
}

function changeIconAndMode(){

    if (!loop_DarkMode){

        sun_Mode.style.display  = "none";
        moon_Mode.style = 'display: flex ;animation-name: moonAnimation; animation-duration: 0.4s;'
        actually_Mode = "dark";

    } else {

        sun_Mode.style = 'display: flex; animation-name: sunAnimation; animation-duration: 0.4s;';
        moon_Mode.style.display = "none";
        actually_Mode = "light"

    }
    
    setTheme(actually_Mode);
    loop_DarkMode = !loop_DarkMode;

    return actually_Mode

}

function setTheme(theme){

    style_Collection.innerHTML = `:root{

        --light-Mode: ${themes_ForPage[theme].background_Color};
        --light-Mode-Header: ${themes_ForPage[theme].background_Header};
        --items-Color: ${themes_ForPage[theme].items_Color};
        --font-Color: ${themes_ForPage[theme].font_Color};
    
    }`

    localStorage.setItem("modeActually", actually_Mode);

}

function backPainelStudents(){
    background_Certification.style  = "display: none";

}

async function getNotesDefault(userID) {

    subject_Students.forEach(async (subject) => {
      let average_Result = 0;
      let input_Notes = document.getElementsByClassName(`${subject} note`);
      let average_Notes = document.getElementsByClassName(`${subject} Average`);
      let list_Result = document.getElementsByClassName(`${subject} result`);
  
      try {
        const snapshot = await db.collection("Students").doc(userID).get();
  
        const subjectData = snapshot.data()?.[subject];
        if (!subjectData || subjectData.length === 0) {
          console.warn(`Sem dados de notas para a matéria: ${subject}`);
          for (let i = 0; i < input_Notes.length; i++) {
            input_Notes[i].innerHTML = 0; 
          }
          for (let i = 0; i < average_Notes.length; i++) {
            average_Notes[i].innerHTML = 0;
            list_Result[i].innerHTML = "No Data";
            list_Result[i].style.color = "gray";
          }
          return; 
        }
  
        for (let i = 0; i < input_Notes.length; i++) {
          input_Notes[i].innerHTML = subjectData[i];
          average_Result += subjectData[i] / input_Notes.length;
        }
  
        for (let i = 0; i < average_Notes.length; i++) {
          average_Notes[i].innerHTML = parseFloat(average_Result) || 0;
          if (average_Result > 6) {
            list_Result[i].innerHTML = "Approved";
            list_Result[i].style.color = "green";
          } else {
            list_Result[i].innerHTML = "Failed";
            list_Result[i].style.color = "red";
          }
        }
      } catch (error) {
        console.error(`Erro ao buscar notas para a matéria: ${subject}`, error);
      }
    });

}

async function getAbsencesDefault(userID) {
    subject_Students.forEach(async (subject) => {
      let input_Absences = document.getElementsByClassName(`Abs_${subject} absences`);
      let total_Absences = document.getElementsByClassName(`Abs_${subject} Total`);
      let list_Result = document.getElementsByClassName(`Abs_${subject} abs_result`);
  
      let absences_Result = 0;
  
      try {
        const snapshot = await db.collection("Students").doc(userID).get();
        const subjectData = snapshot.data()?.[`Abs_${subject}`]; 
        
        if (!subjectData || subjectData.length === 0) {
          console.warn(`Sem dados de ausências para a matéria: ${subject}`);
          for (let i = 0; i < input_Absences.length; i++) {
            input_Absences[i].innerHTML = 0; 
          }
        } else {
          for (let i = 0; i < input_Absences.length; i++) {
            input_Absences[i].innerHTML = subjectData[i];
            absences_Result += subjectData[i];
          }
        }
        for (let i = 0; i < total_Absences.length; i++) {
          total_Absences[i].innerHTML = parseFloat(absences_Result);
          if (absences_Result < 16) {
            list_Result[i].innerHTML = "Approved";
            list_Result[i].style.color = "green";
          } else {
            list_Result[i].innerHTML = "Failed";
            list_Result[i].style.color = "red";
          }
        }
      } catch (error) {
        console.error(`Erro ao buscar dados para o assunto: ${subject}`, error);
  
        for (let i = 0; i < input_Absences.length; i++) {
          input_Absences[i].innerHTML = 0;
        }
        for (let i = 0; i < total_Absences.length; i++) {
          total_Absences[i].innerHTML = 0;
          list_Result[i].innerHTML = "No Data";
          list_Result[i].style.color = "gray";
      }
    }
  });
}

function getOccurrence(userID) {
    db.collection("Students").doc(userID).get()
      .then(snapshot => {
        const userDoc = snapshot.data();
        const occurrenceStudentFields = Object.keys(userDoc).filter(field => field.startsWith("OccurenceStudent_"));
        occurrenceStudentFields.forEach(field => {
          if (document.getElementsByClassName(field).length == 0) {
            const date_Object = new Date;
            const date_Snapshot = `${date_Object.getFullYear()}/${(date_Object.getMonth() + 1).toString().padStart(2, "0")}/${date_Object.getDate().toString().padStart(2, "0")}`;
            const developed_Occurrences = document.getElementsByClassName("OccurrencesDeveloped")[0];
  
            const tbody_Occurrences = document.createElement("tbody");
            const tr_Occurrences = document.createElement("tr");
            const td_OccurrencesList = [
              document.createElement("td"),
              document.createElement("td"),
              document.createElement("td"),
              document.createElement("td"),
            ];
            const td_classList = [
              userDoc[field].title,
              splitName(userDoc.name),
              userDoc[field].status,
              date_Snapshot,
            ];
            for (let i = 0; i < 4; i++) {
              td_OccurrencesList[i].innerHTML = td_classList[i];
              tr_Occurrences.appendChild(td_OccurrencesList[i]);
              td_OccurrencesList[i].className = field;
            }
            tr_Occurrences.className = field;
            tbody_Occurrences.className = "defaultSettings";
            tbody_Occurrences.appendChild(tr_Occurrences);
            developed_Occurrences.appendChild(tbody_Occurrences);
          }
        });
        const developed_Occurrences = document.getElementsByClassName("OccurrencesDeveloped")[0];
        developed_Occurrences.addEventListener("click", event => {
          const target = event.target;
          if (target.closest("tbody")) {
            openOccurrence(event, userID);
          }
        });
      });
  }

  
function openOccurrence(e, user_ID){

    const title_Occurrences = document.getElementsByClassName("titOccurrences")[0];
    const status_Occurrences = document.getElementsByClassName("statusOccurrences")[0];
    const paragraph_Occurrences = document.getElementsByClassName("paragraphOccurrences")[0];

    background_DescriptionMain[0].style.display = 'flex'
    background_Description[0].style.display = 'block';
    title_Occurrences.style.display = 'block';
    status_Occurrences.style.display = 'block';
    paragraph_Occurrences.style.display = 'block';
    db.collection("Students").doc(user_ID).get().then(snapshot => {

        status_Occurrences.innerHTML = `Status: ${snapshot.data()[e.target.className].status}`;
        title_Occurrences.innerHTML = `${snapshot.data()[e.target.className].title}`;
        paragraph_Occurrences.innerHTML = `${snapshot.data()[e.target.className].message}`;
        status_Occurrences.classList.add(`${snapshot.data()[e.target.className].status}`)
    })

}

function getActivities(userID) {
  db.collection("Students").doc(userID).get()
    .then(snapshot => {
      const userDoc = snapshot.data();
      const ActivitieStudentFields = Object.keys(userDoc).filter(field => field.startsWith("ActivitieStudent_"));
      ActivitieStudentFields.forEach(field => {
        if (document.getElementsByClassName(field).length == 0) {
          const date_Object = new Date;
          const date_Snapshot = `${date_Object.getFullYear()}/${(date_Object.getMonth() + 1).toString().padStart(2, "0")}/${date_Object.getDate().toString().padStart(2, "0")}`;
          const developed_Activities = document.getElementsByClassName("ActivitiesDeveloped")[0];
          const tbody_Activities = document.createElement("tbody");
          const tr_Activities = document.createElement("tr");
          const td_ActivitiesList = [
            document.createElement("td"),
            document.createElement("td"),
            document.createElement("td"),
            document.createElement("td"),
          ];
          const td_classList = [
            userDoc[field].title,
            splitName(userDoc.name),
            date_Snapshot,
            userDoc[field].status,
          ];
          for (let i = 0; i < 4; i++) {
            td_ActivitiesList[i].innerHTML = td_classList[i];
            tr_Activities.appendChild(td_ActivitiesList[i]);
            td_ActivitiesList[i].className = field;
          }
          tr_Activities.className = field;
          tbody_Activities.className = "defaultSettings";
          tbody_Activities.appendChild(tr_Activities);
          developed_Activities.appendChild(tbody_Activities);
        }
      });
      const developed_Activities = document.getElementsByClassName("ActivitiesDeveloped")[0];
      developed_Activities.addEventListener("click", event => {
        const target = event.target;
        if (target.closest("tbody")) {
          openActivities(event, userID);
        }
      });
    });
}


function openActivities(e, user_ID){

  const date = document.getElementsByClassName("statusActivities")[0];
  const input_Title = document.getElementsByClassName("titActivities")[0];
  const textArea_Desc = document.getElementsByClassName("paragraphActivities")[0];
  
  background_DescriptionMain[1].style.display = 'flex';
  background_Description[1].style.display = 'block';
  date.style.display = 'block'
  input_Title.style.display = 'block'
  textArea_Desc.style.display = 'block'
  db.collection("Students").doc(user_ID).get().then(snapshot => {
    date.innerHTML = `Delivery date: ${snapshot.data()[e.target.className].status}`;
    input_Title.innerHTML = `${snapshot.data()[e.target.className].title}`;
    textArea_Desc.innerHTML = `${snapshot.data()[e.target.className].message}`;
    date.classList.add(`${snapshot.data()[e.target.className].status}`)
  })
}

detectUserLogin()