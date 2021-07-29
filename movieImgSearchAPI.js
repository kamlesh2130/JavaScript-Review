const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.dir(form); //- >to know the form directory root.
    const movieSearch = form.elements.movieQuery.value;
    const config = { params : { q: movieSearch, is: 'dance'}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // console.log(res);
    // console.log(res.data[0].show.image.medium);
    appendImg(res.data);

})

const appendImg = (shows) => {
    for (let result of shows) {

        if (result.show.image.medium) {
            const makeImg = document.createElement('IMG');
            makeImg.src = result.show.image.medium;;
            document.body.append(makeImg);
        }
    }
}