function handleUpload(context, id) {
  let element = document.createElement("input");
  element.setAttribute("type", "file");
  element.setAttribute("id", id);

  let file;
  element.click();

  element.addEventListener("change", (e) => {
    file = handleChange(e);
    console.log("here");
    return file;
  });
}

function handleChange(event) {
  console.log(event.target.files[0]);
  return event.target.files[0];
}

export default handleUpload;
