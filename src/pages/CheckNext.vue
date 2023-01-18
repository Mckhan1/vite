<template>
    <div>
        <Navbar class="hiddenBtn"  />
        <div class="h-[780px] mt-[72px] w-[100%] bg-[#20222A] flex">
            <div class="wrapper h-[100%] w-[80%] m-auto flex">
                <div class="imagWrp flex items-center justify-start w-[50%] h-[100%]">
                    <img class="flex items-center justify-start" src="..//static/icons/Frame 510.png" alt="">
                </div>
                <div class="textWrp flex-col h-[50%] w-[100%] ml-[100px] m-auto items-center justify-start">

                    <h2 class="text-[32px] text-[#fff]">Всё получилось!</h2>
                    <div class="textSpan flex text-[#93979D]">
                        <span class="mr-[16px] text-[#93979D]">Tastygo.gg</span> | <p class="ml-[16px] text-[#93979D]">
                            Депозит № 87644632</p>
                    </div>
                    <p class="mt-[32px] text-[#fff]">Мы получили ваши предметы, а деньги успешно поступили на счёт
                        Tastygo.gg</p>
                    <p class="mt-[16px] text-[#fff]">Вы будете автоматически перенаправлены обратно на Tastygo.gg через
                        5 секунд.</p>
                    <button @click="routPsuh" class="h-[48px] w-[264px] bg-[#F4C038] mt-[32px] rounded-[48px]">
                        <span
                            class="py-[8px] px-[12px] rounded-[50%] border-[2px] border-solid border-[#20222A] bg-[#DFB037]">4</span>
                        Вернуться на Tastygo.gg</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    components: { Navbar, Footer, },
    methods: {
        routPsuh() {
            this.$router.push('/')
        }
    },
}
</script>


<style>
.hiddenBtn :nth-child(3) :nth-child(3) {
    display: none !important;
}
</style>