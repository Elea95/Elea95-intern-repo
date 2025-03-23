# Clean Code Principles

## 1. Simplicity

- Keep code as simple as possible.
- Avoid unnecessary complexity and over-engineering.
- **Example:** Use straightforward logic instead of excessive abstractions.

## 2. Readability

- Code should be easy to read and understand.
- Use meaningful variable and function names.
- Break down complex logic into smaller functions.
- **Example:** Avoid cryptic variable names like `a, b, c` – use `userAge, totalAmount`.

## 3. Maintainability

- Write code that can be easily modified and extended.
- Use modular functions and reusable components.
- Avoid hardcoding values – use constants or configuration files.
- **Example:** A well-structured function is easier to debug and update.

## 4. Consistency

- Follow a standardized coding style (e.g., camelCase, PascalCase).
- Use consistent indentation, spacing, and formatting.
- Adhere to team or project style guides.
- **Example:** If functions are named `getUserData()`, `fetchUserDetails()`, don’t name another function `retrieve_info()`.

## 5. Efficiency

- Write optimized code but avoid premature optimization.
- Use efficient algorithms and data structures.
- Reduce redundant calculations and unnecessary computations.
- **Example:** Instead of recalculating values in a loop, store results in a variable.

---

## **Messy Code vs. Clean Code Example**

### ❌ **Messy Code**

```python
def calc(x,y,z):
    if x > 10:
        if y < 5:
            return x*y*z
    if y > 10:
        for i in range(0, len(z)):
            print(z[i])
    return x+y
```

### ❌ **Clean Code**

```python
def calculate_product_or_sum(num1: int, num2: int, values: list):
    """
    Computes product if num1 > 10 and num2 < 5,
    Prints list elements if num2 > 10,
    Otherwise returns sum of num1 and num2.
    """
    if num1 > 10 and num2 < 5:
        return num1 * num2 * len(values)

    if num2 > 10:
        for value in values:
            print(value)

    return num1 + num2
```

## Key Improvements:

- Descriptive function name (calculate_product_or_sum)
- Clear docstring explaining functionality
- Meaningful variable names (num1, num2, values)
- Simplified logic using and
- More readable loop (for value in values)

## Conclusion

Following Clean Code principles improves:

- ✅ Code quality
- ✅ Collaboration in teams
- ✅ Debugging and future maintenance
- ✅ Performance and efficiency

# **Code Formatting & Style Guides**

## **Why is Code Formatting Important?**

- Improves **readability** and collaboration.
- Ensures **consistency** in large projects.
- Makes debugging and reviewing code **easier**.
- Prevents potential **syntax errors**.

## **Airbnb JavaScript Style Guide**

- Enforces best practices for writing JavaScript.
- Encourages readable and maintainable code.
- Includes rules on indentation, spacing, variable naming, and function structure.

# **Clean Code: Naming Variables & Functions**

## **Best Practices for Naming Variables & Functions**  
1. **Use Descriptive Names** – A name should explain what the variable or function does.  
2. **Be Concise but Clear** – Avoid overly long names, but don’t sacrifice clarity.  
3. **Use Consistent Naming Conventions** – Follow camelCase (JavaScript) or snake_case (Python) based on project style.  
4. **Avoid Generic Names** – Names like `temp`, `data`, or `x` don’t provide context.  
5. **Use Verbs for Functions** – Functions should describe an action (e.g., `fetchUserData()`, `calculateTotal()`).  
6. **Boolean Variables Should Sound Like True/False** – Example: `isValid`, `hasPermission`, `isLoggedIn`.  
7. **Avoid Abbreviations** – `usr` is unclear, while `user` is readable.  
8. **Don’t Include Data Type in Names** – Instead of `userArray`, just use `users`.  

---

## **Example of Poorly Named Code**
```js
function d(u, p) {
  if (p > 18) {
    console.log("Allowed");
  } else {
    console.log("Denied");
  }
}
```
## **Issues:**
 - d() doesn’t describe what the function does.
 - u and p are unclear—what do they represent?

## **Refactored Code with Better Naming**
```js
function checkUserAccess(username, age) {
  if (age > 18) {
    console.log("Access Granted");
  } else {
    console.log("Access Denied");
  }
}
```
## **Improvements:**
 ✅ - checkUserAccess() clearly states its purpose.
 ✅ - username and age explain what the parameters represent.
 ✅ - Readability is improved, making it easier for other developers to understand.
## **Reflections**
What Makes a Good Variable or Function Name?
 - It clearly communicates intent.
 - It follows consistent naming conventions.
 - It makes the code self-explanatory.
What Issues Can Arise from Poorly Named Variables?
 - Other developers (or your future self) may struggle to understand the code.
 - Debugging becomes harder because the intent of variables is unclear.
 - It increases cognitive load, making the code harder to maintain.
How Did Refactoring Improve Code Readability?
 - Now, the function describes exactly what it does.
 - Variable names tell us what data they hold, reducing confusion.
 - The logic is easier to follow and maintain.

# **Clean Code: Writing Small, Focused Functions**

## **Best Practices for Writing Small Functions**  
1. **Single Responsibility** – Each function should do only one thing.  
2. **Keep Functions Short** – Ideally, under 20 lines of code.  
3. **Descriptive Function Names** – A function’s name should describe exactly what it does.  
4. **Avoid Deep Nesting** – Use early returns instead of multiple `if` statements.  
5. **Break Large Functions into Smaller Ones** – If a function does too much, split it.  
6. **Use Parameters Wisely** – Avoid passing too many arguments; prefer objects when needed.  
7. **Follow DRY (Don’t Repeat Yourself)** – Extract repeated logic into reusable functions.  

---

## **Example of a Long, Complex Function**
```js
function processOrder(order) {
  console.log("Processing order...");
  if (!order) {
    console.log("Invalid order");
    return;
  }
  
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  
  if (order.discount) {
    total -= total * (order.discount / 100);
  }
  
  console.log("Final total: $" + total);
  
  if (order.email) {
    console.log("Sending receipt to " + order.email);
  } else {
    console.log("No email provided.");
  }
}
```
## **Issues with this Code:**
 - Does too many things – Calculates total, applies discount, logs info, and handles emails.
 - Hard to test – No clear separation of concerns.
 - Not reusable – If we need to reuse discount logic elsewhere, we’d have to duplicate it.

## **Refactored Code with Smaller, Focused Functions**
```js
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyDiscount(total, discount) {
  return discount ? total - total * (discount / 100) : total;
}

function sendReceipt(email, total) {
  if (email) {
    console.log(`Sending receipt to ${email} for $${total}`);
  } else {
    console.log("No email provided.");
  }
}

function processOrder(order) {
  if (!order) {
    console.log("Invalid order");
    return;
  }

  console.log("Processing order...");
  let total = calculateTotal(order.items);
  total = applyDiscount(total, order.discount);
  console.log(`Final total: $${total}`);
  sendReceipt(order.email, total);
}
```
## **Improvements:**
✅ - Functions have clear responsibilities – One for total, one for discount, one for receipt.
✅ - Easier to test – Each function can be tested independently.
✅ - More readable and maintainable – Breaking it up makes it easier to understand.
✅ - Reusable – calculateTotal() and applyDiscount() can be used elsewhere.

## **Reflections**
Why is Breaking Down Functions Beneficial?
 - Improves readability by making code more understandable.
 - Increases maintainability—changes are easier to make without breaking unrelated logic.
 - Helps with reusability—small functions can be used in multiple places.
 - Makes testing easier—each function can be tested separately.
How Did Refactoring Improve the Structure of the Code?
 - Now, each function does only one thing.
 - The main processOrder() function is much cleaner and easier to follow.
 - The logic is now modular, making it reusable in different parts of the application.




## **Avoiding Code Duplication (DRY Principle)**

### **Understanding the DRY Principle**
**DRY (Don’t Repeat Yourself)** is a fundamental clean code principle that encourages reducing code duplication by using abstraction techniques such as functions, loops, and reusable components.

### **Why Avoid Code Duplication?**
- **Reduces maintenance effort** – Fixing bugs in one place is easier than fixing the same bug in multiple places.
- **Improves readability** – Code becomes more structured and understandable.
- **Enhances reusability** – Logic can be reused across different parts of the codebase.
- **Reduces the chance of errors** – Less duplication means fewer chances for inconsistencies.

---

## **Issues with Duplicated Code**
Before refactoring, the following code has repeated logic for calculating the total price in multiple places:

```js
function calculateOrderTotal(order) {
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  return total;
}

function processOrder(order) {
  console.log("Processing order...");
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  if (order.discount) {
    total -= total * (order.discount / 100);
  }
  console.log("Final total: $" + total);
}
```
### Problems with This Code
 - ❌ Repeated logic for calculating the total price in both calculateOrderTotal and processOrder.
 - ❌ Difficult maintenance – If we need to change how total is calculated, we must update multiple places.
 - ❌ Harder to debug – Bugs related to total calculations may occur in multiple places, making debugging complex.

### Refactored Code with Smaller, Focused Functions
Instead of repeating the total calculation logic, we move it into a separate function:
```js
function calculateTotal(items, discount = 0) {
  let total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return discount ? total - total * (discount / 100) : total;
}

function processOrder(order) {
  if (!order) {
    console.log("Invalid order");
    return;
  }

  console.log("Processing order...");
  let total = calculateTotal(order.items, order.discount);
  console.log(`Final total: $${total}`);
}
```
## Improvements
✅ Code is cleaner – The total calculation logic is handled by a single function (calculateTotal).
✅ Easier to update – Any change in calculation logic only needs to be made in one place.
✅ Increases reusability – calculateTotal can be used in multiple places without duplicating logic.
✅ Improves readability – The main processOrder function is now more focused and easier to understand.

## **Reflections**
**What were the issues with duplicated code?**

 - The same logic appeared in multiple functions, increasing maintenance effort.

 - If a bug occurred, fixing it required changing multiple parts of the code.

**How did refactoring improve maintainability?**

 - The logic is now centralized, meaning updates only need to be made once.

 - The code is more readable, easier to debug, and more reusable.

 - The application is now easier to scale with minimal modifications.

 ## **Refactoring Code for Simplicity**

### **Why Refactor for Simplicity?**
Code should be as simple as possible while maintaining functionality. Overly complex code can make it difficult to debug, maintain, and extend. Refactoring simplifies the code by removing unnecessary complexity.

### **Common Causes of Complex Code**
- ❌ **Unnecessary nested loops or conditionals**
- ❌ **Excessive abstraction (overuse of classes or patterns)**
- ❌ **Long functions that try to do too much**
- ❌ **Redundant variables and unnecessary steps**
- ❌ **Hard-to-read logic with multiple conditions**

---

## **Example of Overly Complicated Code**
Before refactoring, the following function is unnecessarily complex:

```js
function calculateFinalPrice(items, discount, taxRate) {
  let total = 0;
  let discountAmount = 0;
  let taxAmount = 0;

  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }

  if (discount > 0) {
    discountAmount = total * (discount / 100);
    total = total - discountAmount;
  }

  taxAmount = total * (taxRate / 100);
  total = total + taxAmount;

  return total;
}
```
## Problems with This Code
 - ❌ Too many variables – discountAmount and taxAmount are not necessary.
 - ❌ Unnecessary loops – for loop can be replaced with reduce().
 - ❌ Multiple steps for calculations – Can be simplified into fewer lines.
 - ❌ Not modular – Discount and tax calculations are tightly coupled inside the function.

## Refactored Code with Simpler Logic
Here’s the same function after refactoring:
```js
function calculateFinalPrice(items, discount = 0, taxRate = 0) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = total * (1 - discount / 100);
  return discountedTotal * (1 + taxRate / 100);
}
```
## Improvements
 - ✅ Fewer variables – Eliminates unnecessary temporary variables.
 - ✅ More readable – Uses reduce() to calculate total in a single step.
 - ✅ Better modularity – Each calculation step is clearly separated.
 - ✅ More efficient – Reduces the number of operations.

### Reflections
**What made the original code complex?**

 - It had too many unnecessary variables.

 - It used a loop when reduce() was more efficient.

 - The calculations were split into unnecessary steps, making it harder to read.

**How did refactoring improve it?**

 - The function is shorter and easier to understand.

 - It avoids redundant calculations and unnecessary variables.

 - It follows a clean, functional approach that improves maintainability.

 ## **Best Practices for Writing Comments and Documentation**

### **When to Use Comments?**
✅ **Explaining why** – When the reasoning behind a piece of code isn’t obvious.  
✅ **Clarifying complex logic** – When simplifying the code isn’t possible.  
✅ **Describing API behavior** – When documenting function parameters and return values.  
✅ **Adding TODOs and FIXMEs** – When indicating temporary workarounds or pending improvements.  

### **When to Avoid Comments?**
❌ **Obvious code** – If the code is self-explanatory, comments add clutter.  
❌ **Redundant comments** – Avoid repeating what the code already says.  
❌ **Instead of refactoring** – If a comment is required, consider rewriting the code for clarity.  
❌ **Outdated comments** – Wrong or outdated comments cause confusion rather than help.  

---

## **Example of Poorly Commented Code**
This function has unnecessary and unhelpful comments:  

```js
// This function calculates the total price of items
function totalPrice(items) {
  let sum = 0; // Initialize sum to zero
  for (let i = 0; i < items.length; i++) {
    sum += items[i].price * items[i].quantity; // Add the price * quantity to sum
  }
  return sum; // Return the final sum
}
```
## Problems with This Code:
 - ❌ Unnecessary comments – The code is self-explanatory.
 - ❌ Redundant explanations – The comments repeat what the code does instead of providing useful context.
 - ❌ No function documentation – There’s no description of parameters or return value.

## Improved Comments and Documentation
Here’s the same function with meaningful documentation:
```js
/**
 * Calculates the total price of all items in a cart.
 * 
 * @param {Array} items - List of objects containing price and quantity.
 * @returns {number} The total price of all items.
 */
function totalPrice(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
```
## Improvements
 - ✅ Removed unnecessary comments – The function is self-explanatory.
 - ✅ Added meaningful documentation – Describes the function’s behavior, parameters, and return value.
 - ✅ Simplified logic – Used reduce() for a cleaner approach.

## Reflections
**When should you add comments?**

 - When explaining why a decision was made, not just what the code does.

 - When providing documentation for APIs or functions used by others.

 - When describing complex algorithms that aren’t immediately clear.

**When should you avoid comments and instead improve the code?**

 - When the comment states the obvious (e.g., // Loop through array).

 - When the code can be refactored to be more self-explanatory.

 - When the comment is used as a crutch for poor naming or messy logic.

## **Handling Errors & Edge Cases**

### **Why Is Error Handling Important?**
✅ **Prevents crashes** – Proper error handling ensures the application doesn’t break unexpectedly.  
✅ **Improves user experience** – Users get meaningful feedback instead of cryptic error messages.  
✅ **Enhances maintainability** – Developers can quickly debug and fix issues.  
✅ **Protects against security vulnerabilities** – Helps prevent exploits due to unchecked inputs.  

---

## **Strategies for Handling Errors & Edge Cases**
1. **Use Guard Clauses** – Return early to avoid deeply nested logic.  
2. **Validate Inputs** – Ensure inputs meet expected criteria before processing.  
3. **Try-Catch Blocks** – Handle exceptions gracefully without crashing.  
4. **Default Fallbacks** – Provide default values when data is missing or incorrect.  
5. **Logging & Monitoring** – Capture errors for debugging and system monitoring.  

---

## **Example of Poor Error Handling**
### **Problematic Function**
The following function doesn’t handle invalid inputs properly:  

```js
function calculateDiscount(price, discount) {
  return price - (price * discount);
}

console.log(calculateDiscount(100, 0.2)); // ✅ Works
console.log(calculateDiscount(null, 0.2)); // ❌ NaN
console.log(calculateDiscount(100, "twenty")); // ❌ NaN
console.log(calculateDiscount()); // ❌ NaN
```
## Issues with This Code
 - ❌ No input validation – It assumes inputs are always correct.
 - ❌ Doesn’t handle missing or incorrect values – Causes NaN errors.
 - ❌ No safeguard against negative discounts or invalid price values.

## Improved Error Handling
**Refactored Code with Guard Clauses**
```js
/**
 * Calculates the discounted price of an item.
 *
 * @param {number} price - The original price of the item.
 * @param {number} discount - The discount percentage (e.g., 0.2 for 20%).
 * @returns {number} The final price after discount.
 * @throws {Error} If inputs are invalid.
 */
function calculateDiscount(price, discount) {
  if (typeof price !== "number" || typeof discount !== "number") {
    throw new Error("Invalid input: price and discount must be numbers.");
  }
  if (price < 0 || discount < 0 || discount > 1) {
    throw new Error("Invalid values: price must be positive, discount must be between 0 and 1.");
  }

  return price - price * discount;
}

// ✅ Properly handles errors
try {
  console.log(calculateDiscount(100, 0.2)); // 80
  console.log(calculateDiscount("100", 0.2)); // ❌ Throws an error
} catch (error) {
  console.error(error.message);
}
```
## Improvements
 - ✅ Added input validation – Ensures correct data types.
 - ✅ Guard clauses – Checks for invalid values upfront, preventing unnecessary execution.
 - ✅ Throws meaningful errors – Makes debugging easier.

## Reflections
**What was the issue with the original code?**

 - It didn’t validate inputs, leading to unexpected errors (NaN).

 - It didn’t prevent negative prices or discounts over 100%.

 - Missing values caused the function to break instead of failing gracefully.

**How does handling errors improve reliability?**

 - Prevents incorrect operations from propagating.

 - Provides clear feedback instead of silent failures.

 - Ensures the application doesn’t crash due to bad inputs.

## **Writing Unit Tests for Clean Code**

### **Why Are Unit Tests Important?**
✅ **Catch bugs early** – Detect issues before they reach production.  
✅ **Ensure correctness** – Verify functions behave as expected.  
✅ **Improve maintainability** – Helps prevent accidental breaking changes.  
✅ **Encourage better design** – Code that is easier to test is often cleaner.  
✅ **Support refactoring** – Provides confidence when modifying code.  

---

## Example Function Without Tests
Here’s a simple function that calculates the total price after tax:
```js
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}
```
This function seems straightforward, but does it handle edge cases?
 - What if price is negative?

 - What if taxRate is not a number?

 - What if no values are provided?

## Adding Unit Tests
**Jest Test Cases**
```js
const { calculateTotal } = require("./calculateTotal");

test("calculates total correctly with valid inputs", () => {
  expect(calculateTotal(100, 0.2)).toBe(120);
});

test("handles zero tax correctly", () => {
  expect(calculateTotal(100, 0)).toBe(100);
});

test("throws an error for negative prices", () => {
  expect(() => calculateTotal(-100, 0.2)).toThrow("Invalid price");
});

test("throws an error for invalid tax rates", () => {
  expect(() => calculateTotal(100, "tax")).toThrow("Invalid tax rate");
});
```
## Issues Found While Testing
🔴 Edge cases not handled – Negative prices should be prevented.
🔴 Invalid inputs not checked – The function assumed inputs were always correct.

**Refactored Function with Improved Validations**
```js
function calculateTotal(price, taxRate) {
  if (typeof price !== "number" || price < 0) {
    throw new Error("Invalid price");
  }
  if (typeof taxRate !== "number" || taxRate < 0 || taxRate > 1) {
    throw new Error("Invalid tax rate");
  }
  
  return price + price * taxRate;
}
```
✅ Now the function handles errors properly

## Reflections
**How do unit tests help keep code clean?**

 - Forces developers to think about edge cases.

 - Encourages writing functions with clear inputs/outputs.

 - Makes future refactoring safer and more confident.

**What issues did testing reveal?**

 - The original function lacked error handling.

 - Tests forced improvements in code quality.