module.exports = {
  require: ["./src/index.css"],
  sections: [
    {
      name: "Atoms",
      components: "src/atoms/**/*.{jsx,tsx}"
    },
    {
      name: "Molecules",
      components: "src/molecules/**/*.{jsx,tsx}",
      ignore: "src/molecules/**/*.demo.{jsx,tsx}"
    },
    {
      name: "Organisms",
      components: "src/organisms/**/*.{jsx,tsx}",
      ignore: "src/organisms/**/*.demo.{jsx,tsx}"
    }
  ]
}
