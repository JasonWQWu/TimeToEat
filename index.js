async function handle(event){
    console.log("A form has arrived!");
    event.preventDefault();

    var myForm = document.getElementById("formid");
    var payload = new FormData(myForm);
    var name = payload.get('name');
    var phone = payload.get('phone');

    var functionUrl = "https://timetoeat.azurewebsites.net/api/HttpTrigger1?code=pVWJxL7bwQsm0rgPdEgm6Yu9PPaoer/qcV68TPNU/hEDog1c3XviAA=="
    
    const resp = await fetch(functionUrl, {
        method: "POST",
        body: JSON.stringify({name, phone})
    });
    var data = await resp.json();
    console.log(name);
    console.log(phone);
};


