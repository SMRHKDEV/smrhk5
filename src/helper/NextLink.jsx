import Link from 'next/link';
import { forwardRef } from 'react';

const NextLink = forwardRef(function LinkBehaviour(props, ref) {
    return <Link ref={ref} {...props} />;
});

export default NextLink;

