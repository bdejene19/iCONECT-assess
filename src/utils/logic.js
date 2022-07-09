// logic for components that could be separated

// handles file transfer of onDrohp event
export const handleDrop = (event) => {
  let dt = event.dataTransfer;
  let file = [...dt.files];

  // update input file element UI value
  document.getElementById("fileInput").files = file;
  event.preventDefault();
};

// allow drag over of file
export const dropAllow = (event) => {
  event.preventDefault();
};

// handles final upload of file
// validates to see of upload card has custodian name
export const handleUpload = (e) => {
  // retrieving elements
  let btn = e.target.parentNode;
  let card = btn.closest(".card-wrapper");
  let custodianName = card.children[0].children[0].lastChild;

  // validation - returns true if successful, false otherwise
  if (custodianName.value === "") {
    custodianName.style.border = "solid red 3px";
    setTimeout(() => {
      custodianName.style.border = "solid grey 1px";
    }, 3000);

    return false;
  }

  // handle progress bar animation
  let bar = card.children[1].children[1].children[0];
  bar.style.cssText = `
    width: 100%;
  `;

  return true;
};

// returns value of new Object from submission
export const handleSubmit = (upload) => {
  let newSubmission = {
    fileName: upload,
  };
  return newSubmission;
};
