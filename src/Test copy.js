import logo from './logo.svg';
import { useState, useRef, useEffect } from 'react';
import './Test.css';

window.tsize = 0;
function Test() {

    var reds = [];

    const handleKeyDown = (event) => {
        
        const pressedKey = event.key;
        var ptext = document.getElementById("paratext").innerText;
        
        if(pressedKey != "Shift")
        {
            if(pressedKey === "Backspace")
            {
                if(window.tsize!=0)
                    window.tsize -= 1;
            }
            else{
                window.tsize += 1;
                if(pressedKey != ptext[window.tsize-1])
                {
                    reds.push(window.tsize-1);
                }
                else{
                    reds = reds.filter(item => item !== window.tsize-1);
                }
            }
        }

        
        const res = "";
        var graytext = "";

        for(let i = 0; i < window.tsize ; i++)
        {
            if(reds.includes(i))
            {
                graytext += "<span style='color:red'>"+ptext[i] +"</span>";
            }
            else{
                graytext += "<span style='color:rgb(197, 197, 197)'>"+ptext[i] +"</span>"
            }
        }
        
        document.getElementById("paratext").innerHTML = graytext + ptext.slice(window.tsize,ptext.length);

        var ttext = document.getElementById("typetext").offsetHeight;
        console.log(ttext);
        //var numberOfLineBreaks = (ttext.match(/\n/g)||[]).length;
       // console.log(numberOfLineBreaks)
        
    }
 

    const goback = () => {
        document.getElementById('root2').style.visibility = 'hidden';
    }

    return (
        <div className="Test">
        <div id="typebox">
            <div id="para">
            <p id="paratext">
                He's a 16-time World Champion, New York Times best-selling author and record-setting Make-A-Wish granter. He's
                released a hit album, starred in blockbuster movies and carried the torch for WWE since he first set foot in a
                WWE ring nearly two decades ago. If you really can't see John Cena at this point, chances are you simply aren't
                looking.
            </p>
            </div>

            <div id="typing">
            <textarea id="typetext" onKeyDown={handleKeyDown}/>
            </div>
        </div>

        <button id="backb" onClick={goback}>
            Back
        </button>
        </div>
    );
}

export default Test;
