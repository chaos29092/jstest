window.onload = scroll_down();

function scroll_down() {
    for (var i = 0; i < 100; i++) {
        setTimeout("scroll(0,100);", 3000 * i + 1000);
        setTimeout("scroll(0,document.body.scrollHeight)", 3000 * i);
    }
}