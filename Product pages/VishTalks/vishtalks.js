// Navbar scroll hide/show
(function () {
    const nav = document.getElementById('vt-nav');
    if (!nav) return;
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
        const cur = window.pageYOffset;
        if (cur <= 60) { nav.classList.remove('nav-hidden'); lastScroll = cur; return; }
        nav.classList.toggle('nav-hidden', cur > lastScroll);
        lastScroll = cur;
    });
})();
