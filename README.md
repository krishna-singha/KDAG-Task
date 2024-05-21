# KDAG WEB TASK

This project aims to develop a course page for KDAG, incorporating structured content presentation, intuitive navigation, and an enhanced user experience. The course content can be organized in both day-wise and week-wise manner, based on user preference.

<br>

## Table of Contents

- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

<br>

## Technologies Used

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Vercel

<br>

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance

<br>

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/krishna-singha/KDAG-Task.git
    ```

2. **Go to folder**
    ```bash
    cd KDAG-Task
    ```

3. **Backend Setup:**
    - Navigate to the `Backend` directory:
      ```bash
      cd Backend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file in the `Backend` directory with the following content:
      ```env
      PORT=8000
      MONGODB_URL = your_mongodb_url
      FRONTEND_URL = http://localhost:5173
      ```
    - Start the backend server:
      ```bash
      npm run dev
      ```

4. **Frontend Setup:**
    - Navigate to the `Frontend` directory:
      ```bash
      cd Frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file in the `Frontend` directory with the following content:
      ```env
      VITE_BACKEND_URL = http://localhost:8000
      ```
    - Start the frontend development server:
      ```bash
      npm run dev
      ```

5. **MongoDB Setup:**

    - Import `week-contents` and `day-contents` JSON data from `Course Resources` to your MongoDB database collections of `week-contents` and `day-contents` respectively to get course data. 

6. **Access the Application:**
    - Open your browser and navigate to `http://localhost:5173`.

<br>

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

<br>

## Author

- **Author Name:** `Krishna Singha`
- **GitHub:** [Profile](https://github.com/krishna-singha)
- **Linkedin:** [Profile](https://linkedin.com/in/krishnasingha/)
<br>

## License
   - This project is licensed under the `MIT License` - see the [LICENSE.md](LICENSE.md) file for details.

---

<br>

**Happy coding! 🚀**
