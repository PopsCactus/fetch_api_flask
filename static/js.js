var entry = {
    '1': 'enculer',
    '2': 'batard'
};

function enculer() {
    setInterval(async function(){
        fetch('/api', {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify(entry),
            cache: "no-cache",
            headers: new Headers({"content-type": "application/json"})
        })
        .then(function (reponse) {
        
            if (reponse.status !== 200){
                console.log('Reponse au serveur na pas pu etre établie')
            }
        
            reponse.json().then(function (data) {
                console.log(data.Message)
                document.getElementById('info').innerText = data.Message
            })
        })
    }, 3000);
    
}
