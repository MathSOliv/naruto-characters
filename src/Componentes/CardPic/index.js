import './CardPic.css';

const CardPic = ({ pictures }) => {

    return(
        <div className='charPic' >
            <img src={ pictures[0] } />
        </div>
    )

}

export default CardPic;