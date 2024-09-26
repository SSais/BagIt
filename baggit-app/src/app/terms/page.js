import React from "react";
import styles from "./page.module.css";
import Nav from "../components/Navigation/Nav";

const TermsAndConditions = () => {
  return (
    <>
      <div className={styles.termsContainer}>
        <h1>
          Terms and Conditions for{" "}
          <strong className={styles.title}>BAGGIT </strong>Bag Storage App
        </h1>
        <spacer className={styles.spacer} />

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to the BaggIt Bag Storage App. These Terms and Conditions
            govern your use of our mobile application and services. By accessing
            or using the app, you agree to be bound by these Terms. If you do
            not agree with any part of these Terms, you may not use the app.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Services Provided</h2>
          <p>The Bag Storage App allows users to:</p>
          <ul>
            <p>Find and book storage locations for their bags.</p>
            <p>Select and pay for the duration of bag storage.</p>
            <p>Manage their bookings through the app.</p>
            <p>Access account details, settings, and payment history.</p>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. User Accounts</h2>
          <p>
            <strong>Eligibility:</strong> To use the app, you must be at least
            18 years old or have permission from a legal guardian.
          </p>
          <p>
            <strong>Registration:</strong> You must provide accurate and
            complete information when creating an account. You are responsible
            for safeguarding your account credentials and are responsible for
            any activity that occurs under your account.
          </p>
          <p>
            <strong>Account Termination:</strong> We reserve the right to
            suspend or terminate your account if you violate any part of these
            Terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Bookings and Payments</h2>
          <p>
            <strong>Booking Process:</strong> Users can book storage for their
            bags by selecting available locations and time durations through the
            app. Availability of storage locations and time slots may vary.
          </p>
          <p>
            <strong>Payments:</strong> All payments must be made at the time of
            booking. We accept credit/debit card payments and other payment
            methods as indicated in the app. By providing payment information,
            you represent that you are authorized to use the payment method.
          </p>
          <p>
            <strong>Refund Policy:</strong> Payments are non-refundable unless
            the storage provider fails to fulfill the service. Refund requests
            must be made within 24 hours of the booking time.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. User Responsibilities</h2>
          <p>
            <strong>Accurate Information:</strong> You are responsible for
            providing accurate information about your bags and storage needs.
          </p>
          <p>
            <strong>Use of Service:</strong> You agree not to misuse the app by
            tampering with the system, hacking, or engaging in any fraudulent
            activity.
          </p>
          <p>
            <strong>Storage Limits:</strong> You must comply with the storage
            limits set by each location. Prohibited items include, but are not
            limited to, hazardous materials, illegal items, and perishable
            goods.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Storage Providers</h2>
          <p>
            <strong>Third-Party Providers:</strong> The app partners with
            third-party storage providers to offer bag storage services. These
            providers are responsible for the safekeeping of your items during
            the storage period.
          </p>
          <p>
            <strong>Liability:</strong> The app does not take responsibility for
            the loss or damage of your bags while in storage. Claims for loss or
            damage must be directed to the storage provider in accordance with
            their policies.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <p>Use the app for any unlawful or fraudulent activities.</p>
            <p>Submit false or misleading information.</p>
            <p>Tamper with the security features of the app.</p>
            <p>
              Engage in behavior that disrupts the normal use of the app by
              other users.
            </p>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, BaggIt Bag Storage App and
            its affiliates shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits
            or revenues, whether incurred directly or indirectly, or any loss of
            data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <p>Your use or inability to use the app.</p>
            <p>Any unauthorized access to or use of our servers.</p>
            <p>
              Any bugs, viruses, or other harmful elements transmitted to or
              through the app.
            </p>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>9. Intellectual Property</h2>
          <p>
            All content, design, logos, and software in the app are the property
            of the BaggIt Bag Storage App or its licensors. You may not
            reproduce, distribute, or create derivative works from this content
            without our express written permission.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Privacy Policy</h2>
          <p>
            Your privacy is important to us. Please refer to our{" "}
            <strong>
              <a href="https://baggit-app.vercel.app/privacy">Privacy Policy</a>
            </strong>{" "}
            for detailed information on how we collect, use, and protect your
            personal data.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Changes to the Terms</h2>
          <p>
            We reserve the right to update or modify these Terms at any time.
            Any changes will be effective immediately upon posting. Your
            continued use of the app after changes have been posted signifies
            your acceptance of the updated Terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in
            accordance with the laws of The United Kingdom, without regard to
            its conflict of law principles.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at:
          </p>
          <ul>
            <p>
              <strong>Email:</strong> support@baggit.co.uk
            </p>
            <p>
              <strong>Address:</strong> 123 Storage Lane, Birmingham, UK
            </p>
          </ul>
        </section>
      </div>
      <Nav />
    </>
  );
};

export default TermsAndConditions;
