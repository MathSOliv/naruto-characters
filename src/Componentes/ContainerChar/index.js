import CardChar from '../CardChar';
import './ContainerChar.css';

const ContainerChar = ({ characters }) => {

    return( 
        <div className='containerChar' >
            { characters.map( character => <CardChar characterInfo={ character } /> ) }
        </div>
    )

}

export default ContainerChar;