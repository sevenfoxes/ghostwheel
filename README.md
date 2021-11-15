# Ghostwheel

component inventory management

> draft

## motivation:

building complex web applications is hard enough, it shouldn't come at the expense of learning yet ANOTHER tool. Ghostwheel is an abstraction, as opposed to a library, to provide a consistent development api and cli between the application under development and third party assets/influences.

## Opinions

The only opinions that matter are the ones that matter to you, but your opinions change, your project changes, the way you talk to services, your view library. The goal for Ghostwheel is to have as few opinions as possible.

## Application structure

Is yours! Ghostwheel is in your project, but apart from it.

## getting things from Ghostwheel

this is just a webpack alias to the webpack folder. Ghostwheel has a cli, but you don't have to use it because any ghostwheel code is just a folder in your own repository. You just check it in.

```
import {BuildingIcon, Page, pageState, amber} from 'ghostwheel'
```

## application component

creates a component at the application level

```
npm run app:component
```
