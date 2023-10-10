import React, { useState } from 'react'

const API_URL = "https://api.datamuse.com/words?rel_syn="  // +szó

const Synonyms = () => {
    const [word, setWord] = useState("")
    const [synonyms, setSynonyms] = useState([])

    function changeWord(e) {
        setWord(e.target.value)
    }




    function getSynonyms(){
        fetch(API_URL + word)
        .then(res => res.json())
        .then(data => {
           setSynonyms(data)
        })
    }



    return (
        <div>
            <input type="text" value={word} onChange={changeWord} />
            <button onClick= {()=>getSynonyms()}>Give me synonyms!</button>

            <ul>
                {synonyms.map(synonym => <li onClick ={
                    () =>{setWord(synonym.word)
                        getSynonyms()
                    }
                }>{synonym.word}
                </li>
                )}
            </ul>
        </div>
    )
}

export default Synonyms