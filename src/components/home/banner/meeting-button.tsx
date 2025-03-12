import React from 'react';
import { Button } from 'react-bootstrap';

interface MeetingButtonProps {
  title: string;
}

const MeetingButton: React.FC<MeetingButtonProps> = ({ title }) => {
  return (
    <Button className="btn btn-secondary">
      {title}
    </Button>
  );
};

export default MeetingButton;