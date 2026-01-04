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

<img width="full" alt="Uplyft-Event-Details" src="https://github.com/user-attachments/assets/9598cb8c-a925-4057-a365-6690ac1d16ab" />  <br>

- Displays full event details including title, description, image, and attributes   
- Shows event type, date, location, and creator with icons  
- Checks if a user has already joined the event and updates button state dynamically (**React useState + useEffect**)  
- Allows logged-in users to join events with API integration (**REST API + fetch + AuthContext**)  
- Provides feedback for actions using modals (**SweetAlert2**)  
- Fetches and displays similar events based on event type (**REST API + fetch**)  
- Skeleton loader improves perceived performance while fetching data (**Tailwind CSS + Animate Pulse**)  

---

## Authentication (Firebase)

<div align="center">
  <img alt="Uplyft-Login" src="https://github.com/user-attachments/assets/6a1a6a5d-4697-4324-b2a3-70a826be900d" style="width: 44%" /> &nbsp;&nbsp;
  <img alt="Uplyft-Register" src="https://github.com/user-attachments/assets/a61ba67e-b471-4d09-90e6-764b9fe53b25" style="width: 44%" />

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
- **Protected Routes:** Users cannot access private pages **(Dashboard, Profile)** without logging in.

---

## Profile Page (Private Route)

<img width="full" alt="Uplyft-Profile" src="https://github.com/user-attachments/assets/d57c172f-c776-4dfc-8715-bb8a01294391" /> <br>

- Animated circular border around the avatar for visual enhancement (**Tailwind CSS + custom keyframe animation**)  
- Allows inline editing of the display name with save functionality (**React useState + conditional rendering**)  
- Updates Firebase user profile in real-time (**Firebase Auth + updateProfile**)  
- Provides visual feedback for success or failure using modals (**SweetAlert2**)  
- Includes loading state and disabled buttons during API calls (**React useState**)  

---


## Create Event Page (Private Route)

<img width="full" alt="Uplyft-Create-Event" src="https://github.com/user-attachments/assets/2b71bb81-04d7-4a9f-afaa-4eea93434a1e" /> <br>

- Accessible only to **Logged-in Users**, ensuring secure event creation.
- Users can enter: Title, Description, Event Type (Cleanup, Plantation, Donation, etc.), Thumbnail Image URL, Location, Future Event Date (validated using **react-datepicker**; past dates cannot be selected).
- Automatically stores the **creator’s email** with the event for ownership verification.
- Shows a success alert upon creation and redirects to the **Upcoming Events page**.
- Fully responsive form layout with clear input validation messages.

---


## Joined Events Page (Private Route)

<img width="full" alt="Uplyft-Joined-Events" src="https://github.com/user-attachments/assets/ddd0924c-ebdd-4e03-8591-2ef8baf76bfa" /> <br>

- Displays all events joined by the **Logged-in User**.
- Events are sorted by upcoming date, keeping the user’s schedule organized.
- Joined events cannot be joined again, preventing duplicates.

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



