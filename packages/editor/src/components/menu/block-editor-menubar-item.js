import React from 'react';
import './menubar-item.scss';
export const BlockMenubarMenuItem = ({ icon, title, action, isActive = () => false, }) => (<button className={`menu-item ${isActive() ? 'border border-zinc-950 text-white' : 'bg-white text-black'}`} onClick={action} title={title}>
    {icon}
  </button>);
