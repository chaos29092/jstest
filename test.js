window.onload = test();

//满足关键词就点击
function do_click() {
    var lis = document.querySelectorAll("li.pymk-card");
    for (var j = 0; j <= lis.length - 1; j++) {

        var li = lis[j];
        var name = li.querySelector('a.name').textContent;

        var keyword_1 = new RegExp(/Marketing/i);
        var keyword_2 = new RegExp(/vét/i);
        var keyword_3 = new RegExp('vet');

        var ok_1 = keyword_1.test(name);
        var ok_2 = keyword_2.test(name);
        var ok_3 = keyword_3.test(name);


        if (ok_1 || ok_2 || ok_3) {
            li.querySelector('button.bt-request-buffed').click();
            break
        }

    }
}

//不满足关键词就点X
function do_not_click() {
    var lis = document.querySelectorAll("li.pymk-card");
    for (var j = 0; j <= lis.length - 1; j++) {

        var li = lis[j];
        var name = li.querySelector('a.name').textContent;

        var keyword_1 = new RegExp(/Marketing/i);
        var keyword_2 = new RegExp(/vét/i);
        var keyword_3 = new RegExp('vet');

        var ok_1 = keyword_1.test(name);
        var ok_2 = keyword_2.test(name);
        var ok_3 = keyword_3.test(name);

        var ok=ok_1 || ok_2 || ok_3;

        if (!ok) {
            li.querySelector('bt-close').click();
            break
        }

    }
}

//循环400次点击和点X
function test() {
    for (var i = 0; i < 400; i++) {
        setTimeout("do_click()", 3000 * i);
        setTimeout("do_not_click()", 2500 * i)
    }
}