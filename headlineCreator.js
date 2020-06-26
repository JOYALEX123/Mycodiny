//headlineCreator.js
window.helineCreator = (function() {
    function createHeadline(text,parentElementselector = '#root') {
        const parentElement = document.querySelector(parentElementSelector);

        if (!text) {
            throw new Error('You forgot to pass the "text" parameter')
}
 if (!parentElement) {
     throw new Error(
         'There was no node found for the selector: "${parentElementSelector}"'
     );
 }
 const headlineToInsert = document.createElement('h1');
 headlineToInsert.innerText = text;
 parentElement.appendChild(headlineToInsert);

 return headlineToInsert;
    }

    return {
        createHeadline: createHeadline
    };
})();