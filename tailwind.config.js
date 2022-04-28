module.exports = {
  //purge: ["./src/**/*.html", "./src/**/*.js"],
  content: [
    "./src/*.tsx",
    "./src/**/*.{html,tsx}",
    "./src/**/*.ts",
    "./public/index.html",
  ],
  presets: [require("fave-tailwindcss-presets")],
};

//https://v2.tailwindcss.com/docs/installation#post-css-7-compatibility-build
//npx tailwindcss -i ./src/input.css -o ./src/index.css --watch
