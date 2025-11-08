
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    const initPersonSurname = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPersonSurname.surname;
   const initGender = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initGender.gender;
    const initYear = personGenerator.getPerson();
    document.getElementById('birthYearOutput').innerText = initYear.year;
    const initDay = personGenerator.getPerson();
    document.getElementById('birthDayOutput').innerText = initDay.day;
    const initmonth = personGenerator.getPerson();
    document.getElementById('birthMonthOutput').innerText = initmonth.month;
    const initpatronymic = personGenerator.getPerson();
    document.getElementById('patronymic').innerText = initpatronymic.patronymic;
    const initprofession = personGenerator.getPerson();
    document.getElementById('profession').innerText = initprofession.profession;
    
};

document.getElementById('generate').addEventListener ('click', function () {

const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    const initPersonSurname = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPersonSurname.surname;
   const initGender = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initGender.gender;
    const initYear = personGenerator.getPerson();
    document.getElementById('birthYearOutput').innerText = initYear.year;
    const initDay = personGenerator.getPerson();
    document.getElementById('birthDayOutput').innerText = initDay.day;
    const initmonth = personGenerator.getPerson();
    document.getElementById('birthMonthOutput').innerText = initmonth.month;
    const initpatronymic = personGenerator.getPerson();
    document.getElementById('patronymic').innerText = initpatronymic.patronymic;
    const initprofession = personGenerator.getPerson();
    document.getElementById('profession').innerText = initprofession.profession;
});

document.getElementById('reset').addEventListener ('click', function (event) {
    event.preventDefault();
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('birthDayOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
    document.getElementById('patronymic').innerText = '';
    document.getElementById('profession').innerText = '';
});

