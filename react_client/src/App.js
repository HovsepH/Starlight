import React from 'react';
import { GeneralMenu } from './GeneralMenu';
import { AnimationStar } from './AnimationStar';
import { TabContainer } from './TabContainer';
import MobileMenu from "./MobileMenu";

function App() {
  const title = "STARLIGHT";

  return (
    <div>
      <div>
        <GeneralMenu />
          </div>
      <div className='tab-container'>
        <TabContainer title={title} />
      </div>
      
      <AnimationStar />
    </div>

  );
}

export default App;
