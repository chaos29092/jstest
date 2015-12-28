window.onload = test();

var keyword_1 = new RegExp(/market/i);

function do_click() {
    var lis = document.querySelectorAll("li.pymk-card");
    for (var j = 0; j <= lis.length - 1; j++) {

        var li = lis[j];
        var name = li.querySelector('a.name').textContent;
        var full_url = li.querySelector('a.name').href;
        var url=full_url.replace(/&authType=.*/,'');

        var ok_1 = keyword_1.test(name);
        //var ok_2 = keyword_2.test(name);
        //var ok_3 = keyword_3.test(name);
        //var ok_4 = keyword_4.test(name);
        //
        //var no_1 = keyword_no_1.test(name);
        //var no_2 = keyword_no_2.test(name);
        //var no_3 = keyword_no_3.test(name);
        //var no_4 = keyword_no_4.test(name);
        //var no_5 = keyword_no_5.test(name);
        //var no_6 = keyword_no_6.test(name);
        //
        //var ok = ok_1 || ok_2 || ok_3 || ok_4;
        //var no = !(no_1 || no_2 || no_3 || no_4 || no_4 || no_5 || no_6);


        if (ok_1) {
            alert(url);
            break
        }

    }
}

function test() {


    for (var i = 0; i < 1; i++) {
        setTimeout("do_click()", 3000 * i );
        //setTimeout("do_not_click()", 2500 * i + 300000);
    }
}