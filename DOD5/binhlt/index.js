
// fetch('https://63b4064dea89e3e3db541190.mockapi.io/avatar')
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data)
//         data.map((item) => {
//             document.getElementById('item').innerHTML = item.name
//             document.getElementById('item').innerHTML = item.id
//         })
//     })
//     .catch(error => console.error(error))

const content = document.getElementById('content');
async function getData() {
    try {
        const response = await fetch('https://63b4064dea89e3e3db541190.mockapi.io/avatar');
        const data = await response.json();
        data.forEach(item => {
                const html = `
                <div class="item" style="" >
                  <img src="${item.avatar}" alt="" style="width: 100%; height: 100%;">
                  <div class="item-body" style=" width:100%; position: absolute; margin-button: 10px; bottom:0">
                    <h5 class="item-title">${item.name}</h5>
                    <span class="item-date">${new Date(item.createdAt).toDateString()}</span>
                  </div>
                </div>
              `;
              content.insertAdjacentHTML('beforeend', html);
            });
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();