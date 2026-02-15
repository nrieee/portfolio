import gsap from 'gsap'
import { waitForElement } from '#imports'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export const useGsapFromTo = async (val: { target: string | HTMLElement; options: fromToOptions, options2: fromToOptions2 }) => {
    const isVisible = await waitForElement(val.target)
    if (isVisible) {
        const options2 = val.options2 as { [key: string]: any }
        if (options2 && options2.scrollTrigger) {
            const scrollTrigger = { ...options2.scrollTrigger, trigger: val.target }
            ScrollTrigger.batch(val.target, {
                onEnter: batch => gsap.fromTo(batch, val.options, { ...options2, scrollTrigger })
            })
        } else {
            ScrollTrigger.batch(val.target, {
                onEnter: batch => gsap.fromTo(batch, val.options, val.options2)
            })
        }
    }
}