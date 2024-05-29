# Account Administration System
This is a full stack web application built with Next.js for the frontend, Spring Boot for the backend, and MySQL for the database. The application provides functionalities to add, retrieve, update, and delete users. It also includes Google authentication for signing in.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Application Functionalities](#application-functionalities)
- [Google Authentication Setup](#google-authentication-setup)
- [Running the Application](#running-the-application)

## Technologies Used

### Frontend
- **Next.js**: 12.1.0
- **React**: 17.0.2
- **TailwindCSS**: 3.0.23
- **NextAuth.js**: 4.2.1
- **Headless UI**: 1.5.0

### Backend
- **Spring Boot**: 2.5.x
- **Spring Data JPA**
- **MySQL Connector/J**
- **Spring Boot Starter Web**
- **Spring Boot Starter Test**

## Prerequisites
- **Node.js**: v14.x or above
- **Java**: JDK 11 or above
- **MySQL**: 8.x or above

## Setup Instructions

1. Configure environment variables
   Create a .env.local file in the root of the frontend directory and add the following:
   ```bash
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

2. Configure application properties
   Update src/main/resources/application.properties with your MySQL database credentials:
   ```bash
   spring.datasource.url=jdbc:mysql://localhost:3306/your-database-name
   spring.datasource.username=your-username
   spring.datasource.password=your-password
   spring.jpa.hibernate.ddl-auto=update

## Application Functionalities

### User Management
- **Add User**
- **Get All Users**
- **Get User by ID**
- **Update User by ID**
- **Delete User by ID**

### Google Authentication
- **Sign in using Google**

## Google Authentication Setup

### Create a Google Cloud Project
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Navigate to the OAuth consent screen, configure it, and add your application details.

### Create OAuth Credentials
1. Go to the Credentials tab.
2. Create OAuth 2.0 Client IDs.
3. Add `http://localhost:3000` to the Authorized JavaScript origins.
4. Add `http://localhost:3000/api/auth/callback/google` to the Authorized redirect URIs.

### Copy the Client ID and Client Secret
1. Copy these credentials to your `.env.local` file in the frontend setup.

## Running the Application

### Start the Frontend
    ```
    npm run dev

### Start the Backend
    ```
    ./mvnw spring-boot:run

### Access Application
- [http://localhost:3000](http://localhost:3000)

### The is a modified code along of a nextjs fullstack application created by Shabbir Dawoodi for learning purposes. 
The following is a link to his YouTube video - [https://www.youtube.com/watch?v=EHDlebVv6zw&t=16157s](https://www.youtube.com/watch?v=EHDlebVv6zw&t=16157s)
