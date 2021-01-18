import React from 'react';

const Rating = ({ value, text}) => {

    return(
        <span>
            <i style={styles.style} className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            <i style={styles.style} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            <i style={styles.style} className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            <i style={styles.style} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            <i style={styles.style} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            <span className='rating-span'>{text ? text : ''}</span>
        </span>
    )
}

const styles = {
    style:{
        color: '#f8e825',
        borderColor: 'black',
    }
}

export default Rating;