const URL = "http://localhost:8000"

async function postClick() {
  try {
    const request = await fetch(`http://localhost:8000/api/post/posts`, {
      method: "POST",
      body: JSON.stringify({title, summary, content}),
      headers: {"Content-Type": "application/json"},
    })
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    res.status(400).send({
        errorMessage: "데이터를 불러오지 못했습니다.",
    });
  }


const addForm = async(event) => {
  event.preventDefault();
  const title = document.querySelector(".post_title");
  const summary = document.querySelector(".post_summary");
  const content = document.querySelector(".post_content");


  if (title.value.length > 0 && summary.value.length && content.value.length) {
  const newPost = new Posts(title.value, summary.value, content.value);
  res.status(200).send({ newPost });
  }
}
}
