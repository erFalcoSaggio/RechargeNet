
function changeClassBtnStart () {
    console.log('clicked')
    document.getElementById('title-label-1').className = '';
    document.getElementById('title-label-1').offsetHeight; // Questa riga forza un "reflow"
    document.getElementById('title-label-1').className = 'animate__animated animate__backOutRight';
}

function checkColorScheme() {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkMode) {
        changeMode();
    }
}

// chiamo la verifica del dark mode

if(document.getElementById("style").getAttribute("href") == "styles/main.css") {
    checkColorScheme();
}



function changeMode() {
    const stylesheet = document.getElementById('style');
    console.log(stylesheet); // verifica che l'elemento venga trovato
    
    if (stylesheet) {  // aggiungo un controllo per assicurarti che il tag 'stylesheet' esista
        if (stylesheet.getAttribute('href') === 'styles/dark-mode.css') {
            console.log(1);
            stylesheet.setAttribute('href', 'styles/main.css');
            document.getElementById('mode-btn').innerText = 'dark';
        } else {
            stylesheet.setAttribute('href', 'styles/dark-mode.css');
            document.getElementById('mode-btn').innerText = 'light';
        }
    } else {
        console.error('Elemento stylesheet non trovato!');
    }
}

function changeColor(){

    let stylesheet = document.getElementById("style").getAttribute('href');
    let mode = stylesheet.split("-");

    if ( mode[1] == "default.css"){
        document.getElementById("style").setAttribute( "href" , `${mode[0]}-dark.css` );
    } else {
        document.getElementById("style").setAttribute( "href" , `${mode[0]}-default.css` );
    }
}