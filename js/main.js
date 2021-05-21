const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const aboutContent = document.querySelector("#about-content")
const contactContent = document.querySelector("#contact-content")

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: "410px",
    height: "410px",
    top: 55,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#36ba01")
    },
    onblur: function () {
      this.setBackground("#858585")
    },
  })
})

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#36ba01")
    },
    onblur: function () {
      this.setBackground("#858585")
    },
  })
})
