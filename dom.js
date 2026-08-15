// ================================
// TASK 9.1 - SELECTING ELEMENTS
// ================================

// 1. getElementById
const header = document.getElementById("main-header");

console.log("Header:", header);


// 2. getElementsByClassName
const contents = document.getElementsByClassName("content");

console.log("Content elements:", contents);


// 3. getElementsByTagName
const paragraphs = document.getElementsByTagName("p");

console.log("Paragraphs:", paragraphs);


// 4. querySelector
const firstLink = document.querySelector(".nav-link");

console.log("First link:", firstLink);


// 5. querySelectorAll
const allLinks = document.querySelectorAll(".nav-link");

console.log("All links:", allLinks);


// Practice questions

// 1. Select the h1
const h1 = document.querySelector("h1");

console.log("H1:", h1);


// 2. Select all content elements
const allContent = document.querySelectorAll(".content");

console.log("All content:", allContent);


// 3. Select the form
const form = document.getElementById("contact-form");

console.log("Form:", form);


// 4. Select the email input
const email = document.getElementById("email");

console.log("Email:", email);


// 5. Select all navigation list items
const navItems = document.querySelectorAll(".nav-list li");

console.log("Navigation items:", navItems);


// 6. Select the first navigation link
const firstNavLink = document.querySelector(".nav-link");

console.log("First navigation link:", firstNavLink);


// 7. Select the last paragraph
const allParagraphs = document.querySelectorAll("p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];

console.log("Last paragraph:", lastParagraph);

// ================================
// TASK 9.2 - TRAVERSING THE DOM
// ================================

// 1. Select the header, then navigate to the nav
const mainHeader = document.getElementById("main-header");
const nav = mainHeader.querySelector("nav");

console.log("Header:", mainHeader);
console.log("Nav inside header:", nav);


// 2. Select the first nav-link, then get its parent li
const firstLink = document.querySelector(".nav-link");
const parentLi = firstLink.parentElement;

console.log("First link:", firstLink);
console.log("Parent LI:", parentLi);


// 3. Select the article, then get its next sibling
const article = document.querySelector("article");
const nextSection = article.nextElementSibling;

console.log("Article:", article);
console.log("Next sibling:", nextSection);


// 4. Select the ul, then get all its child li elements
const navList = document.querySelector(".nav-list");
const listItems = navList.children;

console.log("UL:", navList);
console.log("LI children:", listItems);


// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const body = footer.parentElement;

console.log("Footer:", footer);
console.log("Body:", body);

// ================================
// TASK 9.3 - MODIFYING CONTENT
// ================================

// 1. Change the H1 text
const pageTitle = document.querySelector("h1");

console.log("Original title:", pageTitle.textContent);

pageTitle.textContent = "My DOM Practice";

console.log("New title:", pageTitle.textContent);


// 2. Change the article title
const articleTitle = document.querySelector(".title");

articleTitle.textContent = "Learning DOM Manipulation";


// 3. Change the first paragraph
const firstParagraph = document.querySelector(".content");

firstParagraph.textContent = "I am learning how to manipulate the DOM!";


// 4. Change a link's href
const homeLink = document.querySelector(".nav-link");

homeLink.setAttribute("href", "https://example.com");

console.log("Home link:", homeLink.getAttribute("href"));


// 5. Check if the link has a target attribute
console.log(
    "Has target:",
    homeLink.hasAttribute("target")
);


// 6. Add a target attribute
homeLink.setAttribute("target", "_blank");


// 7. Add a highlight class
articleTitle.classList.add("highlight");


// 8. Change container styles
const container = document.querySelector(".container");

container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// ================================
// TASK 9.4 - ADDING AND REMOVING
// ELEMENTS
// ================================

// Create a new paragraph
const newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was created using JavaScript.";

newParagraph.className = "content highlight";


// Add it to the article
article.appendChild(newParagraph);


// Create a new navigation item
function addNavItem(text, href) {

    const li = document.createElement("li");

    const link = document.createElement("a");

    link.textContent = text;
    link.href = href;
    link.className = "nav-link";

    li.appendChild(link);

    navList.appendChild(li);
}


// Add new navigation links
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");


// Clone an existing navigation item
const firstNavItem = document.querySelector(".nav-list li");

const clone = firstNavItem.cloneNode(true);

clone.querySelector("a").textContent = "New Link";

navList.appendChild(clone);
