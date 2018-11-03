import React from 'react';
import ReactModal from 'react-modal';


const Report = (props) => {
  return (
    <div>
      <ReactModal
        isOpen={props.showModal}
        contentLabel="Contact"
        onRequestClose={props.handleCloseModal}
        ariaHideApp={false}
        // className="modal"
        // overlayClassName="overlay"
        style={modalStyle}>
        <div>
          <i class="fas fa-times" onClick={props.handleCloseModal} width="50" height="50"></i>
          <h3 className="font">Do you want to anonymously report this review?</h3>
          <h5 className="font">If so, please choose one of the following reasons. Learn more</h5>
          <br/>
          <form>
            <fieldset className="fieldset">
              <div className="reviewExitModal">
                <label className="reviewExitchild" for="huey">Inappropriate Content</label>
                <div className="reviewExitchild"></div>
                <input className="reviewExitchild" type="radio" id="huey" name="drone" value="huey" checked />
              </div>
              <div>This review contains violent, graphic, promotional, or otherwise offensive content.</div>
              <div className='reviewParentLine'>
                <div className='reviewLine'></div>
              </div>
              <div className="reviewExitModal">
                <label className="reviewExitchild" for="dewey">Dishonest or hateful content</label>
                <div className="reviewExitchild"></div>
                <input className="reviewExitchild" type="radio" id="dewey" name="drone" value="dewey" /> 
              </div>
              <div>This review is purposefully malicious and assaulting.</div>
              <div className='reviewParentLine'>
                <div className='reviewLine'></div>
              </div>
              <div className="reviewExitModal">
                <label className="reviewExitchild" for="louie">Fake content</label>
                <div className="reviewExitchild"></div>
                <input className="reviewExitchild" type="radio" id="louie" name="drone" value="louie" />
              </div>
              <div>This review contains false information or may be fake.</div>
              <div className='reviewParentLine'>
                <div className='reviewLine'></div>
              </div>
            </fieldset>
            <div className="reviewExitModal">
              <div className="reviewExitchild reviewBackColor" onClick={props.handleCloseModal}>Back</div>
              <div className="reviewExitchild"></div>
              <button className="submitButton" onClick={props.handleCloseModal}>Submit</button>
            </div>             
          </form>

        </div>
      </ReactModal>
    </div>
  );
};

 
export default Report;

              // <legend >Select a maintenance drone</legend>

const modalStyle = {
  overlay: {
    display: 'flex',
    position: 'fixed', //'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(0,0,0,0.75)',
  },
  content: {
    fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
    color: '#484848',
    position: 'relative',
    margin: 'auto',
    border: 'none',
    background: '#fff',
    outline: 'none',
    padding: '5px',
    width: '600px',
    height: '80vh',
    left: 'none',
    right: 'none',
    top: 'none',
    bottom: 'none',
    padding: '40px',
    h3: {fontSize: '30px'},
    h5: {fontSize: '20px'},
    form: {
      height: 'calc(100% - 250px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    reviewExitModal: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    submitButton: {
      padding: '20px 30px',
      fontSize: '23px',
      backgroundColor: 'rgb(0, 132, 137)',
      fontWeight: 'bold',
      color: 'white',
      borderRadius: '6px',
      border: '1px solid rgb(0, 132, 137)',
    },
  },
};


