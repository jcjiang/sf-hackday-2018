class Timer extends React.Component {
    constructor (props) {
      super(props)
      this.state = {count: 1}
    }
    tick () {
      this.setState({count: (this.state.count + 1)})
    }
    render () {
      return (
        <div className='timer'>
          <h1>{this.state.count}</h1>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Timer />,
    document.getElementById('root')
  )