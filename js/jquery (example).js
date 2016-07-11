$(document).ready(function(){
	var total = 0;
	$('#addBtn').click(function() {
		//1. grab the value that the user entered
		var newValue = $('#newItem').val();
		console.log(newValue);
		
		//2. validate the data entered (make sure it is not blank)
		if(newValue.trim()) {
			console.log('Item has been added to your shopping cart.');
		
		//3. construct the html element for the list
		/*
		<div class="item-list1">
				<p>Apples @ .99</p>
			</div>
		*/
		var e = $('<li>');
		e.addClass('item-list');

		var p = $('<li>');
		p.html(newValue);

		e.append(p);

		//4. append the new html element to the list
		$('.item-checklist').prepend(e);

		
		//5. Clear the input box

		//6. Update the total
		//total = total + ???;

		$('#total').html(total);

		}else{
			//let the user know that they made an error
			console.log('That is not a food item!');
		}
	});
});