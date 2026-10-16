# Week 1 reflection
1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
Imperative UI means manually telling the browser how to create and update elements using DOM code. 
Declarative UI with React means describing what the UI should look like, and React handles the updates.

2. Why must a component name start with a capital letter?
A component name must start with a capital letter so React can distinguish custom components from built-in HTML elements. 
For example, Welcome is a React component, while div is an HTML element.

3. What does a fragment <>...</> do, and why not just use a <div>?
A fragment allows us to group multiple elements without adding an extra DOM element. It helps keep the HTML structure clean and avoids unnecessary <div> elements.

4. Name one benefit of splitting the UI into small components.
Splitting the UI into small components makes the code easier to read, maintain in different parts of the application.