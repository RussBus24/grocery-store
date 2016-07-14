$(document).ready(readyHandler)
var itemCount = 0;

function readyHandler() {
//What happens when you click on the add button.

$('#addBtn').click(addBtnHandler);

$('.item-checklist').on('click', '.delete', deleteBtnHandler);

$('#newItem').keydown(function (enter) {
	if(enter.keyCode === 13) {
		addBtnHandler();
	}
});

$('.item-checklist').on('click', '#CheckBtn', CheckDelete);

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
	list.html("<input type='checkbox' id= 'CheckBtn' name=" + Item + " value= " + Item + "> " + Item + "");

	var DelBtn = $('<button>');
	DelBtn.addClass('delete');
	DelBtn.html('Delete');
	DelBtn.hide();

	list.append(DelBtn);

	$('.item-checklist').prepend(list);

	list.hide();
	list.show('slow');

	$('#newItem').val('');

	}

	else {
	console.log("This ain't food! Try again.");
	}

}

function deleteBtnHandler() {
		console.log('Delete button clicked');
		$(this).parent().hide('slow', function () {
		$(this).remove();
	});
		
}

function CheckDelete() {
	console.log('Checkbox is checked.');
	$(this).siblings('.delete').toggle('slow');
}
