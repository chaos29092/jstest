window.onload = test();

var myDB = {
    name: 'added_list',
    version: 1,
    db: null
};

var user = document.getElementsByClassName('act-set-name-split-link')[0].textContent;

var keyword_1 = new RegExp(/m/i);
var keyword_2 = new RegExp(/vét/i);
var keyword_3 = new RegExp(/animal Hospital/i);
var keyword_4 = new RegExp(/animal clinic/i);

var keyword_no_1 = new RegExp(/student/i);
var keyword_no_2 = new RegExp(/sale/i);
var keyword_no_3 = new RegExp(/market/i);
var keyword_no_4 = new RegExp(/software/i);
var keyword_no_5 = new RegExp(/product/i);
var keyword_no_6 = new RegExp(/support/i);

//满足关键词就点击
function do_click() {
    var lis = document.querySelectorAll("li.pymk-card");
    for (var j = 0; j <= lis.length - 1; j++) {

        var li = lis[j];
        var name = li.querySelector('a.name').textContent;
        var name_1 = li.querySelector('a.name').innerHTML.replace(/<span.*/, '');
        var headline = li.querySelector('span.a11y-headline').textContent;
        var url = li.querySelector('a.name').href.replace(/&authType=.*/, '');

        var ok_1 = keyword_1.test(name);
        var ok_2 = keyword_2.test(name);
        var ok_3 = keyword_3.test(name);
        var ok_4 = keyword_4.test(name);

        var no_1 = keyword_no_1.test(name);
        var no_2 = keyword_no_2.test(name);
        var no_3 = keyword_no_3.test(name);
        var no_4 = keyword_no_4.test(name);
        var no_5 = keyword_no_5.test(name);
        var no_6 = keyword_no_6.test(name);

        var ok = ok_1 || ok_2 || ok_3 || ok_4;
        var no = !(no_1 || no_2 || no_3 || no_4 || no_4 || no_5 || no_6);



        var aa = ifDataByIndex(myDB.db,user,url);

        if (ok && no && aa) {

               var person = {
                   "name": name_1,
                   "url": url,
                   "headline": headline
               };
               addData(myDB.db, user, person);
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

        var no_1 = keyword_no_1.test(name);
        var no_2 = keyword_no_2.test(name);
        var no_3 = keyword_no_3.test(name);
        var no_4 = keyword_no_4.test(name);
        var no_5 = keyword_no_5.test(name);
        var no_6 = keyword_no_6.test(name);

        var ok = ok_1 || ok_2 || ok_3 || ok_4;
        var no = no_1 || no_2 || no_3 || no_4 || no_4 || no_5 || no_6;

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

//打开数据库
function openDB(name, version) {
    var version = version || 1;
    var request = window.indexedDB.open(name, version);
    request.onerror = function (e) {
        console.log(e.currentTarget.error.message);
    };
    request.onsuccess = function (e) {
        myDB.db = e.target.result;
    };
    request.onupgradeneeded = function (e) {
        var db = e.target.result;
        if (!db.objectStoreNames.contains(user)) {
            var store = db.createObjectStore(user, {keyPath: 'url'});
            store.createIndex('nameIndex', 'name', {unique: false});
            store.createIndex('headlineIndex', 'headline', {unique: false});
            store.createIndex('urlIndex', 'url', {unique: true});
        }
        console.log('DB version changed to ' + version);
    };
}

//检查or添加
function ifDataByIndex(db, storeName, url) {
    var transaction = db.transaction(storeName, 'readwrite');
    var store = transaction.objectStore(storeName);
    var index = store.index("urlIndex");

    index.get(url).onsuccess = function (e) {
        var name = e.target.result;
        if (!name) {
            return true
        }
        else{
            return false
        }

    }
}

function addData(db, storeName, data) {
    var transaction = db.transaction(storeName, 'readwrite');
    var store = transaction.objectStore(storeName);

    store.add(data)
}

//循环400次点击+点X
function test() {

    //scroll_down();

    for (var i = 1; i < 20; i++) {
        setTimeout("do_click()", 3000 * i);
        setTimeout("do_not_click()", 2500 * i);
    }
}

