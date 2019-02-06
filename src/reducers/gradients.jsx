const gradients = (
  state = {
    start: '#FFFFFF',
    end: '#000000'
  },
  action
) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        start: action.nextColor,
        end: state.start
      };

    default:
      return state;
  }
};

export default gradients;
