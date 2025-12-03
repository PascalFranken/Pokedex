function test1(){
    document.getElementById('content').innerHTML += test();
}

function openPokemonCard(){
    const openDialog = document.getElementById('dialog');
    openDialog.showModal();
}

function closeDialogWithButton(){
    const closeDialog = document.getElementById('dialog');
    closeDialog.close();
}

function closeDialogWithBackgroundClick(){
    const closeDialog = document.getElementById('dialog');
    closeDialog.close();
}

function bubblingProtection(event){
    event.stopPropagation();
}