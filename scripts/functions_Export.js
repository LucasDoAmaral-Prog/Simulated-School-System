export let title_Welcome = document.getElementsByClassName("title")[0];
export let input_ButtonOk  = document.getElementsByClassName("backMenu")[0];
export let name_Welcome = document.getElementsByClassName("name")[0]

export function typeWriter(title, time){  
    const title_Manipulation = title.innerHTML.split('');
    title.innerHTML = '';
    title_Manipulation.forEach((value, key) => {
        setTimeout(() => title_Welcome.innerHTML += value, time * key)

    })
}

export function detectUserLogin(){

    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection("Students").doc(user.uid).get().then( snapshot =>{
                let str_Name = snapshot.data().name;
                title_Welcome.innerHTML += `Welcome, ${str_Name.toUpperCase()}!`
                typeWriter(title_Welcome, 90);
                name_Welcome.innerHTML = snapshot.data().name;
            })
        }
    }) 
}

export async function verifyEmailStudents(email_Student, index){
    
    try{
        
        let advice_ErrorTeacher = document.getElementsByClassName("advice-ErrorTeacher")[index];
        let background_Search = document.getElementsByClassName("backgroundSearchTeacher")[index];
        let background_Verify = document.getElementsByClassName("backgroundVerify")[index];
        let progress_Info = document.getElementsByClassName("progress")[index];

        let name_Student = document.getElementsByClassName("nameStudent")[index];
        let emailStudent = document.getElementsByClassName("emailStudent")[index]
        let year_Student = document.getElementsByClassName("yearStudent")[index];
        let RA_Student =  document.getElementsByClassName("registerStudent")[index];

        if(email_Student.length < 7){
            advice_ErrorTeacher.innerHTML = "Please enter the student's email in the box";
        }else{
            let verify_Email = await db.collection("Students").where("email", "==", email_Student).get();        
            if (!verify_Email.empty){  
                background_Search.style.display = 'none';
                progress_Info.style.display = 'block';
                verify_Email.forEach(userID => {
                    db.collection("Students").doc(userID.id).get()
                    .then(snapshot => {
                        setTimeout( () => {
                            advice_ErrorTeacher.innerHTML = '';
                            progress_Info.style = 'none';
                            background_Verify.style.display = 'flex';
                        }, 1000)
                        name_Student.innerHTML = `NAME: ${snapshot.data().name}`;
                        emailStudent.innerHTML = `E-MAIL: ${email_Student}`;
                        year_Student.innerHTML = `YEAR: ${snapshot.data().year}`;
                        RA_Student.innerHTML   = `RA: ${snapshot.data().RA}`;
                        localStorage.setItem("user_ID", userID.id);
                    });
                })
                
            }else{
                advice_ErrorTeacher.innerHTML = "Student not found. Enter a valid email";
            }
        }
    }
    catch(err){
        console.log(err)
    }
}

export function createObject(nameObject, attribute1, attribute2, attribute3, attribute4, attribute5){
    let objectOne = `${nameObject}_${Math.random().toString(36).substr(2,9)}`; 
  
    object_Occurrences[objectOne] = {
      id: objectOne, 
      status: attribute1,
      title: attribute2,
      message: attribute3,
      teacher: attribute4,
      student: attribute5,
    } 
    
    return objectOne;
}
  
  


export function splitName(fullName){
    return fullName.split(" ")[0];
}
  
export function convertDate(date){

    const array_Convert = date.split("-")
    let date_Unit, month_Unit, year_Unit;
    [year_Unit, month_Unit, date_Unit] = array_Convert;

    const text_Date = `${year_Unit}/${month_Unit}/${date_Unit}`
    return text_Date;

}

export function convertDateForInput(date){

    const array_Convert = date.split("/")
    let date_Unit, month_Unit, year_Unit;
    [year_Unit, month_Unit, date_Unit] = array_Convert;

    const text_Date = `${year_Unit}-${month_Unit}-${date_Unit}`
    return text_Date;

}
