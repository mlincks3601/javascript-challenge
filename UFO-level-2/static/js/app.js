// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var form = d3.select("#form-control");
var t_body = d3.select("tbody");

//create handlers for events
button.on("click", runEnter);
form.on("submit", runEnter);
button.on("click", fillTable);
function fillTable() {
    tableData.forEach((rowData) => {
        let row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        });
    })
};

function runEnter(){
    d3.event.preventDefault();
    //select the data from all the needed entries
    var input_data = d3.select("#datetime");
    var input_city = d3.select("#city");
    var input_state = d3.select("#state");
    var input_country = d3.select("#country");
    var input_shape = d3.select("#shape");

    var value_of_date = input_date.property("value");
    var value_of_city = input_city.property("value");
    var value_of_state = input_state.property("value");
    var value_of_country = input_country.property("value");
    var value_of_shape = input_shape.property("value");

// now filter the data
    var filtered_data = tableData.filter(tableData => tableData.datetime === value_of_date);
    var filtered_city_data = tableData.filter(tableData => tableData.city === value_of_city); 
    var filtered_state_data = tableData.filter(tableData => tableData.state === value_of_state);
    var filtered_country_data = tableData.filter(tableData => tableData.country === value_of_country);
    var filtered_shape_data = tableData.filter(tableData => tableData.shape === value_of_shape);


//clear the table for the next filter of choice by user
    tbody.html("");
//take the data we want and add it to our filtered data table
    filtered_data.forEach((rowData) => {

        let row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        });
    })
    filtered_city_data.forEach((rowData) => {

        let row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
    });
})
    filtered_state_data.forEach((rowData) => {
    
        let row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
    });
})
    filtered_country_data.forEach((rowData) => {
    
        let row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
    });
})
    filtered_shape_data.forEach((rowData) => {
    
        let row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
    });
})

    //console filtered_data
    console.log("filtered_data");
};
fillTable