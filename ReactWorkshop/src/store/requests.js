export function getAnimePath(genre) {
    switch (genre) {
        case 'Award Winning':
            return "http://localhost:3000/api/animes/award-winning";
            break;
        case 'Action':
            return "http://localhost:3000/api/animes/action";
            break;
        case 'Suspense':
            return "http://localhost:3000/api/animes/suspense";
            break;
        case 'Horror':
            return "http://localhost:3000/api/animes/horror";
            break;
        case 'Avant Garde':
            return "http://localhost:3000/api/animes/avant-garde";
            break;
        case 'Sports':
            return "http://localhost:3000/api/animes/sports"
            break;
        case 'Supernatural':
            return "http://localhost:3000/api/animes/supernatural";
            break;
        case 'Fantasy':
            return "http://localhost:3000/api/animes/fantasy";
            break;
        case 'Gourmet':
            return "http://localhost:3000/api/animes/gourmet";
            break;
        case 'Drama':
            return "http://localhost:3000/api/animes/drama";
            break;
        case 'Comedy':
            return "http://localhost:3000/api/animes/comedy";
            break;
        case 'Mystery':
            return "http://localhost:3000/api/animes/mystery";
            break;
        case 'Slice of Life':
            return "http://localhost:3000/api/animes/slice-of-life";
            break;
        case 'Adventure':
            return "http://localhost:3000/api/animes/adventure";
            break;
        case 'Romance':
            return "http://localhost:3000/api/animes/romance";
            break;
        case 'Sci-Fi':
            return "http://localhost:3000/api/animes/sci-fi";
            break;
        default:
            break;
    }
}

export default {getAnimePath};