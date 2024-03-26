import { useState, useEffect, useCallback } from 'react';

function Dashboard() {
    const [pokemonPage, setPokemonPage] = useState();
    const [requestURL, setRequestURL] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [pokemonDetails, setPokemonDetails] = useState([]);

    const getPokemonData = useCallback(async () => {
        var isSubscribed = true;
        const response = await fetch(requestURL);
        const data = await response.json();
        if (isSubscribed) {
            setPokemonPage(data);
            const pokemonURLs = data.results.map((pokemon) => pokemon.url);
            
            const promises = pokemonURLs.map(url => fetch(url));

            const responses = await Promise.all(promises);

            const pokemonDetails = await Promise.all(responses.map(r => r.json()));
            setPokemonDetails(pokemonDetails);
            console.log(pokemonDetails);
        }
        return () => isSubscribed = false;
    }, [requestURL])

    useEffect(() => {
        getPokemonData().catch(console.error);
    }, [getPokemonData])

    return (
        <div className="layout-wrapper">
            {pokemonPage &&
                (<table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>IMAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonDetails.map((pokemon) => (
                        <tr key={pokemon.name}>
                            <td>{pokemon.name}</td>
                        <td><img src={pokemon.sprites.other.home.front_default} width={100} height={100} /></td>
                    </tr>) ) }

                    {/*this is a silly way of aligning the buttons but I am running out of time*/}

                    {pokemonPage.next &&
                        pokemonPage.previous &&
                        <>
                            <td align="left">
                                <button id="prevBtn" type="button" onClick={() =>
                                setRequestURL(pokemonPage.previous)} >Previous</button>
                            </td>
                            <td align="right">
                                <button id="nextBtn" type="button" onClick={() =>
                                setRequestURL(pokemonPage.next)} >Next</button>
                            </td>
                        </>}

                    {pokemonPage.next &&
                        !pokemonPage.previous &&
                        <>
                        <td>
                        </td>
                            <td align="right">
                            <button id="nextBtn" type="button" onClick={() =>
                                setRequestURL(pokemonPage.next)} >Next</button>
                            </td>
                        </>}

                    {!pokemonPage.next &&
                        pokemonPage.previous &&
                        <>
                            <td align="left">
                                <button id="prevBtn" type="button" onClick={() =>
                                setRequestURL(pokemonPage.previous)} >Previous</button>
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