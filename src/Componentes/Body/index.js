import ContainerChar from '../ContainerChar';
import './Body.css';

const Body = ({ characters }) => {

    return(
        <div className='bodyChar' >
            <ContainerChar characters={ characters } />
        </div>
    )

}

export default Body;