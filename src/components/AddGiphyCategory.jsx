import React, { useState }  from 'react';

const AddGiphyCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length < 2) return;
        //.trim() es una buena práctica porque elimina espacios intermedios
        //y espacios al inicio y al final de una cadena de texto.
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <section>
            <h3>AddGiphyCategory</h3>
            <form onSubmit={onFormSubmit}>
                <input
                    type = "text"
                    placeholder = 'Ingrese una categoria'
                     value = { inputValue }
                    onChange = { onInputChange }
                 />
            </form>
        </section>
    )
}

export default AddGiphyCategory;