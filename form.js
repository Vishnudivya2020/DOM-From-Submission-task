const form=document.querySelector(".Dform");
 console.log(form);



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let Name1=document.getElementById("Name1").value;
    let Name2=document.getElementById("Name2").value;
    let Email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let Pincode=document.getElementById("Pincode").value;
    let Gender = document.querySelector('input[name="gender"]:checked').value;
   
    const Food = [];
    form.querySelectorAll('input[name="food"]:checked').forEach(food => {
        Food.push(food.value);
    });

     const state = document.getElementById("state").value;
     const country = document.getElementById("country").value;

    
   
    
    let row=table.insertRow();
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    let cell5=row.insertCell(4);
    let cell6=row.insertCell(5);
    let cell7=row.insertCell(6);
    let cell8=row.insertCell(7);
    let cell9=row.insertCell(8);
    
   

    
    
    
    cell1.innerText=Name1;
    cell2.innerText=Name2;
    cell3.innerText=Email;
    cell4.innerText=address;
    cell5.innerText=Pincode;
    cell6.innerText=Gender;
    cell7.innerText=Food;
    cell8.innerText=state;
    cell9.innerText=country;
    
    
    
     form.reset();
 });

