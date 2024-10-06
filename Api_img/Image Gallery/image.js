const contain = document.getElementById(".containor");

const btn = document.getElementById("btn");
const url = " https://image.unsplash.com/example";
const getImg = () => {
    fetch(url).then((Response) => {

        if (Response.ok) {
            return Response.json();
        } else {
            console.log("wrong")
        }
    }).then((data) => {

        console.log(data.joke)
    })
}

btn.addEventListener("click", getImg)