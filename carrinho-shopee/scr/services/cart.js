//quais ações meu carrinho pode fazer

//caso de uso
//✅adicionar item no carrinho
async function addItem(userCart){
    userCart.push(item);
}

//remover item do carrinho
async function removeItem(userCart, index){

}

//deletar item do carrinho
async function deletItem(userCart, name){
    const index = userCart.findIndex ((item) => item.name === name );

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

//calcular o total
async function calculateTotal(userCart){
    return userCart.reduce((total, item) => total + item.subtotal () 0);
}

export {
    addItem,
    calculateTotal,
    deletItem,
    removeItem
};
