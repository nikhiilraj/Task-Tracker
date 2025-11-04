# Task Tracker CLI

A simple command-line to-do list application built with Node.js.  
Manage daily tasks directly from your terminal — add, list, and remove tasks easily.

---

## 🚀 Features
- Add new tasks via CLI commands  
- View all existing tasks in a formatted list  
- Remove tasks by ID  
- Persistent storage using a JSON file  
- Lightweight and fast (no external database)  
- Optional colorized output using Chalk  

---

## 🎯 Why I Built This
- To understand **Node.js fundamentals** and its runtime  
- To learn how to work with **file systems (fs)** and **JSON data persistence**  
- To practice **modular code structure** and separation of concerns  
- To get comfortable with **command-line argument handling**  

---

## 🧰 Tech Stack

| Technology | Purpose |
|-------------|----------|
| Node.js | JavaScript runtime environment |
| JavaScript (ES6) | Core language features and logic |
| File System (fs) | Reading and writing JSON data |
| Path Module | File path management |
| Chalk | Terminal color formatting (optional) |

---

## ⚙️ How to Run It

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd task-tracker

# 2. Install dependencies
npm install

# 3. Run commands
node app.js add "Go to gym"
node app.js list
node app.js remove 2
