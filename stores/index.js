import { defineStore } from 'pinia';

export const useCartStore = defineStore('counter',{
    state: () => {
        return {
            cart : []
        }
    },
    actions: {
        addToCart(item){
            this.cart.push(item)
        },
        removeFromCart(item){
            const index = this.cart.indexOf(item);
            if(index != -10){
                this.cart.splice(index,1)
            }
        }
    }
})