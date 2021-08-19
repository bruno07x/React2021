import {useState} from 'react'
export function Pokemons({data}){
    let [lvl, setLvl] = useState(0);

    const lvlUp = () => {
        setLvl(lvl + 1);
    }

    return (
        <li>
            <p>{data.name}</p>
            <p>{data.type}</p>
            <button type='button' onClick={() => lvlUp()}>Level: {lvl}</button>
        </li>
    );
}