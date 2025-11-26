# Next.js Authentication System

A **simple authentication system** built with **Next.js 16+**, **TypeScript**, and **Tailwind CSS**, demonstrating a full **login → forgot password → OTP verification → protected dashboard** flow. This project showcases modern React development practices, form validation, and route protection.  

---

## **Features**

- **Login Page**  
  Users can log in with email and password. Form validation ensures correct email format and minimum password length.

- **Forgot Password Flow**  
  Users can request a password reset using their email.

- **OTP Verification**  
  Simulates sending a one-time password (OTP) and validates it before granting access.

- **Protected Dashboard**  
  Only accessible after successful login or OTP verification.

- **Route Protection**  
  Middleware ensures authenticated users can access protected routes.

- **Form Validation**  
  Uses **React Hook Form** and **Zod** for robust client-side validation.

- **Clean UI**  
  Designed with **Tailwind CSS** for a modern, responsive interface.

---

## **Tech Stack**

- **Next.js 16+** (App Router)  
- **TypeScript**  
- **Tailwind CSS**  
- **React Hook Form + Zod** for form validation  
- **Next.js Middleware** for route protection  

---

## **Installation & Setup**

1. **Clone the repository**:  
```bash
git clone https://github.com/yourusername/auth-task.git
cd auth-task

## **Install dependencies:

- **npm install

```Run the development server:

npm run dev


Open your browser at http://localhost:3000

Usage

Login with any valid email and password (mock authentication).

If you forgot your password, click “Reset here” → enter your email → receive simulated OTP.

Enter the OTP to access the protected dashboard.

Note: This project uses mock authentication and cookies to simulate login state.


src/
 └─ app/
     ├─ (auth)/
     │   ├─ login/
     │   ├─ forgot-password/
     │   ├─ otp/
     │   └─ dashboard/
     └─ page.tsx

(auth) contains all authentication-related pages.

dashboard is a protected route only accessible after login or OTP verification.

page.tsx is the landing page (customizable).

Deployment

This project is ready to be deployed on Vercel:

Push your code to GitHub.

Connect your GitHub repository in Vercel
.

Vercel will automatically detect the Next.js project and deploy it live.

Future Improvements

Integrate real backend authentication and OTP email service.

Add remember me functionality.

Improve accessibility and responsive design.

License

This project is open-source and free to use.

When you paste this into a `README.md` on GitHub, **all headings, bold text, code blocks, lists, and links** will render correctly.  

If you want, I can also **add some inline emojis** for visual appeal without making it unprofessional, like `✔️` for features completed or `⚠️` for notes.  

Do you want me to do that next?
