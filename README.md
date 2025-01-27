# sl-float - Personal Finance Tracker

sl-float is a minimalistic and vibrant personal finance tracker designed to help users manage their income and expenses effortlessly. The app supports account creation, login functionality, and provides an intuitive interface for tracking finances with insightful summaries and charts.

---

## Features

- **Income and Expense Tracking**: Log transactions with details like amount, category, date, and description.
- **User Accounts**: Secure account creation with email and social login support.
- **Categories and Charts**: Organize transactions into categories and visualize data through charts.
- **Summaries**: View financial summaries to better understand spending and saving patterns.
- **Responsive Design**: iOS app-style interface with a clean and modern layout.

---

## Tech Stack

- **Frontend**: React + Vite (TypeScript + SWC)
- **Styling**: Tailwind CSS
- **Backend**: Firestore for data storage
- **Authentication**: Firebase Authentication

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Lvnge/sl-float.git
   cd sl-float/vite-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Firebase project and configure Firestore and Authentication.

4. Add your Firebase configuration to the `.env` file:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Sign up or log in using email or social accounts.
2. Add income and expense transactions with relevant details.
3. Explore the "Categories" section for better organization.

---

## Roadmap

- [ ] Categories manager
- [ ] Chart visualization
- [ ] Add support for multiple currencies.
- [ ] Implement dark mode.
- [ ] Enable exporting transaction data to CSV or PDF.

---

## Contributing
This is a personal project I'm learning React with so I would like to complete this project on my own.
But feel free to use the code for your own purposes.
---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [Material Icons](https://fonts.google.com/icons) for the Swap Horizontal icon.
- The amazing community of developers contributing to React, Vite, and Tailwind CSS.

