function filterGenres(genres) {
    const result = genres.data.filter((e) => {
        if (e._id === 'Hentai' || e._id === 'Ecchi' || e._id === 'Boys Love' || e._id === 'Girls Love' || e._id === 'Erotica') {
            return false;
        } else {
            return true;
        }
        });
    return result;
}

export default filterGenres;