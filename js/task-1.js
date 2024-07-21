const categories = document.querySelectorAll("#categories .item");
console.log('Number of categories:', categories.length);
categories.forEach(category => {
    const listTitle = category.querySelector("h2").textContent;
    const listItems = category.querySelectorAll("ul li").length;
    console.log('Category:', listTitle);
    console.log('Elements:', listItems);
    });