import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';


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
          <Title>Do you want to anonymously report this review?</Title>
          <Description>If so, please choose one of the following reasons. Learn more</Description>
          <br />
          <FormData>
            <ReviewExitModal>
              <label className="reviewExitchild" for="huey">Inappropriate Content</label>
              <input className="reviewExitchild" type="radio" id="huey" name="drone" value="huey" checked />
            </ReviewExitModal>
            <div>This review contains violent, graphic, promotional, or otherwise offensive content.</div>
            <Line />
            <ReviewExitModal>
              <label className="reviewExitchild" for="dewey">Dishonest or hateful content</label>
              <input className="reviewExitchild" type="radio" id="dewey" name="drone" value="dewey" />
            </ReviewExitModal>
            <div>This review is purposefully malicious and assaulting.</div>
            <Line />
            <ReviewExitModal>
              <label className="reviewExitchild" for="louie">Fake content</label>
              <input className="reviewExitchild" type="radio" id="louie" name="drone" value="louie" />
            </ReviewExitModal>
            <div>This review contains false information or may be fake.</div>
            <Line />
            <ReviewExitModal>
              <div className="reviewExitchild reviewBackColor" onClick={props.handleCloseModal}>Back</div>
              <SubmitButton onClick={props.handleCloseModal}>Submit</SubmitButton>
            </ReviewExitModal>
          </FormData>

        </div>
      </ReactModal>
    </div>
  );
};


export default Report;


// Styled Components

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
    padding: '40px',
    width: '600px',
    height: '80vh',
    left: 'none',
    right: 'none',
    top: 'none',
    bottom: 'none',
  },
};

const Title = styled.h3`
  font-size: 30px;
  margin: 25px 0;
`;

const Description = styled.h5`
  font-size: 20px;
  margin: 20px 0;
`;

const FormData = styled.form`
  height: calc(100% - 250px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReviewExitModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 12px 0;
`;

const SubmitButton = styled.button`
  padding: 15px 25px;
  font-size: 20px;
  background-color: rgb(0, 132, 137);
  font-weight: bold;
  color: white;
  border-radius: 5px;
  border: 1px solid rgb(0, 132, 137);
`;

const Line = styled.div`
  border-bottom: 1px solid var(--color-divider, #EBEBEB) !important;
  margin-top: 20px;
  margin-bottom: 20px;
`;

