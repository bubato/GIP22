const api = 'https://63b4064dea89e3e3db541190.mockapi.io/avatar'
fetch(api)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        let htmls = posts.map((post)=>{
            return `
                <div class="gray-item">
                    <img src="${post.avatar}" alt="" style="">
                    <div" style=" ">
                        <h5 >${post.name}</h5>
                        <span >${new Date(post.createdAt).toDateString()}</span>
                    </div>
                </div>
            `
        })
        let html = htmls.join('');
        document.querySelector(".box-item").insertAdjacentHTML('beforeend', html);
    })
    .catch(function(err){
        console.error(err);
    })
