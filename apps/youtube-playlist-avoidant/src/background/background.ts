import "chrome-types";

const MENU_ITEM_ID = "@duong755/youtube-playlist-avoidant"

chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    type: "normal",
    title: "Open without playlist",
    visible: true,
    enabled: true,
    targetUrlPatterns: ["*://*.youtube.com/watch?v=*&list=*"],
    contexts: [
        "link"
    ]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === MENU_ITEM_ID && info.linkUrl) {
        const { searchParams } = new URL(info.linkUrl);
        if (searchParams.has("list")) {
            //
        }
    }
});

console.log("I am running");
