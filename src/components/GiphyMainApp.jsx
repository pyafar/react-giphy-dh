import React, { useState }  from 'react';
import '../App.css'
import AddGiphyCategory from './AddGiphyCategory';
import GiphyGrid from './GiphyGrid';


 const GiphyMainApp = () => {
    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    


  return (
    <main className = "App">

        <section>
            <h1>
                GiphyMainApp
            </h1>
        </section>
            
            { /* addgiphycategory */ }
        <section>
            {/* onNewCategory es la lógica que se va a ejecutar en el hijo,
            y la recibo como onAddCategory. Como envio lo mismo que recibo va
            simplificado así. Sino o si recibiera dos, iría
            (newCategory) => onAddCategory(newCategory) */}
            < AddGiphyCategory onNewCategory = { onAddCategory } />
        </section>

        <section>
            {/* giphygrid*/}
            {
                categories.map(category => {
                    return <GiphyGrid
                            key = { category }
                            category = {category}
                            />
                }

                )
            }
        </section>
{/* 
            {
                categories.map(category => {
                    return(
                        <div key={category}>
                            <h4>{category}</h4>
                            <hr />
                        </div>
                    )
                })
            } */}
    </main>
  )

}

export default GiphyMainApp;