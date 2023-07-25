import { Breadcrumbs, Stack, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const CustomBreadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';
  let lastLink = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      if (crumb === lastLink) {
        return (
          <Typography key={crumb} color="#626262" fontWeight={500}>
            {isNaN(crumb) ? crumb.charAt(0).toUpperCase() + crumb.slice(1) : 'Label'}
          </Typography>
        );
      }

      return (
        <Link key={crumb} to={currentLink}>
          <Typography color="#1B4B66" fontWeight={500}>
            {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
          </Typography>
        </Link>
      );
    });

  return (
    <Toolbar>
      <Breadcrumbs separator="›">
        <Link to="/">
          <Typography color="#1B4B66" fontWeight={500}>
            Home
          </Typography>
        </Link>
        {crumbs}
      </Breadcrumbs>
    </Toolbar>
  );
};

export default CustomBreadcrumbs;
