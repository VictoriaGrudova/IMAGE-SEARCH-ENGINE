const idKey = "vzfEiS-iGCOcAynUQwkkIP-6u2FMf1q8ABrKcEhyctA";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const serchResult = document.getElementById("serch-result");
const showMoreBtn = document.getElementById("show-more-btn");

let key = "";
let page = 1;



const searchImages = async () => {
  key = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${key}&client_id=${idKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  const results =  data.results;

  if(page === 1){
    serchResult.innerHTML = '';
  }

  results.map((result) => {
    const img = document.createElement('img');
    img.src = result.urls.small;
    const linkPhoto = document.createElement('a');
    linkPhoto.href = result.links.html;
    linkPhoto.target = "_blank";

    linkPhoto.appendChild(img);
    serchResult.appendChild(linkPhoto);
  })
  if(results.length > 0){
      showMoreBtn.style.display = "block";
  }

};

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();

})

showMoreBtn.addEventListener('click', (e) => {
    page++
    searchImages();
})
