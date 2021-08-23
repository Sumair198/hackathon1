let login1 = () =>
{
    window.location = 'login.html'
}
let signup1 = () =>
{
    window.location = 'index.html'
}

let dash = () =>
{
    window.location = 'dash.html'
}


let signup = () =>
{
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var country = document.getElementById('country').value
    var city = document.getElementById('city').value

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((res) => {

    let user = {
        email : email,
        password : password,
        country : country,
        city : city
    }
    console.log(user)
    firebase.database().ref(`user/${res.user.uid}`).set(user)
    .then(() =>
    {
        alert('data realtime me chla ')
    })
  })











  .catch((error) => {
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}

let signin = () =>
{
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    if(email== "admin@gmail.com"){

        firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
         
        firebase.database().ref(`user/${res.user.uid}`).on('child_added', (data) =>
        {
            console.log(data.val())
        })
       alert('Admin/Restaurant login hogaya')
       window.location = 'restaurant.html'
        
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage)
    });
    }
    else{
        firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
    
        firebase.database().ref(`user/${res.user.uid}`).on('child_added', (data) =>
        {
            console.log(data.val())
        })
    
        alert("User/Customer login hogaya")
        window.location = 'customer.html'
        
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage)
    }); 
    }

}

var  allproducts = []

let additem = () =>
{
    var name = document.getElementById('name').value
    var price = document.getElementById('price').value
    var image = document.getElementById('image').value

    var obj = {
       name,
       price,
       image
    }
    allproducts.push(obj)
    // console.log(allproducts)

    localStorage.setItem('items' , JSON.stringify(allproducts))

    // window.location = 'customer.html'
    window.open('./customer.html')

}
