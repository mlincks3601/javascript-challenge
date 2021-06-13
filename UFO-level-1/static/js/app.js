// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableData = data;

var button = d3.select("#filter-btn");

// Initialize the instance for the form
var form = d3.select("#form");

// Create Event handlers
button.on("click", runEvent);
form.on("submit", runEvent);

// Function to create and append data to the table
function createTable(filtered_data){
    
    // Select the table element by id
    var table = d3.select("#ufo-table");

    // Select the tbody element by id 
    var t_body = table.select("t_body");
    var t_row;

    // Sets the table to it's default blank setting for population
    t_body.html("");

    // Loop through each object and append the data to the table
    filtered_data.forEach(function(dataObject){
        // Create new row for each object
        t_row = tbody.append("tr");
        t_row.append("td").text(dataObject.datetime);
        t_row.append("td").text(dataObject.city);
        t_row.append("td").text(dataObject.state);
        t_row.append("td").text(dataObject.country);
        t_row.append("td").text(dataObject.shape);
        t_row.append("td").text(dataObject.durationMinutes);
        t_row.append("td").text(dataObject.comments);

    });

};

// Event Handler Function
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