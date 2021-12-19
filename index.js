const container = document.querySelector(".container");
let clickCount = 0;
let boxNo = 0;
let arr = [];
let colorChange = (e) => {
    boxNo++;
    let target = document.getElementById(e.target.id);
    if (target.style.backgroundColor === "blue") {
        target.style.backgroundColor = "red";
        clickCount++;
        arr.push(e.target.id);

    } else {
        target.style.backgroundColor = "blue";
        clickCount--;
        arr = arr.filter((elm) => elm !== e.target.id);
    }

    target.innerHTML = `Box #${boxNo}`

    if (clickCount > 2) {
        let prevTg = document.getElementById(arr[0]);
        prevTg.style.backgroundColor = "blue"
        arr.splice(0, 1);
        clickCount = 2;

    }
}


for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let div = document.createElement("button");
        div.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
        div.setAttribute("id", `${i}${j}`);
        div.setAttribute("class", "sq")
        div.style.height = "90px";
        div.style.width = "25%";
        div.style.backgroundColor = "blue";
        container.appendChild(div)
        div.appendChild
        div.addEventListener("click", colorChange)
    }
}
