'use client';

import TabContent from '@/components/Repositories/TabContent/TabContent';

import styles from './Tabs.module.css';
import { useState } from 'react';


export default function Tabs({ }) {
  const [activeTab, setActiveTab] = useState("simple");

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

  return (
    <div className={styles.tabs}>
      <div className={styles.tabSelector}>
        <button className={styles.tabButton} onClick={() => { setActiveTab("simple") }}>Simple Filter</button>
        <button className={styles.tabButton} onClick={() => { setActiveTab("advanced") }}>Advanced Filter</button>
      </div>
      <div className={styles.tabContainer}>
        {activeTab === "simple" ?
          <TabContent id="simple">
            <div className={styles.filterContainer}>
              <label for="myInput">Filter by name:</label>
              <input type="text" id="myInput" onKeyUp={() => { filterByName() }} placeholder="repository name"></input>
            </div>
          </TabContent>
          : 
          <TabContent id="advanced">
            <p>Not implemented yet!</p>
          </TabContent>
          // <div>
          //   <div className="tabcontent" id="advanced">
          //     <div className={styles.filterContainer}>
          //       <label for="advancedInput">Advanced Filter:</label>
          //       <input type="text" id="advancedInput" onkeyup="filterByAdvanced()"
          //         placeholder="filter by name, language, stars, etc."></input>
          //     </div>
          //   </div>
          // </div>
        }
      </div>
    </div>
  );
}