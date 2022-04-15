window.addEventListener("load", function() {
    var markerS = []; // The markers themselves
    var markerM = []; // The corresponding slide

    for (let i = 0; i < 20; i++)
    {
        markerS.push(document.getElementById("s"+(i+1)));
        markerM.push(document.getElementById("m"+(i+1)));
        /*console.log(markerS);
        console.log(markerM);*/ // DEBUG


        markerS[i].addEventListener("mouseover", function() {

        markerM[i].style.opacity = "1";
})

        markerS[i].addEventListener("mouseout", function() {

        markerM[i].style.opacity = "0";
        })
    }


   
})



