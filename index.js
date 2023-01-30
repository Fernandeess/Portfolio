
// var imagens = ["assets/imgs/cadastro.png",
//     "assets/imgs/GameOfThrones.png",
//     "assets/imgs/homepageGot.png",
//     "assets/imgs/indexpage.png"];

// var i = 0;
// var tempo = 3500;
// var intervalo = setInterval(() => {
//     if (i == 4) {
//         i = 0;
//     }

//     projectIMG.src = imagens[i];
//     i++
// }
//     , tempo);


var imagens2 = [["assets/images/IndexGot.png", "assets/images/CadastroGot.png", "assets/images/HomeLogadoGot.png", "assets/images/PerfilGot.png", "assets/images/QuizGot.png", "assets/images/ResultadoGot.png"], ["assets/images/indexDatafound.png", "assets/images/cadastrodatafound.png", "assets/images/loginDataFound.png", "assets/images/dashboard.png"]];

function changeIMG(project, images, time) {

    var i = 0;
    project.src = images[0];
    var intervalo = setInterval(() => {
        if (i == images.length) {
            i = 0;
        }

        project.src = images[i];
        i++
    }
        , time);
}
changeIMG(projectIMG, imagens2[0], 3300);
changeIMG(projectIMG1, imagens2[1], 3500);
