import moment from 'moment';
import React, { FC } from 'react';
import { Rounded } from 'shared/enums/Rounded';
import { Size } from 'shared/enums/Size';
import MyCard from './MyCard';

interface MyEventCardProps {
  eventDate: string;
  rounded?: Rounded;
  shadow?: Size;
  minimumHeight?: number;
  transition?: object;
  variants?: { onScreen: object; offScreen: object };
  children?: React.ReactNode;
}

const MyEventCard: FC<MyEventCardProps> = ({
  eventDate,
  rounded,
  shadow,
  minimumHeight,
  variants,
  transition,
  children,
}) => {
  const month = moment(eventDate).format('MMM');
  const day = moment(eventDate).format('DD');
  const year = moment(eventDate).format('yyyy');

  return (
    <MyCard
      rounded={rounded}
      shadow={shadow}
      minimumHeight={minimumHeight}
      variants={variants}
      transition={transition}
    >
      <div className="flex gap-4 p-4">
        <span className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-onPrimary">
          <span className="-mt-2 text-5xl font-extrabold ">{day}</span>
          <div className="-mt-0.5 text-xs">
            <span className="uppercase">{month}</span>
            <span>,</span>
            <span className=""> {year}</span>
          </div>
        </span>
        {children}
      </div>
    </MyCard>
  );
};

export default MyEventCard;
