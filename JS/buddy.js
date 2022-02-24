const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};
loadBuddies();
const displayBuddies = (data) => {
  const buddies = data.results;
  const showBuddies = document.getElementById("find-buddy");
  for (const buddy of buddies) {
    console.log(buddy);
    const p = document.createElement("p");
    p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
    User Name: ${buddy.login.username}
    Email: ${buddy.email}
    Password: ${buddy.login.password}
    `;
    showBuddies.appendChild(p);
  }
};
