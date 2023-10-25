import Link from 'next/link';
import Reusable from '@/components/reusable';

export default function AnotherPage() {
  return (
    <div>
      <h1>This is AnotherPage component</h1>
      <Reusable />
      <Link href="/">Go to homepage</Link>
    </div>
  );
}
