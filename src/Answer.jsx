import React from 'react';
import exciting1 from "./assets/exciting_cat.gif";
import sad1 from "./assets/sad_cat.gif";
import FireWorks from "./FireWorks";

const Answer = () => {
    const handleYesClick = () => {
        alert("Yes! I will be your Valentine, too!");
        <FireWorks />
    };

    const handleNoClick1 = () => {
        document.getElementById("sad-cat").style.display = 'none';
        document.getElementById("sad-cat-2").style.display = 'block';
        document.getElementById("happy-cat").style.display = 'none';
        document.getElementById("happy-cat-2").style.display = 'block';
    };
    const handleNoClick2 = () => {
        document.getElementById("sad-cat-2").style.display = 'none';
        document.getElementById("sad-cat-3").style.display = 'block';
        document.getElementById("happy-cat-2").style.display = 'none';
        document.getElementById("happy-cat-3").style.display = 'block';
    };
    const handleNoClick3 = () => {
        document.getElementById("sad-cat-3").style.display = 'none';
        document.getElementById("sad-cat-4").style.display = 'block';
        document.getElementById("happy-cat-3").style.display = 'none';
        document.getElementById("happy-cat-4").style.display = 'block';
    };
    const handleNoClick4 = () => {
        document.getElementById("sad-cat-4").style.display = 'none';
    };

    return (
        <div className="answer-buttons">
            <button onClick={handleYesClick} className="yes-button" id="happy-cat">
                <img src={exciting1} alt="Exciting Cat" /><br />Yes
            </button>
            <button onClick={handleYesClick} className="yes-button-2 " id="happy-cat-2">
                <img src={exciting1} alt="Exciting Cat" /><br />Yes
            </button>
            <button onClick={handleYesClick} className="yes-button-3 " id="happy-cat-3">
                <img src={exciting1} alt="Exciting Cat" /><br />Yes
            </button>
            <button onClick={handleYesClick} className="yes-button-4 " id="happy-cat-4">
                <img src={exciting1} alt="Exciting Cat" /><br />Yes
            </button>
            <button onClick={handleNoClick1} className="no-button" id="sad-cat">
                <img src={sad1} alt="Sad Cat" /><br />
                No
            </button>
            <button onClick={handleNoClick2} className="no-button-2" id="sad-cat-2">
                <img src={sad1} alt="Sad Cat2" /><br />
                No
            </button>
            <button onClick={handleNoClick3} className="no-button-3" id="sad-cat-3">
                <img src={sad1} alt="Sad Cat3" /><br />
                No
            </button>
            <button onClick={handleNoClick4} className="no-button-4" id="sad-cat-4">
                <img src={sad1} alt="Sad Cat4" /><br />
                No
            </button>
        </div>
    );
};

export default Answer;
