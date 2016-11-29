
$(document).ready(readyHandler)
var itemCount = 0;

function readyHandler() {
<<<<<<< HEAD
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
=======
//What happens when you click on the add button.

$('#addBtn').click(addBtnHandler);

$('.item-checklist').on('click', '.delete', deleteBtnHandler);

$('#clearBtn').click(clearBtnHandler);

$('#newItem').keydown(function (enter) {
	if(enter.keyCode === 13) {
		addBtnHandler();
	}
});

$('.item-checklist').on('click', '#CheckBtn', CheckDelete);
>>>>>>> 03a0d79e3d8058dc448ed7feb72cf2ae850a656c

}

function addBtnHandler() {

<<<<<<< HEAD
//What happens when you click on the add button.	
=======
$(document).ready(function() {
	
//What happens when you click on the add button.
>>>>>>> 03a0d79e3d8058dc448ed7feb72cf2ae850a656c
	$('#addBtn').click(function() {

	var Item = $('#newItem').val();
	console.log(Item);
	if(Item.trim()) {
		console.log("Item has been added to your shopping cart.");

//Defining adding the elements to HTML
	var itemList = $('ul#item-checklist');

<<<<<<< HEAD
=======
	
	var list = $('<li>');
	list.attr("id", "item[" + itemCount++ +"]");
	list.addClass('item-list');
	list.html("<input type='checkbox' id= 'CheckBtn' name=" + Item + " value= " + Item + "> " + Item + "");

	var DelBtn = $('<button>');
	DelBtn.addClass('delete');
	DelBtn.html('Delete');
	DelBtn.hide();

	var itemCount = 0;
>>>>>>> 03a0d79e3d8058dc448ed7feb72cf2ae850a656c
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

<<<<<<< HEAD
	list.hide();
	list.show('slow', showClearButton);
=======

	list.hide();
	list.show('slow');
>>>>>>> 03a0d79e3d8058dc448ed7feb72cf2ae850a656c

	$('#newItem').val('');

	showClearButton();
<<<<<<< HEAD
=======

	}

	else {
	console.log("This ain't food! Try again.");
	}

});

function showClearButton() {
	$('#clearBtn').css('visibility', 'visible');
}

function deleteBtnHandler() {
		console.log('Delete button clicked');
		$(this).parent().hide('slow', function () {
		$(this).remove();
	});
		
}

function clearBtnHandler() {
	console.log('Clear button is clicked.');
	$('.item-checklist').hide('slow', function () {
		$('.item-checklist').empty();
		$('.item-checklist').show();
	});

}

function CheckDelete() {
	console.log('Checkbox is checked.');
	$(this).siblings('.delete').fadeToggle('slow');
}

}
>>>>>>> 03a0d79e3d8058dc448ed7feb72cf2ae850a656c

	}

	else {
	console.log("This ain't food! Try again.");
	}

});

function showClearButton() {
	$('#clearBtn').css('visibility', 'visible');
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

<<<<<<< HEAD
function CheckDelete() {
	console.log('Checkbox is checked.');
	$(this).siblings('.delete').fadeToggle('slow');
	console.log($(this).siblings('.delete'));
}
=======
});

>>>>>>> 03a0d79e3d8058dc448ed7feb72cf2ae850a656c
