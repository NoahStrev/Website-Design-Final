async function getTemp()
{
    apiKey = "76f0e5a362aa73602dc0d38ecbda4216"

    response = await fetch 
    ("https://api.openweathermap.org/data/2.5/weather?q=" +
    "Stevens Point" +
    "&units=metric&appid=" +
    this.apiKey)
    console.log(response);

    data = await response.json();
    console.log(data);

    temp = data.main.temp;
    temp = (temp * (9/5)) +32
    console.log(temp);
    tempCorrected = temp.toFixed(1)

    min = data.main.temp_min;
    min = (min * (9/5)) +32
    console.log(temp);
    minCorrected = min.toFixed(1)

    max = data.main.temp_max;
    max = (max * (9/5)) +32
    console.log(temp);
    maxCorrected = max.toFixed(1)

    wind = data.wind.speed;
    console.log(wind);

    msg = "Current Temperature: " + tempCorrected + "° Fahrenheit";
    console.log(msg);

    msg += "<br/>Minimum Temperature: " + minCorrected + "° Fahrenheit";
    console.log(msg);

    msg += "<br/>Maximum Temperature: " + maxCorrected + "° Fahrenheit";
    console.log(msg);

    msg += "<br/>Wind Speed: " + wind + "mph";
    console.log(msg);

    document.getElementById('temp').innerHTML = msg;
}

$(document).ready(function(){
    $("article.Politos").hide();
    $("article.UWSP").hide();
    $("article.Brewery").hide();
    $("article.Background").hide();
    $("article.Video").hide();
    $("article.Weather").hide();

    $("p.Politos").click(function(){
        $("article.Politos").toggle();
    });
    $("p.UWSP").click(function(){
        $("article.UWSP").toggle();
    });
    $("p.Brewery").click(function(){
        $("article.Brewery").toggle();
    });
    $("p.Background").click(function(){
        $("article.Background").toggle();
    });
    $("p.Video").click(function(){
        $("article.Video").toggle();
    });
    $("p.Weather").click(function(){
        $("article.Weather").toggle();
    });
})

function validateForm(myForm){
    //get the first name
    fname = myForm.firstname.value
    console.log(fname)

    lname = myForm.lastname.value
    console.log(lname)

    gpa = myForm.GPA.value
    console.log(gpa)

    act = myForm.ACT.value
    console.log(act)

    //make sure firstname and lastname are at least two characters is length
    if(fname.length < 2 || lname.length < 2){
        msg = "First name and last name must be minimum of " +
            "2 characters. Resubmit"
        document.getElementById('note').innerHTML = msg;
        return false //very important for server side
    }

    if(act >= 19 && gpa >= 2.25){
        msg = "Based on previous years acceptance, You Would get into UWSP! Congrats!"
        document.getElementById('note').innerHTML = msg;
        return false //very important for server side
    }
    else{
        msg = "Based on previous years acceptance, you would not get into UWSP."
        document.getElementById('note').innerHTML = msg;
    }
    return false
}