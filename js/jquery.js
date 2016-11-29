
$(document).ready(readyHandler)
var itemCount = 0;

function readyHandler() {
	//What happens when you click on the add button.

	$('#addBtn').click(addBtnHandler);

	$('.item-checklist').on('click', '.delete', deleteBtnHandler);

	$('#clearBtn').click(clearBtnHandler);

	$('#newItem').keydown(function (enter) {
		if(enter.keyCode === 13) {
			addBtnHandler();
		}
	});

	$('.item-checklist').on('click', '.CheckBtn', CheckDelete);

	$('#delete').click(function() {
		list.hide();
		itemList.append(list);
		list.show('slow');
	});

}

function addBtnHandler() {

//What happens when you click on the add button.	

	var Item = $('#newItem').val();
	console.log(Item);
	if(Item.trim()) {
		console.log("Item has been added to your shopping cart.");

//Defining adding the elements to HTML
		var itemList = $('ul#item-checklist');

		var list = $('<li>');
		list.attr("id", "item[" + itemCount++ +"]");
		list.addClass('item-list');
		list.html("<input type='checkbox' class= 'CheckBtn' name=" + Item + " value= " + Item + "> " + Item + "");

		var DelBtn = $('<button>');
		DelBtn.addClass('delete');
		DelBtn.html('Delete');
		DelBtn.hide();

		list.append(DelBtn);

		$('.item-checklist').prepend(list);

		list.hide();
		list.show('slow', showClearButton);

		$('#newItem').val('');

		showClearButton();

		}

		else {
		console.log("This ain't food! Try again.");
		}
}

function showClearButton() {
	$('.clear-all').fadeToggle('slow');
}

function deleteBtnHandler() {
		console.log('Delete button clicked');
		$(this).parent().hide('slow', function () {
			$(this).remove();
		});		
}

function clearBtnHandler() {
	console.log('Clear button is clicked.');
	$('.clear-all').fadeToggle('slow', function() {
		$('.item-checklist').hide('slow', function () {
			$('.item-checklist').empty();
			$('.item-checklist').show();
		});
	});
}

function CheckDelete() {
	console.log('Checkbox is checked.');
	$(this).siblings('.delete').fadeToggle('slow');
	console.log($(this).siblings('.delete'));
}
