



function validateform(){  
    var name = document.getElementById("name");
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }  
}