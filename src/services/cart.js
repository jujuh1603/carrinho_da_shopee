//quais ações meu carrinho pode fazer

//casos de uso
//✅ -> adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

//-> calcular o total
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n 🛍️  Total: ${result}`);
}

//-> deletar item do carrinho
async function removeItem(userCart, item){

    //1. encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //2. caso não encontre o item
    if(indexFound === -1){
        console.log("item não encontrado");
        return;
    }

    //3. item > 1 subtrair um item, item = 1 deletar o item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound.quantity] -= 1;
        return;
    }

    //4. caso item = 1 deletar o item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }

}

//-> remover um item - diminui um item
async function deleteItem(userCart, index){
    // transforma o indice visual do usuario, para o indice backend
    const deleteIndex = index -1;
    // é maior do que zero e se é menor do que o tamanho do carrinho
    if(index => 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}

//mostra todos os itens do carrinho
async function displaycart(userCart){
    console.log("\n 🧡 Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | 
        ${item.quantity} | Subtotal ${item.subtotal()}`);
    }); 
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart,
}