// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers for the button clicks
button.on("click", runEvent);
form.on("submit", runEvent);

// Function to create and add the data to our table
function createTable(filtered_data){
    
    // Select the table id
    var table = d3.select("#ufo-table");

    // Select the tbody id
    var tbody = table.select("#tbody");

    // set the table to it's default blank setting for the population
    tbody.html("");

    // add the selected data to the filtered data table
    filtered_data.forEach(function(dataObject){
        trow = tbody.append("tr");
        trow.append("td").text(dataObject.datetime);
        trow.append("td").text(dataObject.city);
        trow.append("td").text(dataObject.state);
        trow.append("td").text(dataObject.country);
        trow.append("td").text(dataObject.shape);
        trow.append("td").text(dataObject.durationMinutes);
        trow.append("td").text(dataObject.comments);

    });

};

function runEvent(){

    // Prevent Page from Refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the input value (date) from the input element
    var input_data = inputElement.property("value");

    // Filter the data.js by the input value
    var filtered_data = tableData.filter(sighting => sighting.datetime === input_data);

    // Call the createTable function with the 
    // filteredData as the parameter
    createTable(filtered_data);
};