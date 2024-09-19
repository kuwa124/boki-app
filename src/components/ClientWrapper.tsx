'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

type ClientWrapperProps = {
  children: React.ReactNode;
};

export const ClientWrapper = ({ children }: ClientWrapperProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
