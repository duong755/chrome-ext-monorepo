function hideNavigationAvatars() {
    document.querySelectorAll("[role=navigation] [role=row]")?.forEach((element) => {
        element.querySelectorAll("[role=img] img[src]")?.forEach((img) => {
            img.setAttribute("src", "");
            img.nextElementSibling?.setAttribute("style", "background-color: #ffffff");
        });
        element.querySelectorAll("image")?.forEach((image) => {
            image.remove();
        });
    });
}

function hideConversationAvatars() {
    document.querySelector("a[aria-label][href] div[role=img] img[src]")?.setAttribute("src", "");
    document.querySelectorAll("div[role=none] div[aria-hidden] img[src]")?.forEach((img) => {
        img.remove();
    });
    document.querySelector("[role=img] img")?.remove();
    document.querySelector("[id][role=none] img")?.remove();
}

setInterval(() => {
    hideNavigationAvatars();
    hideConversationAvatars();
});
