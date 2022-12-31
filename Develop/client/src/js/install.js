const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    // Store the triggered events
    window.deferredPrompt = event;

    // Removes the hidden class from the button
butInstall.classList.toggle('hidden', false);
});

window.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;
    if(!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.defferedPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    console.log('install hit')
    window.deferredPrompt = null;
});