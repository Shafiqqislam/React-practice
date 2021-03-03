fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
    const users = data.results[0];
    const name = users.name;
    const userName = `${name.title} ${name.first} ${name.last}`
    document.getElementById('user-name').innerText = userName;
})