import './MacosWindow.scss'

const MacosWindow = ({ children }) => {
  return (
    <div className="macos-window">
      <div className="macos-window__navigation">
        <div className='macos-window__navigation_close'></div>
        <div className='macos-window__navigation_collapse'></div>
        <div className='macos-window__navigation_expand'></div>
      </div>
      <div className="macos-window__content">{children}</div>
    </div>
  )
}

export { MacosWindow }
