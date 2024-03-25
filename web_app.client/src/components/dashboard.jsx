import { useState, useEffect, useCallback } from 'react';

function Dashboard() {
    const [pokemonData, setPokemonData] = useState();
    const [requestURL, setRequestURL] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [imageRequestURL, setImageRequestURL] = useState('');
    const [imageURL, setImageURL] = useState('');

    const getPokemonData = useCallback(async () => {
        var isSubscribed = true;
        const response = await fetch(requestURL);
        const data = await response.json();
        if (isSubscribed) {
            setPokemonData(data);
        }
        data.results.map((pokemon) => setImageRequestURL(pokemon.url));
        return () => isSubscribed = false;
    }, [requestURL])

    const getPokemonImage = useCallback(async () => {
        var isSubscribed = true;
        const response = await fetch(imageRequestURL);
        const data = await response.json();
        if (isSubscribed) {
            setImageURL(data);
        }
        return () => isSubscribed = false;
    }, [imageRequestURL])

    useEffect(() => {
        getPokemonData().catch(console.error);
        getPokemonImage().catch(console.error);
    }, [getPokemonData, getPokemonImage])

    return (
        <div className="layout-wrapper">
            {pokemonData &&
                (<table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>IMAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonData.results.map((pokemon) => (
                    <tr key={pokemon.name}>
                        <td>{pokemon.name}</td>
                            <td>{imageURL ? <img src={imageURL.sprites.other.home.front_default} width={100} height={100} /> : <>Loading...</>}</td>
                    </tr>) ) }

                    {/*this is a silly way of aligning the buttons but I am running out of time*/}

                    {pokemonData.next &&
                        pokemonData.previous &&
                        <>
                            <td align="left">
                                <button id="prevBtn" type="button" onClick={() =>
                                    setRequestURL(pokemonData.previous)} >Previous</button>
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