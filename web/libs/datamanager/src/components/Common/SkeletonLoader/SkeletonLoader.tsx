import React, { type ReactChildren } from 'react';
import { Block } from '../../../utils/bem';
import { SkeletonGap } from './SkeletonGap';
import { SkeletonLine } from './SkeletonLine';
import './SkeletonLoader.styl';

interface SkeletonLoaderProps {
  children?: ReactChildren;
  gap?: string;
  lightColor?: string;
  darkColor?: string;
}

export const SkeletonLoader = ({ children, gap = '4px', lightColor, darkColor }: SkeletonLoaderProps) => {
  const styles: any = { '--skeleton-gap': gap };

  lightColor && (styles['--skeleton-light-color'] = lightColor);
  darkColor && (styles['--skeleton-dark-color'] = darkColor);

  return (
    <Block name='skeletonLoader' style={styles}>
      {children ? (
        children
      ) : (
        <>
          <SkeletonLine />
          <SkeletonGap />
          <SkeletonLine width='40%' height='24px' />
          <SkeletonLine width='50%' height='12px' />
        </>
      )}
    </Block>
  );
};
