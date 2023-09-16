/* Prompt GPT to fix the errors:  

- Run the function. Copy and paste the error message into ChatGPT 
along with the function 
- Ask the AI to explain the errors as code comments. 
*/ 

function createCard(parentId, cardId, cardClass, title, content) {
    // Error: The following line tries to access the 'getElementById' function but doesn't call it
    //let parentElement = document.getElementById;
    let parentElement = document.getElementById(parentId); 

    let card = document.createElement('div');
    card.setAttribute('id', cardId);
    card.setAttribute('class', cardClass);

    let cardTitle = document.createElement('h2');
    cardTitle.innerText = title;
    card.appendChild(cardTitle);

    let cardContent = document.createElement('p');
    cardContent.innerText = content;

    // Error: This line should assign the 'cardContent' element to the 'card' variable, but it's incorrectly assigning 'cardContent' to itself
    //card = cardContent;
    card.appendChild(cardContent);

    // Error: Since 'parentElement' is a function reference and not an element, calling 'appendChild' on it will result in this error
    //let parentElement = document.getElementById(parentId) will fix this err. 
    parentElement.appendChild(card);
}


createCard('blogPreviews', 'post1', 'card', 'How to Bake Sourdough', 'A step-by-step guide to baking your own sourdough bread at home. Learn how to create your own starter, knead the dough, and bake to perfection.');

createCard('blogPreviews', 'post2', 'card', 'Gardening 101', 'Discover the joy of gardening with our easy beginner\'s guide. Learn everything from choosing the right plants, preparing the soil, to maintaining your garden.');