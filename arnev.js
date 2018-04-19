/*
                                                        
_____ _______  ____   _______  __   ____   ______ ______
\__  \\_  __ \/    \_/ __ \  \/ / _/ ___\ /  ___//  ___/
 / __ \|  | \/   |  \  ___/\   /  \  \___ \___ \ \___ \ 
(____  /__|  |___|  /\___  >\_/ /\ \___  >____  >____  >
     \/           \/     \/     \/     \/     \/     \/ 

arnev.css - a lightweight web framework.

File: arnev.js
Purpose: functions to interact with arnev.css elements.

(C) ASDT 2018.
*/

//Arnev Class
var _Arnev = function()
{
    this.CopyCode = function(codebox_contents)
    {
        var e = document.getElementById(codebox_contents);
        if(e == null) return;
        var win = window.open("about:blank", "", "height=300;width=300;");
        var t = win.document.createElement("TITLE");
        t.innerHTML = "Arnev Code Viewer";
        var acss = document.createElement("style");
        acss.innerHTML = `body {
            padding: 10px;
            margin: 0px;
            background-color: #474747;
            border-color: #2c2c2c;
            border-style: solid;
            border-width: 3px;
            border-radius: 4px;
            padding: 4px;
            color: white;
            font-family: monospace;  
        }
        .arnevcode-keyword {
            color: #0e8bdf;
        }
        
        .arnevcode-number {
            color: #c51bf0;
        }
        `;
        win.document.body.innerHTML += e.innerHTML;
        win.document.body.appendChild(acss);
        win.document.body.setAttribute("class", "codebox");
        win.document.head.appendChild(t);
    }
    this.IsSwitchOn = function(handleId)
    {
        var handle = document.getElementById(handleId);
        if(handle == null) return false;
        if(handle.getAttribute("class").includes("switch-handle-on")) return true;
        else return false;
    }
    this.SetSwitchState = function(handleId, state)
    {
        var handle = document.getElementById(handleId);
        if(handle == null) return false;
        if(state)
        {
            handle.setAttribute("class", "switch-handle-on");
        }
        else
        {
            handle.setAttribute("class", "switch-handle-off");
        }
    }
}

var Arnev = new _Arnev();