import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import "./Header.css"
import "../App.css"

// source: https://www.npmjs.com/package/react-modal
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement(document.querySelector("#body"));

const Header = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div id="header">
            <Link to="/comp4513-a1/" id="logo" onClick={props.closeCurrent}>&#127917;</Link>
            <button onClick={openModal}>About</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2>Shakespeare Play Browser</h2>
                <h3>Assignment Information</h3>
                <table>
                    <tbody>
                        <tr>
                            <td title="name">Olga Koldachenko</td>
                            <td><a title="contact" href="mailto:okold525@mtroyal.ca">okold525@mtroyal.ca</a></td>
                        </tr>
                        <tr>
                            <td title="university">Mount Royal University</td>
                            <td title="professor">Randy Connolly</td>
                        </tr>
                        <tr>
                            <td title="course">COMP 4513 - Web III</td>
                            <td title="semester">Fall 2021</td>
                        </tr>        
                    </tbody>
                </table>
                <h3>Resources & References</h3>
                <div className="columns">
                    <p><a href="https://reactjs.org/">react</a></p><p>framework</p>
                    <p><a href="https://www.npmjs.com/package/react-modal">react-modal</a></p><p>modal dialog</p>
                    <p><a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a></p><p>routing</p>
                    <p><a href="https://unsplash.com/photos/nz-UtZz81fI">unsplash</a></p><p>home view splash image</p>
                    <p><a href="https://icons8.com/preloaders/en/circular">preloaders.net</a></p><p>spinner gif</p>
                </div>
                <p>All the symbols are unicode this time around</p>
                <button id="modal-button" onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
}

export default Header;