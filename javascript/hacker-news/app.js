const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

function getData(url) {
  ajax.open('GET', url, false); // ajax 방식, api 주소, 비동기처리 boolean
  ajax.send(); // 데이터 가져오는 함수

  return JSON.parse(ajax.response); // 응답값으로 온 json 데이터를 객제 형태로 바꿔줌
}

const newsFeed = getData(NEWS_URL);

// console.log(newsFeed);

const ul = document.createElement('ul');

window.addEventListener('hashchange', function () {
  const id = location.hash.substr(1);
  const newsContents = getData(CONTENT_URL.replace('@id', id));
  const title = document.createElement('h1');

  title.innerHTML = newsContents.title;

  content.appendChild(title);
});

for (let i = 0; i < 10; i++) {
  const div = document.createElement('div');

  div.innerHTML = `
		<li>
			<a href="#${newsFeed[i].id}">${newsFeed[i].title} (${newsFeed[i].comments_count})</a>
		</i>
	`;

  ul.appendChild(div.firstElementChild);
}

container.appendChild(ul);
container.appendChild(content);
