🔥 Challenges Faced
1️⃣ Permission Issues with npm
Encountered EACCES (permission denied) errors when installing global packages.

Solved by changing ownership of the .npm folder:
sudo chown -R $(whoami):$(id -g) ~/.npm

2️⃣ Tailwind Command Not Found (npx tailwindcss init -p Removed)
Tailwind v4 removed the init command, causing confusion.

Fixed by manually creating tailwind.config.js.

3️⃣ npm Cache Errors (EEXIST, EACCESS, mkdir Issues)
Faced npm cache issues when installing packages.

Fixed by cleaning the cache:
npm cache clean --force

4️⃣ Wrong Path for Tailwind CSS Content
Initially, Tailwind styles were not applied.

Fixed by ensuring content paths in tailwind.config.js included all src files.

🎯 Final Thoughts
Setting up React with Tailwind CSS required overcoming several installation and configuration issues, mostly due to npm permissions, Tailwind v4 changes, and Vite-specific setup.

## Why Are Components Important in React?

1. **Reusability**  
   - Components allow us to **reuse** code throughout the application, reducing duplication.  

2. **Modularity**  
   - Each component handles a **specific part** of the UI, making the code more structured and easier to maintain.  

3. **Props for Dynamic Content**  
   - Props allow components to **receive data dynamically**, making them more flexible.  
   - Example: In `HelloWorld.js`, we passed `name="Focus Bear"` to display a personalized message.

4. **Easier Debugging**  
   - Breaking UI into small components makes debugging simpler compared to a large monolithic file.
   
   # Handling State & User Input

## What happens if we modify state directly instead of using setState?

In React, **state should always be updated using the `setState` function** (e.g., `setCount(value)`). 

If we modify the state directly (`count = count + 1`), **React will not detect the change** and **the component will not re-render**, meaning the UI won't update. 

Using `useState`, React ensures:
1. The component re-renders when the state changes.
2. The new state value is correctly scheduled and applied.
3. The UI remains in sync with the state.

By always using `setState`, we prevent UI bugs and ensure React optimally updates the DOM.

# Working with Lists & User Input
## Reflection
What are some common issues when working with lists in React?

 - Key Prop Missing: When rendering lists, it's essential to provide a unique key prop to each element. This helps React identify which items have changed, been added, or removed, improving performance and reducing bugs.

 - State Mutability: Modifying the state directly (e.g., using list.push(item)) is not recommended. You should always return a new array by using spread syntax or methods like .concat() to ensure React recognizes the change and re-renders the component.

 - Re-rendering performance: If the list is large, frequent updates (such as adding or removing items) could impact performance. You can optimize it by using techniques like memoization or lazy loading.