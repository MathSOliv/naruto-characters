import { useEffect, useState } from 'react';
import './FilterContainer.css';
import axios from 'axios';

import Logo from '../../assets/images/Akatsuki-Logo.png'

const FilterContainer = ({ characters }) => {

    const [ villages, setVillages ] = useState([]);
    const [ clans, setClans ] = useState([]);

    useEffect((  ) => {

        const getVillages = async () => {

            try{

                const { data } = await axios.get('https://narutodb.xyz/api/village?page=1&limit=39');
                let villages = data.villages.map( village => village.name ).sort();

                setVillages( villages );

            }catch( error ){
    
                console.log( error )
    
            }

        }

        const getClans = async () => {

            try{

                const { data } = await axios.get('https://narutodb.xyz/api/clan?page=1&limit=58');
                let clans = data.clans.map( clan => clan.name ).sort();
                
                setClans( clans );

            }catch( error ){
    
                console.log( error )
    
            }

        }

        getClans();
        getVillages();

    }, [])

    return(
        <div className='filterContainer' >

            <img src={ Logo } alt='main-logo' className='main-logo' />

            <div className='container-name-filter'>
                <input type='text' placeholder='NAME:' />
            </div>

            <div className='containerClans' >

                <p className='clans-title' >CLANS</p>

                <div className='clans-opt' >

                    { clans.map( clan =>

                        <div className='clan-check' key={ clan } >

                            <label>
                                <input type='checkbox' />
                                { clan }
                            </label>

                        </div>

                    ) }

                </div>

            </div>

            <div className='containerVillages' >

                <p className='villages-title' >VILLAGES</p>

                <div className='villages-opt' >

                    { villages.map( village => 

                    <div className='village-check' key={ village } >

                        <label>
                            <input type='checkbox' />
                            { village }
                        </label>

                    </div>

                    ) }

                </div>

            </div>

        </div>
    )

}

export default FilterContainer;