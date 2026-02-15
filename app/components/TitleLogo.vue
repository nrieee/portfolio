<template>
    <div ref="titleLogo" class="relative z-10 text-center px-4 h-screen flex flex-col justify-center items-center">
        <h1 class="text-white font-black tracking-tighter leading-none">
            <span class="block text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px]">
                FRONTEND ENGINEER
            </span>
            <span
                class="block text-[50px] sm:text-[70px] md:text-[100px] lg:text-[140px] mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                nrieee
            </span>
        </h1>
        <p class="mt-6 text-slate-300 text-lg sm:text-xl md:text-2xl font-light tracking-widest opacity-80">
            Design / Logic / Creativity
        </p>
        <p class="mt-2 text-slate-300 font-light">技術とデザインの感性で、Web体験を実装する</p>
    </div>
</template>

<script setup lang="ts">
import { useGsapFromTo, TITLELOGO_OPTIONS, TITLELOGO_OPTIONS2 } from '#imports';

const titleLogo = ref()

onMounted(async () => {
    const isReady = await waitForElement(titleLogo.value)
    if (isReady) {
        useGsapFromTo({ target: titleLogo.value, options: TITLELOGO_OPTIONS, options2: TITLELOGO_OPTIONS2 })
    }
})
</script>