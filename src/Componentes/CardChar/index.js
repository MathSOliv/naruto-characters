import CardPic from '../CardPic';
import './CardChar.css';

const CardChar = ({ characterInfo }) => {

    return(
        <div className='cardChar' >

            <CardPic pictures={ characterInfo.images } />
            <p>{ characterInfo.name }</p>
        </div>
    )

}

export default CardChar;