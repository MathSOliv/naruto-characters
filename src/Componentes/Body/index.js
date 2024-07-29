import ContainerChar from '../ContainerChar';
import FilterContainer from '../FilterContainer';
import './Body.css';

const Body = ({ characters }) => {

    return(
        <div className='bodyChar' >
            <FilterContainer characters={ characters } />
            <ContainerChar characters={ characters } />
        </div>
    )

}

export default Body;