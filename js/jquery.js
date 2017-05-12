
$(document).ready(readyHandler)
var itemCount = 0;

function readyHandler() {

        $('#addBtn').click(addBtnHandler);

        $('.item-checklist').on('click', '.delete', deleteBtnHandler);

        $('#clearBtn').click(clearBtnHandler);

        $('#newItem').keydown(function (enter) {
            if(enter.keyCode === 13) {
                addBtnHandler();
            }
        });

        $('.item-checklist').on('click', '.CheckBtn', CheckDelete);
}

function addBtnHandler() {

//What happens when you click on the add button.
    var addButton = $('#newItem').val();

    if (addButton == "") {
        alert("You need to enter a food item first.");
        return;
    }
    else {
        var Item = $('#newItem').val();
        if (Item.trim()) {

//Defining adding the elements to HTML
            var itemList = $('ul#item-checklist');

            var list = $('<li>');
            list.attr("id", "item[" + itemCount++ + "]");
            list.addClass('item-list');
            list.html("<input type='checkbox' class= 'CheckBtn' name=" + Item + " value= " + Item + "> " + Item + "");

            var DelBtn = $('<button>');
            DelBtn.addClass('delete');
            DelBtn.html('Delete');
            DelBtn.hide();

            list.append(DelBtn);

            $('.item-checklist').prepend(list);

            list.hide();
            list.show('slow', function () {
                if (itemCount >= 1) {
                    showClearButton();
                }
                else if (itemCount = 0) {
                    hideClearButton();
                }
            });

            $('#newItem').val('');
            console.log(itemCount);
        }
        else {
        	return;
        }
    }
}

function showClearButton() {
	$('.clear-all').fadeIn('slow');
}

function hideClearButton() {
    $('.clear-all').fadeOut('slow', function() {
        $('.item-checklist').hide('slow', function () {
            $('.item-checklist').empty();
            $('.item-checklist').show();
        });
        console.log(itemCount);
    });
}

function deleteBtnHandler() {
        itemCount--;
        if (itemCount <= 0) {
            hideClearButton();
        }
        else {
            $(this).parent().hide('slow', function () {
                $(this).remove();
            });
            console.log(itemCount);

        }
}

function clearBtnHandler() {
	$('.clear-all').fadeOut('slow', function() {
		$('.item-checklist').hide('slow', function () {
			$('.item-checklist').empty();
			$('.item-checklist').show();
		});
	});
	itemCount = 0;
}

function CheckDelete() {
	$(this).siblings('.delete').fadeToggle('slow');
}
