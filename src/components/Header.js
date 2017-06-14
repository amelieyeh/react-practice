import React from 'react';

/*
// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">of</span>
//             <span className="the">the</span>
//           </span>
//           DAY
//         </h1>
//         <h3 className="tagline"><span>{ this.props.tagline }</span></h3>
//       </header>
//     )
//   }
// }
*/

// use stateless functional component instead for this component

const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        DAY
      </h1>
      <h3 className="tagline"><span>{ props.tagline }</span></h3>
    </header>
  )
}

Header.propTypes = {
  tagline: React.PropTypes.string.isRequired
}

export default Header;
