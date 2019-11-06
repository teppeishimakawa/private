

if(localStorage.getItem("one") !== null)
{
document.getElementById("flg").innerHTML=localStorage.getItem("one")
}


try {
    localStorage.test = 'hoge';
    alert('LocalStorage使えるよ');
    localStorage.setItem("one","localstrageの値");
} catch(e) {
    alert('LocalStorage使えないYO! プライベートブラウズoffにしてね');
    console.error(e);
}


/*
以下の文字列でユーザーエージェントを判別します
osVer = "iPhone";
osVer = "Android";
osVer = "iPod";
osVer = "iPad";
*/

/*iphone andriod判定
var osVer;
osVer = "iPhone";

if (navigator.userAgent.indexOf(osVer)>0){
    alert(osVer);
    func1();
}
*/


/*ブラウザ判定
var userAgent = window.navigator.userAgent.toLowerCase();

if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1 ||) {
    console.log('Internet Explorerをお使いですね');
} else if(userAgent.indexOf('edge') != -1) {
    console.log('Edgeをお使いですね');
} else if(userAgent.indexOf('chrome') != -1) {
    console.log('Google Chromeをお使いですね');
} else if(userAgent.indexOf('safari') != -1) {
    console.log('Safariをお使いですね');
} else if(userAgent.indexOf('firefox') != -1) {
    console.log('FireFoxをお使いですね');
} else if(userAgent.indexOf('opera') != -1) {
    console.log('Operaをお使いですね');
} else {
    console.log('そんなブラウザは知らん');
}
*/

