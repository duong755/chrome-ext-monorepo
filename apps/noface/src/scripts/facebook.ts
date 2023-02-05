function hideFacebookStories() {
    document.querySelector("div[aria-label=\"Stories\"]")?.remove();
}

function hideAvatarsInNewsFeed() {
    const children = document.querySelector("h3[dir=auto] + div")?.children;
    if (children) {
        for (const post of Array.from(children)) {
            post.querySelector("image")?.remove();
        }
    }

    document.querySelectorAll("[role=article] svg")?.forEach((avatar) => {
        avatar.remove();
    });
}

function hideAvatarsInDropdownMenu() {
    document.querySelectorAll("[role=dialog] [role=gridcell] [role=img] img")?.forEach((img) => {
        img.remove();
    });
    document.querySelectorAll("[role=dialog] [role=gridcell] svg")?.forEach((svg) => {
        svg.remove();
    });
}

function hideAvatarsInContacts() {
    document.querySelector("[role=complementary]")?.querySelectorAll("li svg")?.forEach((svg) => {
        svg.remove();
    });
}

function hideAvatarsInMessenger() {
    document.querySelectorAll("[aria-label='Chat settings'] [role=img] img")?.forEach(img => {
        img.setAttribute("src", "");
    });
    document.querySelectorAll("[role=row] [role=gridcell] [aria-hidden=true] img")?.forEach((img) => {
        img.remove();
    });
    document.querySelectorAll("[role=row] [role=gridcell] [id][role=none] img")?.forEach((img) => {
        img.remove();
    });
    document.querySelectorAll("[aria-describedby][aria-label] img")?.forEach((img) => {
        img.remove();
    });
    document.querySelectorAll("[role=img] img")?.forEach((img) => {
        img.remove();
    })
}

setInterval(() => {
    hideFacebookStories();
    hideAvatarsInNewsFeed();
    hideAvatarsInDropdownMenu();
    hideAvatarsInContacts();
    hideAvatarsInMessenger();
});
