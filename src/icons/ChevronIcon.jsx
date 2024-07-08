// eslint-disable-next-line react/prop-types
const ChevronIcon = ({ height = "21", width = "20", color = "#F6F7F7" }) => {
  return (
    <svg width={width} height={height} viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M10.5001 4.9375L14.9446 10.4931L10.5001 16.0486M6.05566 4.9375L10.5001 10.4931L6.05566 16.0486' stroke={color} strokeWidth='1.66667' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default ChevronIcon;
