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
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let buten = document.getElementById("buten");

  buten.addEventListener("click", () => {
    if (username.length < 5) {
      alert("The username is less than five characters");
      return;
    }

    if (email.length === 0 || !validateEmail(email)) {
      alert("Invalid email address");
      return;
    }

    if (password.length < 8) {
      alert("The password is less than eight characters");
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
  });
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

