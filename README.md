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

<!-- <img width="full" alt="Greennest-Home" src="https://github.com/user-attachments/assets/5dde2c25-5f8f-4466-bbd7-2dd650842595" /><br> -->
<!-- <img width="1351" height="3689" alt="greennest-syedshafinahmed pages dev_" src="https://github.com/user-attachments/assets/5dde2c25-5f8f-4466-bbd7-2dd650842595" /> -->


- A vibrant, community-inspired banner section enhanced with **Framer Motion** animations, creating a smooth, modern, and engaging first impression.
- Visually rich feature highlights, animated with **Framer Motion** to deliver an interactive, dynamic feel as users explore the platform’s core strengths.
- A beautifully curated gallery section, built with **Swiper.js**, allowing users to glide through inspiring community event visuals with smooth, responsive slides.
- An elegantly designed newsletter section, powered by **AOS** for subtle scroll-triggered animations that elevate user engagement (UI only).

---

## Upcoming Events Page

<!-- <img width="full" alt="Greennest-Plants" src="https://github.com/user-attachments/assets/d3bb5354-e6e3-4111-ada4-6766822426e8" /><br> -->

- Shows only upcoming events, automatically filtering out past ones using **backend-side date validation**
- Feature-rich event cards displaying all essential details —
Thumbnail, Title, Location, Event Type, Event Date, Created By and a View Event button leading to the full event details page.
- Includes a case-sensitive **Search Bar**, allowing users to look up events by matching exact titles.
- Comes with an **Event Type** filter dropdown, enabling users to quickly sort events by categories like Cleanup, Plantation, Donation, and more.
- All events are presented in a **fully responsive** grid layout, ensuring a smooth browsing experience across mobile, tablet, and desktop.

---

## Event Details Page 

<!-- <img width="full" alt="Greennest-PlantDetails" src="https://github.com/user-attachments/assets/ed5ce3ba-3b8e-408d-8ab5-8dcd1acaa10d" /> <br> -->

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

<!-- <div align="center">
  <img alt="Greennest-Register" src="https://github.com/user-attachments/assets/2ae9414b-45dd-46f7-ba23-da59945ea67c" style="width: 44%"  /> &nbsp;&nbsp;
  <img alt="Greennest-Login" src="https://github.com/user-attachments/assets/d099bd60-fff0-47fa-afaa-f769e38df4db" style="width: 44%"  />  
</div> <br> -->

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

<!-- <div align="center">
  <img alt="Greennest-Profile" src="https://github.com/user-attachments/assets/8e5ca97a-a3d3-4d6d-aa7c-ac5c4b68a0fb" style="width: 30%" /> &nbsp;&nbsp;
  <img alt="Greennest-Profile-Edit" src="https://github.com/user-attachments/assets/761e8686-a02e-471c-ab7e-ec716dfe5ddb" style="width: 30%" /> &nbsp;&nbsp;
  <img alt="Greennest-Profile-Update" src="https://github.com/user-attachments/assets/e9b604cd-5b62-43b2-9454-654a22ab95ff" style="width: 30%" />
</div>

<br> -->

- The **Profile Picture** in the navbar acts as a dropdown menu, giving quick access to user-specific options.
- Displays private route links for:
   - Create Event
   - Manage Events
   - Joined Events
- Includes a **Dark/Light Mode** toggle button for instant theme switching.
- Hovering over the profile picture reveals the user’s Name, enhancing personalization.

---


## Create Event Page (Private Route)


- Accessible only to **Logged-in Users**, ensuring secure event creation.
- Users can enter: Title, Description, Event Type (Cleanup, Plantation, Donation, etc.), Thumbnail Image URL, Location, Future Event Date (validated using **react-datepicker**; past dates cannot be selected).
- Automatically stores the **creator’s email** with the event for ownership verification.
- Shows a success alert upon creation and redirects to the **Upcoming Events page**.
- Fully responsive form layout with clear input validation messages.

---


## Joined Events Page (Private Route)

- Displays all events joined by the **Logged-in User**.
- Events are sorted by upcoming date, keeping the user’s schedule organized.
- Joined events cannot be joined again, preventing duplicates.
- Provides a clean, responsive card layout for easy browsing.
- Allows users to **quickly navigate to event details** from their joined events list.

---


## Manage Events Page (Private Route)

- Shows all events created by the **Logged-in User**.
- Users can update event details such as title, description, type, date, location, or image.
- Ensures ownership validation, so no user can **modify or delete someone else’s events**.
- Responsive layout with action buttons for editing events, ensuring easy management of all created events.

---


## 🧰 Tech Stack

| 🏷️ **Category**         | ⚙️ **Technology Used**                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Library**             | [React.js](https://react.dev/)                                                                                   |
| **Styling**             | [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)                                       |
| **Routing**             | [React Router](https://reactrouter.com/)                                                                         |
| **Authentication**      | [Firebase Authentication](https://firebase.google.com/docs/auth)                                                 |
| **Animations / Slider** | [Swiper.js](https://swiperjs.com/)                                                                               |
| **Toasts**              | [React Toastify](https://fkhadra.github.io/react-toastify/introduction)                                          |
| **Data Source**         | Local JSON (`plants.json`)                                                                                       |
| **State Management**    | React Hooks (`useState`, `useEffect`, `useContext`)                                                              |
| **Deployment**          | [Firebase Hosting](https://firebase.google.com/docs/hosting) / [Cloudflare Pages](https://pages.cloudflare.com/) |

---

## 🔧 Highlights

- Fully **responsive** & performance optimized.
- **Protected Routes** with PrivateRoute.
- Real-time profile updates using Firebase.
- Toast notifications for user actions.
- Clean, minimal UI with smooth transitions.
- No reload or crash errors on route navigation.

---



