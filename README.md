# Authentication System - .NET + Angular

A complete authentication and authorization system built with **ASP.NET Core 8** and **Angular 18**.

## Features

- 🔐 **JWT Authentication** - Secure token-based authentication
- 👤 **User Registration & Login** - Complete user management
- 🛡️ **Route Protection** - Protected routes with auth guards
- 🎨 **Modern UI** - Beautiful, responsive Angular frontend
- 📱 **Mobile Friendly** - Works great on all devices
- 🔄 **Auto Token Refresh** - Seamless user experience
- 🚀 **Role-based Authorization** - Ready for role-based access

## Tech Stack

### Backend (.NET)
- ASP.NET Core 8
- Entity Framework Core (In-Memory Database)
- ASP.NET Core Identity
- JWT Bearer Authentication
- Swagger/OpenAPI

### Frontend (Angular)
- Angular 18
- Standalone Components
- TypeScript
- SCSS
- Reactive Forms
- HTTP Interceptors

## Quick Start

### 1. Backend Setup

```bash
cd backend
dotnet restore
dotnet run
```

The API will be available at: `https://localhost:7000`
Swagger UI: `https://localhost:7000/swagger`

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

The Angular app will be available at: `http://localhost:4200`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Request/Response Examples

#### Register
```json
POST /api/auth/register
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "expiration": "2024-01-01T00:00:00Z"
}
```

## Features Overview

### Backend Features
- **User Registration** - Create new user accounts
- **User Authentication** - Login with email/password
- **JWT Token Generation** - Secure token-based auth
- **Password Validation** - Secure password requirements
- **CORS Configuration** - Frontend integration
- **In-Memory Database** - Easy development setup
- **Swagger Documentation** - API documentation

### Frontend Features
- **Login Component** - User authentication form
- **Register Component** - User registration form
- **Dashboard Component** - Protected user area
- **Auth Service** - Authentication state management
- **Auth Guard** - Route protection
- **HTTP Interceptor** - Automatic token handling
- **Responsive Design** - Mobile-friendly interface

## Project Structure

```
auth-system/
├── backend/
│   ├── Controllers/
│   │   └── AuthController.cs
│   ├── Data/
│   │   └── ApplicationDbContext.cs
│   ├── Models/
│   │   ├── User.cs
│   │   └── AuthModels.cs
│   ├── Services/
│   │   └── TokenService.cs
│   ├── Program.cs
│   ├── AuthAPI.csproj
│   └── appsettings.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   └── interceptors/
│   │   ├── main.ts
│   │   └── index.html
│   ├── package.json
│   └── angular.json
└── README.md
```

## Security Features

- **Password Hashing** - Secure password storage
- **JWT Tokens** - Stateless authentication
- **HTTPS Enforcement** - Secure communication
- **CORS Protection** - Cross-origin security
- **Route Guards** - Frontend route protection
- **Token Expiration** - Automatic token expiry

## Development

### Running in Development Mode

1. **Backend**:
   ```bash
   cd backend
   dotnet watch run
   ```

2. **Frontend**:
   ```bash
   cd frontend
   npm start
   ```

### Testing the API

Use the included Swagger UI at `https://localhost:7000/swagger` or test with curl:

```bash
# Register
curl -X POST https://localhost:7000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","email":"john@example.com","password":"password123"}'

# Login
curl -X POST https://localhost:7000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

## Deployment

### Backend Deployment
- Configure production database (SQL Server, PostgreSQL, etc.)
- Update connection strings in `appsettings.Production.json`
- Configure HTTPS certificates
- Deploy to Azure, AWS, or your preferred hosting

### Frontend Deployment
- Build for production: `ng build --prod`
- Deploy to Netlify, Vercel, or your preferred hosting
- Update API URLs for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
