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
            </div>` + getStarRanking(release.averageRating) + `</div>
    `);
}

const getStarRanking = (ranking) => {
    let i = 1
    let ret = ``;
    while (i < ranking) {
        ret += `<i class="fa fa-star pe-1" style="color: salmon"> </i>`;
        i += 1;
    }
    while (i < 6) {
        ret += `<i class="fa fa-star pe-1" style="color: gray"> </i>`;
        i += 1;
    }
    return ret;
}

export default TrendingReleaseItem;