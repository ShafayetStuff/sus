const validName = [
    'Rifat',
    'rifat',
    'ryuk',
    'mavoie',
    'nighat',
    'dipro',
    'evan',
    'rafsan',
    'mustakim',
    'sabir',
    'radin',
    'plabon',
    'Plabon',
    'Tarif',
    'hasin',
    'rashed',
    'tanim',
    'adit',
    'faaris'
]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkinput(){
    const value = document.getElementById("inp").value.trim().toLowerCase();
    
    if(validName.includes(value)){
        window.alert("After analysing the name in our database " + value + " is Gay");
    }
    else if(value === ""){
        window.alert("Enter some shi");
    }
    else if(value.includes(" ")){
        window.alert("Dont use spaces and full name, just use first name or the name only people use to call you");
    }
    else{
        window.alert("After analysing the name in our database " + value + " is straighter than the pole his/her's gay friend's mom dances on");
    }
}