const doc = document,
      inputBar = doc.getElementById('input'),
      container = doc.getElementById('pic_container')

inputBar.addEventListener(('keydown'), e=>{
    if(e.key == "Enter"){
        fillContainer(inputBar.value)
        console.log("yapi")
    }
})

function fillContainer(req){
    deletePictures()
    const url = 'https://api.unsplash.com/search/photos?query='+req+'&per_page=12&client_id=qmpjS21eSX5aNbUiKxmhc_LEe0nMhdlhL-32uqeuS7g'
    fetch(url)
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      loadImages(data);
   })

   .catch(error => console.log(error));   
}


function deletePictures(){
    container.innerHTML = ""
}
function loadImages(data){
    for(let i = 0; i < data.results.length; i++){
        let d = doc.createElement("div")
        let s = d.style
        d.className = "img"
        s.backgroundImage = 'url('+data[i].urls.raw;+")"
        d.addEventListener(("dblclick"), e=>{
            window.open(data.results.links.download, "_blank")
        })
        container.appendChild(d) 
    }

}
      
