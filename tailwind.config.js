module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        journeybaylight: {
          primary: "#1e3a8a",
          secondary: "#3b82f6",
          accent: "#64748b",
          neutral: "#f8fafc",
          "base-100": "#ffffff",
          "base-content": "#1e3a8a",
        },
      },
      {
        journeybaydark: {
          primary: "#93c5fd",
          secondary: "#60a5fa",
          accent: "#cbd5e1",
          neutral: "#1e293b",
          "base-100": "#0f172a",
          "base-content": "#93c5fd",
        },
      },
    ],
    darkTheme: "journeybaydark",
  },
};
