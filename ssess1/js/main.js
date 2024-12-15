
var prodNameInput = document.getElementById('prodName')
var prodURLInput = document.getElementById('prodUrl');

var productList =[]
let nameError = document.getElementsByClassName("error-message")[0];
let rejexName = /^[a-zA-Z]{3,7}(?:\s[a-zA-Z]{3,7})*$/;
let URLError = document.getElementsByClassName("error-message")[1];
let rejexURL = /^(https?|ftp):\/\/[^\s\/$.?#][^\s]*$/;

let displayError = (regex, input, errorMessage) => {
  if (regex.test(input.value)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    errorMessage.classList.add("d-none");
    addValidation();
  } else {
    input.classList.add("is-invalid");
    errorMessage.classList.remove("d-none");
    addValidation();
  }
};

let addValidation = () => {
  for (var i = 0; i < productList - 1; i++) {
    if (inputs[i].value == "") {
      addBtn.disabled = "true";
    } else {
      if (rejexName.test(prodNameInput.value) && rejexURL.test(prodURLInput.value)) {
        addBtn.removeAttribute("disabled");
      } else {
        addBtn.disabled = "true";
      }
    }
  }
};
  


prodNameInput.onkeyup = () => {
    displayError(rejexName, prodNameInput, nameError);
  };
  prodURLInput.onkeyup = () => {
    displayError(rejexURL, prodURLInput, URLError);
  };












if(localStorage.getItem("products") != null){
    productList =JSON.parse(localStorage.getItem('products'))
    displayProducts()
}

function getInputsValue(){
    var product ={
        name: prodNameInput.value,
        URL: prodURLInput.value
       
    }
    productList.push(product)
    localStorage.setItem('products',JSON.stringify(productList))
    displayProducts()
}
function displayProducts(){
    var cartona=``
    for (var i = 0 ; i <productList.length;i++){
        cartona +=`
        <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td><button class="btn btn-secondary">
        <a href="${productList[i].URL}" target="_blank">Visit</a>
        </button></td>
        
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
       
        
    </tr>
        `

    }
    document.getElementById('tbodyID').innerHTML = cartona
}
function deleteProduct(index){
  productList.splice(index,1)
  localStorage.setItem('products',JSON.stringify(productList))
  displayProducts()
}

var word = document.getElementById("search")
function search(value){
    var cartona=``;
  for (var i = 0; i < productList.length; i++) {
    if(productList[i].name.toLowerCase().includes(value.toLowerCase())){
        cartona+=`
        <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td><button class="btn btn-secondary">
        <a href="${productList[i].URL}" target="_blank">Visit</a>
        </button></td>
        
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
       
        
    </tr>


        `
    }
    
  }
  document.getElementById('tbodyID').innerHTML = cartona
}
