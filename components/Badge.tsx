import React from 'react'

const Badge = () => {
  return (
    <blockquote className="badgr-badge">
      <a href="https://api.badgr.io/public/assertions/ardud1z8QI-s79TNBby1YA?identity__email=torres.alejo2001%40gmail.com">
        <img
          width="120px"
          height="120px"
          src="https://api.badgr.io/public/assertions/ardud1z8QI-s79TNBby1YA/image"
        />
      </a>
      <p
        className="badgr-badge-name"
      >
        Event Streaming Workshop
      </p>
      <p
        className="badgr-badge-date"
      >
        <strong className='strong-text'>
          Awarded:{' '}
        </strong>
        Nov 22, 2021
      </p>
      <p
        className="badgr-badge-recipient"
      >
        <strong className='strong-text'>
          Awarded To:{' '}
        </strong>
        <span style={{ display: 'block' }}> Alejo Torres</span>
      </p>
      <p style={{ margin: '16px 0', padding: '0' }}>
        <a
          className="badgr-badge-verify"
          target="_blank"
          rel="noopener noreferrer"
          href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2Fardud1z8QI-s79TNBby1YA%3Fidentity__email%3Dtorres.alejo2001%2540gmail.com&amp;identity__email=torres.alejo2001%40gmail.com"
        >
          VERIFY
        </a>
      </p>
      <script
        async
        src="https://badgr.com/assets/widgets.bundle.js"
      ></script>
    </blockquote>
  )
}

export default Badge
