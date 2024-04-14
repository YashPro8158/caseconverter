let typearea = document.getElementById("typearea");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let capt = document.getElementById("capt");
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let copy = document.getElementById("copy");
let char = document.getElementById("char");
let word = document.getElementById("wrd");
let print = document.getElementById("print");
let clear= document.getElementById("clear");

// to Uppercase
upper.addEventListener("click", function () {

    let mainupper = typearea.value.toUpperCase();
    typearea.value = mainupper;
    // console.log(maininput.toUpperCase());
})

// to Uppercase
lower.addEventListener("click", function () {
    let maininput = typearea.value;

    let mainlower = maininput.toLowerCase();
    typearea.value = mainlower;
    // console.log(maininput.toUpperCase());
})

// 
capt.addEventListener("click", function () {
    let maininput = typearea.value;
    let capitalizedText = capitalize(maininput);
    typearea.value = capitalizedText;
});

function capitalize(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}
bold.addEventListener("click", function () {
    typearea.classList.toggle("boldactive");
})

italic.addEventListener("click", function () {
    typearea.classList.toggle("italicactive");
})


copy.addEventListener("click", async function () {
    typearea.select();
    navigator.clipboard.writeText(typearea.value);
})
typearea.addEventListener("input", function () {
   let count = typearea.value.length;
    char.textContent = count;
    let wordcount = typearea.value.split(" ").length;
    word.textContent = wordcount;
})

typearea.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "c") {
        alert("Manual Copy Not Allowed")
    }
})
print.addEventListener("click", function () {
    let textarea = document.getElementById("typearea");

    let printWindow = window.open('', '_parent');

    printWindow.document.write("<pre>" + textarea.value + "</pre>");


    printWindow.print();
    printWindow.document.close();
})
clear.addEventListener("click",function () {
    typearea.value = "";
    char.textContent = 0;
})

