 
  function addFruit() {
    var fruitName = document.getElementById('fruit_name').value;  
    if (fruitName.trim() === '') {
      alert('Hi sir , kindly enter a fruit name.');
      return;
    }

    var table = document.getElementById('FruitList');  
    var newRow = table.insertRow(-1);  
    newRow.id = fruitName;  

    var cell1 = newRow.insertCell(0);  
    cell1.innerHTML = fruitName;  

    var cell2 = newRow.insertCell(1);  
    cell2.innerHTML = '<a href="#" onclick="deleteFruit(this.parentNode.parentNode);">Delete</a>';  
    cell2.align = 'center'; // Align the content to center

    document.getElementById('fruit_name').value = ''; // Clear the input field after adding
  }

  function deleteFruit(row) {
    document.getElementById('FruitList').deleteRow(row.rowIndex); // Delete the row from the table
  }
 
