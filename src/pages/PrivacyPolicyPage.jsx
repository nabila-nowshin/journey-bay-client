const PrivacyPolicyPage = () => {
  return (
    <section className="py-16 px-4 bg-base-200 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Privacy Policy</h1>

        <p className="mb-6 text-base-content">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our website
          and services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-6 text-base-content">
          We may collect personal information such as your name, email address,
          and booking details when you create an account or make a booking on
          our platform.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <p className="mb-6 text-base-content">
          Your information is used to process your bookings, communicate
          important updates, and improve our services. We do not sell or rent
          your personal data to third parties.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
        <p className="mb-6 text-base-content">
          We do not share your personal information with third parties except
          where necessary to provide the services you request or when required
          by law.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
        <p className="mb-6 text-base-content">
          Our website may use cookies or analytics tools to improve user
          experience. No personally identifiable information is collected
          through these tools.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-6 text-base-content">
          You can contact us at any time to access, correct, or request deletion
          of your personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6 text-base-content">
          If you have any questions about this Privacy Policy, please reach out
          to us via our contact page or email us at{" "}
          <span className="font-medium">support@journeybay.com</span>.
        </p>

        <p className="text-center text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} Journey Bay. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
