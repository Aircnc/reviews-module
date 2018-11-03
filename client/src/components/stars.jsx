import React from 'react';
import styled from 'styled-components';


const Stars = (props) => {

  return (
    <AllStars>
      <LeftStars>

        <LoneStarRate>
          <LoneNames> Accuracy </LoneNames>
          <StarRate>
            <StarRateTop style={{ width: `${props.list_data.accuracy*100/5}%` }}>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateTop>
            <StarRateBottom>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateBottom>
          </StarRate>
        </LoneStarRate>

        <LoneStarRate>
          <LoneNames> Communication </LoneNames>
          <StarRate>
            <StarRateTop style={{ width: `${props.list_data.communication*100/5}%` }}>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateTop>
            <StarRateBottom>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateBottom>
          </StarRate>
        </LoneStarRate>

        <LoneStarRate>
          <LoneNames> Cleanliness </LoneNames>
          <StarRate>
            <StarRateTop style={{ width: `${props.list_data.clean*100/5}%` }}>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateTop>
            <StarRateBottom>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateBottom>
          </StarRate>
        </LoneStarRate>
      </LeftStars>

      <RightStars>

        <LoneStarRate>
          <LoneNames> Location </LoneNames>
          <StarRate>
            <StarRateTop style={{ width: `${props.list_data.location*100/5}%` }}>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateTop>
            <StarRateBottom>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateBottom>
          </StarRate>
        </LoneStarRate>

        <LoneStarRate>
          <LoneNames> Check-in </LoneNames>
          <StarRate>
            <StarRateTop style={{ width: `${props.list_data.checkin*100/5}%` }}>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateTop>
            <StarRateBottom>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateBottom>
          </StarRate>
        </LoneStarRate>

        <LoneStarRate>
          <LoneNames> Value </LoneNames>
          <StarRate>
            <StarRateTop style={{ width: `${props.list_data.value*100/5}%` }}>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateTop>
            <StarRateBottom>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
              <StarSpacing>★</StarSpacing>
            </StarRateBottom>
          </StarRate>
        </LoneStarRate>

      </RightStars>
    </AllStars>
  );
};

export default Stars;


// Styled Components

const AllStars = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftStars = styled.div`
  width: 50%;
  margin-right: 20px;
`;

const RightStars = styled.div`
  width: 50%;
  margin-left: 20px;
`;

const LoneStarRate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const LoneNames = styled.div`
  margin: auto 0;
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  color: #484848;
`;

const StarRate = styled.div`
  margin: auto 0;
  unicode-bidi: bidi-override;
  color: rgb(216, 216, 216);
  font-size: 20px;
  width: 112px;
  position: relative;
  padding: 0;
  text-shadow: 0px 0.5px 0 #a2a2a2;
`;

const StarRateTop = styled.div`
  color: rgb(0, 132, 137);
  padding: 0;
  position: absolute;
  z-index: 0;   // was set to 1
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const StarRateBottom = styled.div`
  padding: 0;
  display: block;
  z-index: 0;
`;

const StarSpacing = styled.span`
  margin-right: 3px;
`;

