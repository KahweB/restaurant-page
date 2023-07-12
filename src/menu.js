export default function createMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    //menu container
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container");

    //menu inner container
    const innerContainer = document.createElement("div");
    innerContainer.setAttribute("id","inner-container");
    // IMPORTANT!!!: dear coder. Do not read below. Im ashamed of it.
    // its 4 AM and I dont wanna deal with auto card generating with array for loop.
    // copy paste is what im gonna do.TY 

    //menu card1
    const card1 = document.createElement("div");
    card1.setAttribute("id","card1");
    card1.setAttribute("class","menu-card");
    const card_1_Image = document.createElement("div");
    card_1_Image.setAttribute("class","card-image");
    
    const card_1_ItemContent = document.createElement("div");
    card_1_ItemContent.setAttribute("class","card-content");
    const h4_1 = document.createElement("h4");
    h4_1.innerHTML = "Hamburger";
    const p_1 = document.createElement("p");
    p_1.innerHTML = "Buns, patty, tomato, onions, lettuce, and our secret family recipe.";

    //menu card2
    const card2 = document.createElement("div");
    card2.setAttribute("id","card2");
    card2.setAttribute("class","menu-card");
    const card_2_Image = document.createElement("div");
    card_2_Image.setAttribute("class","card-image");
    const card_2_ItemContent = document.createElement("div");
    card_2_ItemContent.setAttribute("class","card-content");
    const h4_2 = document.createElement("h4");
    h4_2.innerHTML = "Cheeseburger";
    const p_2 = document.createElement("p");
    p_2.innerHTML = "Similar to our hamburger, but with cheese.";
    
    //menu card3
    const card3 = document.createElement("div");
    card3.setAttribute("id","card3");
    card3.setAttribute("class","menu-card");
    const card_3_Image = document.createElement("div");
    card_3_Image.setAttribute("class","card-image");
    const card_3_ItemContent = document.createElement("div");
    card_3_ItemContent.setAttribute("class","card-content");
    const h4_3 = document.createElement("h4");
    h4_3.innerHTML = "Double Cheeseburger";
    const p_3 = document.createElement("p");
    p_3.innerHTML = "Similar to our cheeseburger, but with an extra patty.";
    
    //menu card4
    const card4 = document.createElement("div");
    card4.setAttribute("id","card4");
    card4.setAttribute("class","menu-card");
    const card_4_Image = document.createElement("div");
    card_4_Image.setAttribute("class","card-image");
    const card_4_ItemContent = document.createElement("div");
    card_4_ItemContent.setAttribute("class","card-content");
    const h4_4 = document.createElement("h4");
    h4_4.innerHTML = "Steak";
    const p_4 = document.createElement("p");
    p_4.innerHTML = "A juicy steak made just how you like it.";


    //append
    content.appendChild(menuContainer);
    menuContainer.appendChild(innerContainer);
    //card1
    innerContainer.appendChild(card1);
    card1.appendChild(card_1_Image);
    card1.appendChild(card_1_ItemContent);
    card_1_ItemContent.appendChild(h4_1);
    card_1_ItemContent.appendChild(p_1);
    //card2
    innerContainer.appendChild(card2);
    card2.appendChild(card_2_Image);
    card2.appendChild(card_2_ItemContent);
    card_2_ItemContent.appendChild(h4_2);
    card_2_ItemContent.appendChild(p_2);
    //card3
    innerContainer.appendChild(card3);
    card3.appendChild(card_3_Image);
    card3.appendChild(card_3_ItemContent);
    card_3_ItemContent.appendChild(h4_3);
    card_3_ItemContent.appendChild(p_3);
    //card4
    innerContainer.appendChild(card4);
    card4.appendChild(card_4_Image);
    card4.appendChild(card_4_ItemContent);
    card_4_ItemContent.appendChild(h4_4);
    card_4_ItemContent.appendChild(p_4);
    
}