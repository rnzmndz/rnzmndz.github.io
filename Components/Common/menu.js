//This will tell you which page you are
const currentUrl = document.location.href;
const fileName = currentUrl.substring(currentUrl.lastIndexOf("/") + 1).replace(".html", "");

console.log(fileName);

//list of the link for the fonts
const fonts = [
    "https://fonts.googleapis.com/css?family=Klee+One",
    "https://fonts.googleapis.com/css?family=Aleo"
];

//importing each fonts
fonts.forEach(fontURL => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontURL;
    document.head.appendChild(link);
});

//This is will create the title of the page
const title = document.createElement("title");
const pageLoc = fileName == 'index'? "": (" - " + fileName.toUpperCase());
title.innerText = 'Welcome to My Portfolio' + pageLoc;
document.head.appendChild(title);

//This will create the icon for each page
const icon = document.createElement("link");
icon.rel = "icon";
icon.href = "Images/engineering.ico";
document.head.appendChild(icon);

const cssStyle = document.createElement('link');
cssStyle.rel = "stylesheet";
cssStyle.href = `${fileName}.css`;
document.head.appendChild(cssStyle);

//This will create the menu Bar
const menuBar = 
`
    <header>
        <div class="menu">
            <p id="surname"> Mendoza </p>
            <ul class="navbar">
                <li><a href="/">Home</a></li>
                <li><a href="/Components/About/about.html">About</a></li>
                <li><a href="/Components/Services/services.html">Services</a></li>
                <li><a href="/Components/Portfolio/portfolio.html">Portfolio</a></li>
                <li><a href="/Components/Contact/contact.html">Contact</a></li>
            </ul>
        </div>
    </header>
`;

const menuBarContainer = document.getElementById("menuBar");
if (menuBarContainer) {
    menuBarContainer.innerHTML = menuBar;
}