# Islamic Dua and Hadith App

A modern web application providing a collection of Islamic duas and hadiths, categorized for easy access. Built with **Next.js**, **Tailwind CSS**, and **Node.js**, this project ensures a responsive and user-friendly experience.

## Features

- **Categories Section**: Browse duas and hadiths by categories and subcategories.
- **Dua Cards**: Interactive cards displaying detailed information.
- **Responsive Design**: Fully responsive UI for mobile, tablet, and desktop views.
- **Static Site Generation (SSG)**: Pre-rendered pages for optimized performance.

## Tech Stack

### Frontend:

- **Next.js**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.

### Backend:

- **Node.js**: Backend runtime for handling API requests.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: Database for storing categories, subcategories, and duas.

## Installation and Setup

### Prerequisites:

- Node.js installed on your machine.
- MongoDB instance running locally or on the cloud.

### Steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/islami-dua-and-hadith-app.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd islami-dua-and-hadith-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:

   ```env
   MONGO_URI=your-mongodb-connection-string
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **Access the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
├── public/               # Public assets
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Next.js pages
│   │   ├── api/          # API routes for backend
│   │   └── index.js      # Home page
│   ├── styles/           # Tailwind CSS configurations
│   └── utils/            # Utility functions
├── .env                  # Environment variables
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## API Endpoints

### Base URL: `/api`

- **GET /categories**: Fetch all categories.
- **GET /categories/:id**: Fetch subcategories by category ID.
- **GET /duas/:id**: Fetch duas by subcategory ID.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm start`: Start the production server.

## Deployment

1. **Build the app:**

   ```bash
   npm run build
   ```

2. **Start the production server:**

   ```bash
   npm start
   ```

3. **Deploy to platforms like Vercel or Netlify for frontend, and render.com or Heroku for the backend.**

## Contribution

Feel free to submit issues or pull requests to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE).

---

### Author

[Your Name](https://github.com/yourusername)
