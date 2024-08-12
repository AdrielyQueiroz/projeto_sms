document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#image-picker li");
    const image = document.querySelector("#product-image");

    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const target = e.currentTarget; // Usa o li onde o evento foi adicionado

            buttons.forEach((btn) => {
                btn.querySelector(".color").classList.remove("selected");
            });

            target.querySelector(".color").classList.add("selected");

            image.classList.add("changing");

            const id = target.getAttribute("id");
            image.setAttribute("src", `img/img_jpg/samsung_${id}.jpg`); // caminho da imagem

            setTimeout(() => {
                image.classList.remove("changing"); // remover a classe
            }, 200);
        });
    });
});