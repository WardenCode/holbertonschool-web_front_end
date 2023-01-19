function createElement (data) {
  const text = document.createElement('p');
  text.innerHTML = data;
  document.body.appendChild(text);
}

function queryWikipedia (callback) {
  const request = new XMLHttpRequest();
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  request.onload = () => {
    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      const text = response.query.pages[21721040].extract;
      callback(text);
    }
  };

  request.open('GET', url);
  request.send();
}

queryWikipedia(createElement);
