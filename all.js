Quill.register("modules/imageUploader", ImageUploader);

let myToolbar = [
  ["bold", "italic", "underline", "strike"],
  [{ align: [] }, { color: [] }, { background: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ size: [] }],
  ["link", "image", "blockquote", "code-block"],
];

const quill = new Quill("#description", {
  theme: "snow",
  modules: {
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            );
          }, 3500);
        });
      },
    },
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
