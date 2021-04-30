import * as React from 'react';
const DrawerBackdrop = ({ closeDrawer }) => (React.createElement("div", { onClick: closeDrawer, className: "cursor-pointer fixed w-full h-full bg-[rgba(0,0,0,0.5)] z-10 top-0 right-0" }));
export default DrawerBackdrop;
