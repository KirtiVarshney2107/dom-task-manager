DOM Explorer: Interactive Task Manager

A fully interactive Task Manager built using HTML, CSS, and Vanilla JavaScript. 
This project demonstrates core DOM concepts and event handling.

Features:
- Add Task
- Delete Task
- Edit Task
- Complete/Undo Task
- Dark/Light Theme Toggle
- Event Propagation Demo

Parsing :
When the browser receives an HTML file, it reads it line by line. This process of reading and understanding HTML is called Parsing.
Tokenization :
During parsing, the browser breaks HTML into small pieces like <div>, <h1> etc. These small pieces are called Tokens.
DOM Tree:
All HTML elements are organized in a tree structure called the DOM Tree. Every element has a Parent, Child, and Sibling relationship with other elements.
CSSOM Tree:
Just like DOM, CSS also creates its own tree called the CSSOM Tree. It stores the styling information of every element.
Render Tree:
When DOM Tree and CSSOM Tree combine together, they form the Render Tree. This is what actually gets displayed on the screen.
Event Bubbling:
When you click on a child element, the event travels upward toward the parent — this is called Bubbling.
Button → Child → Parent → Document
Event Capturing:
Opposite of Bubbling — the event travels from top to bottom.
Document → Parent → Child → Button
Event Delegation:
Instead of adding separate event listeners to every element, we attach one single listener to the parent — this is called Event Delegation.
