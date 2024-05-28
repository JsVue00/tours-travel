
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",

  ],
  theme: {
    colors: {
      primary: 'var(--primary)',
      sencondary: 'var(--sencondary)',
      success: 'var(--success)',
      warning: 'var(--warning)',
      failed: 'var(--failed)',
      shadow: 'var(--shadow)',
      backGround1: 'var(--backGround1)',
      backGround2: 'var(--backGround2)',
      text1: 'var(--text1)',
      text2: 'var(--text2)',
      text3: 'var(--text3)'
    },
    extend: {},
  },
  plugins: [],
}