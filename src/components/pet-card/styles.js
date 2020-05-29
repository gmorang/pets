import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  background: #fff;
  border-radius: 4px;
  shadow-opacity: 0.1;
  elevation: 1;
  padding: 16px;
`;

export const HeaderBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;
  color: #424242;
`;

export const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 100px;
`;

export const TextContent = styled.Text`
  font-size: 12px;
  color: #424242;

  ${props => props.isTitle && css`
    font-weight: bold;
    margin-top: 15px;
    font-size: 16px;
  `}
`;

export const StatusText = styled.Text`
  font-size: 12px;
  color: ${props => {
    if (props.status === "scheduled") {
      return "#666"
    } else if (props.status === "done") {
      return "#39B6CC"
    } else {
      return "red"
    }
  }}
`;

export const InformationRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const InformationItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ServiceBox = styled.View`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const ServiceItem = styled.Text`
  color: #666;
  font-size: 14px;
`;
