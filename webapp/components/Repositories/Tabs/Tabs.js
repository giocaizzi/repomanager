'use client';

import styles from './Tabs.module.css';


export default function Tabs({ children }) {

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

  // function open tabs
  function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabbutton");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  return (
    <div className={styles.tabs}>
      <div class={styles.tabSelector}>
        <button class="tabbutton" onclick={() => { openTab("simple") }}>Simple Filter</button>
        <button class="tabbutton" onclick={() => { openTab("advanced") }}>Advanced Filter</button>
      </div>
      <div class={styles.tabContainer}>
        <div class="tabcontent" id="simple">
          <div class="filtercontainer">
            <label for="myInput">Filter by name:</label>
            <input type="text" id="myInput" onkeyup={() => {filterByName()}} placeholder="repository name"></input>
          </div>
        </div>
        <div>
          {/* <div class="tabcontent" id="advanced" style="display:none"> */}
          <div class="tabcontent" id="advanced">
            <div class={styles.filterContainer}>
              <label for="advancedInput">Advanced Filter:</label>
              <input type="text" id="advancedInput" onkeyup="filterByAdvanced()"
                placeholder="filter by name, language, stars, etc."></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}