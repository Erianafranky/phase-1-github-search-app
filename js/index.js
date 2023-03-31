
document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#github-form')
    form.addEventListener('submit',(e) =>{
        e.preventDefault();
        let searchUsername = document.querySelector('#search').value
        //alert(search)
        fetch(`https://api.github.com/search/users?q=${searchUsername}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        })
        .then((result) => result.json())
        .then((data) =>{
            console.log(data)
            data.items.forEach((user) => renderUser(user));
        })
    })
})
function renderUser(user){
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    document.querySelector("#user-list").appendChild(userCard);
    userCard.innerHTML = `<img src="${user.avatar_url}" >`
                            + `<h2>${user.login}</h2>`
                            + `<a href="${user.html_url}" target="_blank"><button class="submit-btn fs11">View ${user.login}'s Profile</button></a>`
    
} 
