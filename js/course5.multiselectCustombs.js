$(function () {
    $('#state, #food').multiselect({
        includeSelectAllOption: true,
        enableFiltering: true,
        includeSaveOption: true,
    });

    $('#timeslot').multiselect(
            {
                templates: {
                    saveNew: '<li><a><label style="display:inline;"></label><input type="text" /></a></li>'
                }
            });
});

function getOnClickSave(id, selectedVals) {
    var _tmpValues = [];

    $(selectedVals).each(function (index, row) {
        var _tmpVal = row.value;
        _tmpValues.push(_tmpVal);
    });

    alert('Hello its done : ' + id + ' : ' + _tmpValues.join(','));
}


function logOnConsole(msg) {
    console.log(msg);
}