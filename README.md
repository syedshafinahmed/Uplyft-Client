# <img width="27px" src="src/assets/favicon.png" /> Uplyft – Act locally, impact globally.

Uplyft – A community-driven event management platform where users can discover, create, and join local social service events such as cleanups, tree plantation drives, and donation programs. The platform features secure authentication, and an intuitive interface for browsing upcoming events. Users can manage the events they create, track the events they’ve joined, and stay engaged in meaningful community activities—all through a modern, responsive single-page application.

---

## 🌐 Live Demo

https://uplyft-syedshafinahmed.netlify.app/

---

## 🔗 Installation & Setup

#### 1. Clone the repository

```
git clone https://github.com/syedshafinahmed/Uplyft-Client
```

#### 2. Navigate into the project directory

```
cd Uplyft-Client
```

#### 3. Install dependencies

```
npm install
```

#### 4. Start the development server

```
npm run dev
```

#### 5. Build for production

```
npm run build
```

---

# 📌 Features

## Home Page

<img width="full" alt="uplyft-home" src="https://github.com/user-attachments/assets/4eac1f17-d997-45e5-9321-f09d555b5cb3" /> <br>

- A vibrant, community-inspired banner section enhanced with **Framer Motion** animations, creating a smooth, modern, and engaging first impression.
- Visually rich feature highlights, animated with **Framer Motion** to deliver an interactive, dynamic feel as users explore the platform’s core strengths.
- A beautifully curated gallery section, built with **Swiper.js**, allowing users to glide through inspiring community event visuals with smooth, responsive slides.
- An elegantly designed newsletter section, powered by **AOS** for subtle scroll-triggered animations that elevate user engagement (UI only).

---

## Upcoming Events Page

<img width="full" alt="uplyft-upcoming-events" src="https://github.com/user-attachments/assets/8bc04505-9e9a-45db-9cc8-8c18a861697d" /> <br>

- Shows only upcoming events, automatically filtering out past ones using **backend-side date validation**
- Feature-rich event cards displaying all essential details —
Thumbnail, Title, Location, Event Type, Event Date, Created By and a View Event button leading to the full event details page.
- Includes a case-sensitive **Search Bar**, allowing users to look up events by matching exact titles.
- Comes with an **Event Type** filter dropdown, enabling users to quickly sort events by categories like Cleanup, Plantation, Donation, and more.
- All events are presented in a **fully responsive** grid layout, ensuring a smooth browsing experience across mobile, tablet, and desktop.

---

## Event Details Page 

<img width="full" alt="uplyft-event-details" src="https://github.com/user-attachments/assets/edebd896-640d-4adc-ac4a-60daf1b01ee7" /> <br>

- The event details page is publicly accessible, allowing anyone to explore complete event information — including the event creator’s details, date, location, type, and description.
- Features a prominent **Join This Event** button, but joining is available only for **authenticated users**.
- If a user attempts to join without signing in, they are redirected to the **Login page**, and upon successful authentication, automatically returned to the same event page.
- Once logged in, users can join the event, and the system stores the joined event data in the **database** along with user info.
- A **confirmation alert** is shown upon successful joining.
- Users cannot join the same event twice — the button becomes **disabled** after the first join.
- Joined events seamlessly appear in the user’s **Joined Events** page, sorted by upcoming date.


*If the user is not logged in → Redirects to Login and then back to Details Page after login.*

---

## Authentication (Firebase)

<div align="center">
  <img alt="uplyft-login" src="https://github.com/user-attachments/assets/a96f836c-105e-4be0-be6b-b62d37520376" style="width: 44%"/> &nbsp;&nbsp;
  <img alt="uplyft-register" src="https://github.com/user-attachments/assets/71b6ed4a-5b15-49b6-8974-944ecb0f0f7b" style="width: 44%" />
</div> <br>

- Secure **Email/Password** Authentication allowing users to register and log in safely.
- Social Login Integration with **Google** for faster sign-in.
- Login Form includes email and password fields, **redirecting users back to their intended page after successful authentication**.
- Password Validation Rules:
   - At least one uppercase letter
   - At least one lowercase letter
   - Minimum of 6 characters
- **Forgot Password** feature sends a secure reset link to the registered email.
- **Interactive Feedback:** All success and error states are displayed using **SweetAlert**, ensuring smooth and clear communication with users.
- **Protected Routes:** Users cannot access private pages **(Create Event, Manage Events, Joined Events)** without logging in.

---

## Profile Picture

<div align="center">
  <img alt="uplyft-home" src="https://github.com/user-attachments/assets/9f7d4823-fe45-40d8-a71a-2731c0ec8b66" style="width: 44%"/> &nbsp;&nbsp;
  <img alt="uplyft-home" src="https://github.com/user-attachments/assets/a8339d85-6877-4587-a32f-5de607bfdb75" style="width: 44%"/>
</div> <br>

- The **Profile Picture** in the navbar acts as a dropdown menu, giving quick access to user-specific options.
- Displays private route links for:
   - Create Event
   - Manage Events
   - Joined Events
- Includes a **Light/Dark Mode** toggle button for instant theme switching.
- Hovering over the profile picture reveals the user’s Name, enhancing personalization.

---


## Create Event Page (Private Route)

<img width="full" alt="uplyft-create-events" src="https://github.com/user-attachments/assets/b862d6ec-c16c-49d2-bcf7-69e02b514959" /> <br>

- Accessible only to **Logged-in Users**, ensuring secure event creation.
- Users can enter: Title, Description, Event Type (Cleanup, Plantation, Donation, etc.), Thumbnail Image URL, Location, Future Event Date (validated using **react-datepicker**; past dates cannot be selected).
- Automatically stores the **creator’s email** with the event for ownership verification.
- Shows a success alert upon creation and redirects to the **Upcoming Events page**.
- Fully responsive form layout with clear input validation messages.

---


## Joined Events Page (Private Route)

<img width="full" alt="uplyft-joined-events" src="https://github.com/user-attachments/assets/4b463d59-0e93-448f-8c3b-f47b518600d4" /> <br>

- Displays all events joined by the **Logged-in User**.
- Events are sorted by upcoming date, keeping the user’s schedule organized.
- Joined events cannot be joined again, preventing duplicates.
- Provides a clean, responsive card layout for easy browsing.
- Allows users to **quickly navigate to event details** from their joined events list.

---


## Manage Events Page (Private Route)

<div align="center">
  <img alt="uplyft-manage-events" src="https://github.com/user-attachments/assets/16096288-507a-4f33-9a3b-1673e3836503" style="width: 44%"/> &nbsp;&nbsp;
  <img alt="uplyft-update-events" src="https://github.com/user-attachments/assets/14518fed-bc37-4cfb-a8e2-de23eacaa5df" style="width: 44%"/>
</div> <br>

- Shows all events created by the **Logged-in User**.
- Users can update event details such as title, description, type, date, location, or image.
- Ensures ownership validation, so no user can **modify or delete someone else’s events**.
- Responsive layout with action buttons for editing events, ensuring easy management of all created events.

---


## 🧰 Tech Stack

| 🏷️ **Category**        | ⚙️ **Technology Used**                                                                                                             |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Library**             | [React.js](https://react.dev/)                                                                                                     |
| **Styling**             | [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/) + [Styled Components](https://styled-components.com/)   |
| **Routing**             | [React Router](https://reactrouter.com/)                                                                                           |
| **Authentication**      | [Firebase Authentication](https://firebase.google.com/docs/auth)                                                                   |
| **Animations / Motion** | [Framer Motion](https://www.framer.com/motion/) + [AOS](https://michalsnik.github.io/aos/)                                         |
| **Slider / Gallery**    | [Swiper.js](https://swiperjs.com/)                                                                                                 |
| **Date Picker**         | [React Datepicker](https://reactdatepicker.com/)                                                                                   |
| **Loading / Spinners**  | [React Spinners](https://www.davidhu.io/react-spinners/)                                                                           |
| **Alerts / Toasts**     | [SweetAlert2](https://sweetalert2.github.io/)                                                                                      |
| **State Management**    | React Hooks (`useState`, `useEffect`, `useContext`)                                                                                |
| **Deployment**          | [Netlify](https://www.netlify.com/) / [Vercel](https://vercel.com/) |

---

## 🔧 Highlights

- **Fully responsive** for all devices.
- **Unique UI** based on the theme of social development.
- **Light-Dark Mode Toggle**.
- **Protected Routes** for event creation & management.
- **Smooth routing** with no reload errors.
- Dynamic event filtering based on date.
- Polished UX with toast notifications.
- Ensures login persistence on reload (Firebase auth configured correctly).

---



