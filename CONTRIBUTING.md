# Contributing to UI-Schema

1. Fork/Clone repository **branch `develop`**
2. Install root dev-dependencies (like lerna, webpack): `npm i`
3. Install & link the `packages`: `npm run bootstrap && npm run link`
4. Start dev-server: `npm start`
    - (will clean-dist + start demo app)
    - to starts docs app: `npm start -- --serve docs`
    - to starts picker demo app: `npm start -- --serve pickersDemo`
5. Open browser on [localhost:4200](http://localhost:4200) for demo, [localhost:4201](http://localhost:4201) for docs
6. Explore [packages](packages)
7. Code -> Commit -> Pull Request -> Being Awesome!

Changes from any package are reflected inside the demo/docs package.

See current *[packages/demo@master](https://ui-schema-demo.netlify.app/)* or
*[packages/demo@develop](https://develop--ui-schema-demo.netlify.app/)*

- Start Documentation: `npm run docs` (needs bootstrap/linking packages beforehand)
    - see [localhost:4201](http://localhost:4201)
    - write in [packages/docs/src/content/docs](./packages/docs/src/content/docs)
- Faster start, needs manual bootstrapping and update handling
    - `npm run serve` start all configured apps
    - `npm run serve -- demo --serve docs` start specific apps (docs and demo here) *[needs a lot of RAM]*

**Commands:**

- Developing test driven: `npm run tdd`
    - needs manual bootstrapping and update handling
    - `npm run tdd -- -u --testPathPattern=src/Validators`
        - with `-u|--update` for snapshot update testing
        - with `--testPathPattern` to run all tests in a specific folder / path
        - `npm run tdd -- --testPathPattern=PatternValidator -t patternValidator` for only one test and often only one file
- Testing: `npm test`
    - needs manual bootstrapping, linking and update handling
- Build: `npm run build`
    - needs manual bootstrapping and update handling
- Clean node_modules and build dirs: `npm run clean`
- Clean build dirs: `npm run clean-dist`
- Add new node_module to one package: `lerna add <npm-package-name> --scope=@xy-form/demo [--dev] [--peer]`, without `--scope` in all packages
- Do not change `package.json` of packages manually, and if Bootstrap [lerna](https://lerna.js.org/): `npm run bootstrap` (maybe delete `package-lock.json`), or simply open an issue
- Add new package `lerna create <name>` and follow on screen, e.g.: `lerna create material-pickers` add package name `@xy-form/material-pickerss`, creates folder `./packages/material-pickers`

> All-in-one clean & reinstall command - skip the first one if not installed completely:
> `npm run clean && rm -rf node_modules && rm -f package-lock.json && npm i && npm run bootstrap && npm run bootstrap && npm run link`
>
> The two-times `bootstrap` fixes sometimes stale `packages` dependencies/lock-files, but sometimes a manual deletion of those also helps with `node_modules` resolving issues.

## Contributors

By committing your code/creating a pull request to this repository you agree to release the code under the [MIT License](LICENSE) attached to the repository and to adhere to the [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md).

Questions? Feel free to open discussions or join the [slack channel](https://join.slack.com/t/ui-schema/shared_invite/zt-smbsybk5-dFIRLEPCJerzDwtycaA71w)!
