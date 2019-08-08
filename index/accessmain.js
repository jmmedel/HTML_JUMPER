
  

var accessdatepage; 

// todays date 
var dt = new Date();

var y = dt.getFullYear();
var m = ("00" + (dt.getMonth()+1)).slice(-2);
var d = ("00" + dt.getDate()).slice(-2);
var result = y  + m  + d;
var indexname = "index"
var tmpgetNowYMD = result;
var jyou = "07"
var extension = ".htm"
var fullaccesspath = indexname + tmpgetNowYMD + jyou + extension 

//console.log("Fullaccesspath = " + fullaccesspath );


  // 初日 SET
  // 初日 2019/08/07/
  //var kaisaishonichi = new Date("2019/08/07");
  //var kaisaiyearshonichi = kaisaishonichi.getFullYear();
  //var kaisaimonthsshonichi = ("00" + (kaisaishonichi.getMonth()+1)).slice(-2);
  //var kaisaidaysshonichi = ("00" + kaisaishonichi.getDate()).slice(-2);
  //var kasaifulldateshonichi = indexname + kaisaiyearshonichi + kaisaimonthsshonichi + kaisaidaysshonichi + jyou + extension
  //console.log(kasaifulldateshonichi);


  // 最終日 SET
  // 最終日 2019/08/12/
  //link https://qiita.com/kazu56/items/cca24cfdca4553269cab 
  var kaisaisaishubi = new Date("2019/08/12");
  var kaisaisaishubiyear = kaisaisaishubi.getFullYear();
  var kaisaisaishubimonths = ("00" + (kaisaisaishubi.getMonth()+1)).slice(-2);
  var kaisaisaishubidays = ("00" + kaisaisaishubi.getDate()).slice(-2);
  var kaisaisaishubiCONST = indexname + kaisaisaishubiyear + kaisaisaishubimonths + kaisaisaishubidays + jyou + extension

  
// テスト
//console.log("dt = "+ dt);
//console.log("kaisaisaishubi = "+kaisaisaishubi);
// テスト

//今日に比較
if(dt <= kaisaisaishubi ){
     accessdatepage = fullaccesspath
     //console.log("TRue");
}
// 
else  {
     accessdatepage = kaisaisaishubiCONST;
    // console.log("False");
}

var path = "http://www.gamagori-kyotei.com/asp/gamagori/sp/kyogi/kyogihtml/index/"

document.getElementById("todaysdate").href= path + accessdatepage; 
console.log("todaysdate = "+ accessdatepage);






