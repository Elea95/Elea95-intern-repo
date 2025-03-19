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
