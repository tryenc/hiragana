module.exports = {
  require: ["./src/index.css"],
  sections: [
    {
      name: "Atoms",
      components: "src/atoms/**/*.{jsx,tsx}"
    },
    {
      name: "Molecules",
      components: "src/molecules/**/*.{jsx,tsx}"
    }
  ]
}
