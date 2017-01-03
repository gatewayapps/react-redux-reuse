import React from 'react'
import { injectScopedReducer } from './injectScopedReducer'

export class ScopedComponent extends React.Component {
  constructor (props, scopeProps) {
    super(props)
    this.scopeProps = scopeProps
  }
  componentWillMount () {
    injectScopedReducer(`${this.props.scope}`, this.scopeProps.reducer)
  }
}

ScopedComponent.propTypes = {
  scope: React.PropTypes.string.isRequired
}
