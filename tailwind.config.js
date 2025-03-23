/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#030303",
      },
      keyframes: {
        neonPulse: {
          "0%, 100%": { boxShadow: "0px -20px 50px 4px rgba(203,213,225,0.8)" },
          "50%": { boxShadow: "0px -20px 45px 10px rgba(203,213,225,1)" },
        },
      },
      animation: {
        neon: "neonPulse 1s infinite alternate ease-in-out", // 🔹 Associando `neonPulse` ao nome `neon`
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
