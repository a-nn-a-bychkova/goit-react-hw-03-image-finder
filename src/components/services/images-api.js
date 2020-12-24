function fetchImage() {
  return fetch(
    'https://pixabay.com/api/?key=19110749-e340c63922b3f8a4d502270f7&q=yellow+flowers&image_type=photo'.then(
      response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(new Error(`Нет картинки по с таким названием `));
      },
    ),
  );
}

const api = { fetchImage };
export default api;
