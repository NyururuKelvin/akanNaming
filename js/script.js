function getDay(){
    var date = parseInt(document.getElementById('date').value);
    var month = parseInt(document.getElementById('month').value);
    var year = document.getElementById('year').value;
    var century = year.slice(0, 1);
    var years = year.slice(2, 3);

    if (year == '' || year.length > 4 ){
        alert('Enter the year correctly');
    } else if(month == '' || month < 1 || month > 12) {
        alert('Enter the month correctly');
    } else if(date == '' || date < 0 || date > 31) {
        alert('Enter the date correctly');
    } else {
        var day = Math.floor( ( ( (century/4) -2*century-1) + ((5*years/4) ) + ((26*(month+1)/10)) + date) % 7);
        return day
    }
}
function getGender() {
    var input = document.getElementById('gender');
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            var gender = input[i].value;
            return gender;
        }
    }
}
function getName() {
    var male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if (getGender() == 'male' && getDay() >= 0) {
        document.getElementById('post').innerHTML = ('You are a male born in Ghana, your Akan name is ') + male[getDay(name)] + (' and born on ') + day[getDay(name)];
    } else if (getGender() == 'female' && getDay() >= 0) {
        document.getElementById('post').innerHTML = ('You are a female born in Ghana, your Akan name is ') + female[getDay(name)] + ('and born on ') + day[getDay(name)]; 
    } else {
        alert('Kindly Check your details and enter them correctly then retry');
    }
}