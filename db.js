var students=[{
    id:1001,
    name:"Byron",
    age:23
},{
    id:1002,
    name:"Frank",
    age:30
},{
    id:1003,
    name:"Aaron",
    age:26
}];

var myDB={
    name:'student',
    version:1,
    db:null
};

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
        if(!db.objectStoreNames.contains('students')){
            var store=db.createObjectStore('students',{keyPath: 'id'});
            store.createIndex('nameIndex','name',{unique:true});
            store.createIndex('ageIndex','age',{unique:false});
        }
        console.log('DB version changed to '+version);
    };
}

function getDataByIndex(db,storeName){
    var transaction=db.transaction(storeName,'readwrite');
    var store=transaction.objectStore(storeName);
    var index = store.index("nameIndex");
    index.get('Byron').onsuccess=function(e){
        var student=e.target.result;
        console.log(student.id);
    };
    index.get('Byron').onerror=function(e){
        store.add();
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
setTimeout("addData(myDB.db,'students')",100);