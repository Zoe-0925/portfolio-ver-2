import React from 'react';
import PropTypes from 'prop-types';

const SocialLinks = ({ networks }) => (
  <div className="social-links">
    {networks &&
      networks.map((network) => {
        const { id, name, url } = network;
        return (
          <a
            key={id}
            href={url || 'https://github.com/Zoe-0925'}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={name}
          >
            <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
          </a>
        );
      })}
  </div>
);

SocialLinks.propTypes = {
  networks: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default SocialLinks;
