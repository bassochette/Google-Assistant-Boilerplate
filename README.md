

## setup
`npm i`

## dev
### test the bot brain via the cli
```
npm run cli
```

## Channels
### Discord

set the DISCORD_KEY env variable

```sh
node discord/hook
```


## publish action package
### install gactions

cf [https://developers.google.com/actions/tools/gactions-cli](https://developers.google.com/actions/tools/gactions-cli)

### publish

```
gactions update --action_package ./action-packages/action.en.json --action_package ./action-packages/action.fr.json --project
PROJECT_NAME
```
