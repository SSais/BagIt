import React from 'react';
import styles from './userprofile.module.css';
import Nav from '../components/Navigation/Nav';

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
        <div className={styles.bookingDurationContainer}>
          <div className={styles.bookingDurationOption}>1 hour</div>
          <div className={styles.bookingDurationOption}>3 hours</div>
          <div className={styles.bookingDurationOption}>6 hours</div>
          <div className={styles.bookingDurationOption}>12 hours</div>
        </div>
        <p className={styles.bookingText}>Choose the time duration for storing your bag</p>
      </div>

      {/* Buttons for Add Bag, Settings, and Pay Now */}
      <div className={styles.buttons}>
        <div className={styles.buttonsButton}>Add New Bag</div>
        <div className={styles.buttonsButton}>Settings</div>
        <div className={styles.buttonsPayNow}>Pay Now</div>
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
        <p>How it works: Simply choose a location, select a time, and pay securely. Read more about our <a href='/terms'> Terms and Conditions </a> </p>
      </div>
    <Nav />
    </div>
  );
};

export default App;
