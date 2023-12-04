// Function to filter the table by name
function filterByName() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    // Get the input element
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("repositoriesTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; // Adjust this to match the column you want to filter
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Function to filter the table by advanced criteria
function filterByAdvanced() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("advancedInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("repositoriesTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2]; // Adjust this to match the column you want to filter
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}