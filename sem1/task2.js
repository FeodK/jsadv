const chefs = {
    Viktor: "Пицца",
    Olga: "Суши",
    Dmitry: "Десерты"
};

const dishes = new Map([
    ["Маргарита", "Viktor"],
    ["Пепперони", "Viktor"],
    ["Филадельфия", "Olga"],
    ["Калифорния", "Olga"],
    ["Тирамису", "Dmitry"],
    ["Чизкейк", "Dmitry"]
]);

const orders = new Map();

orders.set({ name: "Алексей" }, ["Пепперони", "Тирамису"]);
orders.set({ name: "Мария" }, ["Калифорния", "Маргарита"]);
orders.set({ name: "Ирина" }, ["Чизкейк"]);

for (const [client, orderedDishes] of orders) {
    const dishDetails = orderedDishes.map(dish => {
        const chef = dishes.get(dish);
        return `${dish} (повар: ${chef})`;
    }).join(", ");
    console.log(`${client.name} заказал: ${dishDetails}`);
}
