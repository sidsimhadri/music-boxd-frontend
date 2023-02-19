const StarRating = (rating) => {
    var i;
    let ret = ``;
    for (i = 0; i < Math.floor(rating); i++) {
        ret += `<i class="fa fa-star pe-1" style="color: salmon"> </i>`;
    }
    while (i < 5) {
        ret += `<i class="opacity-low fa fa-star pe-1" style="color: salmon"> </i>`;
        i += 1;
    }
    
    return ret;
}

export default StarRating;