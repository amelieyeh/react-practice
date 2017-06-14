import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(e) {
    e.preventDefault();
    const storeId = this.storeInput.value; // grab store name from input
    console.log(`go to ${storeId}`);

    this.context.router.transitionTo(`/store/${storeId}`); // transition to the store from / to /store/:storeId
  }

  render() {
    // comment outside jsx
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
      {/* comment inside jsx use {} */}
        <h2>Please Enter A store</h2>
        <input type="text" required placeholder="Store name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
