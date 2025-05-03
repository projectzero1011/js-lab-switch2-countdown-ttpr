const divId = 'countdown'
const div = document.getElementById(divId);

CountDownToMario(div.dataset.release, divId);

/**
 *  Builds a self-updating countdown.
 *  @param {string|Date} endTime – Launch deadline.
 *  @param {string}       divId  – id of the DOM node for text.
 */
function CountDownToMario(endTime, divId) {
    const end = new Date(endTime);

    // Time constants
    const _second = 1000;
    const _minute = _second * 60;
    const _hour   = _minute * 60;
    const _day    = _hour * 24;

    let timer = document.getElementById(divId);

    let showRemaining = function() {
        let timeNow = new Date();
        let remain = end - timeNow;
        
        if(remain <= 0) {
            timer.textContent = "00 days 00 hrs 00 mins 00 secs";
            let heading = document.getElementById("heading");
            heading.textContent = "Switch 2 is out!";
        }
        else {
            const days = Math.floor(remain / _day);
            remain %= _day;
            const hrs = Math.floor(remain / _hour);
            remain %= _hour;
            const mins = Math.floor(remain / _minute);
            remain %= _minute;
            const secs = Math.floor(remain / _second);
            remain %= _second;

            const pad = n => String(n).padStart(2, "0");

            timer.textContent = 
            `${pad(days)} days ${pad(hrs)} hrs 
            ${pad(mins)} mins ${pad(secs)} secs`
        }
    }

    showRemaining();
    setInterval(showRemaining,_second);
}

/* ======================================================
   📌  HINTS  — uncomment / tweak as you implement
   ------------------------------------------------------
   • Celebration styles
       // document.body.classList.add('launched');

   • Play sound once
       // document.getElementById('coinSound').play();
====================================================== */
