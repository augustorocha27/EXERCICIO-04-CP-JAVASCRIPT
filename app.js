function verificarFruta(){
    let fruta = document.getElementById("fruta").value.toLowerCase();
switch(fruta){
    case 'maçã':
        console.log('Não vendemos esta fruta aqui');
        break;
    case 'banana' :
        console.log('Estamos com escassez de banana'); 
        break;
    case 'melancia':
        console.log('Aqui está, são 3 reais o quilo');
        break;
    default:
        console.log('Esta fruta não faz parte das frutas que me interessam');
        break;
}
}

