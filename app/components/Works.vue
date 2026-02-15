<template>
    <section ref="works" id="works" class="relative w-full py-24 bg-slate-950 overflow-hidden">
        <div class="absolute inset-0 -z-10">
            <div class="absolute bottom-0 left-[-20%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[120px]">
            </div>
        </div>

        <div class="container mx-auto px-6 md:px-12 relative z-10">
            <h2 class="text-center text-4xl md:text-5xl font-bold mb-16 tracking-wider">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Works
                </span>
            </h2>

            <div
                class="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-500">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">

                    <div class="relative h-64 lg:h-auto overflow-hidden bg-slate-800">
                        <div class="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-800/50">
                            <span class="font-mono text-sm">Screenshot Area</span>
                        </div>
                        <img src="/images/portfolio-thumb.jpg" alt="Portfolio Website"
                            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                    </div>

                    <div class="p-8 md:p-12 flex flex-col justify-center">
                        <div class="mb-4">
                            <span class="text-blue-400 text-sm font-bold tracking-widest uppercase">Portfolio</span>
                        </div>

                        <h3 class="text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                            nrieee's Portfolio 2026
                        </h3>

                        <p class="text-slate-400 leading-relaxed mb-8">
                            現在ご覧いただいているポートフォリオサイトです。
                            「エンジニアとしての論理的構造」と「クリエイターとしての感性」の融合をテーマに設計。
                            パフォーマンスを維持しつつ、GSAPを用いた没入感のある演出を実装しました。
                        </p>

                        <div class="flex flex-wrap gap-2 mb-8">
                            <span
                                class="px-3 py-1 text-xs bg-slate-800 text-blue-200 rounded-full border border-slate-700">Nuxt
                                4</span>
                            <span
                                class="px-3 py-1 text-xs bg-slate-800 text-blue-200 rounded-full border border-slate-700">TypeScript</span>
                            <span
                                class="px-3 py-1 text-xs bg-slate-800 text-blue-200 rounded-full border border-slate-700">Tailwind
                                CSS</span>
                            <span
                                class="px-3 py-1 text-xs bg-slate-800 text-blue-200 rounded-full border border-slate-700">GSAP</span>
                        </div>

                        <div class="flex gap-4">
                            <a href="https://github.com/nrieee/portfolio" target="_blank"
                                class="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M10.303 16.652c-2.837-.344-4.835-2.385-4.835-5.028 0-1.074.387-2.235 1.031-3.008-.279-.709-.236-2.214.086-2.837.86-.107 2.02.344 2.708.967.816-.258 1.676-.386 2.728-.386 1.053 0 1.913.128 2.686.365.666-.602 1.848-1.053 2.708-.946.3.581.344 2.085.064 2.815.688.817 1.053 1.913 1.053 3.03 0 2.643-1.998 4.641-4.877 5.006.73.473 1.224 1.504 1.224 2.686v2.235c0 .644.537 1.01 1.182.752 3.889-1.483 6.94-5.372 6.94-10.185 0-6.081-4.942-11.044-11.022-11.044-6.081 0-10.98 4.963-10.98 11.044a10.84 10.84 0 0 0 7.112 10.206c.58.215 1.139-.172 1.139-.752v-1.719a2.768 2.768 0 0 1-1.032.215c-1.418 0-2.256-.773-2.857-2.213-.237-.58-.495-.924-.989-.988-.258-.022-.344-.129-.344-.258 0-.258.43-.451.86-.451.623 0 1.16.386 1.719 1.181.43.623.881.903 1.418.903.537 0 .881-.194 1.375-.688.365-.365.645-.687.903-.902Z">
                                    </path>
                                </svg>
                                View Code
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { useGsapFromTo, WORKS_OPTIONS, WORKS_OPTIONS2 } from '#imports';

const works = ref()

onMounted(async () => {
    const isReady = await waitForElement(works.value)
    if (isReady) {
        useGsapFromTo({ target: works.value, options: WORKS_OPTIONS, options2: WORKS_OPTIONS2 })
    }
})
</script>