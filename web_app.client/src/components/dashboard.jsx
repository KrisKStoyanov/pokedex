import { useState, useEffect } from 'react';

function Dashboard() {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        populatePokemonData();
    }, [])

    return (
        <div className="layout-wrapper">
            {pokemon &&
                (<table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {pokemon.results.map((poke) =>
                    <tr key={poke.name}>
                        <td>{poke.name}</td>
                    </tr>)}
                </tbody>
                <button type="button" >Next</button>
                </table>
                )
            }
        </div>
    );

    async function populatePokemonData() {
        const response = await fetch(' https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        setPokemon(data);
        console.log(data);
    }
}

export default Dashboard;