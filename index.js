var shop = [
  {
    title: 'Canned dog food',
    image: './pictures/wetDogFood1.jpg',
    price: '75-$150',
    description: 'Pedigree dog food'
  },
  {
    title: 'Dry dog food',
    image: './pictures/dryDogFood1.jpeg',
    price: '25-$93',
    description: 'Purina Dog Chow'
  },
  {
    title: 'Dry cat food',
    image: './pictures/dryCatFood1.jpg',
    price: '7,500-15,000',
    description: 'Iams cat food'
  },
  {
    title: 'Wet cat food',
    image: './pictures/wetCatFood1.jpg',
    price: '7,500-15,000',
    description: 'Purina Friskies cat food'
  },
  {
    title: 'Fish food',
    image: './pictures/fishFood1.jpg',
    price: '4-$43',
    description: 'Wardley goldfish food'
  },
  {
    title: 'Pond fish food',
    image: './pictures/fishFood2.jpeg',
    price: '22-$65',
    description: 'Tetra PondFood'
  },
  {
    title: 'Bird food',
    image: './pictures/BirdFood1.jpeg',
    price: '7,500-15,000',
    description: 'Hartz small bird food'
  },
  {
    title: 'Iguana food',
    image: './pictures/dryIguanaFood1.jpg',
    price: '8-$35',
    description: 'Natural Iguana Food'
  },
  {
    title: 'Gerbil food',
    image: './pictures/dryGerbilFood1.jpg',
    price: '3-$23',
    description: 'Higgins Sunburst gerbil food'
  },
  {
    title: 'Rabbit food',
    image: './pictures/dryRabbitFeed1.jpeg',
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