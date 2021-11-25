// access html element only when finished loading
window.addEventListener("load", () => {
    let burger = document.getElementById("burger");
    let cross = document.getElementById("close");
    let slogan = document.querySelectorAll("#slogan, #slogan-2, #slogan-3");
    let btn = document.querySelectorAll(".btn, .btn-speisen");


    // debugger
    burger.addEventListener("click", () => {
        let sideNav = document.getElementById("sideNav");
        sideNav.style.width = "100vw";
        sideNav.style.height = "100vh";
        slogan[0].style.display = "none";
        slogan[1].style.display = "none";
        slogan[2].style.display = "none";
        btn[0].style.display = "none";
        btn[1].style.display = "none";
        btn[2].style.display = "none";
        document.querySelector(".body").style.overflowY = "noscroll"

    })
    cross.addEventListener("click", () => {
        let sideNav = document.getElementById("sideNav");
        sideNav.style.width = "0";
        sideNav.style.height = "0";
        slogan[0].style.display = "block";
        slogan[1].style.display = "block";
        slogan[2].style.display = "block";
        btn[0].style.display = "block";
        btn[1].style.display = "block";
        btn[2].style.display = "block";

    })
})