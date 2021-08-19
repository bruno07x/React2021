import {Pokemons} from '../Pokemons/index'
export function ListPoke(){
    const pokemon = {
        name: 'Bulbasaur',
        type: 'Plant'
    }
    return (
        <section>
            <h1>Lista de Pokemons</h1>
            <ul>
                <Pokemons data={pokemon}></Pokemons>
            </ul>
        </section>
    );
}