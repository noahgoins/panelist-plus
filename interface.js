// Function that displays an error message if the user has done something wrong.
// Current implementation just throws an alert but could be done with a modal or less intrusive pop-up.
function displayUserError(error) {
    alert(error);
}


$(document).ready(function(){ 
    var regionCollapsible = new bootstrap.Collapse('#regionCollapsible', {toggle: false})
    $('#countryDropdown').change(function() {
        var country = $('#countryDropdown').val();
        if (country == "United States") {
            regionCollapsible.show();
        }
        else {
            regionCollapsible.hide();
        }
    });
    $('#resetRegion').click(function(e) {
        e.preventDefault(); // Prevent page from reloading.
        document.getElementById("regionDropdown").value = "Choose Region";
    });
    $('#resetFromDate').click(function(e) {
        e.preventDefault(); // Prevent page from reloading.
        document.getElementById("fromDate").value = null;
    });
    $('#resetToDate').click(function(e) {
        e.preventDefault(); // Prevent page from reloading.
        document.getElementById("toDate").value = null;
    });
    $('#queryButton').click(function(e) {
        e.preventDefault(); // Prevent page from reloading.

        // Get the raw form data.
        var country = $('#countryDropdown').val();
        var region = $('#regionDropdown').val();
        var fromDate = $('#fromDate').val();
        var toDate = $('#toDate').val();

        alert("Form Data\nCountry: " + country + "\nRegion: " + region + "\nFrom: " + fromDate + "\nTo: " + toDate);

        // Check if a country is selected.
        if (country == "Choose Country" || country == "" || country == null) {
            displayUserError("Form Error: Country not selected.");
            return;
        }
        
        // Check if the date range makes sense.
        var fromTime = Math.floor(new Date(fromDate).getTime() / 1000);
        var toTime = Math.floor(new Date(toDate).getTime() / 1000);
        if (fromTime > toTime) {
            displayUserError("Form Error: Invalid date range.");
            return;
        }

        

        // Disable form submission and display loading spinner.
        var queryButton = document.getElementById('queryButton');
        var querySpinner = document.getElementById('querySpinner');
        queryButton.classList.add("disabled");
        querySpinner.classList.remove("d-none");


        // Create a timeout function in the event the query is not successful for unknown reasons.
        setTimeout(function() {
            queryButton.classList.remove("disabled");
            querySpinner.classList.add("d-none");
        }, 10000);
    }); 
});