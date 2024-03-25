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

                    {/*this is a silly way of aligning the buttons but I am running out of time*/}

                    {pokemonData.next &&
                        pokemonData.previous &&
                        <>
                            <td align="left">
                                <button id="prevBtn" type="button" onClick={() =>
                                    setRequestURL(pokemonData.previous)} >Previous</button>
                            </td>
                            <td>
                            </td>
                            <td align="right">
                                <button id="nextBtn" type="button" onClick={() =>
                                    setRequestURL(pokemonData.next)} >Next</button>
                            </td>
                        </>}

                    {pokemonData.next &&
                        !pokemonData.previous &&
                        <>
                        <td>
                        </td>
                        <td>
                        </td>
                            <td align="right">
                            <button id="nextBtn" type="button" onClick={() =>
                                setRequestURL(pokemonData.next)} >Next</button>
                            </td>
                        </>}

                    {!pokemonData.next &&
                        pokemonData.previous &&
                        <>
                            <td align="left">
                                <button id="prevBtn" type="button" onClick={() =>
                                    setRequestURL(pokemonData.previous)} >Previous</button>
                            </td>
                        </>}

                    </tbody>
                </table>
                )
            }
        </div>
    );
}

export default Dashboard;