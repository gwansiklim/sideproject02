const URL = "http://localhost:8000"

// 게시글 불러오기 ui생성 함수
function addPosts(post) {
  let d = new Date(post['createdAt']);
  let today = String(d.getFullYear()) + "-" + String(d.getMonth() + 1) + "-" + String(d.getDate());
  let htmlTemp = ` <div class="card border-success mb-5" style="width: 500px;" onClick="location.href='/detail/${post["postId"]}'">
  <div class="card-header bg-transparent border-success">
    <h3 class="text-success">책 이름</h3>  
    <h4 class="card-text" >${post.title}</h4>
  </div>
  <div class="card-body">
    <h3 class="card-title text-success">줄거리</h3>
    <h4 class="card-text">${post.summary}</h4>
  </div>
  <div class="card-footer bg-transparent border-success">
    <h3 class="text-success">느낀점</h3> 
    <h4 class="card-text">${post.content}</h4>
    <p class="card-text" stlye="font-size: 10px">${today}</p>
  </div>
  `;
  document.querySelector("#post_box").insertAdjacentHTML('afterbegin', htmlTemp);
  // insertAdjacentHTML = 자바스크립트를 사용해서 기존의 DOM요소에 html문자열 추가하는 방식.
}

// get요청하기 data에 변수 request의 json을 불러온다.
async function getPost() {
  try {
    const request = await fetch(`${URL}/api/posts`, {
      method: "GET",
    })
    const data = await request.json();
    return data;

  } catch (error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        res.status(400).send({
            errorMessage: "데이터를 불러오지 못했습니다.",
        });
  }
}

async function addGetPost(){
  const requestPosts = await getPost();
  const posts = await requestPosts.result;
  posts.forEach((post) => {
    addPosts(post);
  });
}

addGetPost();
