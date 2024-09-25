import React from 'react';
import styles from './userprofile.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      {/* Location Description */}
      <div className={styles.locationDescription}>
        <h2>Location description</h2>
        <div className={styles.details}>
          <p><strong>Opening times:</strong> Mon-Sun: 8:00 - 22:00</p>
          <p><strong>Features:</strong> Large and small bags allowed</p>
        </div>
      </div>

      {/* Select Booking Duration */}
      <div className={styles.bookingDuration}>
        <h3>Select Booking Duration</h3>
        <div className={styles.bookingDurationOption}>
          <div className="option">1 hour</div>
          <div className="option">3 hours</div>
          <div className="option">6 hours</div>
          <div className="option">12 hours</div>
        </div>
        <p>Choose the time duration for storing your bag</p>
      </div>

      {/* Buttons for Add Bag, Settings, and Pay Now */}
      <div className={styles.buttons}>
        <div className="button">Add New Bag</div>
        <div className="button">Settings</div>
        <div className="button payNow">Pay Now</div>
      </div>

      {/* User Section */}
      <div className={styles.userSection}>
        <div className={styles.userInfo}>
          <img src="/baggitLogoRed.svg" alt="LogoBaggIt" />
          <div>
            <h4>John Doe</h4>
            <p>Welcome back!</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className={styles.aboutApp}>
        <h3>About Bag Storage App</h3>
        <p>How it works: Simply choose a location, select a time, and pay securely.</p>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <img src="/home-icon.png" alt="Home" />
          <span>Home</span>
        </div>
        <div className={styles.footerItem}>
          <img src="/bookings-icon.png" alt="My Bookings" />
          <span>My Bookings</span>
        </div>
        <div className={styles.footerItem}>
          <img src="/account-icon.png" alt="My Account" />
          <span>My Account</span>
        </div>
      </div>
    </div>
  );
};

export default App;
