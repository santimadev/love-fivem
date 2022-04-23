import { writable } from 'svelte/store';
import { io } from "socket.io-client";

export const player = writable(null);

export const socket = io('https://howtolove.me')

window.addEventListener('message', (e) => {
    
    if (e.data.action === 'love:login') {
        player.set(e.data.player)
    }
    if (e.data.action === 'love:keyReleased') {
        const keyEvent = new CustomEvent('keyReleased', {
            detail: {
                key: e.data.key
            },
            bubbles: true
        })
        document.body.dispatchEvent(keyEvent)
    }
})