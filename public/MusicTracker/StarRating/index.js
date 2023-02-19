const StarRating = (rating) => {
    let i = 1
    let ret = ``;
    while (i < rating) {
        ret += `<i class="fa fa-star pe-1" style="color: salmon"> </i>`;
        i += 1;
    }
    if (rating === 5) {
        ret += `<i class="fa fa-star pe-1" style="color: salmon"> </i>`;
    }
    else {
        while (i < 6) {
            ret += `<i class="opacity-low fa fa-star pe-1" style="color: salmon"> </i>`;
            i += 1;
        }
    }
    return ret;
}

export default StarRating;