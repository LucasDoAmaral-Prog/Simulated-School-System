import {verifyEmailStudents, convertDate, convertDateForInput, createObject, splitName} from "./functions_Export.js";

const subject_Students = ["Math", "Eng", "Geo", "His", "Ed", "Physical", "Arts", "chemical"];
let object_Occurrences = {};

let grade_Teacher = document.getElementsByClassName("teacherGrade");
let absences_Teacher = document.getElementsByClassName("teacherAbsences");
let occurrences_Teacher = document.getElementsByClassName("teacherOccurrences");
let activities_Teacher = document.getElementsByClassName("teacherActivities");

let background_SearchTeacher = document.getElementsByClassName("backgroundSearchTeacher");
let background_Verify  = document.getElementsByClassName("backgroundVerify");
let background_GradeTeacher = document.getElementsByClassName("backgroundGradeTeacher_2")[0];
let backgroud_AbsencesTeacher = document.getElementsByClassName("backgroundAbsences_2")[0];
let background_Success = document.getElementsByClassName("descriptionSuccess")[0];
let background_Error = document.getElementsByClassName("descriptionSuccess")[1];
let background_addOccurrences = document.getElementsByClassName("addOccurrencesTeacher")[0];
let background_OccurrencesTeacher = document.getElementsByClassName("descriptionOccurrencesTeacher")[0];
let background_addActivities = document.getElementsByClassName("addActivitiesTeacher")[0];
let background_ActivitiesTeacher = document.getElementsByClassName("descriptionOccurrencesTeacher")[1];

let background_Sure = document.getElementsByClassName("youSure");

let email_Student = document.getElementsByClassName("username");
let input_Edit = document.getElementsByClassName("input-edit");
let textArea_Edit = document.getElementsByClassName("edit");

let button_SubmitGrade = document.getElementsByClassName("Submit")[0];
let button_SubmitAbsences = document.getElementById("submitAbsences");
let button_SubmitOccurrences = document.getElementById("submitOccurrences");
let button_SubmitActivities = document.getElementById("submitActivities");
let buttons_Manager = document.getElementsByClassName("buttonsManager");
let button_BackNotes = document.getElementById("BackNotes");
let button_BackNotesError = document.getElementById("BackNotesError");
let button_Correct = document.getElementsByClassName("Correct");
let button_No = document.getElementsByClassName("No");
let button_EditOccurrences = document.getElementsByClassName("editOccurrence")[0];
let button_DeleteOccurrences = document.getElementsByClassName("deleteOccurrence")[0];
let button_Completed = document.getElementsByClassName("compOccurrence");
let button_AddOccurrences = document.getElementsByClassName("addOccurrence")[0];
let button_DeleteAllOccurrences = document.getElementsByClassName("remOccurrence")[0];
let button_AddActivities = document.getElementById("addActivities");
let button_CompletedActivities = document.getElementById("compActivities");
let button_EditActivities = document.getElementById("editActivities");
let button_DeleteActivities = document.getElementById("deleteActivities");
let button_DeleteAllActivities = document.getElementsByClassName("remOccurrence")[1];
let backArrowMenu = document.getElementsByClassName("backArrowTeacher");
let backArrow_Search = document.getElementsByClassName("backArrowTeacherGrade");
let backArrow_Search_2 = document.getElementsByClassName("backArrow");

let progress_Info = document.getElementsByClassName("progressAdd");

document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementsByClassName("date");
  const today = new Date();
  
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const day = String(today.getDate()).padStart(2, '0');
  for(let i = 0; i < dateInput.length; i++){
    dateInput[i].min = `${year}-${month}-${day}`;

  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementsByClassName("date");
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  for(let i = 0; i < dateInput.length; i++){

    dateInput[i].min = `${year}-${month}-${day}`;
    dateInput[i].max = `${year}-12-31`;

  }
});

backArrow_Search[0].addEventListener("click", () => {
    
    background_Verify[0].style.display = 'flex';
    grade_Teacher[0].style.display = 'flex';
    grade_Teacher[1].style.display = 'none';
    background_GradeTeacher.style.display = 'none'; 

})

backArrow_Search[1].addEventListener("click", () => {
    
    background_Verify[1].style.display = 'flex';
    absences_Teacher[0].style.display = 'flex';
    absences_Teacher[1].style.display = 'none';
    backgroud_AbsencesTeacher.style.display = 'none'; 

})

backArrow_Search_2[0].addEventListener("click", () => {

  occurrences_Teacher[0].style.display = 'none';
  occurrences_Teacher[1].style.display = 'flex';
  background_Verify[2].style.display = 'flex';

})


backArrow_Search_2[1].addEventListener("click", () => {

  activities_Teacher[0].style.display = 'none';
  activities_Teacher[1].style.display = 'flex';
  background_Verify[3].style.display = 'flex';

})


for(let i = 0; i < backArrowMenu.length; i++){
    backArrowMenu[i].addEventListener("click", () => {
        background_SearchTeacher[0].style.display = 'none';
        background_SearchTeacher[1].style.display = 'none';
        grade_Teacher[0].style.display = 'none';
        absences_Teacher[0].style.display = 'none';
        occurrences_Teacher[1].style.display = 'none';
        activities_Teacher[1].style.display = 'none';
    });
}

buttons_Manager[0].addEventListener("click", () => {
    grade_Teacher[0].style.display = 'flex';
    background_SearchTeacher[0].style.display = 'flex';
})

buttons_Manager[1].addEventListener("click", () => {

    absences_Teacher[0].style.display = 'flex';
    background_SearchTeacher[1].style.display = 'flex';

})

buttons_Manager[2].addEventListener("click", () => {

  occurrences_Teacher[1].style.display = 'flex';
  background_SearchTeacher[2].style.display = 'flex';

})

buttons_Manager[3].addEventListener("click", () => {

  activities_Teacher[1].style.display = 'flex';
  background_SearchTeacher[3].style.display = 'flex';

})

button_BackNotes.addEventListener("click",
    () => {
        background_Success.style.display = 'none';
        occurrences_Teacher[1].style.display = 'none';
        grade_Teacher[1].style.display = 'none';
        absences_Teacher[1].style.display = 'none';
        occurrences_Teacher[4].style.display = 'none';
        activities_Teacher[2].style.display = 'none';
        activities_Teacher[1].style.display = 'none';

    }
)

button_BackNotesError.addEventListener("click",
  () => {
    occurrences_Teacher[4].style.display = 'none';
    background_Error.style.display = 'none';
    activities_Teacher[1].style.display = 'none';

  }
)

button_SubmitGrade.addEventListener("click", setNotes);
button_SubmitAbsences.addEventListener("click", setAbsences);
button_SubmitOccurrences.addEventListener("click", setOccurrences);
button_SubmitActivities.addEventListener("click", setActivities);

button_DeleteAllOccurrences.addEventListener("click", deleteAllOccurrences);
button_DeleteAllActivities.addEventListener("click", deleteAllActivities);

function setNotes() {

  const index = 0;
  button_No[index].addEventListener("click", () => { background_Verify[index].style.display = 'none'; background_SearchTeacher[index].style.display = 'flex'; })
  button_Correct[index].addEventListener("click", () => {
    background_Verify[index].style.display = 'none';
    grade_Teacher[index].style.display = 'none';
    grade_Teacher[index+1].style.display = 'flex';
    background_GradeTeacher.style.display = 'block'; 
  });
  let email_StudentNote = email_Student[0].value
  verifyEmailStudents(email_StudentNote.toLowerCase(), 0);
  const user_ID = localStorage.getItem("user_ID");
  getNotesDefault(user_ID);
  
  const button_Note = document.getElementById("attGrade");
  const advice_ErrorTeacher = document.getElementsByClassName("advice-Error")[1];
  
  button_Note.addEventListener("click", () => {
      let updateNotes_Students = {};
      let is_Valid = true; 
      subject_Students.forEach((subject) => {
          const input_Notes = document.getElementsByClassName(`${subject} note`);
          let setNotes_Students = [];
          for (let i = 0; i < input_Notes.length; i++) {
              const inputValue = input_Notes[i].value;
              if (inputValue.trim() === "") {
                  advice_ErrorTeacher.innerHTML = "You need to put a number";
                  input_Notes[i].style.borderColor = "red";
                  is_Valid = false;
                  continue;
              }
              const value = parseFloat(inputValue);
              if (isNaN(value) || value < 0 || value > 10) {
                  advice_ErrorTeacher.innerHTML = "It must be a number between 0 and 10";
                  input_Notes[i].style.borderColor = "red";
                  is_Valid = false;
                  continue;
              }
              input_Notes[i].style.borderColor = "";
              setNotes_Students.push(value);
          }

          updateNotes_Students[subject] = setNotes_Students;
      });

      if (is_Valid) {
          db.collection("Students").doc(user_ID).update(updateNotes_Students)
              .then(() => {
                  email_Student[index].value = '';
                  background_GradeTeacher.style.display = 'none'; 
                  background_Success.style.display = 'block' ;

          })
      }
  });
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
            input_Notes[i].value = 0; 
          }
          for (let i = 0; i < average_Notes.length; i++) {
            average_Notes[i].innerHTML = 0;
            list_Result[i].innerHTML = "No Data";
            list_Result[i].style.color = "gray";
          }
          return; 
        }
  
        for (let i = 0; i < input_Notes.length; i++) {
          input_Notes[i].value = subjectData[i];
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


function setAbsences(){

    const index = 1
    
    let email_StudentAbsences = email_Student[index].value

    verifyEmailStudents(email_StudentAbsences.toLowerCase(), index);

    button_No[1].addEventListener("click", () => { background_Verify[index].style.display = 'none'; background_SearchTeacher[index].style.display = 'flex';})
    button_Correct[2].addEventListener("click", () => { 
        background_Verify[index].style.display= 'none';
        absences_Teacher[index-1].style.display = 'none';
        absences_Teacher[index].style.display = 'flex';
        backgroud_AbsencesTeacher.style.display = 'block'
    });

    const user_ID = localStorage.getItem("user_ID");
    const advice_ErrorTeacher = document.getElementsByClassName("advice-Error")[index+2];
    const button_Absences = document.getElementById("attAbsences");

    let updateAbsences_Students = {};
    getAbsencesDefault(user_ID);
    
    button_Absences.addEventListener("click", () => {
        let is_Valid = true;
        subject_Students.forEach(subject => {
            let setAbsences_Students = []
            const input_Absences = document.getElementsByClassName(`Abs_${subject} absences`);
            for (let i = 0; i < input_Absences.length; i++) {
                const inputValue = input_Absences[i].value;
                if (inputValue.trim() === "") {
                    advice_ErrorTeacher.innerHTML = "You need to put a number";
                    input_Absences[i].style.borderColor = "red";
                    is_Valid = false;
                    continue;
                }
                const value = parseFloat(inputValue);
                if (isNaN(value) || value < 0 || value > 25) {
                    advice_ErrorTeacher.innerHTML = "It must be a number between 0 and 24";
                    input_Absences[i].style.borderColor = "red";
                    is_Valid = false;
                    continue;
                }
                input_Absences[i].style.borderColor = "";
                setAbsences_Students.push(value);
            }
            updateAbsences_Students[`Abs_${subject}`] = setAbsences_Students;
        })
        if (is_Valid) {
            db.collection("Students").doc(user_ID).update(updateAbsences_Students)
                .then(() => {
                    email_Student[index].value = '';
                    backgroud_AbsencesTeacher.style.display = 'none';
                    background_Success.style.display = 'block' ;

            })
                .catch((error) => {
            });
        }
    })
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
            input_Absences[i].value = 0; 
          }
        } else {
          for (let i = 0; i < input_Absences.length; i++) {
            input_Absences[i].value = subjectData[i];
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
          input_Absences[i].value = 0;
        }
        for (let i = 0; i < total_Absences.length; i++) {
          total_Absences[i].innerHTML = 0;
          list_Result[i].innerHTML = "No Data";
          list_Result[i].style.color = "gray";
      }
    }
  });
}

function setOccurrences(){
  const select_Status = document.getElementsByClassName("select")[0];
  const input_Title = document.getElementsByClassName("titleOccurrences")[0];
  const textArea_Desc = document.getElementsByClassName("add")[0];
  const advice_Occurrences = document.getElementsByClassName("advice-ErrorOccurrence")
  const email_StudentNote = email_Student[2].value

  verifyEmailStudents(email_StudentNote.toLowerCase(), 2);
  const user_ID = localStorage.getItem("user_ID");
  getOccurrence(user_ID);

  button_Completed[1].addEventListener("click", () => {


    if((input_Title.value.length < 3 && textArea_Desc.value.length < 3) || input_Title.value.length < 3 || textArea_Desc.value.length < 3){

      advice_Occurrences[1].innerHTML = "You must fill in the entire field";

    }else if(select_Status.value == 'Status' || select_Status.value.length < 3){

      advice_Occurrences[1].innerHTML = "It is necessary to enter the status of the event";
    
    }else if(input_Title.value.length >= 50){
      advice_Occurrences[1].innerHTML = "The title is too long, maximum 50 characters";

    }else{

      background_addOccurrences.style.display = 'none'
      progress_Info[1].style.display = 'block';
      
      advice_Occurrences[1].innerHTML = '';

      auth.onAuthStateChanged(user => {

        db.collection("Students").doc(user.uid).get().then(snapshot =>{

          db.collection("Students").doc(user_ID).get().then(snapshot_Student => {

            const name_Object = createObject("OccurenceStudent",select_Status.value, input_Title.value, textArea_Desc.value, snapshot.data().name, snapshot_Student.data().name);
            object_Occurrences[name_Object];
            db.collection("Students").doc(user_ID).update(object_Occurrences).then(
              () =>{
              progress_Info[0].style.display = 'none';
              occurrences_Teacher[5].style.display = 'none';
              occurrences_Teacher[1].style.display = 'flex';
              background_Success.style.display = 'block';
              email_Student[2].value = '';
            })
          })
        })
      })

    }

  })

  button_No[2].addEventListener("click", () => {

    background_Verify[2].style.display = 'none'; 
    background_SearchTeacher[2].style.display = 'flex'; 

  })

  button_Correct[4].addEventListener("click", () => {

      background_Verify[2].style.display = 'none';
      occurrences_Teacher[1].style.display = 'none';
      
      occurrences_Teacher[0].style.display = 'flex';
      background_GradeTeacher.style.display = 'flex'; 
  });

  button_AddOccurrences.addEventListener("click", () => {

    occurrences_Teacher[0].style.display = 'none';
    occurrences_Teacher[5].style.display = 'flex';
    background_GradeTeacher.style.display = 'none'; 

  })

  backArrowMenu[4].addEventListener("click", () =>{

    occurrences_Teacher[5].style.display = 'none';
    occurrences_Teacher[0].style.display = 'flex';
    background_GradeTeacher.style.display = 'flex'; 

  })


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
          openOccurrence(event);
        }
      });
    });
}


function openOccurrence(e){

  const user_ID = localStorage.getItem("user_ID");
  const title_Occurrences = document.getElementsByClassName("titOccurrences")[0];
  const status_Occurrences = document.getElementsByClassName("statusOccurrences")[0];
  const paragraph_Occurrences = document.getElementsByClassName("paragraphOccurrences")[0];



  localStorage.setItem("occurrenceClass", e.target.className);
  
  occurrences_Teacher[0].style.display = 'none';
  occurrences_Teacher[2].style.display = 'flex';
  title_Occurrences.style.display = 'block';
  status_Occurrences.style.display = 'block';
  paragraph_Occurrences.style.display = 'block';
  button_DeleteOccurrences.style.display = 'block';
  button_EditOccurrences.style.display = 'block';
  db.collection("Students").doc(user_ID).get().then(snapshot => {

    status_Occurrences.innerHTML = `Status: ${snapshot.data()[e.target.className].status}`;
    title_Occurrences.innerHTML = `${snapshot.data()[e.target.className].title}`;
    paragraph_Occurrences.innerHTML = `${snapshot.data()[e.target.className].message}`;
    status_Occurrences.classList.add(`${snapshot.data()[e.target.className].status}`)
  })

  backArrowMenu[3].addEventListener("click", () =>{
    if(textArea_Edit[0] != "block"){
      occurrences_Teacher[0].style.display = 'flex';
      occurrences_Teacher[2].style.display = 'none';
    }
  })

  button_EditOccurrences.addEventListener("click", editOccurrence);
  button_DeleteOccurrences.addEventListener("click", deleteOccurrence);
  
}

function editOccurrence(){

  const title_Occurrences = document.getElementsByClassName("titOccurrences")[0];
  const status_Occurrences = document.getElementsByClassName("statusOccurrences")[0];
  const paragraph_Occurrences = document.getElementsByClassName("paragraphOccurrences")[0];
  
  const select_Master = document.getElementsByClassName("select-containerEdit")[0];
  const input_Title = document.getElementsByClassName("input-titleEdit")[0];
  const input_TitleReal = document.getElementsByClassName("titleOccurrencesEdit")[0];
  const select_Edit = document.getElementsByClassName("selectEdit")[0];

  const button_NoOccurrence = document.getElementById("NoOccurrence");
  const button_YesOccurrence = document.getElementById("YesOccurrence");
  
  const occurrence_className = localStorage.getItem("occurrenceClass");
  const user_ID = localStorage.getItem("user_ID");
  const advice_Occurrences = document.getElementsByClassName("advice-ErrorOccurrence")

  const progress_Unity = document.getElementById("progressUnity");

  select_Master.style.display = 'block'
  input_Title.style.display = 'block';
  input_Edit[0].style.display = 'block';
  textArea_Edit[0].style.display = 'block';
  textArea_Edit[0].value = paragraph_Occurrences.innerHTML;
  input_TitleReal.value = title_Occurrences.innerHTML;
  select_Edit.value = status_Occurrences.classList[1];
  status_Occurrences.classList.remove(status_Occurrences.classList[1]);

  button_DeleteOccurrences.style.display = 'none';
  button_EditOccurrences.style.display = 'none';
  button_Completed[0].style.display = 'block';

  paragraph_Occurrences.style.display = 'none';
  title_Occurrences.style.display = 'none';
  status_Occurrences.style.display = 'none';

  background_Sure[0].style.display = 'block';

  button_Completed[0].addEventListener("click", () =>{

    if((input_TitleReal.value.length < 3 && textArea_Edit[0].value.length < 3) || input_TitleReal.value.length < 3 || textArea_Edit[0].value.length < 3){

      advice_Occurrences[0].innerHTML = "You must fill in the entire field";

    }else if(select_Edit.value == 'Status' || select_Edit.value.length < 3){

      advice_Occurrences[0].innerHTML = "It is necessary to enter the status of the event";
    
    }else if(input_TitleReal.value.length >= 50){
      advice_Occurrences[0].innerHTML = "The title is too long, maximum 50 characters";

    }else{
      
      advice_Occurrences[0].innerHTML = '';
      progress_Unity.style.display = 'block';
      background_OccurrencesTeacher.style.display = 'none';
      auth.onAuthStateChanged(user => {
      
        db.collection("Students").doc(user.uid).get().then((snapshot) =>{

          db.collection("Students").doc(user_ID).get().then(snapshot_Student => {

            db.collection("Students").doc(user_ID).update({

              [`${occurrence_className}`]: {

                id: occurrence_className,
                message: textArea_Edit[0].value,
                status: select_Edit.value,
                teacher: snapshot.data().name,
                student: snapshot_Student.data().name,
                title: input_TitleReal.value

              }
            }).then( () => {
              progress_Unity.style.display = 'none';
              occurrences_Teacher[2].style.display = 'none';
              occurrences_Teacher[1].style.display = 'flex';
              background_Success.style.display = 'block';
              email_Student[2].value = '';
              select_Master.style.display = 'none'
              input_Title.style.display = 'none';
              input_Edit[0].style.display = 'none';
              textArea_Edit[0].style.display = 'none';
            })
          })
        })
      })
    }
  })

  backArrowMenu[3].addEventListener("click", () =>{
    if(textArea_Edit[0].style.display == "block"){

      occurrences_Teacher[0].style.display = 'none'
      occurrences_Teacher[2].style.display = 'none'
      occurrences_Teacher[3].style.display = 'flex'
      background_Sure[0].style.display = 'block';

      button_NoOccurrence.addEventListener("click", () => {

        occurrences_Teacher[2].style.display = 'flex'
        occurrences_Teacher[3].style.display = 'none'
      })

      button_YesOccurrence.addEventListener("click", () => {
      
      
        occurrences_Teacher[0].style.display = 'flex';
        occurrences_Teacher[3].style.display = 'none' 
        input_Edit[0].style.display = 'none';
        
        textArea_Edit[0].style.display = 'none';

        button_DeleteOccurrences.style.display = 'block';
        button_EditOccurrences.style.display = 'block';
        button_Completed[0].style.display = 'none';

        paragraph_Occurrences.style.display = 'block';
        title_Occurrences.style.display = 'block';
        status_Occurrences.style.display = 'block';


        select_Master.style.display = 'none'
        input_Title.style.display = 'none';
        input_Edit[0].style.display = 'none';
        textArea_Edit[0].style.display = 'none';

        background_Sure[0].style.display = 'none';
      })
    } 
  })

}

function deleteOccurrence(){

  const occurrence_className = localStorage.getItem("occurrenceClass");
  const user_ID = localStorage.getItem("user_ID");

  const button_YesOccurrence = document.getElementById("YesOccurrenceDel");
  const button_NoOccurrence = document.getElementById("NoOccurrenceDel");

  const tr_OccurrenceStudent = document.getElementsByClassName(occurrence_className)[0];

  occurrences_Teacher[2].style.display = 'none'
  occurrences_Teacher[4].style.display = 'flex'
  background_Sure[1].style.display = 'block';

  button_YesOccurrence.addEventListener("click", () =>{
    db.collection("Students").doc(user_ID).update({

      [`${occurrence_className}`] : firebase.firestore.FieldValue.delete()

    }).then(() =>{
      occurrences_Teacher[4].style.display = 'none';
      occurrences_Teacher[1].style.display = 'flex';
      background_Success.style.display = 'block';
      tr_OccurrenceStudent.style.display = 'none';
      localStorage.removeItem("occurrenceClass");
      email_Student[2].value = '';
    })
  })

  button_NoOccurrence.addEventListener("click", () =>{
    
    occurrences_Teacher[4].style.display = 'none';
    occurrences_Teacher[2].style.display = 'flex';
    background_Sure[1].style.display = 'none';

  })
}

function deleteAllOccurrences(){

  const button_YesOccurrence = document.getElementById("YesOccurrenceDel");
  const button_NoOccurrence = document.getElementById("NoOccurrenceDel");
  const user_ID = localStorage.getItem("user_ID");



  occurrences_Teacher[0].style.display = 'none';
  occurrences_Teacher[4].style.display = 'flex';
  background_Sure[1].style.display = 'block';

  button_NoOccurrence.addEventListener("click", () =>{
    
    occurrences_Teacher[0].style.display = 'flex';
    occurrences_Teacher[4].style.display = 'none';
    background_Sure[1].style.display = 'none';

  })

  button_YesOccurrence.addEventListener("click", () =>{
    db.collection("Students").doc(user_ID).get().then(snapshot => {
      background_Sure[1].style.display = 'none';
      progress_Info[0].style.display = 'block';

      let className_Objects = {};
      let className_Array = [];

      let objects_Occurrences = snapshot.data();
      let occurrences_Array = Object.keys(objects_Occurrences);
      let filter_Occurrences = occurrences_Array.filter(filter => filter.startsWith("OccurenceStudent_"));

      if(filter_Occurrences.length == 0){  

        background_Sure[1].style.display = 'none';
        background_Error.style.display = 'block';

      }else{
        filter_Occurrences.forEach(field_ClassName => {
          className_Objects[field_ClassName] = firebase.firestore.FieldValue.delete()
          className_Array.push(field_ClassName);
        })
        
        db.collection("Students").doc(user_ID).update(className_Objects).then(() => {

          progress_Info[0].style.display = 'none';
          background_Success.style.display = 'block';
          occurrences_Teacher[1].style.display = 'flex';
          for(let i = 0; i < className_Array.length; i++){
            let tr_OccurrenceStudent = document.getElementsByClassName(className_Array[i])[0];
            tr_OccurrenceStudent.style.display = 'none';
          }
          email_Student[2].value = '';
          className_Objects = {};
          className_Array = [];
          localStorage.removeItem("occurrenceClass");
        })
      }
    })
  })
}

function setActivities(){
  const email_StudentNote = email_Student[3].value
  verifyEmailStudents(email_StudentNote.toLowerCase(), 3);

  const date = document.getElementsByClassName("date")[1];
  const input_Title = document.getElementsByClassName("titleActivities")[0];
  const textArea_Desc = document.getElementsByClassName("addAct")[0];
  const advice_Activities = document.getElementsByClassName("advice-ErrorAct")


  input_Title.value = "";
  textArea_Desc.value = "";
  verifyEmailStudents(email_StudentNote.toLowerCase(), 2);
  const user_ID = localStorage.getItem("user_ID");
  getActivities(user_ID);
  button_CompletedActivities.addEventListener("click", () => {

  progress_Info[3].style.display = 'block';
  background_addActivities.style.display = 'none';
  if((input_Title.value.length < 3 && textArea_Desc.value.length < 3) || input_Title.value.length < 3 || textArea_Desc.value.length < 3){

    advice_Activities[0].innerHTML = "You must fill in the entire field";

  }else if(date.value.length !== 10){

    advice_Activities[0].innerHTML = "The dates are incomplete!";
    
  } 
  else if(input_Title.value.length >= 50){
    advice_Activities[0].innerHTML = "The title is too long, maximum 50 characters";
  }else{

    advice_Activities[0].innerHTML = '';

    auth.onAuthStateChanged(user => {

      db.collection("Students").doc(user.uid).get().then(snapshot =>{

        db.collection("Students").doc(user_ID).get().then(snapshot_Student => {

          const name_Object = createObject("ActivitieStudent", convertDate(date.value), input_Title.value, textArea_Desc.value, snapshot.data().name, snapshot_Student.data().name);
          object_Occurrences[name_Object];
          db.collection("Students").doc(user_ID).update(object_Occurrences).then(
            () =>{

              progress_Info[3].style.display = 'none';
              activities_Teacher[1].style.display = 'flex';
              activities_Teacher[3].style.display = 'none';
              background_Success.style.display = 'block';
              email_Student[3].value = '';
          })
        })
      })
    })

  }

})

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
          openActivities(event);
        }
      });
    });
  }
  button_AddActivities.addEventListener("click", () =>{

    activities_Teacher[3].style.display = 'flex';
    activities_Teacher[0].style.display = 'none';
    background_addActivities.style.display = 'block';

  })

  button_Correct[6].addEventListener("click", () => {
    background_Verify[3].style.display = 'none';
    activities_Teacher[1].style.display = 'none';
    activities_Teacher[0].style.display = 'flex';
  });

  button_No[3].addEventListener("click", () => {
    background_Verify[3].style.display = 'none';
    background_SearchTeacher[3].style.display = 'flex'
    activities_Teacher[1].style.display = 'flex';
  })
  
  backArrowMenu[7].addEventListener("click", () =>{

    activities_Teacher[3].style.display = 'none';
    activities_Teacher[0].style.display = 'flex';

  })

}

function openActivities(e){

  const user_ID = localStorage.getItem("user_ID");
  const date = document.getElementsByClassName("statusActivities")[0];
  const input_Title = document.getElementsByClassName("titActivities")[0];
  const textArea_Desc = document.getElementsByClassName("paragraphActivities")[0];

  
  localStorage.setItem("activitiesClass", e.target.className);
  
  activities_Teacher[0].style.display = 'none';
  activities_Teacher[2].style.display = 'flex';
  date.style.display = 'block'
  input_Title.style.display = 'block'
  textArea_Desc.style.display = 'block'
  button_DeleteActivities.style.display = 'block';
  button_EditActivities.style.display = 'block';
  background_ActivitiesTeacher.style.display = 'block';
  db.collection("Students").doc(user_ID).get().then(snapshot => {
    date.innerHTML = `Delivery date: ${snapshot.data()[e.target.className].status}`;
    input_Title.innerHTML = `${snapshot.data()[e.target.className].title}`;
    textArea_Desc.innerHTML = `${snapshot.data()[e.target.className].message}`;
    date.classList.add(`${snapshot.data()[e.target.className].status}`)
  })

  backArrowMenu[6].addEventListener("click", () =>{
    if(textArea_Edit[0] != "block"){
      activities_Teacher[0].style.display = 'flex';
      activities_Teacher[2].style.display = 'none';
      background_ActivitiesTeacher.style.display = 'none'
    }
  });

  button_EditActivities.addEventListener("click", editActivities);
  button_DeleteActivities.addEventListener("click", deleteActivities);
  
}

function editActivities(){

  const title_Activities = document.getElementsByClassName("titActivities")[0];
  const date_Activities = document.getElementsByClassName("statusActivities")[0];
  const paragraph_Activities = document.getElementsByClassName("paragraphActivities")[0];
  
  const input_Master = document.getElementsByClassName("input-edit")[1];
  const input_Title = document.getElementsByClassName("input-titleEdit")[1];
  const input_TitleReal = document.getElementsByClassName("titleOccurrencesEdit")[1];
  const date_Edit = document.getElementsByClassName("input-date")[0];
  const date_Master = document.getElementsByClassName("date")[0];
  const advice_Activities = document.getElementsByClassName("advice-ErrorAct")

  const button_NoActivities = document.getElementById("NoActivies");
  const button_YesActivities = document.getElementById("YesActivies");
  
  const activities_Classname = localStorage.getItem("activitiesClass");
  const user_ID = localStorage.getItem("user_ID");

  input_Master.style.display = 'block'
  input_Title.style.display = 'block';
  input_Edit[0].style.display = 'block';
  date_Edit.style.display = "block";
  textArea_Edit[1].style.display = 'block';
  textArea_Edit[1].value = paragraph_Activities.innerHTML;
  input_TitleReal.value = title_Activities.innerHTML;
  date_Master.value = convertDateForInput(date_Activities.classList[1]);
  date_Activities.classList.remove(date_Activities.classList[1]);

  button_DeleteActivities.style.display = 'none';
  button_EditActivities.style.display = 'none';
  paragraph_Activities.style.display = 'none';
  title_Activities.style.display = 'none';
  date_Activities.style.display = 'none';
  button_Completed[2].style.display = 'block';


  button_Completed[2].addEventListener("click", () =>{
    background_ActivitiesTeacher.style.display = 'none ';
    progress_Info[2].style.display = 'block';

    if((input_TitleReal.value.length < 3 && textArea_Edit[1].value.length < 3) || input_TitleReal.value.length < 3 || textArea_Edit[1].value.length < 3){
      advice_Activities[0].innerHTML = "You must fill in the entire field";
    }else if(date_Master.value.length !== 10){
      advice_Activities[0].innerHTML = "The dates are incomplete!";
    } 
    else if(input_TitleReal.value.length >= 50){
      advice_Activities[0].innerHTML = "The title is too long, maximum 50 characters";
    }else{

      auth.onAuthStateChanged(user => {
      
        db.collection("Students").doc(user.uid).get().then((snapshot) =>{

          db.collection("Students").doc(user_ID).get().then(snapshot_Student => {

            db.collection("Students").doc(user_ID).update({

              [`${activities_Classname}`]: {

                id: activities_Classname,
                message: textArea_Edit[1].value,
                status: convertDate(date_Master.value),
                teacher: snapshot.data().name,
                student: snapshot_Student.data().name,
                title: input_TitleReal.value

              }
            }).then( () => {
              progress_Info[2].style.display = 'none';
              background_Success.style.display = 'block';
              email_Student[3].value = '';
              advice_Activities[1].innerHTML = '';
              date_Edit.style.display = 'none';
              input_Master.style.display = 'none';
              input_Title.style.display = 'none';
              input_Edit[0].style.display = 'none';
              textArea_Edit[1].style.display = 'none';

            })
          })
        })
      })
    }
  })

  backArrowMenu[6].addEventListener("click", () =>{
    if(textArea_Edit[1].style.display == "block"){

      activities_Teacher[0].style.display = 'none'
      activities_Teacher[2].style.display = 'none'
      activities_Teacher[4].style.display = 'flex'
      background_Sure[2].style.display = 'block';

      button_NoActivities.addEventListener("click", () => {

        activities_Teacher[2].style.display = 'flex'
        background_ActivitiesTeacher.style.display = 'block';
        activities_Teacher[4].style.display = 'none'
        background_Sure[2].style.display = 'none';

      })

      button_YesActivities.addEventListener("click", () => {
      
      
        activities_Teacher[0].style.display = 'flex';
        activities_Teacher[4].style.display = 'none' 
        input_Edit[0].style.display = 'none';
        
        textArea_Edit[1].style.display = 'none';

        button_DeleteActivities.style.display = 'block';
        button_EditActivities.style.display = 'block';
        button_Completed[2].style.display = 'none';

        paragraph_Activities.style.display = 'block';
        title_Activities.style.display = 'block';
        date_Activities.style.display = 'block';


        input_Master.style.display = 'none';
        input_Title.style.display = 'none';
        input_Edit[0].style.display = 'none';
        date_Edit.style.display = "none";
        textArea_Edit[1].style.display = 'none';

        background_Sure[2].style.display = 'none';
      })
    } 
  })
}


function deleteActivities(){
  const activities_className = localStorage.getItem("activitiesClass");
  const user_ID = localStorage.getItem("user_ID");

  const button_YesActivities = document.getElementById("YesActivitiesDel");
  const button_NoActivities = document.getElementById("NoActivitiesDel");

  const tr_ActivitiesStudent = document.getElementsByClassName(activities_className)[0];

  activities_Teacher[2].style.display = 'none'
  activities_Teacher[4].style.display = 'flex'
  background_Sure[2].style.display = 'block';

  button_YesActivities.addEventListener("click", () =>{
    db.collection("Students").doc(user_ID).update({

      [`${activities_className}`] : firebase.firestore.FieldValue.delete()

    }).then(() =>{
      activities_Teacher[4].style.display = 'none';
      activities_Teacher[1].style.display = 'flex';
      background_Sure[2].style.display = 'none';
      background_Success.style.display = 'block';
      tr_ActivitiesStudent.style.display = 'none';
      localStorage.removeItem("activities_className");
      email_Student[3].value = '';
    })
  })

  button_NoActivities.addEventListener("click", () =>{
    
    activities_Teacher[4].style.display = 'none';
    activities_Teacher[2].style.display = 'flex';
    background_Sure[2].style.display = 'none';

  })
}

function deleteAllActivities(){

  const button_YesActivities = document.getElementById("YesActivitiesDel");
  const button_NoActivities = document.getElementById("NoActivitiesDel");
  const user_ID = localStorage.getItem("user_ID");



  activities_Teacher[0].style.display = 'none';
  activities_Teacher[5].style.display = 'flex';
  background_Sure[3].style.display = 'block';

  button_NoActivities.addEventListener("click", () =>{
    
    activities_Teacher[0].style.display = 'flex';
    activities_Teacher[5].style.display = 'none';
    background_Sure[3].style.display = 'none';

  })

  button_YesActivities.addEventListener("click", () =>{
    db.collection("Students").doc(user_ID).get().then(snapshot => {
      background_Sure[3].style.display = 'none';
      progress_Info[4].style.display = 'block';

      let className_Objects = {};
      let className_Array = [];

      let objects_Activities = snapshot.data();
      let Activities_Array = Object.keys(objects_Activities);
      let filter_Activities = Activities_Array.filter(filter => filter.startsWith("ActivitieStudent_"));

      if(filter_Activities.length == 0){  

        activities_Teacher[5].style.display = 'none';
        activities_Teacher[1].style.display = 'flex';
        background_Sure[3].style.display = 'none';
        background_Error.style.display = 'block';
        progress_Info[4].style.display = 'none';

      }else{
        filter_Activities.forEach(field_ClassName => {
          className_Objects[field_ClassName] = firebase.firestore.FieldValue.delete()
          className_Array.push(field_ClassName);
        })
        
        db.collection("Students").doc(user_ID).update(className_Objects).then(() => {
          
          activities_Teacher[5].style.display = 'none';
          progress_Info[4].style.display = 'none';
          background_Success.style.display = 'block';
          activities_Teacher[1].style.display = 'flex';
          for(let i = 0; i < className_Array.length; i++){
            let tr_ActivitieStudent = document.getElementsByClassName(className_Array[i])[0];
            tr_ActivitieStudent.style.display = 'none';
          }
          email_Student[3].value = '';
          className_Objects = {};
          className_Array = [];
          localStorage.removeItem("activitiesClass");
        })
      }
    })
  })
}