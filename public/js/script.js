
    //Displaying Image preview
    var url = document.getElementById('new-item-image');
    url.addEventListener('change', function(e) {
      if(this.value !== ""){
        $( "img[id='image-preview']" ).prop({src: this.value});
        $( "i[id='image-icon']" ).hide();
      }
      else{
        $( "img[id='image-preview']" ).prop({src: ""});
        $( "i[id='image-icon']" ).show();
      }
    });
    var table = document.getElementById("new-item-infos");

    //Adding Info row in table
    var addItem = document.getElementById('new-item-info-add');
    addItem.addEventListener('click', function(e) {

      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = document.getElementById('new-item-info').value;
      cell2.innerHTML = document.getElementById('new-item-content').value;
      cell3.innerHTML = "<a class='del btn btn-xs btn-danger' href='#'>Del info</a>";
    });

    //Removing Info row in table
    if($("#new-item-infos tr").length > 0){
      var delItem = document.querySelectorAll(".del.btn.btn-xs.btn-danger");
      delItem.addEventListener('click', function(e) {
        console.log("btn clicked");
        var i = this.parentNode.parentNode.rowIndex;
        table.deleteRow(i);
        console.log("row Deleted");
      });
    }
