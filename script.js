window.addEventListener("load", function(){
    let json =[];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let spaceTime = [];
            for (let i=0; i<json.length; i++){
                spaceTime.push(json[i].hoursInSpace);
                spaceTime.sort(function(a,b) {
                    return b-a});
            };
            for (let l=0; l<json.length; l++) {
                for (let k=0; k<json.length; k++){
                    if (spacetime[l] === json[k].hoursInSpace){
                        let newDiv = document.createElement('div');
                        newDiv.innerHTML = `<div class="astronaut>
                            <div class="bio">
                            <h3>${json[k].firstname} ${json[k]}</h3>
                            <ul>
                                <li>Hours in space: ${json[k].hoursInSpace}</li>
                                <li>Active: ${json[k].active}</li>
                                <li>Skills: ${json[k].skills}</li>
                            </ul>
                            </div>
                            <img class="avatar" src="${json[k].picture}">
                            </div>`
                        document.body.appendChild(newDiv);
                        newDiv.getElementsByTagName("li")[1].setAttribute("class","active");
                        let active = newDiv.getElementsByClassName("active");
                        if (json[k].active){
                            for(let j = 0; j<active.length;j++){
                                active[j].style.color = "green";
                            }
                        };
                    }
                }
            }
            let phrase = `We have ${json.length} astronauts.`;
            let h = document.createElement("h2");
            h.innerHTML = phrase;
            document.body.appendChild(h);
        });
    });
});