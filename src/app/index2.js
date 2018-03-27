function index2() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Hello index2"

    var show = (c) => console.log(c);
    show("hello!!");

    const arr = [1, 2, 3];
    const iAmJavascriptES6 = () => console.log(...arr);
    window.iAmJavascriptES6 = iAmJavascriptES6;

    return element;
}

document.body.appendChild(index2());