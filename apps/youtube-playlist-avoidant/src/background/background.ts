import "chrome-types";
import { MENU_ITEM_ID } from "../common/constants";

chrome.runtime.onInstalled.addListener(() => {
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
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === MENU_ITEM_ID && info.linkUrl) {
        const { searchParams, protocol, hostname } = new URL(info.linkUrl);
        if (tab && tab.id && searchParams.has("v") && searchParams.has("list")) {
            const newSearchParams = new URLSearchParams({
                v: searchParams.get("v") ?? "",
            });
            const newURL = `${protocol}//${hostname}/watch?${newSearchParams.toString()}`;
            chrome.tabs.update(tab.id, {
                url: newURL
            });
        }
    }
});
