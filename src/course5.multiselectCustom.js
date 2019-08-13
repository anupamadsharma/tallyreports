var data = [];
$(function () {

$('select[multiple]').multiselect({
    columns: 1,
    search: true,
    searchOptions: {
        'default': 'Search ',
    },
    selectAllITV: true,
    applyQuery: true,
    resetITVQuery: true, //Added for reset
    texts: {
        placeholder: 'Select ',
        search: 'Search '
    }
});
    /*  $('.tab_list').multiselect({
     columns  : 1,
     search: true,
     searchOptions: {
     'default': 'Search ',
     },
     selectAllITV: true,
     applyQuery: true,
     // resetITVQuery: true,//Added for reset
     texts    : {
     placeholder: 'Select ',
     search     : 'Search '
     }
     });*/
});
jQuery();



var values = "Student";
$.each(values.split(","), function (i, e) {
    $("#user_mv option[value='" + e + "']").prop("selected", true);
});

var _obj = $('#food').siblings('div').find('.ms-search');
$('#food').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    alert("hihi");
});

$("#food").change(function () {
    alert("Handler for .change() called.");
});

//alert(data);
//$("#users_mv").val(["Student"]);

function getOnClickReset() {
    $('.ms-reset').off('click');
    $('.ms-reset').on('click', function (event) {
        event.preventDefault();
        //$(this).siblings('select[multiple]').multiselect( 'reset' );

        $(this).siblings('ul').find('li:not(.optgroup, .ms-hidden).selected').removeClass('selected');
        $(this).siblings('ul').find('li:not(.optgroup, .ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop('checked', false);

        var placeholder = $(this).parents().siblings('div');
        var placeholderTxt = placeholder.find('span');
        placeholderTxt.text("");
    });
}




function getOnClickSave(currentId) {
    //alert("hiio");
    $('.ms-applyQuery').off('click');
    $('.ms-applyQuery').on('click', function (event) {
        event.preventDefault();
        vals = [];
        $(this).siblings('ul').find('li.selected input[type="checkbox"]').each(function () {
            vals.push($(this).val());
            //vals.push($(this).text());
        });
        //var currentId = $(this).parents().siblings('select').attr('id');
        if (currentId == 'users') {
            data.users = vals;
            //getData(currentId);

            selectOptionUserMV(data.users);
        } else if (currentId == 'state') {
            data.state = vals;

        } else if (currentId == 'user_mv') {
            data.users_mv = vals;
            data.user_mv.push(vals);
            alert(data.user_mv);
        }

        alert(' vals : ' + ' selected for : ' + currentId + ' : ' + vals);

    });
    vals = [];
    //  return true;
}

function selectOptionUserMV(_tmpDataArray) {
    alert(_tmpDataArray);
    /*var _selectBoxId = $("#users_mv").siblings(".ms-options-wrap").attr('id'); 
     var _tmpInstance = $("#"+_selectBoxId);*/

    var _targetSelect = $("#users_mv").siblings(".ms-options-wrap").find('input[type="checkbox"]');

    alert(_targetSelect);
    $(_targetSelect).each(function (index, row) {
        var _valt = row.value;
        var _id = row.id;
        var _text = $("#" + _id).parent().text();
        console.log(_valt + ', ' + _id + ', ' + _text);
        //console.log('__TEXT : ' + _text);
        //$("#"+_id).prop("checked", true); 
        // toggle clicked option
        //select.find('option[value="'+ instance._escapeSelector( $(this).val() ) +'"]').prop(
        //select.find('option[value="'+ _valt  +'"]').prop('selected', $("#"+_id).is(':checked')).closest('select').trigger('change');
        if ($.inArray(_valt, _tmpDataArray) >= 0) {
            alert("inArray" + _valt + ', ' + _id + ', ' + _text);
            $.each(_tmpDataArray, function (index, value) {
                alert(value)
                $("#" + _id).find('input[type="checkbox"]').prop("checked", true).closest('select').trigger('change');
            });
            /*var tmp = instance;  
             instance._updateSelectAllText();
             instance._updatePlaceholderText();*/
        }
    });
}

function addnewuser() {
    alert(data.user_mv);
}

function getfoodtypeData(data) {
    $('#foodtype').html('vegee');
}
function getData(currentId) {
    $.ajax({
        url: "data.php",
        type: 'GET',
        data: {'action': currentId},
        success: function (data) {
            console.log(data);
            setNewFood(data);
            //getfoodtypeData(currentId);
        },
        error: function (e) {
            //called when there is an error
            console.log(e.message);
        }
    });




}

function getState() {
    $.ajax({
        url: "data.php",
        type: 'GET',
        // data: {'state':state},
        data: state,
        dataType: 'html',
        success: function (data) {

        },
        error: function (e) {
            //called when there is an error
            console.log(e.message);
        }
    });
}

function callSaveNow() {
    alert('In callSaveNow : ');
}

function callResetQuery(currentId) {
    alert('In reset : ' + currentId);
}
function initMultiSelectRun() {
    $('select[myselect]').multiselect({
        columns: 1,
        search: true,
        searchOptions: {
            'default': 'Search ',
        },
        selectAllITV: true,
        applyQuery: true,
        resetITVQuery: true, //Added for reset
        texts: {
            placeholder: 'Select ',
            search: 'Search '
        }
    });
}

function hideButton(){
    //alert('hide');
    $(".newsel").hide();
    // $(".newsel").css("visibility: hidden;");
    logOnConsole('hideButton');
}

function showButton(){
    //alert('show');
   $(".newsel").show();
   // $(".newsel").css("visibility: visible;");
    logOnConsole('showButton');
}


function logOnConsole(msg){
    console.log('I am here : ' + msg);
}