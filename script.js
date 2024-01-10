let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((v) => {
    return v.json(); // This will declutter the date on the URL mentioned above in readable format
  })
  .then((Contests) => {
    console.log(Contests); // the DATA is in array format, v is array
    ihtml = "";

    for (item in Contests) {
      console.log(Contests[item]); // completely decluttered. simply traversed through all element and printing them in console 1 by 1
      ihtml += `
        <div class="card" style="width: 22rem; padding: 2vw; opacity:0.9; background-color: rgba(255, 255, 255, 0.7);">
        <img src="code.jpeg" class="card-img-top" alt="random image">
        <div class="card-body">
            <h5 class="card-title">${Contests[item].name}</h5>
            <p class="card-text">Status : ${Contests[item].status} <br> Site : ${Contests[item].site}</p>
            <p class="card-text">In 24 Hours? ${Contests[item].in_24_hours}</p>
            <p style="text-wrap: nowrap;">Starts at: ${Contests[item].start_time}</p> 
            <p>Ends at: ${Contests[item].end_time}</p> 
            <a href="${Contests[item].url}" class="btn btn-primary">Visit Contest</a>
        </div>
    </div>
        `;
    }
    cardContainer.innerHTML = ihtml;
  });
