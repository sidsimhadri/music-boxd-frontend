import StarRating from "../StarRating/index.js";

const FeaturedReviewItem = (review) => {
    return (`
    <div class="card border-info mb-3" style="max-width: 70%">
        <div class="row card-body">
            <div class="col-8"> 
                <h4 class="card-title small-margin-bottom text-white"><i><a href="#">${review.title}</a></i></h4>
                <h6 class="text-white"><a href="#">${review.artist}</a> • ${review.year}</h6>
                ${StarRating(review.rating)}
                <h6 class="text-muted">${review.reviewer} - ${review.timestamp}</h6>
                <p class="card-text">${review.review}</p>
                <button class="thumb"><i class="fa fa-thumbs-up"></i></button><span>${review.likes} </span>
                <button class="thumb"><i class="fa fa-thumbs-down"></i></button><span>${review.dislikes} </span>
            </div>
            <img class="album-cover-review-image col-4" src="${review.image}"></img>
        </div>
    </div>
    `)
};

export default FeaturedReviewItem;