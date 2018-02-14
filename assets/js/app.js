const app = (function () {
        "use strict";

    let bg;
    let answer;

    function ajaxCall(clbk){
        const url = 'https://yesno.wtf/api';
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                clbk(data);
            });
    }

    ajaxCall(function(res){
        bg.style.background = `url('${res.image}') center no-repeat`;
        bg.style.backgroundSize = "cover";
        answer.textContent = res.answer;
    });

    function btn() {
        answer.addEventListener("click", function () {
            window.location.reload();
        });
    }

    window.addEventListener('DOMContentLoaded', function init() {
        bg = document.getElementById("api_test");
        answer = document.getElementById("answer");
        btn();
    });


}());