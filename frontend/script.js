function loadEvent() {
    let rootElement = document.getElementById("root")

    /* Get form elements */
    let charName = rootElement.querySelector("#charName");
    let charGender = rootElement.querySelector("#charGender");
    let charRace = rootElement.querySelector("#charRace");
    let charClass = rootElement.querySelector("#charClass");

    /* Get sheet elements */
    let charSheetName = rootElement.querySelector(".charNameH1");
    let charSheetGender = rootElement.querySelector(".genderIcon");
    let charSheetRace = rootElement.querySelector(".raceImg");
    let charSheetClass = rootElement.querySelector(".classImg");

    /* Check gender */
    let isMan = true;

    charName.addEventListener("input", function (x) {
        charSheetName.innerHTML = x.target.value;
    })

    charGender.addEventListener("input", function (x) {
        if (x.target.value === "male") {
            charSheetGender.src = "images/male.png";
            charRace.disabled = false;
            charClass.disabled = false;
            isMan = true;
            if (charRace.value === "human") {
                charSheetRace.src = "images/man_head.png"
            }
            if (charClass.value === "jedi") {
                charSheetClass.src = "images/jedi_man.png";
            }
        } else if (x.target.value === "female") {
            charSheetGender.src = "images/female.png";
            charRace.disabled = false;
            charClass.disabled = false;
            isMan = false;
            if (charRace.value === "human") {
                charSheetRace.src = "images/woman_head.png";
            }
            if (charClass.value === "jedi") {
                charSheetClass.src = "images/jedi_woman.png";
            }
        } else {
            charSheetGender.src = "images/droid.png";
            charRace.disabled = true;
            charClass.disabled = true;
            charSheetRace.src = "images/c3po_head.png";
            charSheetClass.src = "images/c3po_body.png"
        }
    })

    charRace.addEventListener("input", function (x) {
        if (x.target.value === "human") {
            if (isMan) {
                charSheetRace.src = "images/man_head.png";
            } else {
                charSheetRace.src = "images/woman_head.png";
            }
        } else if (x.target.value === "tusken") {
            charSheetRace.src = "images/tusken_head.png";
        } else if (x.target.value === "rodian"){
            charSheetRace.src = "images/rodian_head.png";
        } else {
            charSheetRace.src = "images/mando_head.png"
        }
    })

    charClass.addEventListener("input", function (x) {
        if (x.target.value === "jedi") {
            if (isMan) {
                charSheetClass.src = "images/jedi_man.png";
            } else {
                charSheetClass.src = "images/jedi_woman.png";
            }
        } else if (x.target.value === "sith") {
            charSheetClass.src = "images/sith.png";
        } else {
            charSheetClass.src = "images/stormtrooper.png";
        }
    })
}

window.addEventListener("load", loadEvent);