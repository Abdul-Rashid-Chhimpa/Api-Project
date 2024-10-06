const input = document.getElementById("inp");
const btn = document.getElementById("btn");
const box2 = document.getElementById("box2");
const divButton = document.getElementById("divBtn");

// const moreBtn = document.getElementById("moreSearch");

const Access_Key = "dnqrAbUmiXRwhUlfNNnE1ZBSfCJTyn-T2A7mEIAI78k";

const showData = document.getElementById("display-img");

let page = 1;

const getData = async(searchValue, pageNo) => {
    const fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_Page=28&P=${pageNo}age&client_id=${Access_Key}`);
    const jsonData = await fetching.json();

    // console.log(jsonData)
    // console.log(jsonData.results)


    if (pageNo === 1) {
        box2.innerHTML = " ";
        jsonData.results.slice(0, 9).forEach(element => {
            const img = document.createElement("img");
            img.src = element.urls.small;
            box2.appendChild(img);

            const h2 = document.createElement("h2");
            h2.innerText = element.description;
            box2.appendChild(h2);

            const linkContainor = document.createElement("div");
            linkContainor.classList.add("linkContai");

            const downloadPng = document.createElement("img");
            downloadPng.src = './Image Gallery/download.png';
            downloadPng.style.width = "26px";
            downloadPng.style.height = "26px";

            linkContainor.appendChild(downloadPng);

            downloadPng.addEventListener("click", function() {
                let Download = `${element.links.download}`;
                location.href = Download;
            })

            const div = document.createElement("div");
            // console.log(div)

            div.classList.add('card');
            div.appendChild(img);
            div.appendChild(h2)
            box2.appendChild(div);
            div.appendChild(linkContainor)
        })



    } else {


        jsonData.results.slice(0, 3).forEach(element => {

            // console.log(element.links.download)

            // console.log(box2)
            const img = document.createElement("img");
            img.src = element.urls.small;
            box2.appendChild(img);

            const h2 = document.createElement("h2");
            h2.innerText = element.description;
            box2.appendChild(h2);

            const linkContainor = document.createElement("div");
            linkContainor.classList.add("linkContai");

            const downloadPng = document.createElement("img");
            downloadPng.src = './Image Gallery/download.png';
            downloadPng.style.width = "26px";
            downloadPng.style.height = "26px";


            linkContainor.appendChild(downloadPng);
            // console.log(linkContainor)

            downloadPng.addEventListener("click", function() {
                let Download = `${element.links.download}`;
                location.href = Download;
            })



            const div = document.createElement("div");
            // console.log(div)



            div.classList.add('card');
            div.appendChild(img);
            div.appendChild(h2)
            box2.appendChild(div);
            div.appendChild(linkContainor)

            // console.log(div)

            // input.value = "";

        });
    }




};

getData();

btn.addEventListener("click", function() {
    const searchValue = input.value;
    getData(searchValue, 1);




    const moreBtnImages = document.createElement("button");
    moreBtnImages.id = "moreSearch";
    moreBtnImages.innerText = "More Images";
    divButton.appendChild(moreBtnImages);
    moreBtnImages.addEventListener("click", function() {
        const searchValue = input.value;
        getData(searchValue, page++);


    });

});