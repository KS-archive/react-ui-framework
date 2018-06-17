import React from 'react';
import sizeMe from 'react-sizeme';
import SVGIcon from '../../SVGIcon';
import Button from '../../Button';
import { StyledDialog, CloseButton, Header, Title, Content, Footer } from '../styles';

const sizeMeHOC = sizeMe({
  monitorWidth: false,
  monitorHeight: true,
  refreshRate: 100,
});

const SimpleDialog = ({
  animationName,
  animationType,
  buttons,
  children,
  className,
  color,
  duration,
  icon,
  onClose,
  showCloseButton,
  size,
  style,
  title,
  width,
}) => (
  <StyledDialog
    className={className}
    width={width}
    duration={duration}
    animationName={animationName}
    animationType={animationType}
    color={color}
    overSize={window.innerHeight < size.height + 80}
    style={style}
  >
    {showCloseButton && <CloseButton className="fa fa-times" onClick={onClose} />}
    <Header>
      {icon && <SVGIcon path={icon} fill={color} width={24} height={24} />}
      <Title>{title}</Title>
    </Header>
    <Content>{children}</Content>
    {buttons.length > 0 && (
      <Footer>{buttons.map(button => <Button key={button.label} size="sm" {...button} />)}</Footer>
    )}
  </StyledDialog>
);

export default sizeMeHOC(SimpleDialog);
