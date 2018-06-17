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

  onKeyUp = ({ keyCode }) => keyCode === 27 && this.props.onClose();

  enter = () => this.setState({ isShow: true, animationType: 'enter' });

  leave = () => this.setState({ animationType: 'leave' });

  animationEnd = ({ target }) => {
    const {
      state: { animationType },
      props: { onAnimationEnd },
      container,
    } = this;

    if (animationType === 'leave') {
      this.setState({ isShow: false });
    } else {
      container.focus();
    }

    if (target === container && onAnimationEnd) {
      onAnimationEnd();
    }
  };

  render() {
    const {
      props: {
        buttons,
        children,
        className,
        color,
        duration,
        enterAnimation,
        icon,
        leaveAnimation,
        onClose,
        showCloseButton,
        style,
        title,
        width,
      },
      state: { animationType, isShow },
    } = this;
    const animationName =
      (animationType === 'enter' ? enterAnimation : leaveAnimation);

    return (
      <Container
        isShow={isShow}
        duration={duration}
        animationType={animationType}
        onAnimationEnd={this.animationEnd}
        tabIndex="-1"
        innerRef={(container) => {
          this.container = container;
        }}
        onKeyUp={this.onKeyUp}
      >
        <Mask key="mask" onClick={onClose} />
        <Scrollbars
          key="scrollbars"
          ref={(scrollbars) => {
            this.scrollbars = scrollbars;
          }}
        >
          <SimpleDialog
            className={className}
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
            style={style}
          >
            {children}
          </SimpleDialog>
        </Scrollbars>
      </Container>
    );
  }
}

Modal.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.number,
  enterAnimation: PropTypes.oneOf(['fade', 'zoom', 'slideDown', 'slideLeft', 'slideRight', 'slideUp', 'flip', 'rotate', 'door']),
  icon: PropTypes.string,
  leaveAnimation: PropTypes.oneOf(['fade', 'zoom', 'slideDown', 'slideLeft', 'slideRight', 'slideUp', 'flip', 'rotate', 'door']),
  onAnimationEnd: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool,
  style: PropTypes.object,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  width: PropTypes.number,
};

Modal.defaultProps = {
  buttons: [],
  className: '',
  color: 'var(--primary2)',
  duration: 300,
  enterAnimation: 'fade',
  icon: '',
  leaveAnimation: 'fade',
  onAnimationEnd: () => {},
  showCloseButton: true,
  style: {},
  visible: false,
  width: 456,
};

export default Modal;
