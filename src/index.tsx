import * as React from "react"

const ClickOutside: React.FunctionComponent<IClickOutside> = ({
  onClickOutside,
  children,
  exceptions,
}) => {
  const containerEl: React.MutableRefObject<HTMLDivElement> = React.useRef(null)

  function handleClickOutside(event: MouseEvent) {
    if (event.type === "touchend") {
      // TODO: Add touch support.
    }

    if (
      onClickOutside &&
      containerEl &&
      containerEl.current &&
      !containerEl.current.contains(event.target as Node) &&
      !isExceptionElement(event.target as HTMLElement)
    ) {
      onClickOutside(event)
    }
  }

  function isExceptionElement(clickedElement: HTMLElement): boolean {
    if (!exceptions || exceptions.length === 0) {
      return false
    }

    return exceptions
      .map(querySelector => {
        const exceptionElement = document.querySelector(querySelector)

        return (
          clickedElement.isEqualNode(exceptionElement) ||
          exceptionElement.contains(clickedElement)
        )
      })
      .some(b => b === true)
  }

  React.useEffect(() => {
    document.addEventListener("touchend", handleClickOutside, true)
    document.addEventListener("click", handleClickOutside, true)
    document.addEventListener("contextmenu", handleClickOutside, true)

    return () => {
      document.removeEventListener("touchend", handleClickOutside, true)
      document.removeEventListener("click", handleClickOutside, true)
      document.removeEventListener("contextmenu", handleClickOutside, true)
    }
  }, [])

  return <div ref={containerEl}>{children}</div>
}

interface IClickOutside {
  children: React.ReactNode
  exceptions?: TQuerySelector[]
  onClickOutside?: (event: MouseEvent) => void
}

type TQuerySelector = string

export default ClickOutside
