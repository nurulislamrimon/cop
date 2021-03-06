const members = [
    { name: "Nurul Islam Rimon", mNo: 01, img: "images/001.jpg", mobile: +8801715494846, father: "Noor Nobi", ratio: 5, lastDeposit: 500, totalDeposit: 2900, invest: 2500, expense: 190 },
    { name: "Shannto", mNo: 02, img: "images/002.jpg", mobile: +8808477488 },
    { name: "Nurul Islam Rimon", mNo: 03, img: "images/003.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 04, img: "images/004.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 05, img: "images/005.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 06, img: "images/006.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 07, img: "images/007.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 08, img: "images/008.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 09, img: "images/009.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 10, img: "images/010.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 11, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 12, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 13, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 14, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 15, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 16, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 17, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 18, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 19, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 20, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 21, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 22, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 23, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 24, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 25, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 26, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 27, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 28, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 29, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 30, img: "images/001.jpg", mobile: +8801715494846 }
];
const committee = [
    { name: "Nurul Islam", designation: "Managing Director", mobile: +8801715494846, img: "images/001.jpg" },
    { name: "Nurul Islam", designation: "Managing Director", mobile: +8801715494846, img: "images/001.jpg" },
    { name: "Nurul Islam", designation: "Managing Director", mobile: +8801715494846, img: "images/001.jpg" },
    { name: "Nurul Islam", designation: "Managing Director", mobile: +8801715494846, img: "images/001.jpg" },
    { name: "Nurul Islam", designation: "Managing Director", mobile: +8801715494846, img: "images/001.jpg" }
]
const directors = [
    { name: "Nurul Islam", designation: "Managing Director", mobile: +8801715494846, img: "images/001.jpg" },
    { name: "Nurul Islam", designation: "Managing Director", mobile: +8801715494846, img: "images/001.jpg" },
    { name: "Nurul Islam", designation: "Managing Director", mobile: +8801715494846, img: "images/001.jpg" },
    { name: "Nurul Islam", designation: "Managing Director", mobile: +8801715494846, img: "images/001.jpg" },
    { name: "Nurul Islam", designation: "Managing Director", mobile: +8801715494846, img: "images/001.jpg" }
]
// members sub menu section
const addSubmenu = members => {
    const membersContainer = document.querySelector("aside");
    members.forEach(member => {
        const memberContainer = document.createElement("div");
        memberContainer.classList.add("member");
        memberContainer.innerHTML = `
        <a  href="#member${member.mNo}">
        <p><span>${member.mNo}. </span>${member.name}</p>
    </a>`;
        membersContainer.appendChild(memberContainer);
    });
}
addSubmenu(members);
// members section
const showMember = members => {
    const memberSection = document.querySelector(".members-container");
    members.forEach(member => {
        const container = document.createElement("a");
        container.classList.add("member");
        container.setAttribute("id", `member${member.mNo}`);
        container.setAttribute("href", `#balance-of-member${member.mNo}`);
        container.innerHTML = `
    <img src="${member.img}" height="250" width="230" alt="">
    <article>
        <h2>${member.mNo}. ${member.name}</h2>
        <h3>Father: ${member.father}</h3>
        <p>Mobile: <a href="tel:${member.mobile}">${member.mobile}</a></p>
    </article>`
        memberSection.appendChild(container)
    })
}
showMember(members);

// committee section
const showCommittee = members => {
    const memberSection = document.querySelector(".committee-container");
    members.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("member");
        div.setAttribute("id", `member${member.mNo}`)
        div.innerHTML = `
    <img src="${member.img}" height="250" width="230" alt="">
    <article>
    <h2>${member.designation}</h2>
        <h3> ${member.name}</h3>
        <p>Mobile: <a href="tel:${member.mobile}">${member.mobile}</a></p>
    </article>`
        memberSection.appendChild(div)
    })
}
showCommittee(committee);
// finance section
const financeTable = members => {
    const financeTbody = document.getElementById("finance-tbody");
    members.forEach(member => {
        const row = document.createElement("tr");
        row.setAttribute("id", `balance-of-member${member.mNo}`);
        row.setAttribute("href", `#member${member.mNo}`);
        row.innerHTML = `
        <td>${member.mNo}.</td>
        <td>${member.name}</td>
        <td>${member.ratio}</td>
        <td>${member.lastDeposit}/-</td>
        <td>${member.totalDeposit}/-</td>
        <td>${member.invest}/-</td>
        <td>${member.expense}/-</td>
        <td>Summary</td>`
        financeTbody.appendChild(row);
    })
}
financeTable(members);

// directors section
const showDirectors = members => {
    const directorsSection = document.querySelector(".directors-container");
    members.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("member");
        div.setAttribute("id", `member${member.mNo}`)
        div.innerHTML = `
    <img src="${member.img}" height="250" width="230" alt="">
    <article>
    <h2>${member.designation}</h2>
        <h3> ${member.name}</h3>
        <p>Mobile: <a href="tel:${member.mobile}">${member.mobile}</a></p>
    </article>`
        directorsSection.appendChild(div)
    })
}
showDirectors(directors);

// hamburger menu
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("display");
    document.querySelector(".hamburger").classList.toggle("closeBtn");
})
// active menu
document.querySelector("nav").addEventListener("click", event => {
    const mainMenu = document.getElementsByClassName("main-menu");
    for (const menu of mainMenu) {
        event.target.innerText.includes("Home") ? location.reload() : console.log(event.target.innerHTML);
        menu.classList.remove("active");
    };
    event.target.innerText.includes("Members") ? event.target.classList.add("active") : event.target.innerText.includes("Committee") ? event.target.classList.add("active") : event.target.innerText.includes("Finance") ? event.target.classList.add("active") : event.target.innerText.includes("Directors") ? event.target.classList.add("active") : event.target.classList.add("active");
})