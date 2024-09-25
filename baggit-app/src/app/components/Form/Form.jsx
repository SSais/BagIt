// 'use client'

// import { useState } from 'react';
// import { supabase } from '@supabase/supabase-js';
// import styles from "./Form.module.css";

// export default function Form() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     if (isSignUp) {
//       const { error } = await supabase.auth.signUp({ email, password });
//       if (error) {
//         setError(error.message);
//       } else {
//         console.log('Sign-up successful');
//       }
//     } else {
//       const { error } = await supabase.auth.signInWithPassword({ email, password });
//       if (error) {
//         setError(error.message);
//       } else {
//         console.log('Login successful');
//       }
//     }
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
//       {error && <p className={styles.error}>{error}</p>}
//       <p onClick={() => setIsSignUp(!isSignUp)}>
//         {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
//       </p>
//     </form>
//   );
// }