import StarRating from "../StarRating/index.js";

const TrendingReleaseItem = (release) => {
    return (`
        <div class="list-group-item no-rounded-tops">
            <img class="album-cover-trending-release" src="${release.image}">
            <a href="#"><h5 class="mb-0"><i>${release.title}</i></h5></a>
            <div>
                <span><a href="#" class="float-left">${release.artist}</a></span>
                <span class="text-muted float-left ps-1">• ${release.year}</span>
            </div><br>
            <div class="text-muted">
                reviews: ${release.reviews}
            </div>` + StarRating(release.averageRating) + `</div>
    `);
}

export default TrendingReleaseItem;