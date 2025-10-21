
// In ParentPage.tsx
import Time, { type TimelineItem } from './Time';
import './Timeline.css';
const items: TimelineItem[] = [
{ date: 'August 2020', title: 'Results', description: 'One broke my heart the other made my life - (JEE Advance - 5066 (1lakh applicants)) (JEE Mains - 575 (10lakh applicants))' },
{ date: 'October 2020', title: 'IIIT Hyd', description: 'In midst of covid, I found my companion (coding lol)' },
{ date: 'March 2021', title: 'DSA', subtitle: 'v0.1', description: 'Built friends recommendation system based on hashmaps and graphs. My very first coding project. O(1) user writes and unwrites' },
{ date: 'October 2021', title: 'Operating Systems', description: 'Did I actually add round robin and priority based scheduling algorithms to an OS. Heck yeah' },
{ date: 'Apr 2022', title: 'Internship', subtitle: 'Smartterra', description: 'My first data / backend exposure. Anomaly detection? Checked' },
{ date: 'Sept 2022', title: 'First date', description: 'Disastrous first date with my sister. I mean who joins the same college as your sister. Sister==Love?Happiness:Pain' },
{ date: 'May 2023', title: 'Goldman Sachs', description: 'Hella excited. Rebuilt a React based logging app' },
{ date: 'Sept 2023', title: 'Placements', description: 'Nans = Google, Sathvika = StartUp, Rups = Flipkart, Brunda = Atlassian' },
{ date: 'Sept 2024', title: 'Boston University', description: 'Hoping Artificial Intelligence has the same impact it had on me' },
{ date: 'Sept 2024', title: 'Guenther Lab', description: 'Neuroscience research - Did you know I love working here' },
{ date: 'Sept 2025', title: 'Perpetual Job Search', description: 'One cold mail at a time, one application at a time. I\'d love to connect regardless of if you are hiring' },

];
export default function Timeline() {
  return <Time items={items} />;
}