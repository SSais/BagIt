import React from 'react';
import styles from './page.module.css';
import Nav from '../components/Navigation/Nav';
import Image from 'next/image';

const App = () => {
  return (
    <>
      {/* User Section
      <div className={styles.userSection}>
        <div className={styles.userInfo}>
          <Image src="/baggitLogoRed.svg" alt="LogoBaggIt" width={40} height={40} />
          <div>
            <h4>John Doe</h4>
            <p>Welcome back!</p>
          </div>
        </div>
      </div> */}

    <div className={styles.container}>
      {/* Location Description */}
      <div className={styles.title}>Location Title</div>
      <div className={styles.locationDescription}>
        <h2>Location description</h2>
        <div className={styles.details}>
          <p><strong>Opening times:</strong> Mon-Sun: 8:00 - 22:00</p>
          <p><strong>Features:</strong> Large and small bags allowed</p>
        </div>
      </div>

      <p>Add review, add star rating also add how many people people have a review for taht star. showhaow far the store is from your location
      Adress will be show after booking
      Protection up to £5,000


      Review section 
    </p><br></br>

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



      {/* About Section */}
      <div className={styles.aboutApp}>
        <h3>About Bag Storage App</h3>
        <p>How it works: Simply choose a location, select a time, and pay securely. Read more about our <a href='/terms'> Terms and Conditions </a> </p><br></br>
      </div>



    </div>
    <Nav />
  </>
  );
};

export default App;