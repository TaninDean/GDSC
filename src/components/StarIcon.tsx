import React from 'react';
import classNames from 'classnames';

interface StarIconProps {
  className?: string;
  filled?: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ className, filled = false }) => {
  const starClasses = classNames(
    'inline-block',
    'w-0',
    'h-0',
    'border-solid',
    'border-2',
    'border-black',
    'border-opacity-100',
    'border-yellow-400',
    'border-b-0',
    'border-l-0',
    'border-r-0',
    'text-transparent',
    'font-[100px]',
    'leading-0',
    className,
    {
      'border-b-2': filled,
      'transform rotate-45': filled,
    }
  );

  const starBeforeClasses = classNames(
    'absolute',
    'w-0',
    'h-0',
    'border-solid',
    'border-2',
    'border-black',
    'border-opacity-100',
    'border-yellow-400',
    'border-b-0',
    'border-l-0',
    'border-r-0',
    'transform -rotate-45',
    'left-0',
    'top-1/2',
    'mt-0.5',
    'ml-0.5',
    'text-transparent',
    'font-normal',
    'leading-0',
    {
      'border-l-2': filled,
      'w-3': filled,
      'h-3': filled,
      'mt-0': filled,
      'ml-0': filled,
    }
  );

  const starAfterClasses = classNames(
    'absolute',
    'w-0',
    'h-0',
    'border-solid',
    'border-2',
    'border-black',
    'border-opacity-100',
    'border-yellow-400',
    'border-b-0',
    'border-l-0',
    'border-r-0',
    'transform rotate-45',
    'left-0',
    'top-1/2',
    'mt-0.5',
    'mr-0.5',
    'text-transparent',
    'font-normal',
    'leading-0',
    {
      'border-r-2': filled,
      'w-3': filled,
      'h-3': filled,
      'mt-0': filled,
      'mr-0': filled,
    }
  );

  return (
    <div className={starClasses}>
      <div className={starBeforeClasses} />
      <div className={starAfterClasses} />
    </div>
  );
};

export default StarIcon