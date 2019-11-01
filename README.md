getSnapshotBeforeUpdate:

getSnapshotBeforeUpdate(prevProps,prevState)
Invoked right before the most recently render output is committed
capture some information from DOM (eg.scroll position) before it changes
what ever valu get form snapshot life cylce need to pass as parameter to componentdidUpdate

componentdidUpdate(prevProps, prevState, snapshot)

handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }