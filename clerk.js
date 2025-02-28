
import { Clerk } from '@clerk/clerk-js'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const clerk = new Clerk(clerkPubKey)

async function initializeClerk() {
await clerk.load()

const signInButton = document.getElementById('signInButton')

if (!clerk.user) {
signInButton.addEventListener('click', () => {
clerk.openSignIn()
})
} else {
document.getElementById('app').innerHTML = `<div id="user-button"></div>`
const userButtonDiv = document.getElementById('user-button')
clerk.mountUserButton(userButtonDiv)

// console.log(clerk.user.id)
}
}

initializeClerk()
