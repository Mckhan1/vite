<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Message from '../components/Message.vue'
export default {
    methods: {
        sendMessage() {
            this.show = !this.show
        }
    },
    data() {
        return {
            show: false
        }
    },
    components: {
        Navbar,
        Footer,
        Message
    }
}
</script>

<template>
        <Message class="message" :class="{messageActive: this.show == true}" v-show="show" status="true" />
    <div>
        <Navbar />

        <div class="cont mt-[72px] h-[780px] w-[100%] bg-[#20222A]">
            <div class="h-[100%] w-[75%] m-auto flex items-center justify-between">
                <div class="item">
                    <img src="../static/img/Frame 1.png" alt="">
                </div>
                <div class="blockInp h-[60%] w-[52%] flex-column items-center">
                    <h2 class="text-[32px] text-[#fff] font-medium">Заявка на подключение</h2>
                    <form @submit.prevent="sendMessage" class=" mt-[15px]" action="#">
                        <input required
                            class="py-[10px] mb-[20px] text-[#fff] rounded-[40px] outline-none pl-[30px] pr-[40px] w-[470px] bg-[transparent] border-[1px] boder-solid border-[#3D4554]"
                            placeholder="Ваше имя" type="text">
                        <input required
                            class="py-[10px] mb-[20px] text-[#fff] rounded-[40px] outline-none pl-[30px] pr-[40px] w-[470px] bg-[transparent] border-[1px] boder-solid border-[#3D4554]"
                            placeholder="Ваш email" type="text">
                        <input required
                            class="py-[10px] mb-[20px] text-[#fff] rounded-[40px] outline-none pl-[30px] pr-[40px] w-[470px] bg-[transparent] border-[1px] boder-solid border-[#3D4554]"
                            placeholder="Адрес сайта" type="text">
                        <textarea required
                            class="area py-[10px] outline-none text-[#fff] pl-[30px] h-[100px] w-[470px] rounded-[20px] bg-[transparent] border-[1px] boder-solid border-[#3D4554]"
                            placeholder="Ваши контакты (Телефон, Telegram, WhatsApp...)"></textarea>

                        <button type="submit"
                            class="bg-[#F4C038] outline-none rounded-[48px] text-[#20222A] font-medium py-[14px] px-[24px] mt-[20px]">Отправить
                            заявку</button>

                    </form>
                </div>
            </div>
        </div>
        <Footer />

    </div>
</template>

<style>
.item {
    height: 390px;
    width: 392px;
}

.message{
    opacity: 0;
}
.messageActive{
    opacity: 1 !important;
}
</style>