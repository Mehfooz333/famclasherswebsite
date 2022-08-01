const { $where } = require("../../server/model/creatorschema");

$("#add-user").submit(event=>{
  alert('Data inserted Successfully!')
})


$('#update-user').submit(event=>{
  event.prventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array,function(n,i){
    data[n['name']] = n[value]
  })

  console.log(data)

  var request = {
    'url' : `http://localhost:500/api/update/${data.id}`,
    'method' : 'PUT',
    'data' : data
  }

  $.ajax(request).done(function(response){
    alert('Data updated succesfully')
  })
})

if(window.location.pathname == '/'){
  $ondelete = $('.table tbody td a .delete');
  $ondelete.click(function(){
    var id = $(this).attr('data-id')

    var request = {
      'url' : `http://localhost:500/api/delete/${data.id}`,
      'method' : 'DELETE'
    }

    if(confirm('Do you really want to delete thsi record?')){
      $ajax(request).done(function(response){
        alert('Data deleted Successfully')
        location.reload
      })
    }
  })
}