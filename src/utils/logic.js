export const handleDrop = (event) => {
  let dt = event.dataTransfer;
  let file = [...dt.files];

  document.getElementById("fileInput").files = file;
  event.preventDefault();
};

export const dropAllow = (event) => {
  event.preventDefault();
};

export const handleUpload = (e) => {
  let btn = e.target.parentNode;
  let bar = btn.closest(".card-wrapper").children[1].children[1].children[0];
  bar.style.cssText = `
    width: 100%;
  `;
};

export const handleSubmit = (custodian, upload) => {
  let name = document.getElementById("custodian-name");
  if (custodian === "") {
    name.style.border = "solid red 2px";
    setTimeout(() => {
      name.style.border = "solid grey 1.5px";
    }, 3000);
  } else {
    let newSubmission = {
      name: custodian,
      fileName: upload,
      startProgress: true,
    };
    return newSubmission;
  }
};
