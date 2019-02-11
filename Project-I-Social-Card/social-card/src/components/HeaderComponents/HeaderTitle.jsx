import React from 'react';
import './Header.css';

import Moment from 'react-moment';

function HeaderTitle(){
  return (
    <div><b>Lambda School</b> <span className="text-muted"><a href="">@LambdaSchool</a> <Moment format="MMM Do YY" /></span></div>
  );
}

export default HeaderTitle;