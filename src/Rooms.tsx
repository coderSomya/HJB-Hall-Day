import React, { useRef, useState } from 'react';
import { Button, Tour } from 'antd';
import type { TourProps } from 'antd';
import "./index.css"

const Rooms: React.FC = () => {
  const ref = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps['steps'] = [
    {
      title: 'D-block',
      description: 'Checkout rooms',
      target: null,
    },
    {
      title: 'D-317',
      description: "Somyajeet, Aditya public lobby",
      placement: 'top',
      target: () => ref.current,
    },
    {
      title: 'D-313',
      description: "Communique Headquarters",
      placement: 'top',
      target: () => ref.current,
    },
    {
      title: 'D-203',
      description: "KTJ private lobby",
      placement: 'bottom',
      target: () => ref.current,
    },
 
    {
      title: 'D-304',
      description: "Moulik's Ganja store",
      placement: 'top',
      target: () => ref.current,
    },
    {
      title: 'D-204',
      description: "GSex room",
      placement: 'bottom',
      target: () => ref.current,
    },
  ];

  return (
    <>

    <div className='hidden md:block'>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        Begin Tour
      </Button>
      <br />
      <div>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      </div>
  </div>
    </>
  );
};

export default Rooms;