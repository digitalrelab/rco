# RCO (React Click Outside)

![](https://img.shields.io/badge/license-MIT-blue.svg)

A simple _Click Outside_ component for React with built-in TypeScript support.

## Installation

```
$ yarn add @digitalrelab/rco
```

## Basic usage

```tsx
import ClickOutside from "@digitalrelab/rco"

const Popover = ({ closePopover }) => (
  <ClickOutside onClickOutside={closePopover}>
    <p>A popover that hides when you click outside.</p>
  </ClickOutside>
)
```

## Exceptions

Sometimes you have outside components that you don't want to trigger the `onClickOutside` callback, so the `exceptions` property is the way to go. Pretty simple to use:

```tsx
const Header = () => <header id="header" />

const Popover = ({ closePopover }) => (
  <ClickOutside onClickOutside={closePopover} exceptions={["#header"]}>
    <div>A popover that hides when you click outside but the #header.</div>
  </ClickOutside>
)
```

Basically, `exceptions` expects a `string[]` where each element represents a DOM's query selector.

## Why a fork?

[TJ created a cool and simple ClickOutside component](https://github.com/tj/react-click-outside) a while ago, but the needs at [DigitalReLab](https://digitalrelab.com) demanded some updates that he didn't have time to support, so we forked his repo and extended the component's functionalities according to our needs, still giving the community the opportunity to benefit from our updates.
