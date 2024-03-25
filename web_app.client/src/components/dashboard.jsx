import { useState, useEffect, useCallback } from 'react';

function Dashboard() {
    const [pokemonData, setPokemonData] = useState();
    const [requestURL, setRequestURL] = useState('https://pokeapi.co/api/v2/pokemon/')

    const getPokemonData = useCallback(async () => {
        var isSubscribed = true;
        const response = await fetch(requestURL);
        const data = await response.json();
        if (isSubscribed) {
            setPokemonData(data);
        }
        return () => isSubscribed = false;
    }, [requestURL])

    useEffect(() => {
        getPokemonData().catch(console.error);
    }, [getPokemonData])

    return (
        <div className="layout-wrapper">
            {pokemonData &&
                (<table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonData.results.map((poke) =>
                    <tr key={poke.name}>
                        <td>{poke.name}</td>
                        <td>description</td>
                        <td>description</td>
                    </tr>)}
                </tbody>
                <br></br>
                {pokemonData.previous && <button id="prevBtn" className="layout-button" type="button" onClick={() =>
                    setRequestURL(pokemonData.previous)} >Previous</button>}
                {pokemonData.next && <button id="nextBtn" className="layout-button" type="button" onClick={() =>
                    setRequestURL(pokemonData.next)} >Next</button>}
                </table>
                )
            }
        </div>
    );
}

export default Dashboard;