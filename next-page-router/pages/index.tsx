import Link from 'next/link';
import Reusable from '@/components/reusable';

export default function HomePage() {
  return (
    <div className="abc">
      <h1>This is a HomePage component</h1>
      <Reusable />
      <Link href="/another-page">Go to another page</Link>
    </div>
  );
}
