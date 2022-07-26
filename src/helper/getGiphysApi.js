export const getGiphys = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=tKvfHKdxwrH0f7Vs44gxsHNWh7eE89mM&q=${category}&limit=10`;

    const response = await fetch(url);
    const { data } = await response.json();

    //como data es un array, lo recorremos con .map()
    const giphys = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images.downsized_large.url
        }
    });

    return giphys;
    //esto va a ser un array de objetos con los datos de los giphy, de 10 posiciones porque es lo
    //que pusimos en el limit
}