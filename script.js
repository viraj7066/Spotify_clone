const togglePlayerButton = document.getElementById('togglePlayerButton');
const musicPlayer = document.getElementById('player');
const showbutton = document.getElementById('show');

togglePlayerButton.addEventListener('click', function() {
    musicPlayer.classList.toggle('hidden');
});

showbutton.addEventListener('click', function() {
    musicPlayer.classList.remove('hidden');
})
