### Instructions

Make the grocery list app JavaScript-y!

We have provided a starting point for you. Retrieve it and start the Sinatra server with the following commands:

```
et get grocery-list-ajax
cd grocery-list-ajax
ruby server.rb
```

Modify the code in `public\app.js` to satisfy the following requirements.

### Requirements necessary to Meet Expectations

* If the form for a new grocery item is blank when submitting, the user gets an alert message.
* If the form is not empty, prevent the default action from happening, and post the new grocery item via the AJAX function provided. Your `grocery_list.txt` will contain the new item if posted correctly.
* Upon successful posting of data, update the unordered list with the new grocery item. The list should be updated without having to reload the page.

### Tips

* The only file you will need to modify is `public/app.js` to fulfill these requirements.
* Follow the steps provided in the `public/app.js` file, in order.
* Use the provided HTML elements, `id` and `class` attributes to select DOM elements.
* Use the Chrome JavaScript console (`Command + Option + i`) to try out code, as well as to look for JavaScript error messages.
* **DO NOT** start the requirements necessary to Exceed Expectations until you have completed the requirements necessary to Meet Expectations.

### Requirements necessary to Exceed Expectations
As a Grocery List Creator, I want to delete an item from my list by clicking on it.

Without having to reload the page, your app must satisfy the following requirements:
* When a user clicks on a list item, it should trigger an event listener.
* Clicking on a list item must send an AJAX `DELETE` request to `/groceries`.
* Clicking on a list item must delete the respective item in the `grocery_list.txt` file. You may add code the the `server.rb` file, but do not modify the code we have provided you.
* Upon a successful AJAX request, the clicked item should be removed from the page.
