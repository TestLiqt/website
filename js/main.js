function open_sidebar() { document.getElementById("navbar-2").style.width="250px"; }
function close_sidebar() { document.getElementById("navbar-2").style.width="0"; }
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // store current theme as setting
const cb = document.getElementById("opt_color"); // the checkbox


// Get current theme setting;
// Load current theme on start
if (currentTheme) {
    if (currentTheme === 'color') {
        cb.checked = true;
        document.documentElement.style.setProperty('--hgradient', 'linear-gradient(315deg, #c03cff 0%, #784BA0 50%, #2B86C5 100%)');
        document.body.style.setProperty('background-image', 'var(--intro)');
        document.documentElement.style.setProperty('--text-dark', '#6385B5');
        document.documentElement.style.setProperty('--timehover', '#6385B5');
        document.documentElement.style.setProperty('--fb', '#3b5998'); document.documentElement.style.setProperty('--dc', '#7289da'); document.documentElement.style.setProperty('--ig', '#C13584');
    } else if (currentTheme === 'dark') {
        document.documentElement.style.setProperty('--hgradient', 'linear-gradient(315deg, #747474 0%, #656565 50%, #5B5B5B 100%)');
        document.body.style.setProperty('background-image', 'url("assets/bg/bg.jpg")');
        document.documentElement.style.setProperty('--text-dark', '#747474');
        document.documentElement.style.setProperty('--timehover', '#FFFFFF');
        document.documentElement.style.setProperty('--fb', '#333'); document.documentElement.style.setProperty('--dc', '#333'); document.documentElement.style.setProperty('--ig', '#333');
    }
}

// Change theme
function opt_color() {
    if (cb.checked == true){
        localStorage.setItem('theme', 'color');
        document.documentElement.style.setProperty('--hgradient', 'linear-gradient(315deg, #c03cff 0%, #784BA0 50%, #2B86C5 100%)');
        document.body.style.setProperty('background-image', 'var(--intro)');
        document.documentElement.style.setProperty('--text-dark', '#6385B5');
        document.documentElement.style.setProperty('--timehover', '#6385B5');
        document.documentElement.style.setProperty('--fb', '#3b5998'); document.documentElement.style.setProperty('--dc', '#7289da'); document.documentElement.style.setProperty('--ig', '#C13584');
    } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.style.setProperty('--hgradient', 'linear-gradient(315deg, #747474 0%, #656565 50%, #5B5B5B 100%)');
        document.body.style.setProperty('background-image', 'url("assets/bg/bg.jpg")');
        document.documentElement.style.setProperty('--text-dark', '#747474');
        document.documentElement.style.setProperty('--timehover', '#FFFFFF');
        document.documentElement.style.setProperty('--fb', '#333'); document.documentElement.style.setProperty('--dc', '#333'); document.documentElement.style.setProperty('--ig', '#333');
    }
}