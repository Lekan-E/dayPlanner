var currTime = $(".currTime");
var saveButton = document.querySelector(".saveButton");

// handle displaying the day
var currentTime = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentTime);


//convert the time to a 24hr clock
function convertString(str){
    var amPm = str.substring(str.length-2, str.length);
    var time = parseInt(str.substring(0,str.length-2));

    if((amPm == "PM" && time != 12)){
        time+=12;
    }
    if(amPm == "AM" && time == 12){
        time = 0;
    }
    return time;
}

currTime.each(function(){
    var currentT = convertString($(this).text());
    //convert time to an integer
    var eventTime = localStorage.getItem($(this).text()); 

    if(currentT > currentTime){
        $(this).next().addClass("future");
    }else if (currentT == currentTime){
        $(this).next().addClass("present");
    }else{
        $(this).next().addClass("past");
    }

    if(eventTime!=null){
        $(this).siblings(".eventCreated").text(eventTime);
    }

})

saveButton.addEventListener("click",function(event){
    event.preventDefault();

    var time = $(".currTime").siblings().text();
    var event = $(".eventCreated").siblings().val();
    //Store in local storage
    localStorage.setItem(time,event)
})

