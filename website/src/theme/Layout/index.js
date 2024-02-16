import React from 'react';
import Layout from '@theme-original/Layout';
import ComponentInteractions from '@site/src/components/ComponentInteractions';

export default function LayoutWrapper(props) {
  return (
    <>
      <ComponentInteractions />
      <Layout {...props} />
    </>
  );
}
