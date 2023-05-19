function clk()
{
    var data=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var dy=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
            {
                hh-=12;
            }
    }
    if(hh==0)
    {
        hh=12
    }
    var fullTime=`${hh}:${mm} ${am_pm}`
    document.getElementById("time").innerHTML=fullTime
    document.getElementById("sec").innerHTML=ss
    if(mm==0)
    {
        mm="Jan"
    }
    else if(mm=1)
    {
        mm="Feb"
    }
    else if(mm=2)
    {
        mm="Mar"
    }
    else if(mm=3)
    {
        mm="Apr"
    }
    else if(mm=4)
    {
        mm="May"
    }
    else if(mm=5)
    {
        mm="June"
    }
    else if(mm=6)
    {
        mm="Jul"
    }
    else if(mm=7)
    {
        mm="Aug"
    }
    else if(mm=8)
    {
        mm="Sep"
    }
    else if(mm=9)
    {
        mm="Oct"
    }
    else if(mm=10)
    {
        mm="Nov"
    }
    else if(mm=11)
    {
        mm="Dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    var bdy=document.querySelector("body")
    document.getElementById("date").innerHTML=fullDate

    switch(dy)
    {
        case 0: dy="Sunday"
        bdy.style.backgroundImage="ur1(Sunday.jpeg)"
        break;
        case 1: dy="Monday"
        bdy.style.backgroundImage="url1(Monday.jpeg)"
        break;
        case 2: dy="Tuesday"
        bdy.style.backgroundImage="url1(Tuesday.jpeg)"
        break;
        case 3: dy="Wednesday"
        bdy.style.backgroundImage="url1(Wednesday.jpeg)"
        break;
        case 4: dy="Thursday"
        bdy.style.backgroundImage="url1(Thursday.jpeg)"
        break;
        case 5: dy="Friday"
        bdy.style.backgroundImage="url1(Friday.jpeg)"
        break;
        case 6: dy="Saturday"
        bdy.style.backgroundImage="url1(Saturday.jpeg)"
        break;
    }
       document.getElementById("day").innerHTML=dy
       setTimeout(clk,1000);
}
function greet()
{
    // var time=date.getHours()
    //var time=15;
    var date1=new Date()
    var hh1=date1.getHours()
    if(hh1>=5&&hh1<12)
    {
        document.getElementById("msg").innerHTML="Good Mrg!!"
        document.getElementById("vid").src="SunriseVideo.mp4"
    }
    else if(hh1>=12&&hh1<16)
    {
        document.getElementById("msg").innerHTML="Good Aftnoon!!"
        document.getElementById("vid").src="AfternoonVideo.mp4"
    }
    else if(hh1>=16&&hh1<20)
    {
        document.getElementById("msg").innerHTML="Good Evening!!"
        document.getElementById("vid").src="sunsetVideo.mp4"
    }
    else
    {
        document.getElementById("msg").innerHTML="Good Nyt!!"
        document.getElementById("vid").src="nightVideo.mp4"
    }
}
greet()
        function showWindow()
        {
            document.getElementById("greet").style.display="flex"
        }
        setTimeout(showWindow,3000)
        function closeWindow()
        {
            document.getElementById("greet").style.display="none"
        }
        setTimeout(showWindow,3000)