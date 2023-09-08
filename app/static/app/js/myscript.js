$("#slider1, #slider2, #slider3, #slider5").owlCarousel({
  loop: true, // Enables looping of the carousel.
  margin: 20, // Adds a margin between carousel items.
  responsiveClass: true, // Enables responsive design.
  responsive: {
    0: {
      items: 1, // Number of items to display on screens less than 600px wide.
      nav: false, // Disables navigation arrows for small screens.
      autoplay: true, // Enables autoplay.
    },
    600: {
      items: 3, // Number of items to display on screens 600px or wider.
      nav: true, // Enables navigation arrows for medium screens.
      autoplay: true, // Enables autoplay.
    },
    1000: {
      items: 5, // Number of items to display on screens 1000px or wider.
      nav: true, // Enables navigation arrows for large screens.
      loop: true, // Enables looping for large screens.
      autoplay: true, // Enables autoplay.
    },
  },
});

$('.plus-cart').click(function () {
  var id = $(this).attr("pid").toString();
  var eml = this.parentNode.children[2];

  $.ajax({
    type: "GET",
    url: "/pluscart",
    data: {
      prod_id: id
    },

    success: function (data) {
      console.log(data)
      eml.innerText = data.quantity;
      document.getElementById("amount").innerText = data.amount;
      document.getElementById("totalamount").innerText = data.totalamount;
      
    }
  });

});


$(".minus-cart").click(function () {
  var id = $(this).attr("pid").toString();
  var eml = this.parentNode.children[2];

  $.ajax({
    type: "GET",
    url: "/minuscart",
    data: {
      prod_id: id,
    },

    success: function (data) {
      console.log(data);
      eml.innerText = data.quantity;
      document.getElementById("amount").innerText = data.amount;
      document.getElementById("totalamount").innerText = data.totalamount;
    },
  });
});


$(".remove-cart").click(function () {
  var id = $(this).attr("pid").toString();
  var eml = this
  $.ajax({
    type: "GET",
    url: "/removecart",
    data: {
      prod_id: id,
    },

    success: function (data) {
     
      document.getElementById("amount").innerText = data.amount;
      document.getElementById("totalamount").innerText = data.totalamount;
      data.totalamount
      eml.parentNode.parentNode.parentNode.parentNode.remove();
    },

  });
});