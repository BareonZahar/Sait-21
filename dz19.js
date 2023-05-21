
let forma = document.getElementById('form1')

forma.onsubmit = f1

function f1(){
    console.log(forma.elements)
     console.log(forma.elements.length)
    let stroka=''
    let elems = forma.elements
    for (e in elems) {
        if (elems[e].type == 'checkbox' && elems[e].checked) {

            stroka += elems[e].name
            stroka += ' --выбран' + '\n'
        }
         if (elems[e].type == 'radio' && elems[e].checked) {

             stroka += elems[e].name
             stroka += '--' + elems[e].value + '\n'
         }
        if(e==forma.elements.length-1){break}
        if(elems[e].name==''){continue}
         if(elems[e].value==undefined){continue}
         if(elems[e].type != 'checkbox' && elems[e].type != 'radio') {
             stroka += elems[e].name
             stroka += '--' + elems[e].value + '\n'
         }
    }
    console.log(stroka)
    telegram(stroka)
    return false
}
/*
 // failPc(stroka)
    // sendemail(stroka)
function failPc(str){
let blob = new Blob([str], {type: "text/plain"});
let link = document.createElement("a");
link.setAttribute("href", URL.createObjectURL(blob));
link.setAttribute("download", "000.txt");
link.click();
}
 function sendemail(str) {
    str=str.replaceAll('\n','<br>')
    Email.send({
        SecureToken: "6b088908-440f-4331-a728-84663f7fabd5",
        To: 'zatst.rem@gmail.com',
        From: "zatst.rem@gmail.com",
        Subject: "Test email",
        Body: str
    })
     alert('Отправлено на почту')
}
*/
bot='t.me/derelpbot'
token='6218039543:AAHOlxQhXg86dWHwzoSemgSl73-RCJdaJic'
chatid='5241790764'

function telegram(str){
let z=$.ajax({
type: "POST",
url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
data: "parse_mode=HTML&text="+encodeURIComponent(str),
}).then(alert('отправили в тг') )
}


