import StarRating from "../StarRating/index.js";

const FeaturedReviewItem = (review) => {
    return (`
    <div class="card border-dark mb-3" style="max-width: 70%">
        <div class="row card-body">
            <div class="col-8"> 
                <h4 class="card-title small-margin-bottom volkhov text-white"><i><a href="#">${review.title}</a></i></h4>
                <h6 class="text-white nunito"><a href="#">${review.artist}</a> • ${review.year}</h6>
                ${StarRating(review.rating)}
                <h6 class="text-muted nunito"><a href="#">${review.reviewer}</a> - ${review.timestamp}</h6>
                <p class="card-text nunito">${review.review}</p>
                <button class="btn btn-outline-success me-2">
                <i class="fa fa-arrow-up"></i><span class="nunito"> ${review.likes} </span>
                </button>
                <button class="btn btn-outline-danger">
                <i class="fa fa-arrow-down"></i><span class="nunito"> ${review.dislikes} </span>
                </button>
            </div>
            <img class="album-cover-review-image col-4" src="${review.image}"></img>
        </div>
    </div>
    `)
};

export default FeaturedReviewItem;