# Identifying & Fixing Code Smells  

## 1️⃣ What Are Code Smells?  
Code smells are **indicators** of potential problems in code. They **don’t break functionality** but make the code harder to read, maintain, and scale.  

Below are common code smells and how to fix them.

---

## 2️⃣ Common Code Smells & Solutions  

### **🔴 1. Magic Numbers & Strings**  
❌ **Problem:** Hardcoded values make code unclear and hard to update.  
✔ **Solution:** Use named constants.  

#### **🚨 Bad Code Example**
```javascript
function calculateDiscount(price, type) {
    if (type === "STUDENT") return price * 0.85;
    if (type === "SENIOR") return price * 0.80;
    if (type === "MEMBER") return price * 0.90;
    return price;
}
```
#### **✅ Refactored Code**
```js
const DISCOUNTS = { STUDENT: 0.15, SENIOR: 0.20, MEMBER: 0.10 };

function calculateDiscount(price, type) {
    return price * (1 - (DISCOUNTS[type] || 0));
}
```
🟢 Fixes: Used a dictionary (DISCOUNTS) to avoid hardcoded values.
### **🔴 2. Long Functions**
❌ Problem: A function does too many things.
✔ Solution: Split into smaller, single-responsibility functions.
**🚨 Bad Code Example**
```js
function processOrder(order) {
    let total = 0;
    for (let item of order.items) {
        total += item.price * item.quantity;
    }
    console.log(`Total: ${total}`);
    if (order.paymentMethod === "CARD") {
        console.log("Processing card payment...");
    } else {
        console.log("Processing cash payment...");
    }
}
```
✅ Refactored Code
```js
function calculateTotal(order) {
    return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function processPayment(paymentMethod) {
    console.log(`Processing ${paymentMethod.toLowerCase()} payment...`);
}

function processOrder(order) {
    const total = calculateTotal(order);
    console.log(`Total: ${total}`);
    processPayment(order.paymentMethod);
}
```
🟢 Fixes: Broke down a single long function into multiple smaller ones.

### **🔴 3. Duplicate Code**
 ❌ **Problem:** Copy-pasting logic instead of reusing functions.
 ✔ **Solution:** Extract reusable functions.

 **🚨 Bad Code Example**
 ```js
 function getStudentDiscount(price) {
    return price * 0.85;
}

function getSeniorDiscount(price) {
    return price * 0.80;
}

function getMemberDiscount(price) {
    return price * 0.90;
}
```
✅ Refactored Code
```js
const DISCOUNTS = { STUDENT: 0.15, SENIOR: 0.20, MEMBER: 0.10 };

function applyDiscount(price, type) {
    return price * (1 - (DISCOUNTS[type] || 0));
}
```
🟢 Fixes: One function now handles all cases.

### **🔴 4. Large Classes (God Objects)**
❌ **Problem:** A single class handles too many responsibilities.
✔ **Solution:** Split responsibilities into multiple classes.

**🚨 Bad Code Example**
```js
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    sendEmail(message) {
        console.log(`Sending email to ${this.email}: ${message}`);
    }
    saveToDatabase() {
        console.log(`Saving user ${this.name} to database`);
    }
}
```
✅ Refactored Code
```js
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class EmailService {
    static sendEmail(user, message) {
        console.log(`Sending email to ${user.email}: ${message}`);
    }
}

class DatabaseService {
    static saveUser(user) {
        console.log(`Saving user ${user.name} to database`);
    }
}
```
🟢 Fixes: Separated User, EmailService, and DatabaseService.

### **🔴 5. Deeply Nested Conditionals**
❌ **Problem:** Too many if-else statements make code unreadable.
✔ **Solution:** Use guard clauses and switch statements.

**🚨 Bad Code Example**
```js
function getUserType(user) {
    if (user.role === "ADMIN") {
        return "Administrator";
    } else {
        if (user.role === "EDITOR") {
            return "Editor";
        } else {
            if (user.role === "VIEWER") {
                return "Viewer";
            } else {
                return "Unknown";
            }
        }
    }
}
```
✅ Refactored Code
```js
function getUserType(user) {
    const roles = { ADMIN: "Administrator", EDITOR: "Editor", VIEWER: "Viewer" };
    return roles[user.role] || "Unknown";
}
```
🟢 Fixes: Used lookup table instead of deep conditionals.

### **🔴 6. Commented-Out Code**
❌ **Problem:** Old, unused code clutters the codebase.
✔ **Solution:** Delete it! (Version control keeps history.)

**🚨 Bad Code Example**
```js
function fetchData() {
    // old API call
    // fetch("https://old-api.com/data").then((res) => res.json());

    return fetch("https://new-api.com/data").then((res) => res.json());
}
```
✅ Refactored Code
```js
function fetchData() {
    return fetch("https://new-api.com/data").then((res) => res.json());
}
```
🟢 Fixes: Removed commented-out code.

### **🔴 7. Inconsistent Naming**
❌ **Problem:** Variables don’t clearly describe what they store.
✔ **Solution:** Use meaningful names.

**🚨 Bad Code Example**
```js
let x = 1200;  // What is x?
let y = "John"; // What is y?
```
✅ Refactored Code
```js
let monthlySalary = 1200;
let employeeName = "John";
```
🟢 Fixes: Used descriptive names.

## **Benefits of Refactoring Code Smells**
✅ Improves Readability – Easy to understand at first glance.

✅ Enhances Maintainability – Easier to update or debug.

✅ Boosts Performance – Reduces unnecessary calculations.

✅ Prevents Bugs – Less error-prone logic.

