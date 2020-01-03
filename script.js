document.write("Temp page");

function showMessage(){
  alert ("click by div");
}

function areaRectangle(obj){
  var a=obj.t1.value;
  var b=obj.t2.value;
  var s=a*b;
  obj.res.value=s;
}

function message(m){
  alert (m);
}

function showDesc(obj, n){
  obj.desc.value=n;
}

function delet(obj){
  obj.desc.value=' ';
}

function areaOfTriangle(obj){
  var a=1*obj.st1.value;
  var b=1*obj.st2.value;
  var c=1*obj.st3.value;
  var p=(a+b+c)/2;
  var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
  s=s.toFixed(2);
  obj.res.value=s;
}

function maxZnach(obj){
  var a=1*obj.zn1.value;
  var b=1*obj.zn2.value;
  var c=1*obj.zn3.value;
  var m=a;
  if (b>m) m=b;
  if (c>m) m=c;
  obj.res.value=m;
}

    function bigPict(obj){
     var w=obj.tigr.width;
     if (w<302){
      obj.tigr.width=w+10;
      obj.tigr.src="images/tigrenok.jpg"
      setTimeout("bigPict()", 500)
     }
    }

    function lilPict(obj){
     var w=obj.tigr.width;
      obj.tigr.width=102;
      obj.tigr.src="images/tigrenok.jpg"

    }