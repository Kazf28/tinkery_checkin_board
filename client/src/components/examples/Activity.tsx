import Activity from '@/pages/activity';
import { Route } from 'wouter';

export default function ActivityExample() {
  return (
    <Route path="/activity/:slug">
      <Activity />
    </Route>
  );
}
