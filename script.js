function loadpk() {
    let nome = document.getElementById('nomepk').value//Busca o pokemon na API
    let url = `https://pokeapi.co/api/v2/pokemon/${nome}`
    fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error('Erro, o pokemon não existe')//começo da tratativa de erro
            return response.json();//Transforma o resultado em JSON

        })
        .then((data) => {
            console.clear()
            console.log(data)
            document.getElementById('nome').innerHTML = data['name']//Coloca no HTML os resultados
            document.getElementById('numero').innerHTML = 'N° '+ data['id'] 
            let img = data['sprites']['front_default']
            document.getElementById('pic').setAttribute('src', img)
            document.getElementById('tipo').innerHTML = 'Tipo: '+ data['types']['0']['type']['name']
            document.getElementById('altura').innerHTML = 'Altura: ' + data['height']
            document.getElementById('peso').innerHTML = 'Peso: ' + data['weight']

        })
        .catch((error) => {
            console.error(error.message);
            alert(error.message)

        })
}

document.getElementById('btnl').onclick = loadpk;