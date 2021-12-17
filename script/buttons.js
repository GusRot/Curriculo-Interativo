function toggleMoreLess(moreLess) {
    let show = moreLess.nextSibling;
    while (show && show.nodeType != 1) {
        show = show.nextSibling;
        if (show.classList.value == "line") {
            show = show.nextSibling;
            while (show && show.nodeType != 1) {
                show = show.nextSibling;
            }
        }
    }
    show.classList.toggle("none");

    if (moreLess.innerHTML === "Ver menos -") {
        moreLess.innerHTML = "Ver mais +";
    } else if (moreLess.innerHTML === "Ver mais +") {
        moreLess.innerHTML = "Ver menos -";
    } else if (moreLess.innerHTML === "View less -") {
        moreLess.innerHTML = "View more +";
    } else if (moreLess.innerHTML === "View more +") {
        moreLess.innerHTML = "View less -";
    }
}
