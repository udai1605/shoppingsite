

let products = [
    {
      id: 1,
      name: "White Tshirt",
      size: "L",
      color: "white",
      price: 1200,
      image: "product1.jpeg",
      description: "Good looking white tshirt",
    },
    {
      id: 2,
      name: "Black Shirt",
      size: "M",
      color: "Black",
      price: 1500,
      image: "product2.jpeg",
      description: "Good looking black shirt",
    },
  
    {
      id: 3,
      name: "Checked Shirt",
      size: "S",
      color: "White & Black",
      price: 900,
      image: "product3.png",
      description: "Good looking Checked Shirt",
    },
  
    {
      id: 4,
      name: "Black Female Blazer",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product4.jpeg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 5,
      name: "Navy Blue Top",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "product5.jpeg",
      description: "Good looking Top",
    },
  
    {
      id: 6,
      name: "Indian Dress",
      size: "M",
      color: "Henna",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },
    {
        id: 7,
        name: "blue Breezer",
        size: "M",
        color: "blue",
        price: 1500,
        image: "product7.jpg",
        description: "professional Dress",
      },
      {
        id: 8,
        name: "casual geans",
        size: "l",
        color: "Brown",
        price: 2100,
        image: "product8.jpg",
        description: "Great looking Casuals",
      },
      {
        id: 9,
        name: "Party Wear",
        size: "s",
        color: "green",
        price: 500,
        image: "product9.jpg",
        description: "Good looking party Dress",
      },
      {
        id: 10,
        name: "Indian Dress",
        size: "l",
        color: "Red",
        price: 1000,
        image: "product10.jpg",
        description: "Good looking Traditional Dress",
      },
      {
        id: 11,
        name: "Formal Dress",
        size: "xxl",
        color: "Skyblue",
        price: 1200,
        image: "product11.jpg",
        description: "Good looking Formal Dress",
      },
      {
        id: 12,
        name: "Indian Dress",
        size: "M",
        color: "orange",
        price: 2500,
        image: "product6.jpg",
        description: "Good looking kurtha Dress",
      },
      
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  function searchByRange(e){
        e.preventDefault();
        min = document.getElementById('minpri').value;
        max = document.getElementById('maxpri').value;
        console.log(min+""+max);
        let RangeProducts = products.filter(function (product,index) {
            if(product.price>=min && product.price<=max){
                return product;
            }
            
        })
        displayProducts(RangeProducts)
  }












  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  // @param 2 the id u want to search
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);
  
    //   putting in cart
    if(!cart.includes(pro)) {
        cart.push(pro);
        document.getElementById('cartLength').innerHTML= cart.length;
        document.getElementById('cartLength1').innerHTML= cart.length;
    }else{
        alert("Product Already Added To Cart")
    }
    // 
    displayProducts(cart, "cart");
  }
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
    cart.length>0?document.getElementById('cartLength').innerHTML= cart.length:document.getElementById('cartLength').innerHTML= "";
    cart.length>0?document.getElementById('cartLength1').innerHTML= cart.length:document.getElementById('cartLength1').innerHTML= "";
  }
  