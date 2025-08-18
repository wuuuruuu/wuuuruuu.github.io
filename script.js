// Navigation and scroll handling
let activeSection = "about"

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  initializeScrollHandling()
})

// Navigation functionality
function initializeNavigation() {
  const navButtons = document.querySelectorAll(".nav-button")

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section")
      scrollToSection(sectionId)
    })
  })
}

function scrollToSection(sectionId) {
  activeSection = sectionId
  updateActiveNavButton()

  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

function updateActiveNavButton() {
  const navButtons = document.querySelectorAll(".nav-button")
  navButtons.forEach((button) => {
    const sectionId = button.getAttribute("data-section")
    if (sectionId === activeSection) {
      button.classList.add("active")
    } else {
      button.classList.remove("active")
    }
  })
}

// Scroll handling for active section detection
function initializeScrollHandling() {
  window.addEventListener("scroll", () => {
    const sections = ["about", "publications", "talks", "cv"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetBottom = offsetTop + element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          if (activeSection !== section) {
            activeSection = section
            updateActiveNavButton()
          }
          break
        }
      }
    }
  })
}

// Collapsible talks functionality
function initializeCollapsibleTalks() {
  const yearToggles = document.querySelectorAll(".year-toggle")

  yearToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const year = this.getAttribute("data-year")
      const talkList = document.querySelector(`.talk-list[data-year="${year}"]`)
      const chevron = this.querySelector(".chevron")

      if (talkList.classList.contains("hidden")) {
        // Show the talks
        talkList.classList.remove("hidden")
        chevron.textContent = "▼"
        this.classList.add("active")
      } else {
        // Hide the talks
        talkList.classList.add("hidden")
        chevron.textContent = "▶"
        this.classList.remove("active")
      }
    })
  })
}
