const btnEl =  document.getElementById("btn");

btnEl.addEventListener("click" , calculateAge);

function calculateAge(){
    var dateOfBirth = document.getElementById("dateOfBirth").value; 

    var dateOfBirthD = new Date(dateOfBirth);  
 
    var ageMonth = Date.now() - dateOfBirthD.getTime();  
      
    var ageDay = new Date(ageMonth);   
      
    var ageYear = ageDay.getUTCFullYear();  
      
    var age = Math.abs(ageYear - 1970);  
      
    alert(`Your Age is ${age}`);          
}

