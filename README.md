# Node.js REST API on Google Cloud App Engine

This project demonstrates how to build and deploy a simple Node.js REST API using Express.js to **Google Cloud App Engine**. The API provides basic functionality for getting and adding users.

## Features

- Simple REST API built with **Express.js**.
- Routes:
  - **GET** `/` – Welcome message.
  - **GET** `/users` – Returns a list of users.
  - **POST** `/users` – Adds a new user.
- Deployed on **Google Cloud App Engine** for scalability.

## Tech Stack

- **Node.js**
- **Express.js**
- **Google Cloud App Engine**

## Prerequisites

- **Node.js** installed on your system.
- **Google Cloud Account**.
- **gcloud** CLI installed and configured.

## Project Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create an `app.yaml` file**:

   In the root directory, create an `app.yaml` file to configure your App Engine deployment:

   ```yaml
   runtime: nodejs18
   env: standard
   instance_class: F1

   handlers:
     - url: /.*
       script: auto
   ```

4. **Run the app locally**:

   To run the app locally on your machine:

   ```bash
   npm start
   ```

   Visit [http://localhost:8080](http://localhost:8080) in your browser.

## Deploy to Google Cloud App Engine

1. **Authenticate with Google Cloud**:

   ```bash
   gcloud auth login
   ```

2. **Set your Google Cloud project**:

   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```

3. **Deploy the app**:

   ```bash
   gcloud app deploy
   ```

4. **Access the deployed app**:

   After deployment, you will receive a URL to access the API. The URL will look like:

   ```
   https://YOUR_PROJECT_ID.appspot.com
   ```

## API Endpoints

### 1. GET `/`

Returns a welcome message.

**Response**:

```json
{
  "message": "Welcome to my Google Cloud App Engine API!"
}
```

### 2. GET `/users`

Returns a list of users.

**Response**:

```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
]
```

### 3. POST `/users`

Adds a new user. Send JSON data with `name` and `email`.

**Request**:

```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

**Response**:

```json
{
  "id": 1695123456789,
  "name": "Alice",
  "email": "alice@example.com"
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the **Google Cloud** team for their great platform.
- Inspired by cloud-native development practices.
