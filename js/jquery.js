$(document).ready(function() {
	
//What happens when you click on the add button.
	$('#addBtn').click(function() {
	var Item = $('#newItem').val();
	console.log(Item);
	if(Item.trim()) {
		console.log("Item has been added to your shopping cart.");

//Defining adding the elements to HTML
	var itemList = $('ul#item-checklist');
	var itemCount = 0;
	var list = $('<li>');
	list.attr("id", "item[" + itemCount+++"]");
	list.addClass('item-list');
	list.html(Item);

	var DelBtn = $('<button id="delete">Delete</button>');

	list.append(DelBtn);

	$('.item-checklist').prepend(list);

}

else {
	console.log("This ain't food! Try again.");
}

	});

	$('#delete').click(function() {
		list.hide();
		itemList.append(list);
		list.show('slow');
	});

});