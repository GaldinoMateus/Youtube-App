import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) =>{
    const [term,setTerm] = useState('');

   
    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
        // Ao realizar a pesquisa o dado inserio na barra de pesquisa nao some
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form" >
                <div className="field">
                    <label>Procurar Video</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};



export default SearchBar;