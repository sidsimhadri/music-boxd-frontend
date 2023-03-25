import StarRating from "../../StarRating/index.js";

const LatestReviewItem = (review) => {
    return (`
    <div class="card border-dark mb-3">
        <div class="row card-body">
            <div class="col-6">
                <img class="album-cover-trending-release" src="${review.image}">
                <div class="row my-auto">  
                    <span class="card-title text-medium small-margin-bottom volkhov text-white">
                        <i><a href="#" class="me-2">${review.title}</a></i>
                        ${StarRating(review.rating)}</span>
                        <div class="row justify-content-center">  
                    <h6 class="text-white nunito"><a href="#">${review.artist}</a> • ${review.year}</h6>
                </div>
                </div>
                
            </div>
            <div class="col-6 center">
                <button class="btn btn-outline-success me-2">
                    <i class="fa fa-arrow-up"></i><span class="nunito"> ${review.likes} </span>
                </button>
                <button class="btn btn-outline-danger me-2">
                    <i class="fa fa-arrow-down"></i><span class="nunito"> ${review.dislikes} </span>
                </button>
                <button class="btn btn-outline-primary me-2">
                    <i class="fa fa-comment"></i><span class="nunito"> ${review.comments} </span>
                </button>
                ${review.currentUser ? `
                    <button class="btn btn-outline-info">
                        <i class="fa fa-edit"></i><span class="nunito"> Edit </span>
                    </button>` : ''}
            </div>
        </div>
    </div>
    `)
};

export default LatestReviewItem;