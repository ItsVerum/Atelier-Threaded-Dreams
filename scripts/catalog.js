document.addEventListener("DOMContentLoaded", () => {
    const fabricTypesBtn = document.getElementById("fabric-types-btn");
    const fabricTypesMenu = document.getElementById("fabric-types-menu");

    // Масив доступних типів тканин
    const fabricTypes = ["Костюмна", "Льон", "Бавовна", "Поліестер", "Шовк"];

    // Додаємо типи тканин до підменю
    fabricTypes.forEach(type => {
        const listItem = document.createElement("li");
        listItem.textContent = type;
        fabricTypesMenu.appendChild(listItem);
    });

    // Показ/приховування підменю при натисканні кнопки
    fabricTypesBtn.addEventListener("click", () => {
        const isMenuVisible = fabricTypesMenu.style.display === "block";
        fabricTypesMenu.style.display = isMenuVisible ? "none" : "block";
    });

    // Приховуємо підменю при натисканні за межами кнопки
    document.addEventListener("click", (event) => {
        if (!fabricTypesBtn.contains(event.target) && !fabricTypesMenu.contains(event.target)) {
            fabricTypesMenu.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cardBacks = document.querySelectorAll(".flip-card-back");

    cardBacks.forEach(cardBack => {
        cardBack.addEventListener("mouseenter", () => {
            console.log("Навели на зворотню сторону картки!");
        });
    });
});







// Клас для опису товарів
class Product {
    constructor(id, name, fabricType, viewsDay1, viewsDay2, sewingDuration, cost) {
        this.id = id;
        this.name = name;
        this.fabricType = fabricType;
        this.viewsDay1 = viewsDay1;
        this.viewsDay2 = viewsDay2;
        this.sewingDuration = sewingDuration;
        this.cost = cost;
    }

    // Розрахунок середньої кількості переглядів на основі двох днів
    getAverageViews() {
        return (this.viewsDay1 + this.viewsDay2) / 2;
    }
}

// Масив із 10 товарами
const products = [
    new Product(1, "Сукня", "Костюмна", 120, 150, 3, 1200),
    new Product(2, "Костюм", "Костюмна", 200, 250, 5, 2500),
    new Product(3, "Футболка", "Бавовна", 300, 350, 2, 350),
    new Product(4, "Джинси", "Денім", 180, 220, 4, 650),
    new Product(5, "Светр", "Вовна", 250, 300, 5, 800),
    new Product(6, "Шорти", "Бавовна", 100, 130, 2, 300),
    new Product(7, "Сорочка", "Шовк", 150, 200, 3, 400),
    new Product(8, "Куртка", "Поліестер", 300, 400, 7, 1200),
    new Product(9, "Спідниця", "Льон", 90, 140, 3, 450),
    new Product(10, "Блузка", "Льон", 120, 180, 4, 500),
];

// Завдання 1: Впорядкування товарів за терміном пошиття та обчислення середньої кількості переглядів
function sortAndDisplayProducts(products) {
    // Сортуємо товари за терміном пошиття
    const sortedProducts = products.slice().sort((a, b) => a.sewingDuration - b.sewingDuration);

    // Виводимо результат у консоль
    console.log("1. Список товарів у відсортованому порядку:");
    sortedProducts.forEach((product) => {
        const averageViews = product.getAverageViews();
        console.log(
            `   ${product.id}. ${product.name}; Термін пошиття: ${product.sewingDuration}; Середня кількість переглядів: ${averageViews}`
        );
    });
}

// Завдання 2: Знаходження товару з максимальними viewsDay2
function findMaxViewsDay2(products) {
    let maxProduct = products[0];

    // Перебираємо товари, щоб знайти товар із найбільшим значенням viewsDay2
    products.forEach(product => {
        if (product.viewsDay2 > maxProduct.viewsDay2) {
            maxProduct = product;
        }
    });

    console.log(`2. Товар з максимальними переглядами:\n   Назва: ${maxProduct.name}\n   Тип тканини: ${maxProduct.fabricType}`)
}

// Завдання 3: Додавання нового товару
function addProduct(products, newProduct) {
    if (!newProduct.id || !newProduct.name || !newProduct.fabricType || !newProduct.viewsDay1 || !newProduct.viewsDay2 || !newProduct.sewingDuration || !newProduct.cost) {
        products.push(newProduct); // Додаємо в кінець, якщо дані неповні
    } else {
        // Сортуємо товари за зростанням вартості
        products.sort((a, b) => a.cost - b.cost);
        // Шукаємо позицію для вставки нового товару
        const index = products.findIndex(product => product.cost > newProduct.cost);
        if (index === -1) {
            products.push(newProduct); // Додаємо в кінець, якщо товар найдорожчий
        } else {
            products.splice(index, 0, newProduct); // Вставляємо у відповідну позицію
        }
    }

    // Виводимо усі товари, після додавання нового товару
    products.forEach((product) => {
        console.log(
            `   ${product.id}. ${product.name}; Вартість пошиття: ${product.cost}`
        );
    });
}

// Завдання 4: Обчислення загальної тривалості пошиття
function calculateTotalDuration(products, fabricType) {
    // Фільтруємо товари за заданим типом тканини
    const relevantProducts = products.filter(product => product.fabricType === fabricType);
    const count = relevantProducts.length;
    // Розраховуємо загальну тривалість залежно від кількості товарів
    if (count === 1) {
        return relevantProducts[0].sewingDuration; // Для одного товару — звичайна тривалість
    } else if (count <= 3) {
        // Якщо товарів до 3-х, множимо тривалість на 1.1
        return relevantProducts.reduce((total, product) => total + product.sewingDuration * 1.1, 0);
    } else {
        // Якщо більше 3-х, множимо тривалість на 2
        return relevantProducts.reduce((total, product) => total + product.sewingDuration * 2, 0);
    }
}

// Тестування
sortAndDisplayProducts(products);
findMaxViewsDay2(products);
console.log("3. Додаємо товар з неповними даними");
addProduct(products, new Product(11, "Пальто", "Кашемір", 0, 0, 6, 1500));
console.log("4. Додаємо товар з повними даними");
addProduct(products, new Product(12, "Шапка", "Кашемір", 56, 89, 1, 500));
console.log("5. Загальна тривалість пошиття для 'Бавовна':", calculateTotalDuration(products, "Бавовна"));
