## Toast Notification App
Simple toast notification app for Design Engineer Technical Challenge

---

## Running 
To run the ToastNotificationApp:

1. Clone the repo
<pre> git clone git@github.com:dnallen1/ToastNotificationApp.git </pre>

2. Load the home.html file inside your browser


---
## Project Structure
```
ToastNotificationApp/
├── assets/                 # Functionality, styling, static images
│   ├── images/             # Icons and SVGs used in the app
│   ├── javascript/         # JavaScript files (toast logic)
│   └── stylesheets/        # CSS files for layout and design
├── home.html               # Main html page and entry point
├── README.md   
```
- The javascript files are organized into pages and components. Any javascript functions that would be triggered for a view would be placed into the respecitve views .js page.

---

## UI design Choices

- Since MindfulChef already has specific branding, I choose the same colors as the https://www.mindfulchef.com/ webpage. 
- I add a gradient div to break up the white/cream color and add some depth to the site.
- I used tile buttons throughout to showcase grouping and easy scanning of the different functions. It also invites the user
to explore the site.
- I put some icons throughout the site. For a public facing site, using proper images are more engaging. However, for a user dashboard, where the purpose is more functional, I would use icons to make actions easy to identify and navigate as well as to help breakup text.
- I used the traditional button styling for the direct "action" buttons.
- I added in the "Undo Toast" functionality. Hypothetically if it's a user dashboard and it's an important notication that pops
up, the user might miss it. The undo functionality would help circumvent this. 
- For the toast messages, I colored each type of toast to make it obvious without reading the message what type of notification it would be. 

---

## Issues
1. Bug: I noticed that when you use the showToastUndo(), if you undo a dismissed toast, the order of the toasts get moved around. The transition when showing/removing this toast is a bit clunky.
2. Bug: The "full-width-container" section has very funky formatting when the screen size gets very small. 
3. For the svg icons placed inside the toast message, they all have inline styling which is not the best option. Everytime you want to adjust it, you need to find all occurances. It would be better to move the styling out of inline.

---

## Improvements 
1. The main improvement would be refactoring the code. With the styling scripts, I built each container individually which leads to replicated styling code. 
2. The Javascript files are essentailly do the same task with a slight variation. I would also refactor these so all the replicated code would be pulled out and you would only have one toast.js file. I would also have the home.js file import the toast javascript functions.
3. On the UI, I would add some buttons to the navigation bar so it is not an empty purple bar at the top of the screen. 
4. This was only tested on 1 type of browser. I would have to test for cross browser compatibility.
5. The styling also does not account very well for changing screen sizes. The screen styling would have to be updated to accomodate this. 
6. You could perhaps also have a user save a toast message so it stays on the top of their page until they remove. This would be useful if it is a reminder toast message. 

---
