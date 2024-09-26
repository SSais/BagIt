import React from "react";
import styles from "./page.module.css";
import Nav from "../components/Navigation/Nav";

export default function PrivacyPolicy() {
  return (
    <>
      <div className={styles.privacyContainer}>
        <h1 className={styles.heading}>Privacy Policy for Bag Storage App</h1>
        <p className={styles.effectiveDate}>Effective Date: 26/09/2024</p>
        <section className={styles.section}>
          <h2 className={styles.subheading}>Information We Collect</h2>
          <p>
            We collect several types of information to provide and improve our
            services:
          </p>
          <h3 className={styles.sectionHeading}>1. Personal Information</h3>
          <ul>
            <p>
              <strong>Email Address:</strong> Required for account creation,
              login, and communication purposes.
            </p>
            <p>
              <strong>Name:</strong> For personalized communication and customer
              support.
            </p>
            <p>
              <strong>Payment Information:</strong> Payment details such as
              credit card numbers or payment method details are collected and
              securely processed via third-party payment processors.
            </p>
          </ul>
          <h3 className={styles.sectionHeading}>2. Usage Data</h3>
          <p>
            We may collect information about the device you use to access the
            App, including your IP address, browser type, device type, and
            operating system. This includes log data such as the time and date
            of your activity on the App.
          </p>
          <h3 className={styles.sectionHeading}>3. Location Data</h3>
          <p>
            With your permission, we may collect and store your device&apos;s
            precise geographic location to help you find nearby bag storage
            facilities. This data can be disabled at any time in your device
            settings.
          </p>
          <h3 className={styles.sectionHeading}>4. Cookies</h3>
          <p>
            We use cookies to track activity on our App and hold certain
            information. Cookies help us remember your preferences and provide
            personalized services.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subheading}>How We Use Your Information</h2>
          <p>We use the information we collect in the following ways:</p>
          <ul>
            <p>To provide and maintain the services of the App.</p>
            <p>
              To communicate with you about updates, promotions, or customer
              support inquiries.
            </p>
            <p>
              To process payments securely through third-party payment
              processors.
            </p>
            <p>To monitor the usage of the App and improve its features.</p>
            <p>To detect, prevent, and address technical issues.</p>
            <p>To comply with legal obligations.</p>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subheading}>
            Sharing and Disclosure of Information
          </h2>
          <p>
            We do not share your personal information with third parties except
            as described in this Privacy Policy:
          </p>
          <ul>
            <p>
              <strong>Third-Party Service Providers:</strong> We may employ
              third-party companies to process payments, analyze App usage, and
              facilitate our services.
            </p>
            <p>
              <strong>Legal Requirements:</strong> We may disclose your personal
              information if required by law or in response to valid requests by
              public authorities.
            </p>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subheading}>Security of Your Data</h2>
          <p>
            The security of your personal information is important to us. We use
            commercially acceptable means to protect your data, including
            encryption and secure payment gateways. However, no method of
            transmission over the Internet or method of electronic storage is
            100% secure.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subheading}>Your Data Protection Rights</h2>
          <p>You have the following rights concerning your data:</p>
          <ul>
            <p>Access: You can request copies of your personal data.</p>
            <p>
              Correction: You can request that we correct any inaccurate or
              incomplete information.
            </p>
            <p>Deletion: You can request the deletion of your personal data.</p>
            <p>
              Restriction: You can request the restriction of your data
              processing.
            </p>
            <p>
              Portability: You can request a copy of your data in a structured
              format.
            </p>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <strong>baggitapp@email.com</strong>.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subheading}>Children&apos;s Privacy</h2>
          <p>
            Our App is not intended for use by individuals under the age of 13
            (&quot;Children&quot;). We do not knowingly collect personal
            information from Children. If we become aware that we have collected
            personal information from a child without parental consent, we will
            take steps to remove that information.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subheading}>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>
      </div>
      <Nav />
    </>
  );
}
