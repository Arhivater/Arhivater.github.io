$(document).ready(function() {
  $('#InventoryMasterError').click(function(event) { //on click
    if (this.checked) { // check select status
      $('.checkerror').each(function() { //loop through each checkbox
        $('#selecctall').attr('disabled', 'disabled');
      });
    } else {
      $('.checkerror').each(function() { //loop through each checkbox
        $('#selecctall').removeAttr('disabled', 'disabled');
      });
    }
  });

});

$(document).ready(function() {
  $('#selecctall').click(function(event) { //on click
    if (this.checked) { // check select status
      $('.checkbox1').each(function() { //loop through each checkbox
        $('#InventoryMasterError').attr('disabled', 'disabled');
      });

    } else {
      $('.checkbox1').each(function() { //loop through each checkbox
        $('#InventoryMasterError').removeAttr('disabled', 'disabled');
      });
    }
  });
});
