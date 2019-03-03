"use strict";

$(function () {
    $.getJSON('get-dates.json', function (data) {
        var but = document.querySelector("#loadMore");
        var List = data.data;

        if (localStorage.getItem('json') === null) {
            //перевірка чи є в хран. json
            localStorage.setItem('json', JSON.stringify(List)); //передаем json і переводим в строку json
        }

        var newList = JSON.parse(localStorage.getItem('json')); //розбирає json

        $.each(newList, function (idx, list, obj) {
            //вивидим в html
            $('#table').append("<tr id=\"tr\">" +
                "<td><div class=\"img-wrapp\"><img src='".concat(list.image, "'></div></td>" +
                    " <td><textarea id=\"").concat(idx, "\" name='country' class=\"shows\">").concat(list.country, "</textarea><p class=\"hides\">").concat(list.country, "</p>" +
                    "</td><td><textarea id=\"").concat(idx, "\" name='city' class=\"shows\">").concat(list.city, "</textarea><p class=\"hides\">").concat(list.city, "</p></td>" +
                    "<td><textarea id=\"").concat(idx, "\" name='name' class=\"shows\">").concat(list.name, "</textarea><p class=\"hides\">").concat(list.name, "</p></td>" +
                    "<td><textarea id=\"").concat(idx, "\" name='description' class=\"shows\">").concat(list.description, "</textarea><p class=\"hides\">").concat(list.description, "</p></td>" +
                    "<td><div class=\"edit\"><span class=\"edit-button\"><img class=\"edit-button-width\" src=\"../img/edit.png\" alt=\"\"></span>" +
                    "<span class=\"buttons confirm\">confirm</span><span id=\"").concat(idx, "\" class=\"buttons delete\">delete</span></div></td><tr>"));
        });
        $('.edit-button').click(function () {
            //кнопки
            $(this).hide();
            $(this).siblings().show();
            $(this.parentElement.parentElement.parentElement.querySelectorAll('.shows')).show();
            $(this.parentElement.parentElement.parentElement.querySelectorAll('.hides')).hide();
        });
        $('.shows').on('keyup', function (e) {
            newList[e.target.id][this.name] = event.target.value;
        });
        $('.confirm').click(function () {
            //редактировать
            localStorage.setItem('json', JSON.stringify(newList));
            location.reload();
        });
        $('.delete').click(function () {
            //удалить
            delete newList[this.id];
            localStorage.setItem('json', JSON.stringify(newList));
            location.reload();
        });
        var $rows = $('#table tr'); //поиск

        $('#search').keyup(function () {
            var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase().split(' ');
            $rows.hide().filter(function () {
                var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                var matchesSearch = true;
                $(val).each(function (index, value) {
                    matchesSearch = !matchesSearch ? false : ~text.indexOf(value);
                });
                return matchesSearch;
            }).show();
        });
        $('.header__top__logo').on('click', function (event) {
            //якорь
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        });
        $("tr").slice(0, 10).show(); //load-more

        $("#loadMore").on("click", function (e) {
            e.preventDefault();
            $("tr:hidden").slice(0, 4).slideDown();

            if ($("tr:hidden").length == 0) {
                $("#loadMore").text("No Content").addClass("noContent");
            }
        });
    });
});