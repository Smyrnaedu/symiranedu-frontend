import React from 'react';
import { Button } from 'react-bootstrap';

interface MeetingButtonProps {
  title: string;
}

const MeetingButton: React.FC<MeetingButtonProps> = ({ title }) => {
  return (
    <a className="btn btn-secondary">
      {title}
    </a>
  );
};

export default MeetingButton;