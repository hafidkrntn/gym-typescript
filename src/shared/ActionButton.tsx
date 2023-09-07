import AnchorLink from 'react-anchor-link-smooth-scroll';
import React from 'react';
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="hover: rounded-md bg-secondary-500 px-5 py-2 text-white hover:bg-primary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
