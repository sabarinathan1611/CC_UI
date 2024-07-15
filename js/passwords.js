const btn = document.querySelectorAll("button");

// Attach a click event listener to each form
btn.forEach((button) => {
  button.addEventListener("click", function (event) {
    // Prevent the default button submission behavior
    // event.preventDefault();
    button.style.display = "none";

    // Get the ID of the button that was clicked
    const clickedbuttonId = button.id;
    editBtn = "edit_btn";

    if (clickedbuttonId.includes(editBtn)) {
      formid = `form-${clickedbuttonId.slice(9)}`;
      form = document.getElementById(formid);
      save = document.getElementById(`save_btn-${clickedbuttonId.slice(9)}`);
      save.style.display = "block";

      console.dir(form);

      const inputs = form.getElementsByTagName("input");

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute("disabled");
      }
    }

    console.log("Clicked form ID:", clickedbuttonId);
  });
});
