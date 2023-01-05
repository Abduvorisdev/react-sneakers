function Card() {
    return(
        <div className="card">
        <div className="favourite">
            <img width={30} height={30} src="/img/heart-unliked.svg" alt="unliked-heart" />
        </div>
        <img width={133} height={112} src="/img/sneakers/img1.jpg" alt="sneaker" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 900 руб.</b>
            </div>
            <button className='button'>
                <img width={32} height={32} src="/img/plus-btn.svg" alt="plus" />
            </button>
        </div>
    </div>
    )
}


export default Card;