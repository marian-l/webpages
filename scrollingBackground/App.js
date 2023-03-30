const menu = document.getElementById("menu");

// this code makes it so the background pattern retains its position after unhovering an list item
Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index; // numerates elements top to bottom 0 to (length-1)
        }
    })
