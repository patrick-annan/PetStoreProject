var shop = [
  {
    title: 'Tigers',
    image: './hungry_dog.jpg',
    price: '7,500-15,000',
    description: '"its hungry" dog food'
  },
  {
    title: 'Tigers',
    image: './img/gerbile.jpg',
    price: '7,500-15,000',
    description: ''
  },
  {
    title: 'Tigers',
    image: './img/gerbile.jpg',
    price: '7,500-15,000',
    description: ''
  },
  {
    title: 'Tigers',
    image: './img/gerbile.jpg',
    price: '7,500-15,000',
    description: ''
  },
  {
    title: 'Tigers',
    image: './img/gerbile.jpg',
    price: '7,500-15,000',
    description: ''
  },
  {
    title: 'Tigers',
    image: './img/gerbile.jpg',
    price: '7,500-15,000',
    description: ''
  },
  {
    title: 'Tigers',
    image: './img/gerbile.jpg',
    price: '7,500-15,000',
    description: ''
  },
  {
    title: 'Tigers',
    image: './img/gerbile.jpg',
    price: '7,500-15,000',
    description: ''
  },
  {
    title: 'Tigers',
    image: './img/gerbile.jpg',
    price: '7,500-15,000',
    description: ''
  },
  {
    title: 'Tigers',
    image: './img/gerbile.jpg',
    price: '7,500-15,000',
    description: ''
  },
  

  
  ]
  
  var postHTML = " "

























  



  for (var i=0; i < shop.length; i++){
      var wrapper = '<div class="card m-3" style="width: 18rem;" >'
      var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
      var image = '<img class="card-image-top" src="' + shop[i].image + '">'
      var price = '<p> $' + shop[i].price + '</p></span>'
      var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div></div>'
      var concatThis = wrapper + heading + image + price + description;
      postHTML = postHTML + concatThis
       }
  document.getElementById('market').innerHTML = postHTML