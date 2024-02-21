import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DownArrow = props => (
  <Svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.4713 8.97132C12.6015 8.84112 12.6666 8.67052 12.6666 8.49985V4.49988C12.6666 4.32928 12.6015 4.15868 12.4713 4.02852C12.211 3.76816 11.7889 3.76816 11.5285 4.02851L7.99992 7.55705L4.47132 4.02851C4.21097 3.76816 3.78886 3.76816 3.52851 4.02852C3.39835 4.15868 3.33327 4.32928 3.33325 4.49988V8.49985C3.33324 8.67052 3.39833 8.84112 3.52852 8.97132L7.52852 12.9713C7.65872 13.1015 7.82932 13.1665 7.99992 13.1665C8.17052 13.1665 8.34112 13.1015 8.47132 12.9713L12.4713 8.97132Z"
      fill="#C4E6FF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.52851 8.0285C3.26816 8.28884 3.26816 8.71097 3.52852 8.9713L7.52852 12.9712C7.78885 13.2316 8.21098 13.2316 8.47132 12.9712L12.4713 8.9713C12.7317 8.71097 12.7317 8.28884 12.4713 8.0285C12.211 7.76817 11.7889 7.76817 11.5285 8.0285L7.99992 11.557L4.47132 8.0285C4.21097 7.76817 3.78886 7.76817 3.52851 8.0285Z"
      fill="#1E93FF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.52851 4.02852C3.26816 4.28886 3.26816 4.71098 3.52852 4.97132L7.52852 8.97125C7.78885 9.23165 8.21098 9.23165 8.47132 8.97125L12.4713 4.97132C12.7317 4.71098 12.7317 4.28886 12.4713 4.02852C12.211 3.76816 11.7889 3.76816 11.5285 4.02851L7.99992 7.55705L4.47132 4.02851C4.21097 3.76816 3.78886 3.76816 3.52851 4.02852Z"
      fill="#1737AF"
    />
  </Svg>
);
export default DownArrow;
