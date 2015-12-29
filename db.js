    var students=[{
        url:1001,
        name:"Byron",
        headline:23
    },{
        url:1002,
        name:"Frank",
        headline:30
    },{
        url:1003,
        name:"Aaron",
        headline:26
    }];

    person=new Object();

    var myDB={
        name:'added_list',
        version:1,
        db:null
    };

    var user = document.getElementsByClassName('act-set-name-split-link')[0].textContent;

    function openDB (name,version) {
        var version=version || 1;
        var request=window.indexedDB.open(name,version);
        request.onerror=function(e){
            console.log(e.currentTarget.error.message);
        };
        request.onsuccess=function(e){
            myDB.db=e.target.result;
        };
        request.onupgradeneeded=function(e){
            var db=e.target.result;
            if(!db.objectStoreNames.contains(user)){
                var store=db.createObjectStore(user,{keyPath: 'url'});
                store.createIndex('nameIndex','name',{unique:false});
                store.createIndex('headlineIndex','headline',{unique:false});
                store.createIndex('urlIndex','url',{unique:true});
            }
            console.log('DB version changed to '+version);
        };
    }

    function addDataByIndex(db,storeName){
        var transaction=db.transaction(storeName,'readwrite');
        var store=transaction.objectStore(storeName);
        var index = store.index("urlIndex");

        index.get('23').onsuccess=function(e){
            var name=e.target.result;
            if (!name)
            {
                person.name = 'aa';
                person.url = 23;
                person.headline = 333;
                store.add(person);
            }

        }
    }

    function addData(db,storeName){
        var transaction=db.transaction(storeName,'readwrite');
        var store=transaction.objectStore(storeName);

        for(var i=0;i<students.length;i++){
            store.add(students[i]);
        }
    }

    openDB(myDB.name,1);
    //setTimeout("addData(myDB.db,user)",100);
    setTimeout("addDataByIndex(myDB.db,user)",100);