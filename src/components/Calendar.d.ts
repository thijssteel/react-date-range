import * as React from 'react';

export interface CalendarProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  dates: string[];
  onChange: (date: Date) => void
  displayMode: 'dateRange' | 'date' | 'multiDate'
  minDate: Date;
  maxDate: Date;
}

declare class Calendar extends React.Component<CalendarProps> {}
export default Calendar;
