const validName = [
    'Rifat',
    'rifat',
    'ryuk',
    'Mavoie',
    'mavoie',
    'Nighat',
    'nighat',
    'Dipro',
    'dipro',
    'Evan',
    'evan',
    'Rafsan',
    'rafsan',
    'Mustakim',
    'mustakim',
    'Sabir',
    'sabir',
    'Radin',
    'radin',
    'plabon',
    'Plabon',
    'Tarif'
]
function checkinput(){
    const value = document.getElementById("inp").value.toLowerCase();
    if(validName.includes(value)){
        window.alert("After analysing the name in our database " + value + " is Gay")
    }
    else{
        window.alert("After analysing the name in our database "+value + " is straight as the pole his/her's gay friend's mom dances on")
    }
}