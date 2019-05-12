selected_file = "";
selected_filter = "";

function set_file_text(name){
    let header = document.getElementById("sampleHeader");
    header.innerText = name;
}

function set_filter_text(name){
    let header = document.getElementById("filterHeader");
    header.innerText = name;
}

function load_dir(){
    $.get('sounds', (data) => 
    {
        let menu = document.getElementById("dropdownSample");
        for(i=0; i<data.length; i++){
            let option = document.createElement("a");
            option.classList.add("dropdown-item");
            option.text = data[i];
            option.setAttribute('onclick', "selected_file='"+data[i]+"';set_file_text('"+data[i]+"')");
            menu.appendChild(option);
            files_loaded['sounds/'+data[i]] = false;
        }
    });

    let filterList = Object.keys(filters);
    let menu = document.getElementById("dropdownFilter");

    for(i=0; i<filterList.length; i++){
            let option = document.createElement("a");
            option.classList.add("dropdown-item");
            option.text = filterList[i];
            option.setAttribute('onclick', "selected_filter='"+filterList[i]+"';set_filter_text('"+filterList[i]+"')");
            menu.appendChild(option);
        }
}