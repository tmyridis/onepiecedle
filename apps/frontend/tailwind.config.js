const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,jsx}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': '#faf9f3',
        'dark-grey': '#534e41',
        'dark-grey-font': '#312e26',
        'end-answers': '#8dce76',
        'beige': '#e4dabd',
        'orange': '#d53633',
        'lighter-grey': '#eadfc2',
        'disabled-clue': '#979797',
        "clue-border": "#928157"
      },
      backgroundImage: {
        'wanted-poster': "url(src/assets/wantedBackground.png)",
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
        cardFlip: {
          '0%': {
            transform: 'perspective(400px) rotateY(90deg)',
            opacity: 0
          },
          '40%': {
            transform: 'perspective(400px) rotateY(-20deg)',
          },
          '60%': {
            transform: 'perspective(400px) rotateY(10deg)',
            opacity: 1
          },
          '80%': {
            transform: 'perspective(400px) rotateY(- 5deg)',
          },
          '100%': {
            transform: 'perspective(400px)'
          }
        },
        fade: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        leftRight: {
          '0%': {
            transform: "translateX(-1%)"
          },
          '30%': {
            transform: "translateX(2%)"
          },
          '60%': {
            transform: "translateX(-3%)"
          },
          '90%': {
            transform: "translateX(1%)"
          },
          '100%': {
            transform: "translateX(0)"
          }
        },
        winnerCard: {
          '0%': {
            transform: "rotate(5deg)"
          },
          '30%': {
            transform: "rotate(-10deg)"
          },
          '60%': {
            transform: "rotate(15deg)"
          },
          '90%': {
            transform: "rotate(-5deg)"
          },
          '100%': {
            transform: "rotate(0)"
          }
        }


      },
      animation: {
        bounce: "bounce 1s ease-in-out infinite",
        flip: 'cardFlip 2s ease-in 1',
        fade: "fade 0.3s ease-in-out",
        leftRight: "leftRight 0.6s ease-in-out",
        winner: "winnerCard 0.7s ease-in-out"
      }
    },
  },
  plugins: [],
};
