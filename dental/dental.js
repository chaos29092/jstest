window.onload = test();

var keyword_1 = new RegExp(/dental/i);
var keyword_2 = new RegExp(/dentist/i);
var keyword_3 = new RegExp(/odontolog/i);
var keyword_4 = new RegExp(/odontólo/i);
var keyword_5 = new RegExp(/dentur/i);
var keyword_6 = new RegExp(/Dentária/i);

var keyword_no_1 = new RegExp(/student/i);
var keyword_no_2 = new RegExp(/sale/i);
var keyword_no_3 = new RegExp(/market/i);
var keyword_no_4 = new RegExp(/software/i);
var keyword_no_5 = new RegExp(/product/i);
var keyword_no_6 = new RegExp(/support/i);
var keyword_no_7 = new RegExp(/assistant/i);
var keyword_no_8 = new RegExp(/Hygienist/i);

//满足关键词就点击
function do_click() {
    var lis = document.querySelectorAll("li.pymk-card");
    for (var j = 0; j <= lis.length - 1; j++) {

        var li = lis[j];
        var name = li.querySelector('a.name').textContent;

        var ok_1 = keyword_1.test(name);
        var ok_2 = keyword_2.test(name);
        var ok_3 = keyword_3.test(name);
        var ok_4 = keyword_4.test(name);
        var ok_5 = keyword_5.test(name);
        var ok_6 = keyword_6.test(name);

        var no_1 = keyword_no_1.test(name);
        var no_2 = keyword_no_2.test(name);
        var no_3 = keyword_no_3.test(name);
        var no_4 = keyword_no_4.test(name);
        var no_5 = keyword_no_5.test(name);
        var no_6 = keyword_no_6.test(name);
        var no_7 = keyword_no_7.test(name);
        var no_8 = keyword_no_8.test(name);

        var ok = ok_1 || ok_2 || ok_3 || ok_4||ok_5||ok_6;
        var no = !(no_1 || no_2 || no_3 || no_4 || no_4 || no_5 || no_6||no_7||no_8);


        if (ok && no) {
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

        var ok_1 = keyword_1.test(name);
        var ok_2 = keyword_2.test(name);
        var ok_3 = keyword_3.test(name);
        var ok_4 = keyword_4.test(name);
        var ok_5 = keyword_5.test(name);
        var ok_6 = keyword_6.test(name);

        var no_1 = keyword_no_1.test(name);
        var no_2 = keyword_no_2.test(name);
        var no_3 = keyword_no_3.test(name);
        var no_4 = keyword_no_4.test(name);
        var no_5 = keyword_no_5.test(name);
        var no_6 = keyword_no_6.test(name);
        var no_7 = keyword_no_7.test(name);
        var no_8 = keyword_no_8.test(name);

        var ok = ok_1 || ok_2 || ok_3 || ok_4||ok_5||ok_6;
        var no = no_1 || no_2 || no_3 || no_4 || no_4 || no_5 || no_6||no_7||no_8;

        if (!ok || no) {
            li.querySelector('button.bt-close').click();
            break
        }

    }
}

//滚100次，滚到最下面
function scroll_down() {
    for (var i = 0; i < 100; i++) {
        setTimeout("scroll(0,100);", 3000 * i + 1000);
        setTimeout("scroll(0,document.body.scrollHeight)", 3000 * i);
    }
}

//循环400次点击+点X
function test() {

    scroll_down();

    for (var i = 0; i < 500; i++) {
        setTimeout("do_click()", 3000 * i + 300000);
        setTimeout("do_not_click()", 2500 * i + 300000);
    }
}