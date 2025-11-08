const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
}`,
    firstNameFemaleJson: `{
"count": 10,
"list": {
            "id_1": "Алёна",
            "id_2": "Елена",
            "id_3": "Анна",
            "id_4": "Мария",
            "id_5": "Татьяна",
            "id_6": "Ольга",
            "id_7": "Любовь",
            "id_8": "Ксения",
            "id_9": "Дарья",
            "id_10": "Анастасия"
}
    }`,

    patronymicMaleJson: `{
"count": 10,
"list": {
            "id_1": "Александрович",
            "id_2": "Иванович",
            "id_3": "Владимирович",
            "id_4": "Алексеевич",
            "id_5": "Андреевич",
            "id_6": "Михайлович",
            "id_7": "Валерьевич",
            "id_8": "Викторович",
            "id_9": "Юрьевич",
            "id_10": "Сергеевич"
}
    }`,

    patronymicFemaleJson: `{
"count": 10,
"list": {
            "id_1": "Александровна",
            "id_2": "Ивановна",
            "id_3": "Владимировна",
            "id_4": "Алексеевна",
            "id_5": "Андреевна",
            "id_6": "Михайловна",
            "id_7": "Валерьевна",
            "id_8": "Викторовна",
            "id_9": "Юрьевна",
            "id_10": "Сергеевна"
}
    }`,

    professionMaleJson: `{
"count": 10,
"list": {
            "id_1": "Слесарь",
            "id_2": "Строитель",
            "id_3": "Шахтёр",
            "id_4": "Военный",
            "id_5": "Учитель",
            "id_6": "Повар",
            "id_7": "Юрист",
            "id_8": "Актёр",
            "id_9": "Сантехник",
            "id_10": "Монтажник"
}
    }`,

    professionFemaleJson: `{
"count": 10,
"list": {
            "id_1": "Медсестра",
            "id_2": "Учитель",
            "id_3": "Бухгалтер",
            "id_4": "Стюардесса",
            "id_5": "Парикмахер",
            "id_6": "Визажист",
            "id_7": "Дизайнер",
            "id_8": "Воспитательница",
            "id_9": "Продавец",
            "id_10": "Ветеринар"
}
    }`,

    monthJson: `{
"count": 12,
"list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
}
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {
        const firstName = (this.randomGender() === "Мужчина") ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson)
        return firstName;
    },

    randomSurname: function () {
        const surname = (this.randomGender() === "Мужчина") ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'a'
        return surname;
    },

    randomPatronymic: function () {
        const patronymic = (this.randomGender() === "Мужчина") ? this.randomValue(this.patronymicMaleJson) : this.randomValue(this.patronymicFemaleJson)
        return patronymic;
    },

    randomProfession: function () {
        const profession = (this.randomGender() === "Мужчина") ? this.randomValue(this.professionMaleJson) : this.randomValue(this.professionFemaleJson)
        return profession;
    },

    randomGender: function () {
        const initRandom = Math.round(Math.random());
        const gender = (initRandom === 1) ?
            personGenerator.GENDER_MALE :
            personGenerator.GENDER_FEMALE;
        return gender;
    },

    randomDay: (max = 1, min = 31) => Math.floor(Math.random() * (max - min + 1) + min),

    randomMonth: function () {

        return this.randomValue(this.monthJson)
    },

    randomYear:
        (max = 2025, min = 1925) => Math.floor(Math.random() * (max - min + 1) + min),

    getPerson: function () {
        this.person = {};
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        this.person.gender = this.randomGender();
        this.person.profession = this.randomProfession();
        this.person.day = this.randomDay();
        this.person.month = this.randomMonth();
        this.person.year = this.randomYear();
        return this.person;
    },
};


