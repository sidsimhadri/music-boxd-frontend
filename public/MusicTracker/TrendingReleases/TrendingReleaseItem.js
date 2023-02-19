import StarRating from "../StarRating/index.js";

const TrendingReleaseItem = (release) => {
    return (`
        <div class="list-group-item no-rounded-tops">
            <img class="album-cover-trending-release" src="${release.image}">
            <a href="#"><h6 class="mb-0 volkhov">${release.title}</h6></a>
            <div>
                <span><a href="#" class="float-left text-small nunito">${release.artist}</a></span>
                <span class="text-muted text-small float-left nunito ps-1">• ${release.year}</span>
            </div><br>
            <div class="text-muted text-small nunito">
                reviews: ${release.reviews}
            </div>` + StarRating(release.averageRating) + `</div>
    `);
}

export default TrendingReleaseItem;