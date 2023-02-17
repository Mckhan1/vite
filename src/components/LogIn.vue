<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            check: {
                email: '',
                password: '',
            }
        }
    },
    computed: {
        // ...mapGetters(['loginStatus'])
    },
    methods: {
        prover() {
            this.$store.dispatch('PROVER', this.check)
            if (this.email === this.email && this.password === this.password) {
                this.$router.push('/refill')
            }
            // if (this.loginStatus === this.loginStatus) {
            //     this.$router.push('/refill')
            // }
        }
    },
}
</script>

<template>
    <!-- <div class="flex-column h-[100px] w-[100%]"> -->
    <div class="h-[100%] absolute mt-[0px] bg-[#20222A] w-[100%] flex-column">
        <router-link to="/">
            <svg class="absolute top-[16px] right-[16px]" width="33" height="33" viewBox="0 0 33 33" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.558838" width="32" height="32" rx="16" fill="#272E3B" />
                <g clip-path="url(#clip0_547_24623)">
                    <path d="M11.5 21.5588L21.5 11.5588M11.5 11.5588L21.5 21.5588" stroke="white" stroke-width="2"
                        stroke-linecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_547_24623">
                        <rect width="12" height="12" fill="white" transform="translate(10.5 22.5588) rotate(-90)" />
                    </clipPath>
                </defs>
            </svg>
        </router-link>
        <form @submit.prevent="prover" class="wrp">
            <img src="../static/img/login.png" alt="">
            <p class="mt-[22px] text-[28px] text-[#fff]">HotSkins</p>
            <input v-model="this.check.email" required
                class="input1 w-[392px] py-[10px] mb-[20px] mt-[30px] text-[#fff] rounded-[40px] outline-none pl-[30px] pr-[50px] bg-[transparent] border-[1px] boder-solid border-[#3D4554]"
                placeholder="Ваше имя" type="text">
            <div class="flex items-center justify-center relative">
                <input v-model="this.check.password" required
                    class="input2 w-[392px] py-[10px] mb-[20px] text-[#fff] rounded-[40px] outline-none pl-[30px] pr-[50px] bg-[transparent] border-[1px] boder-solid border-[#3D4554]"
                    placeholder="Пароль" type="text">
                <svg class="absolute right-[20px] cursor-pointer top-[12px]" width="21" height="21" viewBox="0 0 21 21"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.5 16.5588C6.83801 16.5588 4.60147 14.974 3.25926 13.408C2.57932 12.6148 2.12434 11.819 1.84036 11.2227C1.71087 10.9507 1.61812 10.7227 1.55659 10.5588C1.61812 10.3949 1.71087 10.1669 1.84036 9.89502C2.12434 9.29867 2.57932 8.50289 3.25926 7.70963C4.60147 6.14371 6.83801 4.55884 10.5 4.55884C14.162 4.55884 16.3985 6.14371 17.7407 7.70963C18.4207 8.50289 18.8757 9.29867 19.1596 9.89502C19.2891 10.1669 19.3819 10.3949 19.4434 10.5588C19.3819 10.7227 19.2891 10.9507 19.1596 11.2227C18.8757 11.819 18.4207 12.6148 17.7407 13.408C16.3985 14.974 14.162 16.5588 10.5 16.5588Z"
                        stroke="white" stroke-width="2" stroke-linejoin="round" />
                    <circle opacity="0.5" cx="10.5" cy="10.5588" r="3" stroke="white" stroke-width="2" />
                </svg>

            </div>

            <button class="sign bg-[#F4C038] outline-none rounded-[48px] text-[#20222A] py-[14px] px-[171px]">Войти</button>
        </form>


    </div>
    <!-- </div> -->
</template>

<style>
.wrp {
    height: 100%;
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>