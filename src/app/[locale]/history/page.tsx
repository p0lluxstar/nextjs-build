import History from '@/components/History';
import ProtectedRouteAuth from '@/components/ProtectedRouteAuth';

export const metadata = {
  title: 'History | RG',
  description: 'Generated by create next app.',
};

export default function HistoryPage(): JSX.Element {
  return (
    <>
      <ProtectedRouteAuth>
        <History />
      </ProtectedRouteAuth>
    </>
  );
}
