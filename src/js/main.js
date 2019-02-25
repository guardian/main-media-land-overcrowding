// Javascript that is inline. Should be used for anything that needs to be immediate
document.getElementsByClassName('video__cta')[0].addEventListener('click', function() {
    setTimeout(function() {
        document.getElementsByTagName('body')[0].classList.add('has-clicked');
    }, 200);
    document.getElementsByClassName('video__embed')[0].setAttribute('src', 'https://www.youtube.com/embed/PubiIdVO7-w?autoplay=1');
})
