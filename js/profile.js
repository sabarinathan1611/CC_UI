function toggleAllSections() {
  // Get all section elements
  const sections = document.querySelectorAll("section");
  // Get all .edit elements
  const editDivs = document.querySelectorAll(".edit");

  // Check if the first section is currently hidden
  const allSectionsHidden =
    sections[0].style.display === "block" || sections[0].style.display === "";

  // Toggle the display for all sections
  sections.forEach((section) => {
    section.style.display = allSectionsHidden ? "none" : "block";
  });

  // Toggle the display for all .edit divs (and their children)
  editDivs.forEach((editDiv) => {
    editDiv.style.display = allSectionsHidden ? "block" : "none";
  });
}
