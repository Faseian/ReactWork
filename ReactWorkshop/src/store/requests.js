export function getAnimePath(genre) {
    switch (genre) {
        case 'Award Winning':
            return "http://localhost:3000/api/animes/award-winning?genre=Award Winning";
            break;
        case 'Action':
            return "http://localhost:3000/api/animes/action?genre=Action";
            break;
        case 'Suspense':
            return "http://localhost:3000/api/animes/suspense?genre=Suspense";
            break;
        case 'Horror':
            return "http://localhost:3000/api/animes/horror?genre=Horror";
            break;
        case 'Avant Garde':
            return "http://localhost:3000/api/animes/avant-garde?genre=Avant Garde";
            break;
        case 'Sports':
            return "http://localhost:3000/api/animes/sports?genre=Sports"
            break;
        case 'Supernatural':
            return "http://localhost:3000/api/animes/supernatural?genre=Supernatural";
            break;
        case 'Fantasy':
            return "http://localhost:3000/api/animes/fantasy?genre=Fantasy";
            break;
        case 'Gourmet':
            return "http://localhost:3000/api/animes/gourmet?genre=Gourmet";
            break;
        case 'Drama':
            return "http://localhost:3000/api/animes/drama?genre=Drama";
            break;
        case 'Comedy':
            return "http://localhost:3000/api/animes/comedy?genre=Comedy";
            break;
        case 'Mystery':
            return "http://localhost:3000/api/animes/mystery?genre=Mystery";
            break;
        case 'Slice of Life':
            return "http://localhost:3000/api/animes/slice-of-life?genre=Slice of Life";
            break;
        case 'Adventure':
            return "http://localhost:3000/api/animes/adventure?genre=Adventure";
            break;
        case 'Romance':
            return "http://localhost:3000/api/animes/romance?genre=Romance";
            break;
        case 'Sci-Fi':
            return "http://localhost:3000/api/animes/sci-fi?genre=Sci-Fi";
            break;
        default:
            break;
    }
}

export default {getAnimePath};