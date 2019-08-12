$(function () {
        $('#state, #food').multiselect({
          includeSelectAllOption: true,
          enableFiltering: true,
          includeSaveOption: true,
        });
}); 

function getOnClickSave(selectedVals) {
    var _tmpValues = [];

    $(selectedVals).each(function(index, row){
       var _tmpVal = row.value;
       _tmpValues.push(_tmpVal);
    });

    alert('Hello its done : ' + _tmpValues.join(','));
} 
 

function logOnConsole(msg){
    console.log(msg);
}