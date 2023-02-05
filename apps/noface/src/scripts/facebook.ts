const selectors = {
    stories: 'div[aria-label="Stories"]',
    post: "h3[dir=auto] + div",
    postOwnerAvatar: "[role=article] svg",
    messageDropdownMenuAvatar: "[role=dialog] [role=gridcell] [role=img] img",
    messageDropdownMenuSeen: "[role=dialog] [role=gridcell] svg",
    complementary: "[role=complementary]",
    messenger: {
        headerAvatar: "[aria-label='Chat settings'] [role=img] img",
        conversationAvatar: "[role=row] [role=gridcell] [aria-hidden=true] img",
        seenAvatar: "[role=row] [role=gridcell] [id][role=none] img",
        beginningOfConversationAvatar: "[aria-describedby][aria-label] img",
        bubble: "[role=img] img",
        typingAvatar: "[role=none] img",
    },
};

function hideFacebookStories() {
    document.querySelector(selectors.stories)?.remove();
}

function hideAvatarsInNewsFeed() {
    const children = document.querySelector(selectors.post)?.children;
    if (children) {
        for (const post of Array.from(children)) {
            post.querySelector("image")?.remove();
        }
    }

    document.querySelectorAll(selectors.postOwnerAvatar)?.forEach((avatar) => {
        avatar.remove();
    });
}

function hideAvatarsInDropdownMenu() {
    document
        .querySelectorAll(selectors.messageDropdownMenuAvatar)
        ?.forEach((img) => {
            img.remove();
        });
    document
        .querySelectorAll(selectors.messageDropdownMenuSeen)
        ?.forEach((svg) => {
            svg.remove();
        });
}

function hideAvatarsInContacts() {
    document
        .querySelector(selectors.complementary)
        ?.querySelectorAll("li svg")
        ?.forEach((svg) => {
            svg.remove();
        });
}

function hideAvatarsInMessenger() {
    document
        .querySelectorAll(selectors.messenger.headerAvatar)
        ?.forEach((img) => {
            img.setAttribute("src", "");
        });
    document
        .querySelectorAll(selectors.messenger.conversationAvatar)
        ?.forEach((img) => {
            img.remove();
        });
    document
        .querySelectorAll(selectors.messenger.seenAvatar)
        ?.forEach((img) => {
            img.remove();
        });
    document
        .querySelectorAll(selectors.messenger.beginningOfConversationAvatar)
        ?.forEach((img) => {
            img.remove();
        });
    document.querySelectorAll(selectors.messenger.bubble)?.forEach((img) => {
        img.remove();
    });
    document
        .querySelectorAll(selectors.messenger.typingAvatar)
        ?.forEach((img) => {
            img.remove();
        });
}

setInterval(() => {
    hideFacebookStories();
    hideAvatarsInNewsFeed();
    hideAvatarsInDropdownMenu();
    hideAvatarsInContacts();
    hideAvatarsInMessenger();
});
