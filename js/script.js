function load(){
    let firstName = document.getElementById("first");
    let lastName =  document.getElementById("last");
    let address = document.getElementById("address");
    let postal = document.getElementById("postal");
    let button = document.getElementById("submitBtn");

   

    firstName.addEventListener("change", function() {
        if(firstName !== null && firstName.value !== null){
            button.disabled = false;
        }
    });
    
    lastName.addEventListener("change", function(){
        if(lastName !== null && lastName.value !== null){
            button.disabled = false;
        }
    });
    address.addEventListener("change", function(){
        if(address !== null && address.value !== null){
            button.disabled = false;
        }
    });

    postal.addEventListener("change", function(){
        if(postal !== null && postal.value !== null){
            button.disabled = false;
        }
    });

    let squareClick = document.getElementById("square");
    
}

let selection = '';


function placeOrder(){
    let firstName = document.getElementById("first").value;
    let lastName =  document.getElementById("last").value;
    let address = document.getElementById("address").value;
    let postal = document.getElementById("postal").value;

    // let submit = document.getElementById("submit");
    console.log(name);

    if(firstName != ""){
        // document.getElementById("submitBtn").disabled = false;
        document.getElementById("name").innerHTML = "<h4>Customer Name: </h4>" + "<p>" + firstName + " " + lastName + "</p>";
        document.getElementById("order").style.display = "block"
    }

    if(address !== ''){
        document.getElementById("location").innerHTML = "<h4>Address: </h4>" + "<p>" + address + "</p>";
    }

    if(postal !== ''){
        document.getElementById("postalcode").innerHTML = "<h4>Postal Code: </h4>" + "<p>" + postal + "</p>";
    }

    if(this.selection === 'square'){
        squareVolume()
    }

    if(this.selection === 'cone'){
        coneVolume()
    }

    if(this.selection === 'cylinder'){
        cylinderVolume()
    }

    if(this.selection === 'sphere'){
        sphereVolume()
    }

}


// SPHERE

function sphereVolume() {
    let sphereRadius = document.getElementById("sphereRadius").value;
    let sphereVolume = (1/2) * ((4/3) * 3.14 * sphereRadius * sphereRadius * sphereRadius);
    let sphereTotal = sphereVolume * 0.0015;
    document.getElementById("volume").innerHTML = "<h4>Volume: </h4>" + sphereVolume.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + "cm<sup>3</sup>";
    document.getElementById("planterType").innerHTML = "<h4>Planter Type: </h4>" + "<p>1/2 Sphere</p>";
    document.getElementById("total").innerHTML = "<h4>Total Cost: </h4>" + "$ " + sphereTotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function getRound() {
    var xhr = new XMLHttpRequest();
    let vm = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("overview").innerHTML = xhr.responseText;
            vm.selection = 'sphere';
        }
    };
    xhr.open("GET", "sphere.html", true);
    xhr.send();
}

// SQUARE

function squareVolume(){
    let height = document.getElementById("squareH").value;
    let width = document.getElementById("squareW").value;
    let length = document.getElementById("squareL").value;
    let squareVolume = length * width * height;
    let squareTotal = squareVolume * 0.001;
    document.getElementById("volume").innerHTML = "<h4>Volume: </h4>" + squareVolume.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + "cm<sup>3</sup>";
    document.getElementById("planterType").innerHTML = "<h4>Planter Type: </h4>" + "<p>Square/ Rectangle</p>";
    document.getElementById("total").innerHTML = "<h4>Total Cost: </h4>" + "$ " + squareTotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');


    console.log(squareVolume)

}

function getSquare() {
    var xhr = new XMLHttpRequest();
    let vm = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("overview").innerHTML = xhr.responseText;
            vm.selection = 'square';
        }
    };
    xhr.open("GET", "square.html", true);
    xhr.send();
}

//CONE

function coneVolume(){
    let radiusOne = document.getElementById("coneRadOne").value;
    let radiusTwo = document.getElementById("coneRadTwo").value;
    let height = document.getElementById("coneH").value;
    let coneVolume = (1/3) * 3.14 * (radiusOne * radiusOne + radiusOne * radiusTwo + radiusTwo * radiusTwo) * height;
    let coneTotal = coneVolume * 0.002;
    document.getElementById("volume").innerHTML = "<h4>Volume: </h4>" + coneVolume.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + "cm<sup>3</sup>";
    document.getElementById("planterType").innerHTML = "<h4>Planter Type: </h4>" + "<p>Truncated Cone</p>";
    document.getElementById("total").innerHTML = "<h4>Total Cost: </h4>" + "$ " + coneTotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

}

function getCone() {
    var xhr = new XMLHttpRequest();
    let vm = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("overview").innerHTML = xhr.responseText;
            vm.selection = 'cone';
        }
    };
    xhr.open("GET", "cone.html", true);
    xhr.send();
}

//CYLINDER

function cylinderVolume(){
    let radius = document.getElementById("cylinderRad").value;
    let height = document.getElementById("cylinderH").value;
    let cylinderVolume = 3.14 * radius * radius * height;
    let cylinderTotal = cylinderVolume * 0.0012;
    document.getElementById("volume").innerHTML = "<h4>Volume: </h4>" + cylinderVolume + "cm<sup>3</sup>";
    document.getElementById("planterType").innerHTML = "<h4>Planter Type: </h4>" + "<p>Flat Bottomed Cylinder</p>";
    document.getElementById("total").innerHTML = "<h4>Total Cost: </h4>" + "$ " + cylinderTotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

}

function getCylinder() {
    var xhr = new XMLHttpRequest();
    let vm = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("overview").innerHTML = xhr.responseText;
            vm.selection = 'cylinder';
        }
    };
    xhr.open("GET", "cylinder.html", true);
    xhr.send();
}