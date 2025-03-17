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
