import React from 'react'

const Tab = ({ tabs = [], children, active }) => {
  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map((value, key) => (<li key={key} className="nav-item pointer no-select-text"><a className={`nav-link ${active === value.seteo ? 'active-custom' : ''}`} onClick={() => value.funcion(value.seteo)}>{value.name}</a></li>))}
      </ul>
      <>{children}</>
    </div>
  )
}

export default Tab;
