import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { Container, Mask } from './styles';
import SimpleDialog from './Simple';

class Modal extends PureComponent {
  state = {
    isShow: false,
    animationType: 'leave',
  };

  componentDidMount() {
    if (this.props.visible) {
      this.enter();
    }
  }

  componentWillReceiveProps({ visible }) {
    const [isVisible, wasVisible] = [visible, this.props.visible];
    if (!wasVisible && isVisible) this.enter();
    if (wasVisible && !isVisible) this.leave();
  }

  componentDidUpdate({ visible }) {
    if (!visible && this.props.visible) {
      this.scrollbars.scrollToTop();
    }
  }

  onKeyUp = ({ keyCode }) => (keyCode === 27) && this.props.onClose();

  enter = () => this.setState({ isShow: true, animationType: 'enter' });

  leave = () => this.setState({ animationType: 'leave' });

  animationEnd = ({ target }) => {
    const { state: { animationType }, props: { onAnimationEnd }, container } = this;

    if (animationType === 'leave') {
      this.setState({ isShow: false });
    } else {
      container.focus();
    }

    if (target === container && onAnimationEnd) {
      onAnimationEnd();
    }
  }

  render() {
    const {
      props: { animation, buttons, children, color, duration, enterAnimation, icon, leaveAnimation, onClose, showCloseButton, title, width },
      state: { animationType, isShow },
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
        <Mask key="mask" onClick={onClose} />
        <Scrollbars key="scrollbars" ref={(scrollbars) => { this.scrollbars = scrollbars; }}>
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
        </Scrollbars>
      </Container>
    );
  }
}

Modal.propTypes = {
  animation: PropTypes.string,
  buttons: PropTypes.array,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  duration: PropTypes.number,
  enterAnimation: PropTypes.string,
  icon: PropTypes.string,
  leaveAnimation: PropTypes.string,
  onAnimationEnd: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  width: PropTypes.number,
};

Modal.defaultProps = {
  animation: 'fade',
  buttons: [],
  color: 'var(--primary2)',
  duration: 300,
  enterAnimation: '',
  icon: '',
  leaveAnimation: '',
  onAnimationEnd: () => {},
  showCloseButton: true,
  visible: false,
  width: 456,
};

export default Modal;
