// function sum(color){
//     const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//     // for (let i = 0; i < colors.length; i++) {
//     //     let a = document.getElementById("text1");
//     //     a.style.color = colors[i];
//     function onclick=document.getElementById('text1').style.color = '0';
//
//     }
// }


//
// const names = [
//     {
//         name: 'Hotel Leopold',
//         city: 'Saint Petersburg',
//         country: 'Russia',
//     },
//     {
//         name: 'Apartment Sunshine',
//         city: 'Santa Cruz de Tenerife',
//         country: 'Spain',
//     },
//     {
//         name: 'Villa Kunerad',
//         city: 'Vysokie Tatry',
//         country: 'Slowakia',
//     },
//     {
//         name: 'Hostel Friendship',
//         city: 'Berlin',
//         country: 'Germany',
//     },
//     {
//         name: 'Radisson Blu Hotel',
//         city: 'Kyiv',
//         country: 'Ukraine',
//     },
//     {
//         name: 'Paradise Hotel',
//         city: 'Guadalupe',
//         country: 'Mexico',
//     },
//     {
//         name: 'Hotel Grindewald',
//         city: 'Interlaken',
//         country: 'Switzerland',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Virgin Hotel',
//         city: 'Chicago',
//         country: 'USA',
//     },
//     {
//         name: 'Grand Beach Resort',
//         city: 'Dubai',
//         country: 'United Arab Emirates',
//     },
//     {
//         name: 'Shilla Stay',
//         city: 'Seoul',
//         country: 'South Korea',
//     },
//     {
//         name: 'San Firenze Suites',
//         city: 'Florence',
//         country: 'Italy',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Black Penny Villas',
//         city: 'BTDC, Nuca Dua',
//         country: 'Indonesia',
//     },
//     {
//         name: 'Koko Hotel',
//         city: 'Tokyo',
//         country: 'Japan',
//     },
//     {
//         name: 'Ramada Plaza',
//         city: 'Istanbul',
//         country: 'Turkey',
//     },
//     {
//         name: 'Waikiki Resort Hotel',
//         city: 'Hawaii',
//         country: 'USA',
//     },
//     {
//         name: 'Puro Hotel',
//         city: 'Krakow',
//         country: 'Poland',
//     },
//     {
//         name: 'Asma Suites',
//         city: 'Santorini',
//         country: 'Greece',
//     },
//     {
//         name: 'Cityden Apartments',
//         city: 'Amsterdam',
//         country: 'Netherlands',
//     },
//     {
//         name: 'Mandarin Oriental',
//         city: 'Miami',
//         country: 'USA',
//     },
//     {
//         name: 'Concept Terrace Hotel',
//         city: 'Rome',
//         country: 'Italy',
//     },
//     {
//         name: 'Ponta Mar Hotel',
//         city: 'Fortaleza',
//         country: 'Brazil',
//     },
//     {
//         name: 'Four Seasons Hotel',
//         city: 'Sydney',
//         country: 'Australia',
//     },
//     {
//         name: 'Le Meridien',
//         city: 'Nice',
//         country: 'France',
//     },
//     {
//         name: 'Apart Neptun',
//         city: 'Gdansk',
//         country: 'Poland',
//     },
//     {
//         name: 'Lux Isla',
//         city: 'Ibiza',
//         country: 'Spain',
//     },
//     {
//         name: 'Nox Hostel',
//         city: 'London',
//         country: 'UK',
//     },
//     {
//         name: 'Leonardo Vienna',
//         city: 'Vienna',
//         country: 'Austria',
//     },
//     {
//         name: 'Adagio Aparthotel',
//         city: 'Edinburgh',
//         country: 'UK',
//     },
//     {
//         name: 'Steigenberger Hotel',
//         city: 'Hamburg',
//         country: 'Germany',
//     },
// ];
//
//
// const searchArg='name'
// function dataTransformer (searchArg){
//
//     return names.map(i=>`${i.country},${i.city},${i.name}`)
// }
//
// console.log(dataTransformer(names))
//



//
// function palindrome(str) {
//     let check = '';
//
//
//
//
// function palindrome(str) {
//     return str.split('').reverse().join('') == str;
// }
//
// console.log(palindrome('20'));
//
//
// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//     greeting = "Good morning";
// } else if (time < 20) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// document.getElementById("demo").innerHTML = greeting;






//
// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//        greeting = "Good morning";
// }    else if ( time < 20) {
//     greeting = " Nice day";
// }    else if ( time < 24) {
//     greeting = "Late day";
// }     else {
//     greeting = "Good evening"
// }
// console.log(greeting , time)
    // чтобы вывести 2 перем то между ними , !!!!



// const a = 10;
// const b = 7;
// let c = (a * b)+b + a;
// console.log(c)

let studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    }
];

class User {
    constructor(firstName , lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = fullName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(studentsData.fullName);





// class Student {
//     constructor (admissionYear , courseName , );
//     course (getter, current year - admission year);
//
// }

// function getInfo ${fullName};
// console.log(fullName);
// const students = new Students(studentsData);
// console.log(students.getInfo());


// class Student {
//     constructor(admissionYear , courseName) {
//         this.admissionYear = '2021';
//         this.courseName = 'courseName';
//     }
// }
//
// return (${fullName} - ${courseName}, ${course})



// let user = {
//     name: "John",
//     surname: "Smith",
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };
//
// console.log(user.fullName);
