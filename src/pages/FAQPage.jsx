const FAQPage = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        'Click the "Sign Up" button in the top right corner and follow the registration process.',
    },
    {
      question: "I forgot my password. What should I do?",
      answer:
        'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      question: "How do I update my profile information?",
      answer:
        'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
    {
      question: "Can I cancel or reschedule my bookings?",
      answer:
        "Yes, you can cancel or reschedule up to 7 days before the departure date. Check our policies for details.",
    },
    {
      question: "Are the tour guides experienced?",
      answer:
        "Absolutely! All our guides are certified and have years of experience to ensure a safe and enjoyable trip.",
    },
    {
      question: "Do you offer custom travel packages?",
      answer:
        "Yes! Contact us with your preferences and we can create a custom itinerary tailored just for you.",
    },
    {
      question: "How do I confirm my booking?",
      answer:
        "Once you select a package and submit a booking request, you’ll receive a confirmation email or notification in your account.",
    },
    {
      question: "How do I contact my tour guide?",
      answer:
        "After your booking is confirmed, you’ll see the guide’s contact information in your booking details.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />
              <div className="collapse-title font-semibold text-lg">
                {faq.question}
              </div>
              <div className="collapse-content text-sm">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
