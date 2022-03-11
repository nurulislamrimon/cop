const members = [
    { name: "Nurul Islam Rimon", mNo: 01, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 02, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 03, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 04, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 05, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 06, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 07, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 08, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 09, img: "images/001.jpg", mobile: +8801715494846 },
    { name: "Nurul Islam Rimon", mNo: 10, img: "images/001.jpg", mobile: +8801715494846 },
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
// members sub menu section
const addSubmenu = members => {
    const membersContainer = document.querySelector("aside");
    members.forEach(member => {
        const memberContainer = document.createElement("div");
        memberContainer.classList.add("member")
        memberContainer.innerHTML = `
        <a  href="#member${member.mNo}">
        <p><span>${member.mNo}. </span>${member.name}</p>
    </a>`;
        membersContainer.appendChild(memberContainer);
    });
}
addSubmenu(members)