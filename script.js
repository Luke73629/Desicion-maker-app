
function getTicket(){

    
    var Money = document.getElementById("money").value;
    var ageInput = document.getElementById("age").value;
    var price;
    var ticketText;
  
  
    
  
  
  if (money == "$5 or more") {
    price = 10
  
  }
  else if (dayInput != "Saturday" && dayInput != "Sunday" && ageInput < 18)
  {price = 5;
  }
  
  
  else if (dayInput != "Saturday" && dayInput != "Sunday" && ageInput >= 18)
    {price = 10;
    }
  
    
  
   
    ticketText = "<b>Day:</b>" + dayInput + "<br><b>Age:</b>" + ageInput + "<br><b>Price:</b> $" + price;
  
    document.getElementById("output").innerHTML = ticketText;
    document.getElementById("age").value = "";
    document.getElementById("discount").value = "";
    
  }
  
  
  
  
  
  
  