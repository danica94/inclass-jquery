// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");

$(document).ready(function() {
    //hide all of the accordion items to start.
    $('.accordion-item').hide();
    
    //code to respond to clicking one of the buttons in div.filters
    $('.accordion-header').click(function() {
      // toggle show and hide
      $(this).next('.accordion-item').toggle(500);
      return false;
    }); //end accordion-header.click()


 //code to respond to clicking one of the buttons in div.filters
 $('.filters .button').click(function() {
    
    // remove active class from other buttons
    $('.filters .button').removeClass('active');
    
    // add active class to this button
    $(this).addClass('active');
    
    // fetch the value of the data-type attribute of the button clicked
    let btnType = $(this).attr('data-type');
    console.log(btnType); //this is just for testing to see if we have the attribute value we expect

    //if they click a button with data-type="all" then show all cards
    if(btnType === 'all') {
      // show all our items
      $('.cards .card').show();
    }
    else {
      let attribute = '[data-type="'+btnType + '"]'; //this is not necessary, but saves us having to write it out twice below.
      
      //hide everything that does not have the attribute of the button
      $('.cards .card').not(attribute).hide();

      //show everything that does have the attribute
     $('.cards .card').filter(attribute).show();
 
    }
    
    return false;
  });


  }); //end document.ready()