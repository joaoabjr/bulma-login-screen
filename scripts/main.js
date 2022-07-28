function validate(){
    let validation = document.querySelector('#label-user').value;
    console.log(validation)
    if (validation == "") 
      return false;
  }

function setCheckedState(){
    let state = document.getElementById('checkbox-remember-user').checked;
    document.getElementById('checkbox-remember-user').checked = state
}

function listener() { 
    let user = document.getElementById('user')
    let password = document.getElementById('password')

    let listaUser = JSON.parse(localStorage.getItem('user'))

    localStorage.setItem('user', JSON.stringify(listaUser))
   
    console.log(user.value)
    console.log(password.value)
}


