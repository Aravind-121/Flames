


$('#cal').click(function(){
    var a=$('#p1').val();
    var b=$('#p2').val();

    a.replace(/\s+/g, '');
    b.replace(/\s+/g, '');

    var i;
    var j;
    a=a.toLowerCase();
    b=b.toLowerCase();

    if(a.length>0 && b.length>0)
    {
        for (i of a){
            for (j of b){
                if (i==j){
                    a=a.replace(i,"")
                    b=b.replace(i,"")
                    break;
                }
            }
        }

        var c=a.length+b.length;
        var d=["Friends","lovers","affection","marriage","enemies","sisters"]
        
        var f;
        
        while(d.length>1){
            f=c%d.length-1
            if (f>=0){
                d=d.slice(f+1,d.length).concat(d.slice(0,f))
            }else{
                d=d.slice(0,d.length-1)
            }
        }
        
        var obj={
            Friends:"#f",
            lovers:"#l",
            affection:"#a",
            marriage:"#m",
            enemies:"#e",
            sisters:"#s"
        }
        
        var D=d[0];
        if(D==="Friends"){
            var ans=obj.Friends;
        }else if(D==="lovers"){
            var ans=obj.lovers;
        }else if(D==="marriage"){
            var ans=obj.marriage;
        }else if(D==="enemies"){
            var ans=obj.enemies;
        }else if(D==="sisters"){
            var ans=obj.sisters;
        }else if(D==="affection"){
            var ans=obj.affection;
        }
        var li=["#f","#l","#a","#m","#e","#s"];
        for(var x=0 ;x < li.length;x++){
            if(li[x]!==ans)
            {
                $(li[x]).fadeOut(1200,function(){
                });
            }
        }
    }else
    {
        alert("This Won't Work if You don't Enter Both the Partner's Name")
    }
});

$('#reload').click(function(){
    location.reload(true);
});
