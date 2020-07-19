function getDay(name){
    var date = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var century = year.slice(0, 1);
    var years = year.slice(2, 3);

    if (year === '' || year.length > 4 ){
        alert('Enter the year correctly');
    } else if(month === '' || month < 1 || month > 12) {
        alert('Enter the month correctly');
    } else if(date === '' || date < 0 || date > 31) {
        alert('Enter the date correctly');
    } else {
        var day = Math.floor( ( ( (century/4) -2*century-1) + ((5*years/4) ) + ((26*(month+1)/10)) + date) % 7);
        return day
    }
}
function getGender() {
    var radio = document.getElementsByName('gender');
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            var gender = radio[i].value;
            return gender;
        }
    }
}
function getName() {
    var name = document.getElementById('name').value;
    var male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if (getGender() === 'male' && getDay() >= 0) {
        document.getElementById('post').innerHTML = ('Hey ') + (document.getElementById('name').value) + ('!') + (' If you were a Ghanian Male') +(' born on a ') + day[getDay(name)] + (',') + (' Your Akan name would be ') + male[getDay(name)] + ('.');
    } else if (getGender() === 'female' && getDay() >= 0) {
        document.getElementById('post').innerHTML = ('Hey ') + (document.getElementById('name').value) + ('!') + (' If you were a Ghanian Female') + (' born on a ') + day[getDay(name)] + (',') + (' Your Akan name would be ') + female[getDay(name)] + ('.');
    } else {
        alert('Kindly Check your details and enter them correctly then retry');
    }
}