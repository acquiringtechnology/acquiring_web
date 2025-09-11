import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: true
};

function NavLink({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    console.log('pathname---',pathname)
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    return (
        <Link {...props} href={href}>
            
                {children}
            
        </Link>
    );
}