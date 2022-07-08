export const handleDrop = (event) => {
  let dt = event.dataTransfer;
  let file = [...dt.files];

  document.getElementById("fileInput").files = file;
  event.preventDefault();
};

export const dropAllow = (event) => {
  event.preventDefault();
};

export const startProgress = (timer) => {
  if (timer > 0) {
    let allCards = document.querySelector(".submission-container").children;
    let mostRecent = allCards[allCards.length - 1];
    let bar = mostRecent.children
      .item(2)
      .children.item(0)
      .children.item(0)
      .children.item(0);
    // bar.style.width = "100%";
    bar.style.cssText = `
            width: 100%;
            transition: ${timer}s ease-in-out width;
       `;
  }
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
