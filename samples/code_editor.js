var language = "js";

function addCode(code, linesid, boxid)
{
    var box = document.getElementById(boxid);
    var lineCounter = document.getElementById(linesid);

    //clear the codeboxes, etc
    box.innerHTML = "";
    lineCounter.innerHTML = "";
    //end

    var theLines = code.split('\n');
    for(var x in theLines)
    {
        var line = theLines[x];
        var lo = document.createElement("DIV");
        lo.setAttribute("class", "code-line");
        switch(language)
        {
            case "js":
                //Go through line
                //Syntax highlighting
                
                break;
        }
        lo.innerHTML = line.replace("\t", "&nbsp;&nbsp;&nbsp;&nbsp;") + "<br>";
        box.appendChild(lo);
    }
}