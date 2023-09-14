// Знаходимо усі елементи з класом item
const quantityCategories = document.querySelectorAll('.item');
// Виводиму у консоль 
console.log(`Number of categories: ${quantityCategories.length}`);
quantityCategories.forEach((category) => {
    const titleCategory = category.querySelector("h2").textContent;
    console.log(`Category: ${titleCategory}`);
    const elementsCategory = category.querySelectorAll("li");
    console.log(`Elements: ${elementsCategory.length}`);
})
