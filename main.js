function textrename1() {
  document.querySelector(".work_menu_one").style = "top:0px";
  document.querySelector(".work_button").style = "display:none";
}
function textrename2() {
  document.querySelector(".work_menu_one").style = "display:none";
  document.querySelector(".work_button").style = "display:flex";
}


function sendMSG() {
    let message = document.querySelector('.sms_input_send').value
    const token = '7113806391:AAEq2TsDph-DN9_ykgd5BZWSBZm9egIJmN0'
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=5391854618&text=${message}`
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true)
    xhttp.send()
}