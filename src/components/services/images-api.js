function fetchImage(searchQuery) {
  return;
  fetch(
    'https://pixabay.com/api/?key=19110749-e340c63922b3f8a4d502270f7&q=yellow+flowers&image_type=photo',
  )
    .then(response => response.json())
    .then(console.log);
  // fetch(
  //   'https://pixabay.com/api/?q={searchQuery}&page=1&key=19110749-e340c63922b3f8a4d502270f7&image_type=photo&orientation=horizontal&per_page=12'
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       return Promise.reject(new Error(`Нет картинки по с таким названием `));
  //     })
  //     .then(console.log),
  // );
}

const api = { fetchImage };
export default api;
