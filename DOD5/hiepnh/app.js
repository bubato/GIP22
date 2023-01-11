const imageList = document.querySelector(".content");
const link = "https://63b4064dea89e3e3db541190.mockapi.io/avatar";
const getData = async () => {
  const res = await fetch(link).then((res) => res.json());
  res?.map((item) => {

    return imageTemplate(item);
  });
};

function imageTemplate(item) {
  const template = `<div class="card">
    <img src="${item?.avatar}" alt="" class="img"/>
    <div class="desc">
    
    <p class="name">${item?.name}</p>
    <p>${new Date(item?.createdAt).toDateString()}</p>
    </div>
        </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}

getData();
