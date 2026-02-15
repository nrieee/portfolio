export const waitForElement = (element: HTMLElement | null | string, timeout = 10000): Promise<boolean> => {
    return new Promise((resolve) => {
        const startTime = Date.now()
        const id = setInterval(() => {
            if (typeof element === 'string') {
                if (document.querySelector(element)) {
                    clearInterval(id)
                    resolve(true)
                } else if (Date.now() - startTime > timeout) {
                    clearInterval(id)
                    resolve(false)
                }
            } else {
                if (element?.isConnected) {
                    clearInterval(id)
                    resolve(true)
                } else if (Date.now() - startTime > timeout) {
                    clearInterval(id)
                    resolve(false)
                }
            }
        }, 500)
    })
}