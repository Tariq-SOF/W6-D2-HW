fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(x => {

  let content = document.getElementById('content');

  for(let i = 0; i < x.length; i++) {

    let container = document.createElement('div');
    container.id = "blok1";
    let text = document.createElement('div');
   
    let productName = document.createElement("h3");
    productName.textContent = x[i].title;
    text.appendChild(productName);

    let description = document.createElement("p");
    description.textContent = x[i].description;
    text.appendChild(description);

    let price = document.createElement("h4");
    price.textContent = ` The price : ${x[i].price}$`;
    text.appendChild(price);

    let category = document.createElement("p");
    category.textContent = x[i].category;
    text.appendChild(category);

    container.appendChild(text);

    let image = document.createElement("img");
    image.src = x[i].image;
    image.id = 'imgg';
    container.appendChild(image);

    content.appendChild(container);

  }
});


function createAccount() {
    
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (username.length < 5) {
    alert("the username lees then five");
    return;
  }
  
  if (email.length === 0 || !erro(email)) {
    alert(" the Email is valid ");
    return;
  }
  
  if (password.length < 8) {
    alert("The passord number is leass then eit");
    return;
  }
  fetch('https://6552c0675449cfda0f2dca61.mockapi.io/todo', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password
    }),
    headers: {

      'Content-Type': 'application/json'

    }
  })
  .then(response => response.json())
  .then(data => {

    console.log(data);
  })
  .catch(error => {
   
    console.error(error);
  });
}

function erro (email) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

