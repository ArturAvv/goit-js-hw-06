const itemsCount = document.querySelectorAll('.item');
console.log('Number of categories:', itemsCount.length);
itemsCount.forEach(item => {
    const categoryCount = item.querySelector('h2');
    console.log('Category:', categoryCount.textContent);
    const categoryElem = item.querySelectorAll('li');
    console.log('Elements:', categoryElem.length)
})