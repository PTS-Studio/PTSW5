var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    // Открываем модальное окно при нажатии на кнопку
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Закрываем модальное окно при нажатии на <span> (иконка закрытия)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрываем модальное окно, если пользователь нажимает где-либо вне окна
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }