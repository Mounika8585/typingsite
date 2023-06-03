import logo from './logo.svg';
import { useState, useRef, useEffect } from 'react';
import './Test.css';

var temp = 1;
window.tsize = 0;

function Test() {

    var reds = [];
    const [nlines, setLines] = useState(2);
    const [mtop, setTop] = useState(0);
    const inputRef = useRef(null);
    const gpara = "Once upon a time in a faraway land, there lived a young princess named Amelia. She had long, flowing golden hair and sparkling blue eyes. Amelia was known for her kindness and generosity towards others. One day, she received a mysterious letter inviting her to embark on a grand adventure. Excited and filled with curiosity, Amelia set off on her journey. Along the way, she encountered magical creatures and faced thrilling challenges. She traversed dense forests, crossed treacherous rivers, and climbed towering mountains. Each step brought her closer to uncovering the secrets of the enchanted realm. As Amelia ventured deeper into the unknown, she discovered a hidden treasure that held the key to restoring harmony in the kingdom. It was a magical crystal that possessed incredible powers. With the crystal in her possession, Amelia realized the responsibility she carried to protect her land and its inhabitants. Guided by her courage and determination, Amelia returned to her kingdom and rallied her people to unite against a looming threat. Together, they fought bravely, showcasing the strength that lies within every individual. The battle was fierce, but love and justice prevailed. In the end, Amelia's unwavering spirit and selflessness saved the kingdom from darkness. She was hailed as a true hero, and her story was celebrated for generations to come. Amelia's journey taught her the value of perseverance, compassion, and the enduring power of hope. And so, the young princess continued to inspire others with her story, reminding them that within each person lies the potential to make a difference in the world.";

    const calculateWPM = (typedText, referenceText) => {
        const typedWords = typedText.trim().split(" ");
        const referenceWords = referenceText.trim().split(" ");
        let correctCount = 0;
        for (let i = 0; i < typedWords.length; i++) {
          if (typedWords[i] === referenceWords[i]) {
            correctCount++;
          }
          console.log(typedWords[i] + "    and    " + referenceWords[i]);
        }

        console.log(typedText +"hehe"+ referenceText)
        return correctCount;
    };
      
    var timer;
    const startTimer = () => {
        var remainingTime = document.getElementById("duration").value * 60;
        console.log(remainingTime);
        document.getElementById("timer").innerHTML = remainingTime;
        
        timer = setInterval(function() {
          remainingTime--;
          console.log(remainingTime);
          document.getElementById("timer").innerHTML = remainingTime;
          
          if (remainingTime === 0) {
            var typedtext = inputRef.current.value;
            var ptext = document.getElementById("paratext").innerText;
            document.getElementById("score").innerHTML = "<b>"+ calculateWPM(typedtext, ptext) +"</b> WPM";
            document.getElementById("ScoreBg").style.visibility = "visible";
            clearInterval(timer);
          }
        }, 1000);
    }


    const handleInputChange = () => {
        const inputValue = inputRef.current.value;
        const textWidth = getTextWidth(inputValue);
        if(textWidth > 360 * nlines){
            setTop(mtop-48);
            setLines(nlines + 1);
        }
    };

    
    const getTextWidth = (text) => {
        const span = document.createElement('span');
        span.style.visibility = 'hidden';
        span.style.whiteSpace = 'nowrap';
        span.style.position = 'absolute';
        span.innerText = text;
        document.body.appendChild(span);
        const width = span.getBoundingClientRect().width;
        document.body.removeChild(span);
        return width;
    };
      
    
    const handleKeyDown = async (event) => {
        if(temp==1){
            startTimer();
            temp = 0;
        }
        const pressedKey = event.key;
        var ptext = document.getElementById("paratext").innerText;
        if(pressedKey != "Shift")
        {
            if(pressedKey === "Backspace")
            {
                if(window.tsize!=0){
                    window.tsize -= 1;
                }
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
        document.getElementById("paratext").innerHTML = graytext + "<span style='color:rgb(50, 115, 255)'>" + ptext[window.tsize] +"</span>" + ptext.slice(window.tsize+1,ptext.length);
    }


    const goback = () => {
        window.location.reload()
    }

    return (
        <div className="Test">
        <div id="typebox">
            <div id="para">
            <p id="paratext" style={{marginTop:mtop+"px"}}>
                <span style={{color:"rgb(50, 115, 255"}}>O</span>{gpara.slice(1,gpara.length)}
            </p>
            </div>

            <div id="typing">
            <textarea id="typetext" spellCheck="false" autoComplete='off' autoCorrect='off' onChange={handleInputChange} onKeyDown={handleKeyDown} ref={inputRef}/>
            </div>
        </div>

        <button id="backb" onClick={goback}>
            Back
        </button>

        <div id="timer">0</div>


        <div id="ScoreBg">
            <div id="ScoreBox">
                <h3>Your Typing Accuracy:</h3> <br/>
                <h1 id="score"><b>97</b> WPM</h1>
            </div>
        </div>

        
        </div>
    );
}

export default Test;
