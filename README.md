# Event Management Application

This is a simple Event Management application built with a React frontend and a .NET backend.

## Prerequisites

### Backend
- [.NET SDK](https://dotnet.microsoft.com/download)
- [PostgreSQL](https://www.postgresql.org/download/)

### Frontend
- [Node.js and npm](https://nodejs.org/)

## Getting Started

### Cloning the Repository

```sh
git clone <repository-url>
cd <repository-folder>

BackEnd Setup

1. Update the database connection string:
In appsettings.json, update the connection string to match your PostgreSQL configuration.


{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Database=eventdb;Username=yourusername;Password=yourpassword"
  }
}

2. Apply migrations and create the database:
run code:- dotnet ef database update

3.Run the Application:- dotnet run

The backend should now be running at http://localhost:5000.

Frontend Setup

1.Navigate to the frontend directory:- cd event-management-frontend

2.Install dependencies:- npm install

3.Start the application:- npm start


The frontend should now be running at http://localhost:3000.
