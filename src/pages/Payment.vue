<template>
    <div v-if="loginStatus == false" class="error ">
        <h1>Page not Found 😭</h1>
    </div>


    <div v-if="loginStatus">
        <Navbar class="hiddenBtn" />
        <div class="schet mt-[72px] h-[278px] w-[100%] bg-[#272E3B] flex">
            <div class="h-[100%] relative w-[85%] m-auto flex-column pt-[25px]">
                <h2 class="text-[#fff] text-[48px] font-bold">Пополнение счёта</h2>
                <div class="textTast flex text-[#93979D]">
                    <span class="mr-[16px] text-[#93979D]">Tastygo.gg</span> | <p class="ml-[16px] text-[#93979D]">
                        Депозит № 87644632</p>
                </div>
                <div class="radius flex mt-[40px] w-[max-content] bg-[#3D4554] p-[1px] rounded-[16px]">

                    <button @click="changeIdx" :value="this.allGames.indexOf(i)" v-for="i of this.allGames" :key="i.id"
                        class="flex mr-[1px] items-center justify-start bg-[#272E3B] h-[72px] w-[196px]  ">
                        <img class="p-[16px] h-[70px] w-[70px] rounded-[8px]" :src="i.gameLogo" alt="">
                        <span class="ml-[16px] text-[#FFFFFF] text-[18px] font-semibold">{{
                            i.gameTitle
                        }}</span></button>

                </div>

            </div>
        </div>

        <div class="exchange h-[205px] w-[100%] bg-[#20222A] flex">
            <div
                class="exchange__wrapper h-[100%] w-[85%] m-auto flex justify-between border-b-[1px]  border-solid border-[#3D4554]">

                <div class="exchange__text h-[100%] w-[40%] flex-column text-[#fff] pt-[40px]">
                    <h2 class="text-[32px] ">Выбор предметов для обмена</h2>
                    <p class="text-[orangered]">Всего {{ this.showSkinsFallback.length }} предметов на сумму
                        {{ this.amountPrice }} ₽</p>
                    <div class="flex items-center mt-[40px]">
                        <span>Редкость</span>

                        <div class="redkost flex">
                            <button @click="redkostIDX(i)" :id="this.showRedkostFallback.indexOf(i)"
                                v-for="i of this.showRedkostFallback" :key="i.id"
                                class=" ml-[15px] flex items-center cursor-pointer">
                                <div :style="`border: 1px solid ${i.items[0].color}`"
                                    class="redkostItem h-[23px] w-[23px] rounded-[8px] border-[1px] border-solid border-[#FFCE50]">
                                </div><span class="ml-[10px] text-[#909195] text-[14px]">{{ i.items.length }}</span>
                            </button>
                        </div>

                        <div class="redkostActive h-[max-content] w-[400px] flex-col">
                            <h4
                                class="text-[#fff] text-[16px] mb-[10px ]">Редкость</h4>
                            <div class="h-[100%]">
                                <button 
                                @click="redkostIDX(i)" :id="this.showRedkostFallback.indexOf(i)"
                                    v-for="i of this.showRedkostFallback" :key="i.id"
                                    class="mt-[15px] ml-[15px] flex items-center cursor-pointer">
                                    <div :style="`border: 1px solid ${i.items[0].color}`"
                                        class="redkostItem h-[23px] w-[23px] rounded-[8px] border-[1px] border-solid border-[#FFCE50]">
                                    </div>
                                    
                                    <p class="mx-[10px] w-[200px]">{{ i.categoryName }}</p>
                                    <p class="ml-[10px] text-[#909195]">
                                        {{ i.items.length }}</p>
                                </button>
                            </div>

                            <div v-if="this.reset" @click="reserRet"
                            class="resetActive flex items-center justify-center mt-[50px]  w-[100px]  cursor-pointer">
                            <img class="absolute" src="../static/icons/Vector 90.png" alt="">
                            <p class="relative ml-[30px] text-[15px]">Сбросить</p>
                        </div>

                        </div>


                        <div v-if="this.reset" @click="reserRet"
                            class="reset flex items-center w-[max-content] cursor-pointer ml-[25px]">
                            <img src="../static/icons/Vector 90.png" alt="">
                            <p class="ml-[13px] text-[15px]">Сбросить</p>
                        </div>


                    </div>
                </div>


                <div class="exchangeTwo h-[100%] w-[37%] flex-column relative pt-[40px]">
                    <div class="">
                        <svg class="absolute translate-y-[15px] left-[20px]" width="16" height="17" viewBox="0 0 16 17"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.1922 13.1202C10.0236 13.9954 8.57234 14.5138 7 14.5138C3.13401 14.5138 0 11.3798 0 7.51379C0 3.6478 3.13401 0.513794 7 0.513794C10.866 0.513794 14 3.6478 14 7.51379C14 9.08613 13.4816 10.5374 12.6064 11.706L15.7071 14.8067C16.0976 15.1972 16.0976 15.8304 15.7071 16.2209C15.3166 16.6114 14.6834 16.6114 14.2929 16.2209L11.1922 13.1202ZM12 7.51379C12 10.2752 9.76142 12.5138 7 12.5138C4.23858 12.5138 2 10.2752 2 7.51379C2 4.75237 4.23858 2.51379 7 2.51379C9.76142 2.51379 12 4.75237 12 7.51379Z"
                                fill="white" />
                        </svg>

                        <input v-model="search" @focus="inputFocus" @blur="inputBlur"
                            :class="{ borderInp: this.showSercher }"
                            class="py-[16px] relative pl-[48px] h-[48px] w-[392px] rounded-[24px] bg-[transparent] border-[1px] border-solid border-[#3D4554] outline-none text-[#fff] mb-[60px]"
                            placeholder="Поиск по названию" type="text">

                        <!-- <svg @click="closeText" class="absolute right-[85px] translate-y-[-90px] cursor-pointer"
                            width="12" height="13" viewBox="0 0 12 13" fill="none">
                            <path
                                d="M0.146446 1.36735C-0.0488155 1.17209 -0.0488155 0.855503 0.146446 0.660241C0.341709 0.464978 0.658291 0.464978 0.853554 0.660241L6 5.80669L11.1464 0.660241C11.3417 0.464978 11.6583 0.464978 11.8536 0.660241C12.0488 0.855503 12.0488 1.17209 11.8536 1.36735L6.70711 6.51379L11.8536 11.6602C12.0488 11.8555 12.0488 12.1721 11.8536 12.3673C11.6583 12.5626 11.3417 12.5626 11.1464 12.3673L6 7.2209L0.853554 12.3673C0.658292 12.5626 0.341709 12.5626 0.146447 12.3673C-0.0488153 12.1721 -0.0488153 11.8555 0.146447 11.6602L5.29289 6.51379L0.146446 1.36735Z"
                                fill="white" />
                        </svg> -->

                        <!-- агар при клике буса -->

                        <!-- <svg @click="closeText" :class="{closeInp: this.showSercher}"  class="absolute right-[85px] translate-y-[-90px] hidden" width="12" height="13"
                            viewBox="0 0 12 13" fill="none">
                            <path
                                d="M0.146446 1.36735C-0.0488155 1.17209 -0.0488155 0.855503 0.146446 0.660241C0.341709 0.464978 0.658291 0.464978 0.853554 0.660241L6 5.80669L11.1464 0.660241C11.3417 0.464978 11.6583 0.464978 11.8536 0.660241C12.0488 0.855503 12.0488 1.17209 11.8536 1.36735L6.70711 6.51379L11.8536 11.6602C12.0488 11.8555 12.0488 12.1721 11.8536 12.3673C11.6583 12.5626 11.3417 12.5626 11.1464 12.3673L6 7.2209L0.853554 12.3673C0.658292 12.5626 0.341709 12.5626 0.146447 12.3673C-0.0488153 12.1721 -0.0488153 11.8555 0.146447 11.6602L5.29289 6.51379L0.146446 1.36735Z"
                                fill="white" />
                        </svg> -->


                    </div>
                    <!-- даталист -->

                    <div :class="{ showSearcherActive: this.showSercher }"
                        class="searcherScroll showSearcher min-h-[80px] overflow-y-scroll duration-[.3s] py-[10px] max-h-[400px] w-[392px] rounded-[8px] border-[2px] border-solid border-[#3D4554] bg-[#20222A] absolute z-[999] top-[105px] ">


                        <div v-if="this.todosByTitle.length == 0"
                            class="flex items-center h-[100%] w-[100%] justify-center">
                            <h1 class="text-[30px] text-[#fff] text-center mt-[5px]">Ничего не нашлось 😔</h1>
                        </div>

                        <!-- поиск -->
                        <div v-for="item in this.todosByTitle" :key="item.id"
                            class="h-[60px] hover:bg-[#3b4559] cursor-pointer duration-[.3s] p-[16px] w-[100%] flex items-center">
                            <figure class="h-[48px] mr-[16px] w-[48px] bg-[#272E3B] rounded-[5px]">
                                <img class="h-[100%] w-[100%] rounded-[5px] object-cover" :src="item.img" alt="image">
                            </figure>
                            <div class="flex-col justify-center">
                                <p class="text-white">{{ item.title }}</p>
                                <p class="text-[#909195]">{{ item.game }}</p>
                            </div>
                        </div>


                    </div>

                    <div class="firePrice flex items-center justify-end">

                        <div @click="firePriceMode" :class="{ fireLeft: this.firePriceActive }"
                            class="h-[30px]  mx-[24px] rounded-[20px] bg-[#272E3B] duration-[.3s] border-[1px] border-solid border-[#3D4554] w-[50px] relative">
                            <div
                                class="h-[20px] w-[20px] bg-[white] items-center duration-[.3s] absolute top-[4px] left-[4px] rounded-[50%]">
                            </div>
                        </div>
                        <p class="flex items-center text-[#fff] mr-[12px]"> <img class="h-[32px] w-[32px]"
                                src="../static/icons/116853_fire_icon.svg" alt=""> Только горячие цены</p>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10 18.0002C14.4183 18.0002 18 14.4185 18 10.0002C18 5.58197 14.4183 2.00024 10 2.00024C5.58172 2.00024 2 5.58197 2 10.0002C2 14.4185 5.58172 18.0002 10 18.0002ZM10 20.0002C15.5228 20.0002 20 15.5231 20 10.0002C20 4.4774 15.5228 0.000244141 10 0.000244141C4.47715 0.000244141 0 4.4774 0 10.0002C0 15.5231 4.47715 20.0002 10 20.0002Z"
                                fill="white" />
                            <g opacity="0.5">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10 6.00024C8.89543 6.00024 8 6.89567 8 8.00024C8 8.55253 7.55228 9.00024 7 9.00024C6.44772 9.00024 6 8.55253 6 8.00024C6 5.79111 7.79086 4.00024 10 4.00024C12.2091 4.00024 14 5.79111 14 8.00024C14 8.88376 13.7486 9.57835 13.3113 10.1234C12.8996 10.6365 12.3746 10.9477 11.9867 11.1638C11.9028 11.2106 11.8267 11.2524 11.7573 11.2906C11.4544 11.4572 11.2787 11.5539 11.1388 11.6801C11.0408 11.7687 11 11.832 11 12.0002C11 12.5525 10.5523 13.0002 10 13.0002C9.44772 13.0002 9 12.5525 9 12.0002C9 11.1976 9.33423 10.6148 9.79866 10.1956C10.1302 9.89628 10.5578 9.66437 10.8631 9.49881C10.9175 9.46934 10.9679 9.44198 11.0133 9.41671C11.3754 9.21494 11.6004 9.05996 11.7512 8.87189C11.8764 8.71584 12 8.47435 12 8.00024C12 6.89567 11.1046 6.00024 10 6.00024Z"
                                    fill="white" />
                                <path
                                    d="M11 15.0002C11 15.5525 10.5523 16.0002 10 16.0002C9.44772 16.0002 9 15.5525 9 15.0002C9 14.448 9.44772 14.0002 10 14.0002C10.5523 14.0002 11 14.448 11 15.0002Z"
                                    fill="white" />
                            </g>
                        </svg>

                    </div>

                </div>


            </div>
        </div>
        <div class="goodTovar h-[max-content] w-[100%] bg-[#20222A] flex">
            <div class="h-[100%] w-[85%] flex-column m-auto pt-[24px]">


                <div class="flex h-[max-content] w-[100%] justify-between items-center">
                    <div @click="selectAll" class="items-center flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                fill="#F4C038" />
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L9 14.4142L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L9 11.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289Z"
                                fill="#F4C038" />
                        </svg>
                        <span class="vibrat ml-[12px] text-[#F4C038]">Выбрать все</span>

                    </div>
                    <select @change="priceFilter"
                        class="h-[20px] w-[max-content] outline-none bg-[transparent] text-[#FFFFFF]">
                        <option class="text-[#fff] bg-[#20222A]" value="" hidden>По цене</option>
                        <option class="text-[#fff] bg-[#20222A]" value="increase">по возростанию</option>
                        <option class="text-[#fff] bg-[#20222A]" value="decrease">по убыванию</option>
                    </select>
                </div>


                <div class="tovarCont h-[max-content] w-[100%] flex flex-wrap mt-[40px]">
                    <div v-if="this.showSkinsFallback.length == 0"
                        class="flex items-center h-[100px] w-[100%] justify-center">
                        <h1 class="text-[40px] text-[#fff] text-center">Ничего не нашлось 😓</h1>
                    </div>
                    <!-- товары  -->

                    <div @click="addInventory(i)"
                        :class="{ hasInventar: this.inventory.includes(i), 'borderBlock': i.isAble == false }"
                        v-for="i of this.showSkinsFallback" :key="i.id"
                        class="blocks duration-[.1s] h-[142px] mr-[18px] mb-[24px] overflow-hidden relative w-[120px] bg-[#272E3B] flex-column items-center bg-[#272E3B] rounded-[16px]">
                        <div :class="{ blockGood1: i.isAble == false }" class="blockGood"></div>

                        <figure class="w-[100%] h-[80px] rounded-[16px]">
                            <img class="imag h-[100%] w-[100%] rounded-tl-[16px] rounded-tr-[16px] object-cover" :src="i.img"
                                alt="">
                        </figure>
                        <span :class="{ fireText: i.firePrice == true }"
                            class="price flex items-center mt-[10px] justify-center text-[14px] text-[#fff]">
                            {{ i.price }}₽

                            <img :class="{ imgNone: i.isAble == false }" v-if="i.firePrice == true"
                                class="h-[15px] w-[15px] ml-[2px]" src="../static/icons/116853_fire_icon.svg" alt="">
                        </span>

                        <span v-if="i.isAble == false"
                            class="text-[12px] text-[#8F939B] flex items-center justify-center"><img class="mr-[7px]"
                                src="../static/icons/Замочек.png" alt=""> {{ i.data }}</span>

                        <div :style="`background: ${i.color}; box-shadow: 0 0 30px 5px ${i.color}`"
                            class="h-[4px] w-[24px] rounded-tl-[8px] rounded-tr-[8px] absolute bottom-0 bg-[initial] absolute left-[50%] translate-x-[-50%]">
                        </div>


                    </div>



                    <div class="h-[max-content] w-[100%] m-auto  my-[40px] flex-column items-center justify-center">
                        <span class="flex items-center justify-center mt-[12px] text-[#F4C038]">
                            <svg class="mr-[12px]" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10 18.0002C14.4183 18.0002 18 14.4185 18 10.0002C18 5.58197 14.4183 2.00024 10 2.00024C5.58172 2.00024 2 5.58197 2 10.0002C2 14.4185 5.58172 18.0002 10 18.0002ZM10 20.0002C15.5228 20.0002 20 15.5231 20 10.0002C20 4.4774 15.5228 0.000244141 10 0.000244141C4.47715 0.000244141 0 4.4774 0 10.0002C0 15.5231 4.47715 20.0002 10 20.0002Z"
                                    fill="#F4C038" />
                                <g opacity="0.5">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 6.00024C8.89543 6.00024 8 6.89567 8 8.00024C8 8.55253 7.55228 9.00024 7 9.00024C6.44772 9.00024 6 8.55253 6 8.00024C6 5.79111 7.79086 4.00024 10 4.00024C12.2091 4.00024 14 5.79111 14 8.00024C14 8.88376 13.7486 9.57835 13.3113 10.1234C12.8996 10.6365 12.3746 10.9477 11.9867 11.1638C11.9028 11.2106 11.8267 11.2524 11.7573 11.2906C11.4544 11.4572 11.2787 11.5539 11.1388 11.6801C11.0408 11.7687 11 11.832 11 12.0002C11 12.5525 10.5523 13.0002 10 13.0002C9.44772 13.0002 9 12.5525 9 12.0002C9 11.1976 9.33423 10.6148 9.79866 10.1956C10.1302 9.89628 10.5578 9.66437 10.8631 9.49881C10.9175 9.46934 10.9679 9.44198 11.0133 9.41671C11.3754 9.21494 11.6004 9.05996 11.7512 8.87189C11.8764 8.71584 12 8.47435 12 8.00024C12 6.89567 11.1046 6.00024 10 6.00024Z"
                                        fill="#F4C038" />
                                    <path
                                        d="M11 15.0002C11 15.5525 10.5523 16.0002 10 16.0002C9.44772 16.0002 9 15.5525 9 15.0002C9 14.448 9.44772 14.0002 10 14.0002C10.5523 14.0002 11 14.448 11 15.0002Z"
                                        fill="#F4C038" />
                                </g>
                            </svg>
                            Почему?
                        </span>
                    </div>
                </div>
            </div>

        </div>

        <Footer />
        <Inventory v-on:check_inventory="inventory_check" v-on:clearInventory="inventHidden"
            :class="{ showInven: this.showInventory }" class="bottom-[-100%] duration-[.3s]" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Inventory from '../components/Inventory.vue';

export default {
    components: { Navbar, Footer, Inventory },
    data() {
        return {
            status: false,
            showSkinsFallback: [],
            showRedkostFallback: [],
            idx: 0,
            amountPrice: 0,
            firePriceActive: false,

            // переменная изначально false
            eventsConrtol: false,
            showInventory: false,
            showSercher: false,
            search: '',
            // close: false,
            clearRedkost: true,
            reset: false,
        }
    },
    computed: {
        ...mapGetters(['skins', 'loginStatus', 'eventUser', 'allGames', 'fallbackSkins', 'allCategories', 'redkost', 'inventory']),

        todosByTitle() {
            return this.skins.filter((item) => item.title.toLowerCase().indexOf(this.search) !== -1)
        },
    },
    methods: {
        blockGoodFunc() {
            // alert(1)
        },
        selectAll() {
            this.$store.dispatch('SELECT_ALL', this.showSkinsFallback)
            this.showInventory = true
        },
        inventory_check() {
            if (this.inventory.length < 1) {
                this.showInventory = false
            }
        },
        inventHidden() {
            this.showInventory = false
        },

        addInventory(i) {
            this.$emit('amountPric')
            if (i.isAble) {
                this.$store.dispatch('ADD_INVENTORY', i)
            } else


                if (this.inventory.includes(i)) {
                    event.currentTarget.classList.add('hasInventar')
                } else event.currentTarget.classList.remove('hasInventar')


            if (this.inventory.length > 0) {
                this.showInventory = true
            } else { this.showInventory = false }


        },
        priceFilter() {
            if (event.target.value == 'increase') {
                this.showSkinsFallback.sort((a, b) => a.price > b.price ? 1 : -1)
            }
            else if (event.target.value == 'decrease') {
                this.showSkinsFallback.sort((a, b) => a.price < b.price ? 1 : -1)
            }
        },
        firePriceMode() {
            this.firePriceActive = !this.firePriceActive
            if (this.firePriceActive) {
                let filtered = this.showSkinsFallback.filter(item => item.firePrice)
                this.showSkinsFallback = filtered
            }
            else {
                if (this.eventsConrtol === false) {
                    this.showSkinsFallback = this.allCategories[this.idx].arr
                }
                else {
                    this.showSkinsFallback = this.allCategories[this.idx].skinNames[this.eventsConrtol].items

                }
            }

            this.amountPrice = 0
            for (let i of this.showSkinsFallback) this.amountPrice += i.price

        },
        changeIdx() {
            this.eventsConrtol = false
            this.idx = event.currentTarget.value
            this.showSkinsFallback = this.allCategories[this.idx].arr
            this.showRedkostFallback = this.allCategories[this.idx].skinNames

            this.amountPrice = 0
            for (let i of this.showSkinsFallback) this.amountPrice += i.price

            this.firePriceActive = false

        },
        reserRet() {
            let redkostItem = document.querySelectorAll('.redkostItem')
            for (let i of redkostItem) {
                i.style.background = 'transparent'
            }
            this.showSkinsFallback = this.allCategories[this.idx].arr
            this.reset = false
            this.clearRedkost = true
        },
        redkostIDX(i) {
            event.currentTarget.firstChild.style.background = i.items[0].color
            this.reset = true
            this.eventsConrtol = event.currentTarget.id
            if (this.clearRedkost) {
                this.showSkinsFallback = []
                this.clearRedkost = false
            }
            for (let i of this.allCategories[this.idx].skinNames[event.currentTarget.id].items) {
                if (this.showSkinsFallback.includes(i) == false) {
                    this.showSkinsFallback.push(i)
                }
            }

            this.amountPrice = 0
            for (let i of this.showSkinsFallback) this.amountPrice += i.price

            this.firePriceActive = false
        },
        inputFocus() {
            this.showSercher = true
            // this.close = !this.close
        },
        inputBlur() {
            this.showSercher = false
        },
        // closeText() {
        //     this.search = ''
        // },


    },
    mounted() {
        this.$emit('amountPric')
        this.searchResults = this.skins
        this.firePriceActive = false
        this.showSkinsFallback = this.allCategories[this.idx].arr
        this.showRedkostFallback = this.allCategories[this.idx].skinNames

        this.amountPrice = 0
        for (let i of this.showSkinsFallback) this.amountPrice += i.price

    }
}
</script>


<style>
.showInven {
    bottom: 0% !important;
}

.hasInventar {
    background: rgba(239, 188, 58, 0.1) !important;
    border: 2px solid #F4C038;
    position: relative;
    overflow: visible !important;
}

.blockGood1::after {
    content: 'этот товар не доступен';
    color: rgb(242, 242, 242);
    font-size: 14px;
    text-align: center;
    position: absolute;
    height: 50px;
    width: 100%;
    background: #272E3B;
    top: 0px;
    left: 0px;
    transition: opacity .5s ease 0s;
    opacity: 0;
}

.blockGood1:hover:after {
    opacity: 1 !important;
}

.hasInventar::after {
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

.hiddenBtn :nth-child(3) :nth-child(3) {
    display: none !important;
}

.error {
    width: 100%;
    background: #20222A;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.error h1 {
    color: white;
    font-size: 50px;
}

.radius :first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}

.radius :last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
}

.borderBlock {
    border: 1px dashed #3D4554;
    background: #20222A !important;
}

.fireText {
    color: #F47523 !important;
}

.imgNone {
    display: none;
}

.fireLeft div {
    left: 24px;
    transition-duration: .3s;
}

.fireLeft {
    background: orangered !important;
    transition-duration: .3s;
    box-shadow: inset 0 0 5px 2px rgb(73, 73, 73);
}

.searcherScroll::-webkit-scrollbar {
    background: #272E3B !important;
    width: 5px !important;
    border-radius: 2px;
    margin: 10px !important;
}

.searcherScroll::-webkit-scrollbar-thumb {
    background: black !important;
    margin: 10px !important;
    border-radius: 2px;
}

.showSearcher {
    transform: translateY(100px);
    opacity: 0%;
    pointer-events: none;

}

.showSearcherActive {
    transform: translateY(0px);
    opacity: 100%;
    pointer-events: initial;
}

.borderInp {
    border: 1px solid #F4C038 !important;
    transition-duration: .3s;
}

.closeInp {
    display: block !important;
    transition-duration: .3s;
}

.blocks:hover {
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 0px 9px 9px rgba(0, 0, 0, 0.303);
}

.borderBlock:hover {
    transform: initial !important;
    box-shadow: initial !important;
}

.removeColor button div {
    background: transparent !important;
}

.redkostActive {
    display: none;
}
.resetActive{
    display: none;

}
</style>