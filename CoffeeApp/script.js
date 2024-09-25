function getTicket(MoneyInput, ageInput){
    
    var price;
    var string;
//    This says that if yopu have $5 or more and are older than 13 then you can have coffee for $5.
    if (MoneyInput == "$5 or more" && ageInput == "Older than 13"){
      price = 5
       string = "Enjoy your coffee!"
    
    }
    // this says that if you are between 8 and 13 then you can have decaf coffee for $5.
    else if (ageInput == "Between 8 & 13" && MoneyInput == "$5 or more"){
      price = 5
       string = "You can have decaf coffee!"
      console.log(price);
    }
    // this says that if you are under 8 or have less than $5, then you cannot have coffee.
    else if (ageInput == "Under 8" || MoneyInput == "Less $5" ){
        price = 0 
        string = "You cannot have coffee."
    }
// This is giving what information goes on your reciept
    return string+ "<br><b>Price:</b> $" + price;
  

  }

// This is putting the information on the reciept
  function updateScreen(){
    document.getElementById("output").innerHTML = getTicket(document.getElementById('Money').value , document.getElementById('Age').value);
    
  }