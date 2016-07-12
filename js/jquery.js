$(document).ready(readyHandler)
var itemCount = 0;

function readyHandler() {
//What happens when you click on the add button.

$('#addBtn').click(addBtnHandler);

$('.item-checklist').on('click', '.delete', deleteBtnHandler);

}

function addBtnHandler() {
	var Item = $('#newItem').val();
	console.log(Item);
	if(Item.trim()) {
		console.log("Item has been added to your shopping cart.");

//Defining adding the elements to HTML
	var itemList = $('ul#item-checklist');
	
	var list = $('<li>');
	list.attr("id", "item[" + itemCount++ +"]");
	list.addClass('item-list');
	list.html(Item);

	var DelBtn = $('<button>');
	DelBtn.addClass('delete');
	DelBtn.html('Delete');

	/* var DelBtn = $('<button>');
	DelBtn.addClass('delete');
	DelBtn.html('Delete');
	*/

	list.append(DelBtn);

	$('.item-checklist').prepend(list);

	list.hide();
	list.show('slow');

	}

	else {
	console.log("This ain't food! Try again.");
	}

}

function deleteBtnHandler() {

		var listItem = $('.item-list');

		console.log('Delete button clicked');
		
		listItem.hide('slow', function () {
		listItem.remove();
	});
		
	}
	
