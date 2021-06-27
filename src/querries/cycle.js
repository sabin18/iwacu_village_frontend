import { gql } from '@apollo/client';

const PERIOD_QUERY = gql`
  query menstrualCycle ($years: Int){
    menstrualCycle (years: $years) {
        title
        event
        start
        end
        className
        display
        
  }
}
`;
const MESTRUAL_CYCLE_NOTIFICATIONS_QUERY = gql`
  query menstrualCycleNotifications{
    menstrualCycleNotifications{
      event
      message    
  }
}
`;

export {PERIOD_QUERY,MESTRUAL_CYCLE_NOTIFICATIONS_QUERY}
