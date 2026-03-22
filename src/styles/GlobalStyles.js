// import { createGlobalStyle } from "styled-components";

// export const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: "Segoe UI", Tahoma, sans-serif;
//   }

//   body {
//     background: #f4f6f9;
//     color: #333;
//   }

//   a {
//     text-decoration: none;
//   }

//   button {
//     font-family: inherit;
//   }
// `;



// .......................










import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&family=Montserrat&display=swap');

html {
  font-size: 100%;
}

// :root {
//   --primary-500: #645cff;
//   --primary-700: #3c3799;

//   --grey-50: #f8fafc;
//   --grey-200: #e2e8f0;
//   --grey-400: #94a3b8;
//   --grey-900: #0f172a;

//   --white: #fff;
//   --red-light: #f8d7da;
//   --red-dark: #842029;
//   --green-light: #d1e7dd;
//   --green-dark: #0f5132;

//   --borderRadius: 0.25rem;
//   --letterSpacing: 1px;
//   --transition: 0.3s ease-in-out all;

//   --backgroundColor: var(--grey-50);
//   --textColor: var(--grey-900);

//   --shadow-1: 0 1px 3px rgba(0,0,0,0.1);
//   --shadow-3: 0 10px 15px rgba(0,0,0,0.1);
// }





:root {
  /* colors */
  --primary-100: #e2e0ff;
  --primary-200: #c1beff;
  --primary-300: #a29dff;
  --primary-400: #837dff;
  --primary-500: #645cff;
  --primary-600: #504acc;
  --primary-700: #3c3799;
  --primary-800: #282566;
  --primary-900: #141233;

  /* grey */
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;
  --grey-800: #1e293b;
  --grey-900: #0f172a;
  /* rest of the colors */
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;

  /* fonts  */
  --headingFont: 'Roboto', sans-serif;
  --bodyFont: 'Nunito', sans-serif;
  --smallText: 0.7em;
  --small-text: 0.875rem;
  --large-text: 2rem;
  /* rest of the vars */
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 500px;
  --fluid-width: 90vw;

  /* box shadow*/
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
body {
  background: var(--backgroundColor);
    font-size: var(--large-text);

  font-family: 'Roboto', sans-serif;
  line-height: 1.75;
  color: var(--textColor);
}

h1,h2,h3,h4,h5 {
  margin-bottom: 1rem;
  letter-spacing: var(--letterSpacing);
}

p {
  margin-bottom: 1rem;
}

/* buttons */
.btn {
  cursor: pointer;
  color: var(--white);
  background: var(--primary-500);
  border: none;
  border-radius: var(--borderRadius);
  padding: 0.5rem 1rem;
  transition: var(--transition);
}

.btn:hover {
  background: var(--primary-700);
}

/* form */
.form {
  width: 90%;
  max-width: 500px;
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-1);
  padding: 2rem;
  margin: 3rem auto;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  border-radius: var(--borderRadius);
  border: 1px solid var(--grey-200);
  margin-bottom: 1rem;
}

/* alerts */
.alert {
  padding: 0.5rem;
  border-radius: var(--borderRadius);
  text-align: center;
}

.alert-danger {
  color: var(--red-dark);
  background: var(--red-light);
}

.alert-success {
  color: var(--green-dark);
  background: var(--green-light);
}

/* loading */
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading {
  width: 50px;
  height: 50px;
  border: 5px solid var(--grey-400);
  border-top-color: var(--primary-500);
  border-radius: 50%;
  animation: spinner 0.6s linear infinite;
  margin: auto;
}
`;