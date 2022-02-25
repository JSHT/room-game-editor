let myToolbar = [
  ["bold", "italic", "underline", "strike"],
  [{ align: [] }, { color: [] }, { background: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["link", "image", "blockquote", "code-block"],
];

const quill = new Quill("#description", {
  theme: "snow",
  modules: {
    imageResize: {
      displaySize: true,
    },
    toolbar: {
      container: myToolbar,
      //       insert image url
      // handlers: {
      //   image: imageHandler
      // }
    },
  },
});

// image url
function imageHandler() {
  let range = this.quill.getSelection();
  let value = prompt("please copy paste the image url here.");
  if (value) {
    this.quill.insertEmbed(range.index, "image", value, Quill.sources.USER);
  }
}
