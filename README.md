# <img width="27px" src="src/assets/favicon.png" /> Uplyft – Act locally, impact globally.

Uplyft – A community-driven event management platform where users can discover, create, and join local social service events such as cleanups, tree plantation drives, and donation programs. The platform features secure authentication, and an intuitive interface for browsing upcoming events. Users can manage the events they create, track the events they’ve joined, and stay engaged in meaningful community activities—all through a modern, responsive single-page application.

---

## 🌐 Live Demo

https://uplyft.pages.dev/

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


<img width="full" alt="Uplyft-Home" src="https://github.com/user-attachments/assets/ed7bd792-0faa-4352-af59-1fb312a003b3" /> <br>

- **Banner:** Engaging, animated with Framer Motion for a smooth first impression.
- **How It Works:** Step-by-step guide with interactive Framer Motion effects.
- **Features:** Highlighted with animations using Framer Motion.
- **Gallery:** Swipe through images using Swiper.js, fully responsive.
- **Team:** Showcases members with clean layouts and hover effects (Tailwind CSS).
- **Newsletter:** Scroll-triggered animations powered by AOS.
- **FAQ:** Expandable panels with smooth animations (React + Tailwind CSS).
- **Contact:** Simple, responsive form built with React + Tailwind CSS.

---

## About Page

<img width="full" alt="Uplyft-About" src="https://github.com/user-attachments/assets/0f83e8ad-0060-4e47-90b4-46b643c72ad3" /> <br>

- Banner with overlay and animated title using **React + Framer Motion**  
- Animated stats for events, participants, cities, and organizers using **React CountUp + Framer Motion**  
- Multi-column success stories gallery with hover effects using **Framer Motion**  
- Skeleton loading placeholders for smooth user experience using **React + Tailwind CSS**  
- Smooth image hover scaling in gallery using **Tailwind CSS + Framer Motion**

---

## How It Works Page

<img width="full" alt="Uplyft-How-It-Works" src="https://github.com/user-attachments/assets/8eeec87d-f26b-4fcb-bb9e-63b5b76a3720" /> <br>

- Interactive step-by-step process using **React + Framer Motion**  
- Clickable steps with animated transitions to highlight the current step using **Framer Motion**  
- Morphing circular progress indicator showing step completion using **SVG + Framer Motion**  
- Smooth enter/exit animations for step details using **AnimatePresence + Framer Motion**

---

## Contact Page

<img width="full" alt="Uplyft-Contact" src="https://github.com/user-attachments/assets/45858e67-5a71-41a0-a43e-8b004b0bd0e6" /> <br>

- Animated info card with opening hours, contact details, and icons using **Framer Motion + React Icons**  
- Floating background elements with subtle bounce animation using **CSS keyframes**  
- Dark/light theme support implemented with **Tailwind CSS dark mode**  
- Smooth enter animations for info card and form on scroll using **Framer Motion**

---

## All Events Page

<img width="full" alt="Uplyft-All-Events" src="https://github.com/user-attachments/assets/2977b549-efb9-443e-b86d-125ca0c54ff8" /> <br>


- Fetches and filters events from API with live search and event type filter (**REST API + fetch**)  
- Supports client-side pagination for smooth browsing (**React state + array slicing**)  
- Skeleton loading UI while fetching data (**Tailwind CSS + Animate Pulse**)  
- Responsive grid layout for event cards using **Tailwind CSS grid**  
- Interactive search input with keyboard enter support and filter dropdown  
- Styled buttons with hover, disabled, and active states (**Tailwind CSS**)  
- Dark/light theme support implemented using **Tailwind CSS dark mode**  

---

## Upcoming Events Page

<img width="full" alt="Uplyft-Upcoming-Events" src="https://github.com/user-attachments/assets/915fc833-b6d4-4935-9e80-73a6909c8d8f" />  <br>

- Skeleton loader while fetching data to improve perceived performance (**Tailwind CSS + Animate Pulse**)  
- Shows a limited number of upcoming events for quick overview (slice method in React)  
- Includes a "View All Events" link to navigate to full events list (**React Router Link**)  
- Fully responsive design with dark/light theme support (**Tailwind CSS dark mode**)  

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



