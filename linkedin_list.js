window.onload = test();



function do_click(){
    var lis = document.querySelectorAll("li.people");
    for (var j = 0; j <= lis.length - 1; j++) {
        var li = lis[j];
        var sent_state=li.querySelector('a.primary-action-button').className;
        var ifsent=new RegExp('invite-sent');
        var judge = ifsent.test(sent_state);

        if (!judge) {
            li.querySelector('a.primary-action-button').click();
            break;
        }

        //
    }
}

function nextpage(){
    document.querySelector('li.next a').click()
}

function test(){
    for (var i = 0; i < 11; i++) {
        setTimeout("do_click()", 2000 * i );
    }
    setTimeout('nextpage()',25000)
}