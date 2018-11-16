# RCO (React Click Outside)

![](https://img.shields.io/badge/license-MIT-blue.svg)

_This is a fork of [tj/react-click-outside](https://github.com/tj/react-click-outside)._

A Click Outside component for React.

## Installation

```
$ yarn add @digitalrelab/rco
```

## Example

```js
import ClickOutside from '@digitalrelab/rco'

const Popover = ({ closePopover }) => (
  <ClickOutside onClickOutside={closePopover}>
    <p>A popover that hides when you click outside.</p>
  </ClickOutside>
)
```

## Why a fork?

This compoent is great. Minimal API and gets the job done, but seems that TJ isn't maintaing it that much, so we decided to give it some support in order to make it fit our needs.

---

> [tjholowaychuk.com](http://tjholowaychuk.com) &nbsp;&middot;&nbsp;
> GitHub [@tj](https://github.com/tj) &nbsp;&middot;&nbsp;
> Twitter [@tjholowaychuk](https://twitter.com/tjholowaychuk)
