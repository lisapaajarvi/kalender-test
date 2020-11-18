window.addEventListener("load", main)

function main() {
    fetchDays();
}

/*function addEventListeners() {
    document.getElementById("days").addEventListener("click", fetchDays)
}*/

function fetchDays(event) {
    $.ajax({
        url: "http://sholiday.faboul.se/dagar/v2.1/2020/11",
        type: "GET",
        dataType: "jsonp",
        success: function(response) {
            console.log(response.dagar)
            addCalendar(response.dagar);

        }
    });
}

function addCalendar(daysInAMonth) {
    const container = document.getElementById("days-div");
    container.innerHTML = "";

    const dayDivs = createDayDivs(daysInAMonth);
    container.append(...dayDivs);
}

function createDayDivs(days) {
    const dayDivs = [];   

    if(days[0].veckodag === "Tisdag") {
        createEmptyDiv();
    }

    for (const day of days) {
        const dayDiv = document.createElement("div")
        dayDiv.innerHTML = day.datum + " " + day.veckodag;
        dayDivs.push(dayDiv); 
        console.log(dayDivs)
    }

    return dayDivs;
}

function createEmptyDiv() {
    const emptyDiv = document.createElement("div")
    emptyDiv.innerHTML = "";
    dayDivs.push(emptyDiv);
} 