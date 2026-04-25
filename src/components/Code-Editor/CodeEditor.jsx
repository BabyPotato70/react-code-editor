import React, { useState } from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import './CodeEditor.css'

const defaultCode = `function Section() {
  const [count, setCount] = React.useState(0)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      padding: '24px',
    }}>
      <h2 style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '0.02em' }}>
        Hello, World!!
      </h2>
      <p style={{ opacity: 0.6, fontSize: '14px' }}>
        Edit the code on the left to see changes here
      </p>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: '8px 20px',
          background: '#7c6af7',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '700',
          fontSize: '14px',
        }}
      >
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </div>
  )
}

render(<Section />)`

const CodeEditor = () => {
  const [code, setCode] = useState(defaultCode)

  return (
    <div className="editor-app">
      {/* top bar */}
      <header className="top-bar">
        <div className="brand">
          <div className="brand-icon">⬡</div>
          <span className="brand-name">React<span>Live</span></span>
        </div>
      </header>

      <div className="editor-layout">
        {/* sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-label">Explorer</div>
            <div className="file-item active">
              <span className="file-dot"></span>
              App.jsx
            </div>
          </div>
          <div className="sidebar-divider" />
          <div className="sidebar-section">
            <div className="sidebar-label">Packages</div>
            <div className="file-item">
              <span className="file-dot"></span>
              react@18
            </div>
            <div className="file-item">
              <span className="file-dot"></span>
              react-dom@18
            </div>
            <div className="file-item">
              <span className="file-dot"></span>
              react-live@4
            </div>
          </div>
        </aside>

        {/* editor + preview qith liveprovider */}
        <LiveProvider code={code} noInline={true}>
          {/* ocde editor side */}
          <div className="editor-panel">
            <div className="editor-tabs">
              <div className="tab active">
                App.jsx
                <span className="tab-close">×</span>
              </div>
            </div>

            <div className="editor-area">
              <LiveEditor onChange={setCode} />
            </div>

            <LiveError />
          </div>

          {/* resize handle */}
          <div className="panel-divider" />

          {/* preview side */}
          <div className="preview-panel">
            <div className="preview-header">
              <div className="preview-title">
                <span className="status-dot"></span>
                Preview
              </div>
            </div>

            <div className="preview-area">
              <LivePreview />
            </div>
          </div>
        </LiveProvider>
      </div>

      {/* status bar */}
      <footer className="status-bar">
        <div className="status-left">
          <span className="status-item status-accent">⬡ React Live</span>
          <span className="status-item">JSX</span>
          <span className="status-item">UTF-8</span>
        </div>
        <div className="status-right">
          <span className="status-item">Ln 1, Col 1</span>
          <span className="status-item">Spaces: 2</span>
          <span className="status-item status-accent">● Live</span>
        </div>
      </footer>
    </div>
  )
}

export default CodeEditor