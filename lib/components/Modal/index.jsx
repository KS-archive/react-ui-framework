import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Mask } from './styles';
import SimpleDialog from './Simple';

class Modal extends PureComponent {
  state = {
    isShow: false,
    animationType: 'leave',
  };

  componentDidMount() {
    if (this.props.visible) this.enter();
  }

  componentWillReceiveProps({ visible }) {
    const [isVisible, wasVisible] = [visible, this.props.visible];
    if (!wasVisible && isVisible) this.enter();
    if (wasVisible && !isVisible) this.leave();
  }

  onKeyUp = ({ keyCode }) => (keyCode === 27) && this.props.onClose();

  enter = () => this.setState({ isShow: true, animationType: 'enter' });

  leave = () => this.setState({ animationType: 'leave' });

  animationEnd = ({ target }) => {
    const { state: { animationType }, props: { onAnimationEnd }, container } = this;

    if (animationType === 'leave') this.setState({ isShow: false });
    else container.focus();

    if (target === container && onAnimationEnd) onAnimationEnd();
  }

  render() {
    const {
      props: { onClose, duration, children, enterAnimation, leaveAnimation, animation, showCloseButton, width, title, icon, color, buttons },
      state: { isShow, animationType },
    } = this;
    const animationName = (animationType === 'enter' ? enterAnimation : leaveAnimation) || animation;

    return (
      <Container
        isShow={isShow}
        duration={duration}
        animationType={animationType}
        onAnimationEnd={this.animationEnd}
        tabIndex="-1"
        innerRef={(container) => { this.container = container; }}
        onKeyUp={this.onKeyUp}
      >
        <Mask onClick={onClose} />
        <SimpleDialog
          width={width}
          duration={duration}
          animationName={animationName}
          animationType={animationType}
          color={color}
          showCloseButton={showCloseButton}
          onClose={onClose}
          icon={icon}
          title={title}
          buttons={buttons.reverse()}
        >
          {children}
        </SimpleDialog>
      </Container>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  visible: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  animation: PropTypes.string,
  enterAnimation: PropTypes.string,
  leaveAnimation: PropTypes.string,
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onAnimationEnd: PropTypes.func,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string,
  buttons: PropTypes.array,
};

Modal.defaultProps = {
  width: 400,
  visible: false,
  showCloseButton: true,
  animation: 'fade',
  enterAnimation: '',
  leaveAnimation: '',
  duration: 300,
  onAnimationEnd: () => {},
  icon: '',
  color: 'var(--primary2)',
  buttons: [],
};

export default Modal;
