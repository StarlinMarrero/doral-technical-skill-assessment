# Wikipedia App - Doral Technical Skill Assessment

Welcome to the Wikipedia App! This project is part of the Doral Technical Skill Assessment.

## How to Run the Project with Docker Compose

To run the project using Docker Compose, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
```
2. go to folder nestjs-wikipedia-api-proxy-backend and react-wikipedia-featured-content-frontend and Create a `.env` file in both folder with the required environment variables. You can use the `.env.example` file as a template.

3. Navigate to the project root "./" where docker-compose.yml is located and build the Docker images and start the containers:
  ```bash
docker-compose up --build
   ```
4. once the containers are up and running, you can access the Wikipedia App by navigating to http://localhost:3000 in your web browser

5. that's all :tw-1f609: