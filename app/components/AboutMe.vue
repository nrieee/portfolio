<template>
    <section ref="about" id="about" class="relative w-full py-24 bg-slate-950 overflow-hidden">
        <div class="absolute inset-0 -z-10 pointer-events-none">
            <div
                class="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] bg-blue-700 rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-blob animation-delay-4000">
            </div>
            <div
                class="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:24px_24px] opacity-50">
            </div>
        </div>
        <div class="container mx-auto px-6 md:px-12 relative z-10">
            <h2 class="text-center text-4xl md:text-5xl font-bold mb-16 tracking-wider">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    About Me
                </span>
            </h2>

            <div class="max-w-3xl mx-auto text-slate-300 leading-loose text-lg space-y-8 font-light">
                <p class="text-2xl text-white font-medium">
                    はじめまして、nrieeeです。<br>
                    「クリエイティブ」をし続けているフロントエンドエンジニアです。
                </p>
                <p>
                    Nuxt.jsを中心にフロントエンド開発を担っています。<br>
                    時にはデザインを忠実に再現すべく、1px単位でこだわります。<br>
                    クリエイティブの一環で、イラストレーターとして一枚の絵に世界観を込める活動もしています。
                </p>
                <p>
                    私の強みは、ビジュアル表現への「こだわり」と、それを論理的なコードで構築する「実装力」の両立です。<br>
                    デザインの意図を深く理解し、エンジニアの視点で最適化することで、ただ美しいだけでなく、使いやすく心に残るWeb体験を創り出すことに力を入れています。
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useGsapFromTo, ABOUTME_OPTIONS, ABOUTME_OPTIONS2 } from '#imports';

const about = ref()

onMounted(async () => {
    const isReady = await waitForElement(about.value)
    if (isReady) {
        useGsapFromTo({ target: about.value, options: ABOUTME_OPTIONS, options2: ABOUTME_OPTIONS2 })
    }
})
</script>