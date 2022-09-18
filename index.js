var element = document.body;
element.classList.add("dark");
function dark() {
    if (element.classList.contains("light")) {
        element.classList.remove("light");
        element.classList.add("dark");
    }
}
function light() {
    if (element.classList.contains("dark")) {
        element.classList.remove("dark");
        element.classList.add("light");
    }
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
