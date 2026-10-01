# 💰 BroBudget UI

> A modern personal finance and budgeting dashboard UI designed to make income, expenses, savings, transactions, and financial analytics easier to understand and manage.

## 👥 Team Information

**BroBudget Team**

### Team Members

* **Harsha Vardhan**
* **Madhu Sekhar**
* **Kundhana**

> Replace the placeholder team members with the actual names of your team members.

---

# 🎯 Selected UI Topic

## Personal Finance Dashboard / Budget Management UI

The selected UI pattern is a **Personal Finance Dashboard** that combines financial summaries, navigation, data visualization, transaction management, and goal tracking into a single structured interface.

The purpose of the project is to study existing financial dashboard patterns and develop an independent implementation with our own layout, styling, navigation structure, and interaction design.

The project is **not intended to copy any particular existing website**. Instead, commonly used patterns from modern finance and dashboard applications were studied and adapted into an original interface.

---

# 🔎 UI Pattern Research

## 1. What the UI Pattern Is

A **Personal Finance Dashboard** is a dashboard-based UI pattern that presents important financial information in a centralized workspace.

Instead of requiring users to navigate through multiple unrelated pages to understand their financial situation, the dashboard provides important information such as:

* Total balance
* Income
* Expenses
* Savings rate
* Recent transactions
* Balance trends
* Spending categories
* Financial analytics
* Savings goals

BroBudget uses a dashboard layout with a persistent sidebar, top navigation area, summary cards, charts, tables, and action buttons.

The dashboard follows a **card-based information architecture**, where related information is grouped into visually separated sections.

---

## 2. Where It Is Commonly Used

Personal finance dashboard patterns are commonly used in:

* Personal budgeting applications
* Expense tracking applications
* Banking applications
* FinTech platforms
* Investment dashboards
* Accounting software
* Business finance dashboards
* Savings applications
* Financial planning tools
* Subscription and spending management applications

Modern budgeting applications often use dashboards to provide users with a quick overview of their financial status.

Examples of common dashboard concepts include:

* Budget overview
* Income and expense tracking
* Spending analysis
* Financial charts
* Transaction history
* Savings goals
* Monthly reports

The BroBudget project follows this general dashboard pattern while implementing its own visual structure and interactions.

---

# 🌐 3. Why It Is Relevant to Modern Web Interfaces

Financial information can become difficult to understand when it is presented only through large tables or text.

Modern dashboards solve this problem by combining:

* Visual hierarchy
* Data visualization
* Cards
* Charts
* Tables
* Navigation
* Interactive forms
* Responsive layouts
* Clear call-to-action buttons

The dashboard approach allows users to understand important information quickly without reading large amounts of data.

For example, BroBudget presents:

**Total Balance → Income → Expenses → Savings Rate**

as separate KPI cards, allowing users to understand their financial position at a glance.

The interface also provides charts for financial trends and analytics, helping users interpret numerical information visually.

---

# 🎨 4. Design and Interaction Patterns Observed

During the study of modern dashboard interfaces, several common patterns were identified.

## A. Persistent Sidebar Navigation

A sidebar provides access to the major sections of the application.

BroBudget includes navigation for:

* Dashboard
* Income
* Expenses
* Analytics
* Savings Goals
* Monthly History
* Transactions
* Settings

This keeps navigation consistent between pages.

---

## B. KPI / Summary Cards

Important financial metrics are displayed using cards.

Examples include:

* Total Balance
* Total Income
* Total Expenses
* Savings Rate
* Net Cash Flow
* Number of Transactions

Cards allow users to identify important information quickly.

---

## C. Card-Based Layout

Different categories of information are separated into cards.

For example:

* Financial statistics
* Charts
* Quick navigation
* Recent transactions
* Spending categories

This creates a structured and visually organized interface.

---

## D. Data Visualization

Financial data is represented visually using charts.

BroBudget includes visualizations for areas such as:

* Balance trends
* Income vs Expenses
* Spending by category

Charts make financial trends easier to understand than raw numerical data.

---

## E. Quick Actions

The interface provides easily accessible actions such as:

**＋ Add transaction**

This allows users to quickly record financial activity without navigating through unnecessary screens.

---

## F. Modal Form Interaction

BroBudget uses a modal form for adding transactions.

The transaction form includes:

* Transaction name
* Amount
* Type
* Category
* Date
* Note

This keeps the user on the current page while allowing them to enter new information.

---

## G. Responsive Navigation

The interface includes a mobile navigation control so that the dashboard can adapt to smaller screen sizes.

This follows the modern responsive web design approach where desktop and mobile users should both be able to access the application comfortably.

---

# 🚀 5. What Our Implementation Does Differently

BroBudget does not attempt to reproduce a specific existing finance application.

Instead, our implementation combines familiar dashboard patterns with an original structure and visual style.

### Our implementation adds:

### 📊 Unified Financial Workspace

Multiple financial activities are organized within one application:

* Income
* Expenses
* Transactions
* Analytics
* Savings Goals
* Monthly History

---

### ⚡ Quick Transaction Entry

Users can add a transaction directly through the dashboard using the **Add Transaction** action.

---

### 📈 Financial Analytics

The application provides dedicated analytics for comparing income and expenses and understanding spending categories.

---

### 🧭 Consistent Navigation

All major sections follow the same navigation structure, making the application easier to learn.

---

### 🎯 Goal-Oriented Financial Management

Savings Goals are included alongside normal income and expense tracking.

This extends the dashboard beyond simple expense recording toward financial planning.

---

### 💡 Clear Financial Hierarchy

The interface prioritizes the most important financial information first.

The visual hierarchy follows:

**Key Metrics → Trends → Quick Actions → Detailed Transactions**

This allows users to understand their financial position before exploring detailed records.

---

# 🖥️ Implemented UIs

The project contains the following UI pages:

| UI                 | Description                            |
| ------------------ | -------------------------------------- |
| 🏠 Dashboard       | Main financial overview                |
| 💰 Income          | Income management interface            |
| 💸 Expenses        | Expense tracking interface             |
| 📊 Analytics       | Financial analytics and visualizations |
| 🎯 Savings Goals   | Savings goal management                |
| 📅 Monthly History | Historical financial information       |
| 🔄 Transactions    | Transaction management                 |
| ⚙️ Settings        | Application settings                   |

### Dashboard

Provides an overview of:

* Total balance
* Total income
* Total expenses
* Savings rate
* Balance trend
* Quick navigation
* Recent transactions

### Income UI

Provides an interface for recording and viewing income information.

### Expenses UI

Provides an interface for tracking expenses and spending.

### Analytics UI

Provides:

* Income vs Expenses
* Net Cash Flow
* Transaction count
* Spending by category
* Financial charts

### Savings Goals UI

Provides an interface for tracking financial savings goals.

### Monthly History UI

Provides historical financial information organized by month.

### Transactions UI

Provides detailed transaction information.

### Settings UI

Provides application configuration options.

---

# 🛠️ Technologies Used

## Frontend

* **HTML5**
* **CSS3**
* **JavaScript**

## UI Technologies

* CSS Grid
* CSS Flexbox
* Responsive Web Design
* Card-based UI
* Modal dialogs
* Form components
* Data visualization
* Responsive navigation

## JavaScript

JavaScript is used for:

* Transaction interactions
* Dynamic financial calculations
* Dashboard updates
* Form handling
* Modal interactions
* Navigation interactions
* Data visualization
* User interface behavior

---

# 📁 Project Structure

```text
BroBudget-ui/
│
├── index.html
├── income.html
├── expenses.html
├── analytics.html
├── goals.html
├── history.html
├── transactions.html
├── settings.html
│
├── css/
│   └── dashboard.css
│
├── js/
│   └── app.js
│
└── README.md
```

The repository contains separate HTML pages for each major section, with shared CSS and JavaScript resources used throughout the application.

---

# 📸 Screenshots / Previews

Screenshots of the completed application should be added here.

## Dashboard

![BroBudget Dashboard](screenshots/dashboard.png)

## Income

![BroBudget Income](screenshots/income.png)

## Expenses

![BroBudget Expenses](screenshots/expenses.png)

## Analytics

![BroBudget Analytics](screenshots/analytics.png)

## Savings Goals

![BroBudget Goals](screenshots/goals.png)

## Transactions

![BroBudget Transactions](screenshots/transactions.png)

> Create a `screenshots` folder in the repository and place your screenshots inside it using the filenames shown above.

---

# ▶️ Instructions for Running the Project

BroBudget is a frontend web project, so no backend installation is required for the basic UI.

## Method 1 — Open Directly

1. Download or clone the repository.
2. Open the project folder.
3. Double-click `index.html`.
4. The BroBudget dashboard will open in your browser.
5. Use the sidebar to navigate through the different sections.

---

## Method 2 — Using VS Code

### Step 1

Open the project folder in **Visual Studio Code**.

### Step 2

Open:

```text
index.html
```

### Step 3

Run the project using a local development server such as **Live Server**.

### Step 4

Open the generated local URL in your browser.

---

## Method 3 — Clone Using Git

```bash
git clone https://github.com/harshavardhan-1706/BroBudget-ui.git
```

Then:

```bash
cd BroBudget-ui
```

Open `index.html` or run the project using a local development server.

---

# 🔀 GitHub Contributions and Pull Requests

Each team member should make a meaningful contribution through a separate branch and Pull Request.

A suggested workflow is:

```text
main
 │
 ├── feature/dashboard
 │
 ├── feature/expenses
 │
 ├── feature/analytics
 │
 └── feature/settings
```

Each team member should:

1. Create a feature branch.
2. Implement a meaningful UI or functionality.
3. Commit the changes.
4. Push the branch to GitHub.
5. Create a Pull Request.
6. Review another team member's contribution.
7. Merge the approved Pull Request.

Example:

```bash
git checkout -b feature/analytics
```

```bash
git add .
```

```bash
git commit -m "Add analytics dashboard UI"
```

```bash
git push origin feature/analytics
```

Then create the Pull Request through GitHub.

---

# 🎓 Learning Outcomes

Through this project, we learned how to:

* Study existing UI patterns
* Analyze dashboard layouts
* Design information hierarchy
* Build reusable UI components
* Create responsive layouts
* Use HTML and CSS for interface development
* Use JavaScript for interaction
* Present financial data visually
* Design forms and modal interactions
* Organize a multi-page web application
* Collaborate using Git and GitHub
* Work with branches and Pull Requests

---

# 📌 Project Objective

The primary objective of BroBudget is to demonstrate how modern UI patterns can be studied and transformed into an original web interface.

The project focuses on **understanding design patterns rather than copying existing websites**.

The final implementation combines familiar financial dashboard concepts with our own:

* Layout
* Navigation
* Visual hierarchy
* Components
* Interactions
* Financial workflow
* Styling

---

# 🔗 Repository

**GitHub Repository:**
https://github.com/harshavardhan-1706/BroBudget-ui

---

# 👨‍💻 Team

**BroBudget Team**

Built as a UI pattern research and implementation project.

---

## 📄 License

This project is created for educational and academic purposes.
