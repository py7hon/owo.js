window.addEventListener("load",walk(document.body));
var observer = new MutationObserver(function (e) {
        e
            .forEach(function (e) {
                walk(document.body)
            })
    }),
    observerConfig = {
        attributes: !0,
        childList: !0,
        characterData: !0
    },
    targetNode = document.body;
function walk(e) {
    var a,
        o;
    if (!("input" == e.nodeName.toLowerCase() || "textarea" == e.nodeName.toLowerCase() || e.classList && e.classList.contains("ace_editor") || e.tagName in {
        STYLE : 0,
        SCRIPT : 0,
        NOSCRIPT : 0,
        IFRAME : 0,
        OBJECT : 0
    })) 
        switch (e.nodeType) {
            case 1:
            case 9:
            case 11:
                for (a = e.firstChild; a;) 
                    o = a.nextSibling,
                    walk(a),
                    a = o;
                break;
            case 3:
                handleText(e)
        }
    }
observer.observe(targetNode, observerConfig);
var faces = [
    "(・`ω´・)",
    ";;w;;",
    "owo",
    "UwU",
    ">w<",
    "^w^"
];
function handleText(e) {
    var a = e.nodeValue;
    a = (a = (a = (a = (a = (a = (a = a.replace(/(?:r|l)/g, "w")).replace(/(?:R|L)/g, "W")).replace(/n([aeiou])/g, "ny$1")).replace(/N([aeiou])/g, "Ny$1")).replace(/N([AEIOU])/g, "Ny$1")).replace(/ove/g, "uv")).replace(/\!+/g, " " + faces[Math.floor(Math.random() * faces.length)] + " "),
    e.nodeValue = a
}
