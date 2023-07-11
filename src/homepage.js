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
    description.innerHTML = "It's finger-lickin' good";

    //bottom section container
    const bottomContainer = document.createElement("div");
    bottomContainer.setAttribute("id","bottom-container");

    //bottom section inside container
    const orderSection = document.createElement("div");
    orderSection.setAttribute("id","order-container");
    //order now
    const orderNow = document.createElement("div");
    orderNow.setAttribute("id", "order-now");
    orderNow.innerHTML = "Order Now"
    //order logo one
    const orderLogoOne = document.createElement("div");
    orderLogoOne.setAttribute("id","order-logo-one");
    //order logo two
    const orderLogoTwo = document.createElement("div");
    orderLogoTwo.setAttribute("id","order-logo-two");


    //appends
    content.appendChild(container);
    container.appendChild(about);
    about.appendChild(logo);
    about.appendChild(description);
    content.appendChild(bottomContainer);
    bottomContainer.appendChild(orderSection);
    orderSection.appendChild(orderNow);
    orderSection.appendChild(orderLogoOne);
    orderSection.appendChild(orderLogoTwo);
}