const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const itemUl = document.querySelector(".gallery");
itemUl.style.display = "flex"
itemUl.style.flexWrap = "wrap"
itemUl.style.justifyContent = "center";
itemUl.style.width = "1440px"; 
itemUl.style.paddingTop = "100px";
itemUl.style.paddingBottom = "100px";
  

const elements = images.map((img) => {
  const image = document.createElement("img")
  image.classList.add("item-img")
  image.style.width = "360px";
  image.style.height = "300px";
  image.src = img.url;
  image.alt = img.alt;
  const createLi = document.createElement("li")
  createLi.style.display = "flex";
  createLi.style.paddingLeft = "20px";
  createLi.style.paddingBottom = "20px";
  createLi.classList.add("list-item")
  createLi.appendChild(image);
  return createLi
})
console.log(elements)
itemUl.append(...elements)




