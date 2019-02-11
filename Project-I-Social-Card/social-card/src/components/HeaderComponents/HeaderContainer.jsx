import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function Header(){
  return (
    <div className="flex">
      <div>
        <ImageThumbnail />
      </div>
      <div>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
}

export default Header;