"use client";
import { useState } from "react";
import { Home, User, Settings, LogOut, Menu } from "lucide-react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [active, setActive] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed}`}>
        <div className={styles.sidebarHeader}>

          
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
          <span className={styles.logoText}>Inno Age</span>
          <button className={styles.toggleButton} onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={20} />
          </button>



        </div>

        <nav className={styles.nav}>
          <button className={`${styles.navItem} ${active === "Home" ? styles.active : ""}`} onClick={() => setActive("Home")}>
            <Home size={20} /> {sidebarOpen && "Home"}
          </button>
          <button className={`${styles.navItem} ${active === "Profile" ? styles.active : ""}`} onClick={() => setActive("Profile")}>
            <User size={20} /> {sidebarOpen && "Profile"}
          </button>
          <button className={`${styles.navItem} ${active === "Settings" ? styles.active : ""}`} onClick={() => setActive("Settings")}>
            <Settings size={20} /> {sidebarOpen && "Settings"}
          </button>
        </nav>

        <button className={styles.logout}>
          <LogOut size={20} /> {sidebarOpen && "Logout"}
        </button>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.header}>
          <h2>Welcome, User</h2>
          <p>Here's your dashboard overview.</p>
        </header>

        <section className={styles.cards}>
          <div className={styles.card}>
            <h3>Today's Tasks</h3>
            <p>5 pending tasks</p>
          </div>
          <div className={styles.card}>
            <h3>Notifications</h3>
            <p>3 new messages</p>
          </div>
          <div className={styles.card}>
            <h3>Performance</h3>
            <p>85% completed</p>
          </div>
        </section>
      </main>
    </div>
  );
}
