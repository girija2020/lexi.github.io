
// In ParentPage.tsx
import Time, { type TimelineItem } from './Time';
import './Timeline.css';
const items: TimelineItem[] = [
{ date: 'Jan 2022', title: 'Started project', description: 'Project kickoff and requirements' },
{ date: 'Jun 2022', title: 'First release', subtitle: 'v0.1', description: 'MVP shipped' },
{ date: 'Dec 2022', title: 'Scaled', description: 'Onboarded customers and improved perf' },
];
export default function Timeline() {
  return <Time items={items} />;
}