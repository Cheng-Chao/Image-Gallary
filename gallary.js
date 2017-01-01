function showPic(whichPic){
    debugger;
    var imageSource = whichPic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',imageSource);
    var text = whichPic.getAttribute('title');
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;
}