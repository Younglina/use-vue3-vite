module.exports = {
  //应用文件类型
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
  "files.associations": {
    "*.vue": "tailwindcss",
    "*.scss": "tailwindcss",
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}
