function toggleCollapse(elementId) {
    const content = document.getElementById(elementId);
    content.style.display = (content.style.display === "none") ? "block" : "none";
}
