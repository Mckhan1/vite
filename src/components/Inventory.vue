<template>
    <div class="bg-[#F4C038] fixed w-[100%] bottom-[0] text-[#20222A]">

        <div
            class="h-[88px] w-[85%] flex m-[auto] py-[24px] items-center justify-between border-b-[1px] border-[solid] border-[#20222A]">

            <button @click="bgBlockFunc" class="flex items-center">
                <img src="../static/icons/Вниз.png" alt="">
                <span class="sver ml-[12px]">Свернуть</span>
            </button>

            <div class="predmet flex-col items-start text-center h-[100%]">
                <p class="text-[18px]">{{ this.inventory.length }} предмета</p>
                <span class=" ml-[12px] text-[16px]">выбрано</span>
            </div>

            <div class="created flex-col items-start text-center h-[100%]">
                <p @mouseover="amount" class="text-[18px] ">{{ this.amountPri }} ₽</p>
                <span class=" ml-[12px] text-[16px]">будет зачислено</span>
            </div>

            <div class="payment flex items-center">
                <button @click="clearItems"
                    class="py-[14px] px-[24px] rounded-[48px] bg-[transparent] border-[1px] border-solid border-[#20222A] mr-[24px]">Сбросить</button>
                <button @click="checkFunc" class="bg-[#fff] rounded-[48px] py-[14px] px-[24px]">Пополнить счёт Tastygo.gg</button>
            </div>


        </div>

        <div :class="{ bgDisBlock: this.bgBlock }"
            class="h-[164px] py-[32px] flex items-center w-[85%] m-[auto] scroll bgHidden">
            <!-- блокс -->
            <div @click="removeInInventar(item)" class="del mr-[24px] h-[108px] min-w-[96px] bg-[#272E3B] rounded-[16px] flex-col items-center"
                v-for="item of this.inventory" :key="item.id">
                <figure class="w-[100%] m-auto h-[56px] rounded-[16px]">
                    <img class="h-[100%] w-[100%] rounded-tl-[16px] rounded-tr-[16px] object-cover" :src="item.img"
                        alt="">
                </figure>
                <span class="flex items-center mt-[10px] justify-center text-[14px] text-[#fff]">
                    {{ item.price }}₽

                </span>

                <div :style="`background: ${item.color}; box-shadow: 0 0 30px 5px ${item.color}`"
                    class="h-[4px] w-[24px] rounded-tl-[8px] rounded-tr-[8px] absolute bottom-0 bg-[initial] absolute left-[50%] translate-x-[-50%]">
                </div>
            </div>
        </div>
        <div class="payActive h-[160px] w-[100%] mt-[20px] bgHid">
            <div class="flex-col items-center justify-center">
                <button @click="checkFunc" class="bg-[#fff] ml-[15px] rounded-[48px] py-[14px] px-[90px]">Пополнить счёт Tastygo.gg</button>
            <button @click="clearItems"
                class="py-[14px] mt-[24px] px-[156px] ml-[15px] rounded-[48px] bg-[transparent] border-[1px] border-solid border-[#20222A] mr-[24px]">Сбросить</button>
        </div>
        </div>
        


    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['inventory', 'skins'])
    },
    data() {
        return {
            bgBlock: false,
            amountPri: 0,
            pay: false,
        }
    },
    methods: {
        amountPricFunc(){
            alert(1)
        },
        removeInInventar(item){
            this.$store.dispatch('REMOVE_IN_INVENTAR', item)
            this.$emit("check_inventory")
        },
        bgBlockFunc() {
            this.bgBlock = !this.bgBlock
        },
        clearItems() {
            this.$store.dispatch('CLEAR')
            this.$emit("clearInventory")

        },
        amount(){
            console.log(1)
            this.amountPri = 0
            for(let i of this.inventory) {
            console.log(i);
            this.amountPri += i.price
        }
        },
        checkFunc(){
            this.$router.push('/check')
        },
    },
}
</script>

<style>
.bgHid{ 
    display: none;
}
.Inventar {
    display: none !important;
}

.has {
    background: red !important;
    height: 100px;
    width: 100px;
}

.scroll {
    overflow-x: scroll !important;
    overflow-y: hidden !important;
}

.scroll::-webkit-scrollbar {
    background: #DFB037 !important;
    height: 12px;
    border-radius: 24px;
}

.scroll::-webkit-scrollbar-thumb {
    background: #20222A !important;
    border-radius: 24px;
}

.del {
    position: relative;
}

.del::after {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    height: 24px;
    width: 24px;
    background: #fff;
    background-image: url('../static/icons/Закрыть.png');
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 50%;
}

.bgHidden {
    display: none !important;
}

.bgDisBlock {
    display: flex !important;
}
</style>


