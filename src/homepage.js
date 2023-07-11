export default function createHome() {
    const content = document.querySelector("#content");

    //home container
    const container = document.createElement("div");
    container.setAttribute("id","home-container");

    //inside home container
    const about = document.createElement("div");
    about.setAttribute("id","about-container");

    //restaurant name/logo, description
    const logo = document.createElement("div");
    logo.setAttribute("id","logo");
    logo.innerHTML = "Dante Redd";
    const description = document.createElement("div");
    description.setAttribute("id","description");


    //appends
    content.appendChild(container);
    container.appendChild(about);
    about.appendChild(logo);
    about.appendChild(description);

}