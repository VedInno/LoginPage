"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./resetpassword.module.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Sign-up attempt with Email: ${email}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <img src="/logo.svg" alt="Innoage Logo" className={styles.logo} />
        
        <p className={styles.subtitle}>Reset Your Password</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Your New Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="Submit" className={styles.button}>Reset</button>
        </form>
        <p className={styles.footerText}>
          Already have an account?{" "}
          <Link href="/login" className={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
}
