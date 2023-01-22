var models = [
    {
        name : "Bmw 418d",
        image: "./img/bmw.jpg",
        link : "https://www.bmw418d.com/"

    },
    {
        name : "Mazda CX-3",
        image: "./img/mazda.jpg",
        link : "https://www.mazda.com/"

    },
    {
        name : "Skoda Superb",
        image: "./img/skoda.jpg",
        link : "https://www.skoda.com/"

    },
    {
        name : "Volvo s60",
        image: "./img/volvo.jpg",
        link : "https://www.volvo.com/"

    }
];


let index = 0;
let slaytCount = models.length;

let settings = {
    duration: "2000",
    random : true,
};

let interval;
init(settings);


document.querySelector(".fa-arrow-circle-right").addEventListener("click", () => {
    index ++,
    showModel(index);
    console.log(index);
});

document.querySelector(".fa-arrow-circle-left").addEventListener("click", () => {
    index --,
    showModel(index);
    console.log(index);
});

document.querySelectorAll(".arrow").forEach(function (item) {item.addEventListener("mouseenter", function() {
    clearInterval(interval);
})});

document.querySelectorAll(".arrow").forEach(function (item) {item.addEventListener("mouseleave", function() {
        init(settings);
})});




function showModel(i) {
    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }   
    if (i > slaytCount - 1) {
        index = 0;
    }

document.querySelector(".card-title").textContent = models[index].name;
document.querySelector(".card-img-top").setAttribute("src", models[index].image);
document.querySelector(".card-link").setAttribute("href", models[index].link)
}

function init(settings) {
    let prev;
    interval = setInterval(function() {
        //random index
        if(settings.random) {
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev);
            prev = index;

            
        }
        // reise index

        else {
            if(slaytCount == index +1) 
            {
                index = -1;
                i

            }
            showModel(index);
            console.log(index);
            index++;

        }
        console.log(index);

        showModel(index);
    }, settings.duration);
}
