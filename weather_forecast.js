function bgchange()
{
    var x=document.getElementsByClassName("page1")[0].style;
    x.marginTop="-25%";
    x.transition="1s";
}
//addEventListener=new addEventListener(onmouse   ,comedown);
function comedown()
{
    var x=document.getElementsByClassName("page1")[0].style;
    x.marginTop="0%";
    x.transition="1s";
}