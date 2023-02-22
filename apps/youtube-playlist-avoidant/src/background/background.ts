import "chrome-types";
import { OPEN_IN_CURRENT_TAB, OPEN_IN_NEW_TAB, ROOT_MENU_ITEM_ID } from "../common/constants";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: ROOT_MENU_ITEM_ID,
        type: "normal",
        title: "Open without playlist",
        visible: true,
        enabled: true,
        targetUrlPatterns: [
            "*://*.youtube.com/watch?v=*&list=*",
            "*://*.youtube.com/watch?list=*&v=*",
        ],
        contexts: ["link"],
    }, () => {
        chrome.contextMenus.create({
            id: OPEN_IN_CURRENT_TAB,
            type: "normal",
            title: "In current tab",
            visible: true,
            enabled: true,
            parentId: ROOT_MENU_ITEM_ID,
            contexts: ["link"],
        });
        chrome.contextMenus.create({
            id: OPEN_IN_NEW_TAB,
            type: "normal",
            title: "In new tab",
            visible: true,
            enabled: true,
            parentId: ROOT_MENU_ITEM_ID,
            contexts: ["link"],
        });
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.linkUrl && tab?.id) {
        const { searchParams, protocol, hostname } = new URL(info.linkUrl);
        if (searchParams.has("v") && searchParams.has("list")) {
            const newSearchParams = new URLSearchParams({
                v: searchParams.get("v")!,
            });
            const newURL = `${protocol}//${hostname}/watch?${newSearchParams.toString()}`;

            switch (info.menuItemId) {
                case OPEN_IN_CURRENT_TAB: {
                    chrome.tabs.update(tab.id, {
                        url: newURL,
                    });
                    break;
                }
                case OPEN_IN_NEW_TAB: {
                    chrome.tabs.create({
                        url: newURL,
                        active: true,
                    });
                    break;
                }
            }
        }
    }
});
