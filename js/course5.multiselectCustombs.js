$(function () {
        $('#state, #food').multiselect({
          includeSelectAllOption: true,
          enableFiltering: true,
          includeSaveOption: true,
        });
}); 

function getOnClickSave(id, selectedVals) {
    var _tmpValues = [];

    $(selectedVals).each(function(index, row){
       var _tmpVal = row.value;
       _tmpValues.push(_tmpVal);
    });

    alert('Hello its done : ' + id + ' : ' + _tmpValues.join(','));
} 
 

function logOnConsole(msg){
    console.log(msg);
}