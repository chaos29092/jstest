window.onload = test();


function dowhat() {
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
        else
        {
            li.querySelector('bt-close').click();
        }

    }
}


function test() {
    for (var i = 0; i < 2; i++) {
        setTimeout("dowhat()", 3000 * i)
    }
}