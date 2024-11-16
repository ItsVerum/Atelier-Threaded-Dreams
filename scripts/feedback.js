// Клас для опису користувачів
class User {
    constructor(lastName, firstName, age, email, purpose, date, time) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.email = email;
        this.purpose = purpose;
        this.date = new Date(date);
        this.time = time;
    }
}

// Масив з 10 записами
const users = [
    new User("Сміт", "Джон", 25, "john@example.com", "Інформація", "2024-11-01", "10:00"),
    new User("Доу", "Джейн", 30, "jane@example.com", "Підтримка", "2024-11-10", "15:00"),
    new User("Браун", "Майкл", 35, "michael@example.com", "Зворотній зв'язок", "2024-10-01", "12:30"),
    new User("Тейлор", "Джессіка", 20, "jessica@example.com", "Питання", "2024-09-15", "09:45"),
    new User("Джонсон", "Емілі", 40, "emily@example.com", "Довідка", "2024-11-12", "10:00"),
    new User("Вайт", "Деніел", 65, "daniel@example.com", "Підтримка", "2024-08-08", "14:00"),
    new User("Кларк", "Софія", 28, "sophia@example.com", "Запит", "2024-07-20", "16:15"),
    new User("Кінг", "Джеймс", 18, "james@example.com", "Інформація", "2024-11-01", "09:30"),
    new User("Лі", "Ітан", 33, "ethan@example.com", "Зворотній зв'язок", "2024-06-11", "13:45"),
    new User("Адамс", "Міа", 22, "mia@example.com", "Питання", "2024-10-05", "10:30"),
];

// Функція для фільтрації користувачів за місяцем та часом
function filterByMonthAndTime(users, month, time) {
    // Фільтруємо користувачів, які звернулися у вказаний місяць і час
    const filteredUsers = users.filter(user => {
        const userMonth = user.date.getMonth() + 1; // Отримуємо місяць звернення (+1, бо місяці починаються з 0)
        return userMonth === month && user.time === time;
    });

    // Виводимо результат: повідомлення, якщо користувачів немає, або їх список
    if (filteredUsers.length === 0) {
        console.log(`1. Немає користувачів, які звернулися у ${month}-й місяць о ${time}.`);
    } else {
        console.log(`1. Користувачі, які звернулися у ${month}-й місяць о ${time}:`);
        // Виводимо інформацію про кожного користувача
        filteredUsers.forEach((user, index) => {
            console.log(`   ${index + 1}. ${user.firstName} ${user.lastName}`);
            console.log(`       Email: ${user.email}`);
            console.log(`       Мета: ${user.purpose}`);
            console.log(`       Дата: ${user.date.toLocaleDateString()} о ${user.time}`);
        });
    }
}

// Функція для знаходження користувача з мінімальним віком
function findYoungestUser(users) {
    let youngestUser = users[0]; // Початкове значення — перший користувач

    // Перебираємо всіх користувачів і шукаємо того, хто має найменший вік
    users.forEach(user => {
        if (user.age < youngestUser.age) {
            youngestUser = user;
        }
    });

    // Виведення результату у читабельному форматі
    console.log("\n\n2. Користувач із мінімальним віком:");
    console.log(`       Ім'я: ${youngestUser.firstName} ${youngestUser.lastName}`);
    console.log(`       Вік: ${youngestUser.age}`);
    console.log(`       Email: ${youngestUser.email}`);
    console.log(`       Дата звернення: ${youngestUser.date.toLocaleDateString()} о ${youngestUser.time}`);
}

// Функція для класифікації користувачів за віком
function classifyByAge(users) {
    // Створюємо три групи: молодь, середній вік і похилий вік
    const ageClasses = {
        youth: users.filter(user => user.age < 25),
        middle: users.filter(user => user.age >= 25 && user.age <= 60),
        senior: users.filter(user => user.age > 60),
    };

    // Виведення кількості користувачів у кожному класі
    console.log("\n\n3. Кількість користувачів за віковими класами:");
    console.log(`       Молодь (до 25 років): ${ageClasses.youth.length}`);
    console.log(`       Середній вік (25–60 років): ${ageClasses.middle.length}`);
    console.log(`       Похилий вік (більше 60 років): ${ageClasses.senior.length}`);

    // Виведення користувачів кожного класу (додатково для зручності)
    console.log("\n\n   • Користувачі у класі 'Молодь':");
    ageClasses.youth.forEach(user => console.log(`      ${user.firstName} ${user.lastName}, ${user.age} років`));

    console.log("\n\n   • Користувачі у класі 'Середній':");
    ageClasses.middle.forEach(user => console.log(`      ${user.firstName} ${user.lastName}, ${user.age} років`));

    console.log("\n\n   • Користувачі у класі 'Похилий':");
    ageClasses.senior.forEach(user => console.log(`      ${user.firstName} ${user.lastName}, ${user.age} років`));

}

// Функція для сортування користувачів за email
function sortByEmail(users) {
    const sortedUsers = users.sort((a, b) => a.email.localeCompare(b.email));
    
    console.log("\n\n4. Сортування користувачів за E-mail:");
    sortedUsers.forEach(user => console.log(`   ${user.firstName} ${user.lastName}, email: ${user.email}, мета: ${user.purpose}`));
}

// Тестування
filterByMonthAndTime(users, 11, "10:00");
findYoungestUser(users);
classifyByAge(users);
sortByEmail(users);
