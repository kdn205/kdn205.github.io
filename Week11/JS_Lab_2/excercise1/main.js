var timer = null;
function play() {
    var daysOfWeek = ["Chủ nhật", "Thứ hai", 
        "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    var today = new Date();
    document.f.d.value = "Hôm nay là:" + daysOfWeek[today.getDay()] +
                        ", ngày "      + today.getDate() +
                        ",tháng "      + (today.getMonth() + 1) +
                        ", năm "        + today.getFullYear() ;
    h = today.getHours();
    document.f.t.value = "Bây giờ là: " + (h>12? h-12: h) +
                        ":"             + today.getMinutes() +
                        ":"             + today.getSeconds() +
                        " "             +(h>11? "PM" : "AM") ;
    timer = settimeout("play()", 1000);
                
}
function stop() {clearTimeout(timer);}