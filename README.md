# Chrome extensions monorepo

This Turborepo is the home of the following Chrome extensions:

- YouTube Playlist Avoidant
- Noface

## Development

I use `pnpm` as package manager.

- Install dependencies
```bash
pnpm install
```

- Run dev server
```bash
pnpm run dev
# or
pnpm --filter=<workspace-name> run dev
```

- Load unpacked:
    - Open Google Chrome (or Chromium)
    - Go to `chrome://extensions`
    - Click `Load unpacked`
    - Select output directory of one of these extensions
        - `./apps/youtube-playlist-avoidant/dist`
        - `./apps/noface/dist`
    - Make changes to source code, reload the extension and check manually.
