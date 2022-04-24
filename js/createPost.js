const form = document.querySelector(".form");
const formError = document.querySelector(".form-error");

function createPost() {
  formError.textContent = "";
  const userName = document.getElementById("userName").value.trim();
  const userPhoto = document.getElementById("userPhoto").value.trim();
  const articleContent = document.getElementById("articleContent").value.trim();
  const articlePhoto = document.getElementById("articlePhoto").value.trim();

  if (userName && userPhoto && articleContent && articlePhoto) {
    const data = {
      userName,
      userPhoto,
      articleContent,
      articlePhoto,
    };

    fetch(http, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        alert("傳送成功");
        if (!json.state) {
          formError.textContent = json.message;
        } else {
          form.reset();
          window.location = "index.html";
        }
      })
      .catch((err) => {
        console.log("錯誤", err);
      });
  } else {
    formError.textContent = "請正確填寫資料";
  }
}
