function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    const selectedSection = document.getElementById(sectionId);

    if (!selectedSection || !selectedSection.classList.contains("content-section")) {
        return;
    }

    sections.forEach((section) => {
        section.classList.toggle("active", section === selectedSection);
    });

    document.querySelectorAll(".navbutton").forEach((button) => {
        button.classList.toggle("active", button.dataset.section === sectionId);
    });
}