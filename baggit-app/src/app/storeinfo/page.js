"use client";

import { useState, React } from "react";
import styles from "./page.module.css";
import Nav from "../components/Navigation/Nav";
import Image from "next/image";
// import supabase from '@/config/supabaseClient';

const App = () => {
  const [showTopReviews, setShowTopReviews] = useState(true);

  const toggleReviews = () => {
    setShowTopReviews(!showTopReviews);
  };

  // const [reviews, setReviews] = useState([]);

  //   // Define a function that fetches data from one row of the reviews table
  //   async function fetchSingleShopReview(shopLocationId) {
  //     const { data, error } = await supabase
  //     .from('storeReviews')
  //     .select('*')
  //     .eq('shop_location_id', `${shopLocationId}`)
  //     if (error) {
  //       console.log('error on fetchSingleShopReview', error);
  //       return;
  //     }

  //     const formattedReviews = data.map(review => ({
  //       id: review.id,
  //       content: review.content,
  //       rating: review.rating,
  //       shop: review.shop_location_id,
  //       author: review.writerName
  //     }));
  //     setReviews(formattedReviews);
  //     console.log(formattedReviews);
  //   }

  //   //   const ratingsArray = formattedReviews.map(item => item.rating)
  //   //   console.log('array of ratings for this review: ', ratingsArray);

  //   //   function findAverage (arr) {
  //   //     let sumofArr = 0;
  //   //     for (let i = 0; i < arr.length; i++) {
  //   //       sumofArr = sumofArr + arr[i];
  //   //     }
  //   //     return sumofArr/arr.length;
  //   //   }

  //   //   const average = findAverage(ratingsArray);
  //   //   console.log(average);
  //   // };
  //   // console.log(average);

  //   fetchSingleShopReview(2);
  //   const averageRating = 4;

  return (
    <>
      <div className={styles.container}>
        {/* Location Description */}
        <div className={styles.locationDescription}>
          <h2>Hobbs Birmingham</h2>
          <div className={styles.details}>
            <p>
              <strong>Opening times:</strong> Mon-Fri 9:00 - 20:00
            </p>
            <p>
              <strong>Features:</strong> Large and small bags allowed
            </p>
            <div className={styles.protection}>
              <Image
                src="/shield.png"
                alt="protection"
                width={17}
                height={17}
              />
              <p>Protection up to £5,000</p>
            </div>
          </div>
          <div className={styles.reviews}>Reviews</div>
        </div>

        <div className={styles.rating}>
          <h2>4.0</h2>
          <div>
            <Image
              src="/completedstar.png"
              alt="full star"
              width={15}
              height={15}
            />
            <Image
              src="/completedstar.png"
              alt="full star"
              width={15}
              height={15}
            />
            <Image
              src="/completedstar.png"
              alt="full star"
              width={15}
              height={15}
            />
            <Image
              src="/completedstar.png"
              alt="full star"
              width={15}
              height={15}
            />
            <Image
              src="/emptystar.png"
              alt="empty star"
              width={15}
              height={15}
            />
            <p>3 reviews</p>
          </div>
        </div>

        <div className={styles.reviewToggleContainer}>
          <button className={styles.reviewToggleButton} onClick={toggleReviews}>
            {showTopReviews ? "Show Recent Reviews 🡇" : "Show Top Reviews 🡇"}
          </button>

          {/* Conditional rendering of reviews based on state */}
          {showTopReviews ? (
            // Render top reviews here
            <>
              <div className={styles.reviewContainer}>
                <h2>Hannah, London</h2>
                <div className={styles.stars}>
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/emptystar.png"
                    alt="empty star"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
              <p className={styles.reviewText}>
                Efficient service, but the storage space was so cramped. My bags
                were safe, though, so no major complaints.
              </p>

              <div className={styles.reviewContainer}>
                <h2>Mandy, Glasgow</h2>
                <div className={styles.stars}>
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/completedstar.png"
                    alt="empty star"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
              <p className={styles.reviewText}>
                The staff were very friendly and helpful. The storage space was
                clean and secure. I loved the app and the process!
              </p>
            </>
          ) : (
            <>
              <div className={styles.reviewContainer}>
                <h2>Mike, Birmingham</h2>
                <div className={styles.stars}>
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/completedstar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/emptystar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                  <Image
                    src="/emptystar.png"
                    alt="full star"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
              <p className={styles.reviewText}>
                This shop had great bag security but the shopkeeper was very
                impolite. I honestly would recommend walking further to a
                different store.
              </p>
              {/* ... other recent reviews ... */}
            </>
          )}
        </div>

        {/* About Section */}
        <div className={styles.aboutApp}>
          <h3>About Bag Storage App</h3>
          <p>
            How it works: Simply choose a location, select a time, and pay
            securely. Read more about it in our{" "}
            <a href="/terms">Terms and Conditions</a>.
          </p>
        </div>

        {/* Select Booking Duration */}
        <div className={styles.bookingDuration}>
          <h3>Select Booking Duration</h3>
          <p className={styles.bookingText}>
            Choose the time duration for storing your bag
          </p>

          <div className={styles.bookingDurationContainer}>
            <div className={styles.bookingDurationOption}>1 hour</div>
            <div className={styles.bookingDurationOption}>3 hours</div>
            <div className={styles.bookingDurationOption}>6 hours</div>
            <div className={styles.bookingDurationOption}>12 hours</div>
          </div>
        </div>
        {/* Buttons for Add Bag, Settings, and Pay Now */}
        <div className={styles.buttons}>
          <div className={styles.addBagButton}>Add New Bag</div>
          <div className={styles.settingsButton}>Settings</div>
          <div className={styles.payNowButton}>Pay Now</div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default App;
