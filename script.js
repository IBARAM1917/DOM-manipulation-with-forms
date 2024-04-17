
let row=1;
let submit=document.getElementById("submit");
submit.addEventListener("click",displayElements);
function displayElements(){
    let firstName=document.getElementById("first-name").value;
    console.log(firstName);
    var lastName=document.getElementById("last-name").value;
    var address=document.getElementById("address").value;
    var pinCode=document.getElementById("pincode").value;
    var country=document.getElementById("Country-name").value;
    var State=document.getElementById("state-name").value;

    var radio=document.querySelectorAll('input[name=gender]:checked');
    let gender = [];
    radio.forEach((radi) => {
    gender.push(radi.value);
    });

    
    var food=document.querySelectorAll('input[name="food"]:checked');
    let foodbox = [];

   food.forEach((checkfood) => {
        foodbox.push(checkfood.value);
    });
    let num = foodbox.length;
    if(num<2){
    alert('Must choose at least 2 out of 5 foods!');
    }

    var display=document.querySelector("table");
    var newrow=display.insertRow(row);
    console.log(newrow);

    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);
    var cell5=newrow.insertCell(4);
    var cell6=newrow.insertCell(5);
    var cell7=newrow.insertCell(6);
    var cell8=newrow.insertCell(7);
    
    cell1.innerHTML=firstName;
    cell2.innerHTML=lastName;
    cell3.innerHTML=address;
    cell4.innerHTML=pinCode;
    cell5.innerHTML=gender;
    cell6.innerHTML=foodbox;
    cell7.innerHTML=country;
    cell8.innerHTML=State;
    
    
    
   
}
