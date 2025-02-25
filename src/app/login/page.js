"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react"; // Import eye icons
import styles from "./Login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login attempt with Email: ${email}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/logo.svg" alt="Innoage Logo" className={styles.logo} />
        <h2 className={styles.title}>Welcome To Inno Age</h2>
        <p className={styles.subtitle}>Sign in to your account</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className={styles.eyeButton}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button type="submit" className={styles.button}>Login</button>
        </form>
       
        <p className={styles.footerText}>
          Forgot Your Password?{" "}
          <Link href="/ResetPassword" className={styles.link}>Reset Now</Link>
        </p>
      </div>
    </div>
  );
}
